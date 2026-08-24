import base64
from io import BytesIO
from PIL import Image, ImageOps

# Read the S logo
img = Image.open("assets/suaglow-s-logo.png").convert("L")

# Since the image is fully opaque (white background, darker logo)
# we invert it so the logo is white (255) and background is black (0)
# This will act as our alpha mask!
alpha = ImageOps.invert(img)

# Style guide colors
# warm-gold: #AA987C (bg)
# charcoal: #404345 (fg)
fg_r, fg_g, fg_b = 64, 67, 69

# Create solid charcoal image
fg_img = Image.new("RGBA", img.size, (fg_r, fg_g, fg_b, 255))
# Apply the inverted grayscale as the alpha mask
fg_img.putalpha(alpha)

# Save to base64
buffered = BytesIO()
fg_img.save(buffered, format="PNG")
logo_data = base64.b64encode(buffered.getvalue()).decode('utf-8')

bg_color = "#AA987C"
fg_color = "#404345"

width = 160
height = 160

svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <!-- Background -->
  <rect width="{width}" height="{height}" fill="{bg_color}" />
  
  <g fill="{fg_color}">
"""

# Draw diagonal diamond dots
steps = 8
dx = width / steps
dy = height / steps

for i in range(steps + 1):
    for j in range(steps + 1):
        if (i + j) % 2 == 0:
            x = i * dx
            y = j * dy
            # Don't draw dots where the logo goes
            if (i, j) in [(0,0), (steps,0), (0,steps), (steps,steps), (steps//2, steps//2)]:
                continue
            
            svg += f'    <rect x="{x-1.5}" y="{y-1.5}" width="3" height="3" transform="rotate(45 {x} {y})" />\n'

svg += f"""
  </g>

  <!-- Logos -->
  <g>
    <image href="data:image/png;base64,{logo_data}" x="{-25}" y="{-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{width-25}" y="{-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{-25}" y="{height-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{width-25}" y="{height-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{width/2 - 25}" y="{height/2 - 25}" width="50" height="50" opacity="0.9" />
  </g>
</svg>"""

with open("assets/s-monogram-pattern.svg", "w") as f:
    f.write(svg)

print("SVG pattern created successfully with proper alpha mask from grayscale!")
