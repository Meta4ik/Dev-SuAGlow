import base64

# Read the S logo
with open("assets/suaglow-s-logo.png", "rb") as f:
    logo_data = base64.b64encode(f.read()).decode('utf-8')

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
            # Logo is at (0,0), (width, 0), (0, height), (width, height), and (width/2, height/2)
            # which is (0,0), (8,0), (0,8), (8,8) and (4,4)
            if (i, j) in [(0,0), (steps,0), (0,steps), (steps,steps), (steps//2, steps//2)]:
                continue
            
            svg += f'    <rect x="{x-1.5}" y="{y-1.5}" width="3" height="3" transform="rotate(45 {x} {y})" />\n'

svg += f"""
  </g>

  <!-- Logos -->
  <g style="filter: brightness(0) saturate(100%) invert(29%) sepia(21%) saturate(1058%) hue-rotate(345deg) brightness(97%) contrast(87%);">
    <image href="data:image/png;base64,{logo_data}" x="{-25}" y="{-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{width-25}" y="{-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{-25}" y="{height-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{width-25}" y="{height-25}" width="50" height="50" opacity="0.9" />
    <image href="data:image/png;base64,{logo_data}" x="{width/2 - 25}" y="{height/2 - 25}" width="50" height="50" opacity="0.9" />
  </g>
</svg>"""

with open("assets/s-monogram-pattern.svg", "w") as f:
    f.write(svg)

print("SVG pattern created successfully!")
