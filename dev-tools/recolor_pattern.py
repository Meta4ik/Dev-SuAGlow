from PIL import Image, ImageOps
import numpy as np

# Load the uploaded image
img_path = "/Users/mw/.gemini/antigravity-ide/brain/d5abad66-f31a-4192-8407-1c23dfef5207/.user_uploaded/media_1787602609839.jpg"
img = Image.open(img_path).convert("L")  # Convert to grayscale

# Convert to numpy array for fast manipulation
data = np.array(img, dtype=float)

# Normalize grayscale data so min is 0 and max is 1
d_min = data.min()
d_max = data.max()
data_norm = (data - d_min) / (d_max - d_min)

# Brand colors
# off-white (bg): #F6F7F8 -> (246, 247, 248)
# taupe (fg): #8F857B -> (143, 133, 123)
bg_color = np.array([246, 247, 248])
fg_color = np.array([143, 133, 123])

# Create RGB array
# If pixel is 0 (was black), it becomes bg_color
# If pixel is 1 (was brightest gold), it becomes fg_color
# Interpolate linearly: (1 - data_norm) * bg_color + data_norm * fg_color
# Note: we need to expand dims of data_norm to (H, W, 1) for broadcasting
data_norm = data_norm[..., np.newaxis]
recolored = (1 - data_norm) * bg_color + data_norm * fg_color

# Convert back to uint8 image
recolored_img = Image.fromarray(recolored.astype(np.uint8), "RGB")

# Save to assets
out_path = "assets/taupe-floral-pattern.jpg"
recolored_img.save(out_path, quality=90)

print(f"Saved recolored pattern to {out_path}")
