import glob
import re
from collections import defaultdict

html_files = glob.glob('*.html')

categorized_ids = {
    'hero', 'page-hero', 'what-is', 'what-are', 'how-it-works', 'treatment-areas', 'treatment-zones',
    'treatment-benefits', 'expect', 'why-sua', 'why-choose-us', 'why-skinpen', 'why-seoul-clinics', 
    'why-we-chose', 'before-after-gallery', 'glow-stories', 'clinical-cases', 'faq', 
    'post-treatment-guide', 'treatment-guide', 'philosophy', 'philosophies', 'k-beauty', 
    'k-beauty-approach', 'seoul-inspired', 'story', 'difference', 'transparency', 'treatments', 
    'all-treatments', 'signature-treatments', 'injectables', 'biostimulators', 'ha-fillers', 
    'skin-boosters', 'medical-tox', 'cosmetic-tox', 'skintox'
}

uncategorized = defaultdict(list)

for f in html_files:
    if f in ['tracker.html', 'content-styles.html', 'sua_glow_sitemap_v2.html']:
        continue
    with open(f, 'r') as file:
        content = file.read()
    
    # find all <section id="...">
    sections = re.findall(r'<section[^>]*id=["\']([^"\']+)["\']', content)
    for sid in sections:
        if sid not in categorized_ids:
            uncategorized[sid].append(f)

for sid, pages in sorted(uncategorized.items()):
    print(f"{sid}: {', '.join(pages)}")

