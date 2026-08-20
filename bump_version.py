import os
import re

def bump_cache_busters(directory):
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
                        
                    # Replace v=42 with v=43
                    new_content = re.sub(r'\?v=\d+', '?v=43', content)
                    
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Bumped version in {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

bump_cache_busters('.')
