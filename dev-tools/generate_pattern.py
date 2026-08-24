import base64
from io import BytesIO
from PIL import Image

# Read the S logo
img = Image.open("assets/suaglow-s-logo.png").convert("RGBA")

# Extract alpha
r, g, b, a = img.split()

# Create solid brown image #624A32 (RGB: 98, 74, 50)
brown_img = Image.new("RGBA", img.size, (98, 74, 50, 255))
brown_img.putalpha(a)

# Save to base64
buffered = BytesIO()
brown_img.save(buffered, format="PNG")
logo_data = base64.b64encode(buffered.getvalue()).decode('utf-8')

bg_color = "#CAB291"
fg_color = "#624A32"

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

print("SVG pattern created successfully with colored PIL image!")
