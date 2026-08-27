import re

with open('dev-tools/content-styles.html', 'r') as f:
    content = f.read()

# Remove the Split Layout Hero block entirely
split_hero_pattern = re.compile(r'<!-- Split Hero -->.*?</div>\s*</div>\s*</div>', re.DOTALL)
content = split_hero_pattern.sub('', content)

# Remove shop-skincare.html if it exists elsewhere just in case
# We'll just manually inject it into the Utility Hero list
utility_hero_pattern = re.compile(r'(<!-- Utility Page Hero -->.*?<ul class="[^"]*">)', re.DOTALL)

# Add shop-skincare.html to Utility hero list
link = '<li><a href="https://suaglow.vercel.app/shop-skincare.html#page-hero" class="text-blue-500 hover:underline">suaglow.vercel.app/shop-skincare.html#page-hero</a></li>\n                        '
content = utility_hero_pattern.sub(r'\1\n                        ' + link, content)

with open('dev-tools/content-styles.html', 'w') as f:
    f.write(content)

