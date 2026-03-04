import glob
import re

html_files = glob.glob('*.html')
if 'index.html' in html_files:
    html_files.remove('index.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace pt-48 or pt-64 with pt-[250px]
    # Update max-w-4xl pt-64 -> max-w-4xl pt-[250px]
    content = re.sub(r'pt-(?:48|64)', 'pt-[250px]', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} files to use pt-[250px].")
