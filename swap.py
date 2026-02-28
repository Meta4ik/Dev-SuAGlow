import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Match the about section
about_pattern = re.compile(r'( {4}<!-- About Section -->.*? {4}</section>\n)', re.DOTALL)
about_match = about_pattern.search(html)

# Match the promotions section
promotions_pattern = re.compile(r'( {4}<!-- Promotions / Signature Launch -->.*? {4}</section>\n)', re.DOTALL)
promotions_match = promotions_pattern.search(html)

if about_match and promotions_match:
    about_text = about_match.group(1)
    promotions_text = promotions_match.group(1)
    
    # We find the start and end of both blocks to replace them properly
    # Assuming they are contiguous or close to each other
    start_idx = min(about_match.start(), promotions_match.start())
    end_idx = max(about_match.end(), promotions_match.end())
    
    # Extract whatever is in between them if they are not exactly contiguous
    # In index.html, they appear in order: About, then Promotions.
    # So it should be About -> spacing -> Promotions
    
    # Let's just do a string replace, but safely.
    # Replace About with a placeholder
    html = html.replace(about_text, '@@@ABOUT_PLACEHOLDER@@@')
    html = html.replace(promotions_text, about_text)
    html = html.replace('@@@ABOUT_PLACEHOLDER@@@', promotions_text)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Swap successful")
else:
    print("Could not find sections")
