import re
import os

os.makedirs('public/images/founders', exist_ok=True)
os.makedirs('public/images/brand', exist_ok=True)

def extract_jpegs_from_pdf(pdf_path, output_dir, prefix):
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        return
    with open(pdf_path, 'rb') as f:
        data = f.read()
    
    # JPEG streams start with \xff\xd8\xff and end with \xff\xd9
    pattern = re.compile(b'\xff\xd8\xff[\s\S]*?\xff\xd9')
    matches = list(pattern.finditer(data))
    print(f"Found {len(matches)} JPEG matches in {pdf_path}")
    
    for i, match in enumerate(matches):
        img_data = match.group(0)
        # Filter tiny thumbnails
        if len(img_data) > 1000:
            out_file = os.path.join(output_dir, f"{prefix}_{i+1}.jpg")
            with open(out_file, 'wb') as out_f:
                out_f.write(img_data)
            print(f"  Wrote {out_file} ({len(img_data)} bytes)")

extract_jpegs_from_pdf("fotos.pdf", "public/images/founders", "foto_orig")
extract_jpegs_from_pdf("FOTOS DOS MEBROS.pdf", "public/images/founders", "membro_orig")
extract_jpegs_from_pdf("KUWALA_TECH_Illustrator_Vector.pdf", "public/images/brand", "logo_orig")
