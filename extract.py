import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Match the entire Promotions section
promotions_pattern = re.compile(r'( {4}<!-- Promotions.*? {4}</section>\n)', re.DOTALL)
match = promotions_pattern.search(content)

if match:
    specials_html = match.group(1)
    
    # We will strip the outer indentation just to keep it clean, or leave it. Leaving it is fine.
    # Write to specials-content.html
    with open('specials-content.html', 'w', encoding='utf-8') as sf:
        sf.write(specials_html)
        
    print("Extracted specials-content.html successfully")
else:
    print("Could not find the section")
