import os
import glob
import re

html_files = glob.glob('*.html')
categories = {
    'centered': [],
    'left_aligned': [],
    'split': [],
    'video': [],
    'solid': [],
    'utility': []
}

for f in html_files:
    if f in ['tracker.html', 'content-styles.html', 'sua_glow_sitemap_v2.html', 'privacy-policy.html', 'terms.html']:
        pass
        
    with open(f, 'r') as file:
        content = file.read()
        
    # extract the section hero
    match = re.search(r'<section[^>]*id="page-hero"[^>]*>.*?</section>', content, re.DOTALL)
    if not match:
        match = re.search(r'<section[^>]*id="hero"[^>]*>.*?</section>', content, re.DOTALL)
    if not match:
        # some heroes might just be first section
        match = re.search(r'<section[^>]*>.*?</section>', content, re.DOTALL)
        
    if not match:
        continue
        
    hero_html = match.group(0)
    
    # Check for video
    if '<video' in hero_html and 'autoplay' in hero_html:
        categories['video'].append(f)
        continue
        
    # Check for split
    if 'grid' in hero_html and 'lg:grid-cols-2' in hero_html:
        categories['split'].append(f)
        continue
        
    # Check for utility (often very short or specifically named)
    if 'min-h-[40vh]' in hero_html or ('py-20' in hero_html and 'bg-[url' not in hero_html and 'from-stone-900' not in hero_html):
        categories['utility'].append(f)
        continue
        
    # Check for solid/gradient (no background image)
    if 'bg-[url' not in hero_html:
        categories['solid'].append(f)
        continue
        
    # Check for centered vs left aligned
    if 'text-center' in hero_html or 'items-center' in hero_html:
        categories['centered'].append(f)
    else:
        categories['left_aligned'].append(f)

for cat, files in categories.items():
    print(f"=== {cat} ===")
    for f in sorted(files):
        print(f"  {f}")
