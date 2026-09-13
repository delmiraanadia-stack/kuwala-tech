import os
import pypdf
from PIL import Image
import io

os.makedirs('public/images/founders', exist_ok=True)
os.makedirs('public/images/brand', exist_ok=True)
os.makedirs('public/images/services', exist_ok=True)
os.makedirs('public/images/solutions', exist_ok=True)

def extract_images_from_pdf(pdf_path, output_dir, prefix):
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        return []
    
    extracted = []
    reader = pypdf.PdfReader(pdf_path)
    print(f"Reading {pdf_path} ({len(reader.pages)} pages)...")
    for page_idx, page in enumerate(reader.pages):
        for img_idx, img_file in enumerate(page.images):
            ext = os.path.splitext(img_file.name)[1]
            if not ext:
                ext = ".png"
            out_filename = f"{prefix}_p{page_idx+1}_img{img_idx+1}{ext}"
            out_path = os.path.join(output_dir, out_filename)
            with open(out_path, "wb") as fp:
                fp.write(img_file.data)
            print(f"  Extracted: {out_path} ({len(img_file.data)} bytes)")
            extracted.append(out_path)
    return extracted

if __name__ == "__main__":
    extract_images_from_pdf("fotos.pdf", "public/images/founders", "founder_raw")
    extract_images_from_pdf("FOTOS DOS MEBROS.pdf", "public/images/founders", "members_raw")
    extract_images_from_pdf("KUWALA_TECH_Illustrator_Vector.pdf", "public/images/brand", "logo_raw")
