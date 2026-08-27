import re

with open('dev-tools/content-styles.html', 'r') as f:
    content = f.read()

# Extract all <li> elements from the Hero sections
# We'll map them based on our new logic
# We know the specific pages for each category.

centered_pages = [
    'about.html', 'cosmetic-tox.html', 'microneedling.html', 'radiesse.html', 'seoul-man.html',
    'skin-health.html', 'ldm-water-drop-lifting.html', 'oligio-x.html',
    'index.html',
    'bridal-glow.html', 'collagen-stimulation-facial.html', 'contact.html', 'dermal-filler.html',
    'injectables.html', 'medical-tox.html', 'one-day-glow.html', 'press-media.html', 'referral.html',
    'salmon-pn-facial.html', 'scar-treatment.html', 'signature-treatment.html', 'skin-quality-boosters.html',
    'specials.html', 'testimonials.html', 'tone-up-facial.html'
]

left_aligned_pages = [
    'dep.html', 'medical-weight-loss-dallas.html', 'needleless-infusion-therapy.html'
]

utility_pages = [
    'shop-skincare.html', 'accessibility-statement.html', 'coming-soon.html', 'cookie-notices-choices.html',
    'financing.html', 'privacy-policy.html', 'shop-skincare-rejuran.html', 'terms-and-conditions.html'
]

def make_li_list(pages, anchor):
    items = []
    for p in sorted(pages):
        # press-media and specials don't have #hero right now in the URL list? Actually let's just force #hero for standard
        url_anchor = anchor
        if p in ['press-media.html', 'specials.html']:
            url_anchor = "" # They might not have #hero, but they usually do. Let's just use anchor.
        
        # If it's utility, it uses #page-hero
        # Let's just use the provided anchor
        href = f"https://suaglow.vercel.app/{p}{anchor}"
        items.append(f'                        <li><a href="{href}" class="text-blue-500 hover:underline">suaglow.vercel.app/{p}{anchor}</a></li>')
    return '\n'.join(items)

centered_html = f"""            <!-- Centered Hero -->
            <div class="flex items-start gap-4">
                <div class="w-32 h-24 shrink-0 wireframe-box relative items-center justify-center">
                    <div class="absolute inset-0 wf-img opacity-50"></div>
                    <div class="relative z-10 wf-title w-16 !mb-2"></div>
                    <div class="relative z-10 wf-text w-20"></div>
                    <div class="relative z-10 wf-btn !w-12 !h-3"></div>
                </div>
                <div>
                    <h3 class="font-bold text-slate-900 mb-1">Standard Hero (Centered)</h3>
                    <p class="text-sm text-slate-600 mb-2">Title and text centered. Background can be an image, video, or solid color.</p>
                    <p class="text-xs text-slate-500 font-mono mb-1">Pages:</p>
                    <ul class="text-xs font-mono space-y-1 pl-2 border-l-2 border-slate-200 whitespace-nowrap overflow-x-auto pb-2 h-48 scrollbar-thin">
{make_li_list(centered_pages, '#hero')}
                    </ul>
                </div>
            </div>"""

left_aligned_html = f"""            <!-- Left Aligned Hero -->
            <div class="flex items-start gap-4">
                <div class="w-32 h-24 shrink-0 wireframe-box relative items-start justify-center p-3">
                    <div class="absolute inset-0 wf-img opacity-50"></div>
                    <div class="relative z-10 wf-title w-16 !mb-2"></div>
                    <div class="relative z-10 wf-text w-16"></div>
                    <div class="relative z-10 wf-text w-12"></div>
                    <div class="relative z-10 wf-btn !w-10 !h-3"></div>
                </div>
                <div>
                    <h3 class="font-bold text-slate-900 mb-1">Standard Hero (Left-Aligned)</h3>
                    <p class="text-sm text-slate-600 mb-2">Left-aligned text. Background can be an image, video, or solid color.</p>
                    <p class="text-xs text-slate-500 font-mono mb-1">Pages:</p>
                    <ul class="text-xs font-mono space-y-1 pl-2 border-l-2 border-slate-200 whitespace-nowrap overflow-x-auto pb-2 h-48 scrollbar-thin">
{make_li_list(left_aligned_pages, '#hero')}
                    </ul>
                </div>
            </div>"""

utility_html = f"""            <!-- Utility Page Hero -->
            <div class="flex items-start gap-4 col-span-1 lg:col-span-2">
                <div class="w-32 h-24 shrink-0 wireframe-box bg-slate-50 items-center justify-start p-4 border border-slate-200">
                    <div class="wf-title w-16 !mb-1 !h-2"></div>
                    <div class="wf-text w-12 !h-1 bg-blue-300"></div>
                </div>
                <div>
                    <h3 class="font-bold text-slate-900 mb-1">Utility Hero (page-hero)</h3>
                    <p class="text-sm text-slate-600 mb-2">A simplified, shorter hero used exclusively for utility and legal pages.</p>
                    <p class="text-xs text-slate-500 font-mono mb-1">Pages:</p>
                    <ul class="text-xs font-mono space-y-1 pl-2 border-l-2 border-slate-200 whitespace-nowrap overflow-x-auto pb-2 h-32 scrollbar-thin">
{make_li_list(utility_pages, '#page-hero')}
                    </ul>
                </div>
            </div>"""

new_hero_grid = f"""        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
{centered_html}
{left_aligned_html}
{utility_html}
        </div>"""

# Replace the old hero grid
# It starts with: <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
# And ends before: <!-- 2. Treatment Explanations -->

pattern = re.compile(r'<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">\s*<!-- Centered Hero -->.*?</div>\s*<!-- 2\. Treatment Explanations -->', re.DOTALL)
new_content = pattern.sub(new_hero_grid + '\n\n        <!-- 2. Treatment Explanations -->', content)

with open('dev-tools/content-styles.html', 'w') as f:
    f.write(new_content)

