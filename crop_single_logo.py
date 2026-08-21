from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

im = Image.open('/Users/mw/.gemini/antigravity-ide/brain/6febbcc9-d90e-493b-a213-046111d5dd20/.user_uploaded/media_1787314243592.png')
if im.mode != 'RGBA':
    im = im.convert('RGBA')
im_trimmed = trim(im)
im_trimmed.save('assets/vendors_cropped/sculptra-new-logo.png')
print("Cropped and saved to assets/vendors_cropped/sculptra-new-logo.png")
