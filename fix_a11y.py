import os
import re

def add_alt_to_images(directory):
    img_pattern = re.compile(r'<img([^>]*?)>')
    
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
            
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    def repl(match):
                        attrs = match.group(1)
                        if 'alt=' not in attrs:
                            return f'<img{attrs} alt="">'
                        return match.group(0)
                        
                    new_content = img_pattern.sub(repl, content)
                    
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Fixed images in {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

add_alt_to_images('.')
