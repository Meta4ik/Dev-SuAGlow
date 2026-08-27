import re
from collections import defaultdict

solid_pages = [
    'bridal-glow.html', 'collagen-stimulation-facial.html', 'contact.html', 'dermal-filler.html',
    'injectables.html', 'medical-tox.html', 'one-day-glow.html', 'press-media.html', 'referral.html',
    'salmon-pn-facial.html', 'scar-treatment.html', 'signature-treatment.html', 'skin-quality-boosters.html',
    'specials.html', 'testimonials.html', 'tone-up-facial.html'
]
video_pages = ['index.html']
centered_pages = [
    'about.html', 'cosmetic-tox.html', 'microneedling.html', 'radiesse.html', 'seoul-man.html',
    'skin-health.html', 'ldm-water-drop-lifting.html', 'oligio-x.html'
]

for page in solid_pages + video_pages:
    with open(page, 'r') as f:
        content = f.read()
    match = re.search(r'<section id="hero"[^>]*class="([^"]+)"', content)
    if match:
        classes = match.group(1)
        if 'text-center' in classes or 'items-center' in classes:
            print(f"{page} is CENTERED")
        elif 'items-start' in classes and 'text-center' not in classes:
             print(f"{page} is LEFT-ALIGNED")
        else:
            print(f"{page} is UNKNOWN (Classes: {classes})")

