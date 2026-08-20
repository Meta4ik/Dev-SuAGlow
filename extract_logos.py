import fitz
import os

pdf_path = "/Users/mw/.gemini/antigravity-ide/brain/6febbcc9-d90e-493b-a213-046111d5dd20/.user_uploaded/media_1787252486678.pdf"
out_dir = "assets/vendors"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
count = 1
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images()
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"vendor_logo_{count}.{image_ext}"
        with open(os.path.join(out_dir, image_name), "wb") as f:
            f.write(image_bytes)
        print(f"Extracted: {image_name}")
        count += 1
