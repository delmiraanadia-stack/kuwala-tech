from PIL import Image, ImageFilter, ImageEnhance

def process_photos():
    # 1. Eunildo Paulo (foto_orig_1.jpg)
    img_eunildo = Image.open('public/images/founders/foto_orig_1.jpg')
    w, h = img_eunildo.size
    crop_box_eunildo = (int(w*0.05), int(h*0.02), int(w*0.95), int(h*0.98))
    img_eunildo_cropped = img_eunildo.crop(crop_box_eunildo).resize((800, 1000), Image.Resampling.LANCZOS)
    img_eunildo_cropped.save('public/images/founders/eunildo-paulo.webp', 'WEBP', quality=95)
    img_eunildo_cropped.save('public/images/founders/eunildo-paulo.png', 'PNG')
    print("Saved eunildo-paulo.webp")

    # 2. Chelton da Costa Anatona (foto_orig_2.jpg)
    img_chelton = Image.open('public/images/founders/foto_orig_2.jpg')
    w, h = img_chelton.size
    crop_box_chelton = (int(w*0.05), int(h*0.05), int(w*0.95), int(h*0.95))
    img_chelton_cropped = img_chelton.crop(crop_box_chelton).resize((800, 1000), Image.Resampling.LANCZOS)
    img_chelton_cropped.save('public/images/founders/chelton-anatona.webp', 'WEBP', quality=95)
    img_chelton_cropped.save('public/images/founders/chelton-anatona.png', 'PNG')
    print("Saved chelton-anatona.webp")

    # 3. Jone Zacarias Jemus (John) (foto_orig_3.jpg)
    suit_base = Image.open('public/images/founders/foto_orig_1.jpg').resize((800, 1000), Image.Resampling.LANCZOS)
    
    john_raw = Image.open('public/images/founders/foto_orig_3.jpg')
    jw, jh = john_raw.size
    john_head = john_raw.crop((int(jw*0.12), int(jh*0.05), int(jw*0.88), int(jh*0.56)))
    
    enhancer = ImageEnhance.Sharpness(john_head)
    john_head = enhancer.enhance(1.4)
    enhancer_c = ImageEnhance.Contrast(john_head)
    john_head = enhancer_c.enhance(1.15)
    
    head_w, head_h = 390, 430
    john_head_resized = john_head.resize((head_w, head_h), Image.Resampling.LANCZOS)
    
    mask = Image.new('L', (head_w, head_h), 0)
    for y in range(head_h):
        for x in range(head_w):
            nx = (x - head_w/2) / (head_w/2 * 0.88)
            ny = (y - head_h/2 * 0.95) / (head_h/2 * 0.92)
            dist = nx*nx + ny*ny
            if dist < 0.75:
                mask.putpixel((x, y), 255)
            elif dist < 1.05:
                val = int(255 * (1.05 - dist) / 0.3)
                mask.putpixel((x, y), max(0, min(255, val)))
    mask = mask.filter(ImageFilter.GaussianBlur(radius=3))
    
    composite = suit_base.copy()
    composite.paste(john_head_resized, (205, 95), mask)
    
    composite.save('public/images/founders/jone-jemus.webp', 'WEBP', quality=95)
    composite.save('public/images/founders/jone-jemus.png', 'PNG')
    print("Saved jone-jemus.webp")

if __name__ == '__main__':
    process_photos()
