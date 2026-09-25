import base64

with open('assets/suaglow-s-only-gold.png', 'rb') as f:
    s_b64 = base64.b64encode(f.read()).decode('utf-8')

W = 240
H = 240
s_size = 80
offset = 32
gold = '#AA987C'

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <!-- Base S Logo (Pure S in Warm Gold with Soft Luxury Opacity) -->
    <g id="s-0">
      <image href="data:image/png;base64,{s_b64}" x="{-s_size/2}" y="{-s_size/2}" width="{s_size}" height="{s_size}" opacity="0.65" />
    </g>
    <!-- Rotated 90 deg -->
    <g id="s-90">
      <g transform="rotate(90)">
        <image href="data:image/png;base64,{s_b64}" x="{-s_size/2}" y="{-s_size/2}" width="{s_size}" height="{s_size}" opacity="0.65" />
      </g>
    </g>
    <!-- Rotated 180 deg -->
    <g id="s-180">
      <g transform="rotate(180)">
        <image href="data:image/png;base64,{s_b64}" x="{-s_size/2}" y="{-s_size/2}" width="{s_size}" height="{s_size}" opacity="0.65" />
      </g>
    </g>
    <!-- Rotated 270 deg -->
    <g id="s-270">
      <g transform="rotate(270)">
        <image href="data:image/png;base64,{s_b64}" x="{-s_size/2}" y="{-s_size/2}" width="{s_size}" height="{s_size}" opacity="0.65" />
      </g>
    </g>

    <!-- 4-Way Rotating Asian S-Medallion -->
    <g id="s-cluster">
      <g transform="translate(0, {-offset})"><use href="#s-0" /></g>
      <g transform="translate({offset}, 0)"><use href="#s-90" /></g>
      <g transform="translate(0, {offset})"><use href="#s-180" /></g>
      <g transform="translate({-offset}, 0)"><use href="#s-270" /></g>
      
      <!-- Subtle Korean Center Diamond Knot Pin -->
      <polygon points="0,-4 4,0 0,4 -4,0" fill="{gold}" opacity="0.45" />
      <circle cx="0" cy="0" r="1.2" fill="{gold}" opacity="0.65" />
    </g>

    <!-- Traditional Asian Plum Blossom (Maehwa) & Geometric Lotus Flourish -->
    <g id="interstitial-flourish">
      <!-- Outer delicate diamond frame with notched corners -->
      <polygon points="0,-18 18,0 0,18 -18,0" fill="none" stroke="{gold}" stroke-width="0.6" stroke-dasharray="2 2" opacity="0.35" />
      
      <!-- 4-Petal Curving Lotus Flourish -->
      <path d="M 0 -14 C 4 -7, 7 -4, 14 0 C 7 4, 4 7, 0 14 C -4 7, -7 4, -14 0 C -7 -4, -4 -7, 0 -14 Z" fill="none" stroke="{gold}" stroke-width="0.8" opacity="0.55" />
      
      <!-- Inner Diamond Jewel -->
      <polygon points="0,-6 6,0 0,6 -6,0" fill="{gold}" opacity="0.38" />
      <circle cx="0" cy="0" r="1.6" fill="{gold}" opacity="0.65" />
      
      <!-- 4 Cardinal Micro Flourish Petals -->
      <circle cx="0" cy="-19.5" r="1" fill="{gold}" opacity="0.5" />
      <circle cx="19.5" cy="0" r="1" fill="{gold}" opacity="0.5" />
      <circle cx="0" cy="19.5" r="1" fill="{gold}" opacity="0.5" />
      <circle cx="-19.5" cy="0" r="1" fill="{gold}" opacity="0.5" />
      
      <!-- 4 Diagonal Micro Rays -->
      <line x1="-7" y1="-7" x2="-12" y2="-12" stroke="{gold}" stroke-width="0.5" opacity="0.4" />
      <line x1="7" y1="-7" x2="12" y2="-12" stroke="{gold}" stroke-width="0.5" opacity="0.4" />
      <line x1="-7" y1="7" x2="-12" y2="12" stroke="{gold}" stroke-width="0.5" opacity="0.4" />
      <line x1="7" y1="7" x2="12" y2="12" stroke="{gold}" stroke-width="0.5" opacity="0.4" />
    </g>

    <!-- Refined Celestial Guide Knot Accents (Mid-edges) -->
    <g id="knot-accent">
      <circle cx="0" cy="0" r="16" fill="none" stroke="{gold}" stroke-width="0.5" stroke-dasharray="2 3.5" opacity="0.25" />
      <polygon points="0,-6 6,0 0,6 -6,0" fill="none" stroke="{gold}" stroke-width="0.5" opacity="0.35" />
      <circle cx="0" cy="0" r="1.8" fill="{gold}" opacity="0.55" />
    </g>
  </defs>

  <!-- Asian Delicate Linear Guides Linking the 4-S Clusters & Flourishes -->
  <g stroke="{gold}" opacity="0.12" stroke-width="0.5">
    <line x1="0" y1="0" x2="{W}" y2="{H}" stroke-dasharray="3 5" />
    <line x1="{W}" y1="0" x2="0" y2="{H}" stroke-dasharray="3 5" />
    <line x1="{W/2}" y1="0" x2="{W/2}" y2="{H}" stroke-dasharray="3 5" />
    <line x1="0" y1="{H/2}" x2="{W}" y2="{H/2}" stroke-dasharray="3 5" />
  </g>

  <!-- Main 4-S Medallion Clusters (Center and 4 Corners) -->
  <use href="#s-cluster" x="{W/2}" y="{H/2}" />
  <use href="#s-cluster" x="0" y="0" />
  <use href="#s-cluster" x="{W}" y="0" />
  <use href="#s-cluster" x="0" y="{H}" />
  <use href="#s-cluster" x="{W}" y="{H}" />

  <!-- Orthogonal Mid-edge Interlocking Knots -->
  <use href="#knot-accent" x="{W/2}" y="0" />
  <use href="#knot-accent" x="0" y="{H/2}" />
  <use href="#knot-accent" x="{W}" y="{H/2}" />
  <use href="#knot-accent" x="{W/2}" y="{H}" />

  <!-- Diagonal Korean Maehwa & Geometric Lotus Flourishes -->
  <use href="#interstitial-flourish" x="{W/4}" y="{H/4}" />
  <use href="#interstitial-flourish" x="{3*W/4}" y="{H/4}" />
  <use href="#interstitial-flourish" x="{W/4}" y="{3*H/4}" />
  <use href="#interstitial-flourish" x="{3*W/4}" y="{3*H/4}" />

</svg>'''

with open('assets/s-monogram-pattern.svg', 'w') as f:
    f.write(svg)

print('Lightened s-monogram-pattern.svg successfully!')
