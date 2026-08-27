import os
import re

html_file = 'dev-tools/content-styles.html'
with open(html_file, 'r') as f:
    content = f.read()

# Define the blocks and their possible IDs
blocks = {
    'Standard Image Hero (Centered)': ['hero', 'page-hero'],
    'Standard Image Hero (Left-Aligned)': ['hero', 'page-hero'],
    'Split Layout Hero': ['hero', 'page-hero'],
    'Video Background Hero': ['hero', 'page-hero'],
    'Solid/Gradient Hero': ['hero', 'page-hero'],
    'Utility Hero (page-hero)': ['page-hero', 'hero'],
    
    'Standard Explanation (what-is)': ['what-is', 'what-are', 'how-it-works'],
    'Treatment Areas': ['treatment-areas', 'treatment-zones'],
    
    'Benefits Grid': ['treatment-benefits'],
    'Expectations / Timeline (expect)': ['expect'],
    'Value Proposition (why-sua)': ['why-sua', 'why-choose-us', 'why-skinpen', 'why-seoul-clinics', 'why-we-chose'],
    
    'Before & After Gallery': ['before-after-gallery'],
    'Testimonials (glow-stories)': ['glow-stories'],
    'Clinical Cases': ['clinical-cases'],
    
    'FAQ Accordion': ['faq'],
    'Treatment Guide': ['post-treatment-guide', 'treatment-guide'],
    
    'Philosophy Block': ['philosophy', 'philosophies', 'k-beauty', 'k-beauty-approach', 'seoul-inspired', 'story', 'difference', 'transparency'],
    
    'Treatment Hub Grids': ['treatments', 'all-treatments', 'signature-treatments', 'injectables', 'biostimulators', 'ha-fillers', 'skin-boosters', 'medical-tox', 'cosmetic-tox', 'skintox']
}

# Find all blocks in the HTML
# A block starts with <h3 class="font-bold ...">Block Name</h3>
# Followed by a <ul>...</ul>

new_content = content
for block_name, possible_ids in blocks.items():
    # Find the block header
    header_pattern = re.compile(rf'<h3[^>]*>{re.escape(block_name)}</h3>.*?</p>\s*<p[^>]*>Pages:</p>\s*<ul[^>]*>(.*?)</ul>', re.DOTALL)
    match = header_pattern.search(new_content)
    if not match:
        continue
    
    ul_content = match.group(1)
    new_ul_content = ul_content
    
    # Find all links in the UL
    link_pattern = re.compile(r'<a href="https://suaglow\.com/([^"]+)"[^>]*>([^<]+)</a>')
    for link_match in link_pattern.finditer(ul_content):
        page_name = link_match.group(1)
        link_text = link_match.group(2)
        
        # Read the local file to find the exact ID used
        local_path = page_name
        if not os.path.exists(local_path):
            continue
            
        with open(local_path, 'r') as f:
            page_html = f.read()
            
        found_id = None
        for pid in possible_ids:
            if f'id="{pid}"' in page_html or f"id='{pid}'" in page_html:
                found_id = pid
                break
                
        if found_id:
            # Replace the href and text
            old_href = f'https://suaglow.com/{page_name}'
            new_href = f'https://suaglow.com/{page_name}#{found_id}'
            
            old_a = link_match.group(0)
            new_a = old_a.replace(old_href, new_href).replace(link_text, f'suaglow.com/{page_name}#{found_id}')
            new_ul_content = new_ul_content.replace(old_a, new_a)
            
    # Replace the UL content in the main file
    new_content = new_content.replace(ul_content, new_ul_content)

with open(html_file, 'w') as f:
    f.write(new_content)

print("Updated links with anchors.")
