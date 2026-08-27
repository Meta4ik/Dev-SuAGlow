import re

outliers_data = {
    "Medical Weight Loss": {
        "desc": "Bespoke sections for the weight loss program.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box bg-slate-100 p-2 border-dashed border-2 border-slate-300 flex flex-col gap-1 items-center justify-center">
                    <div class="wf-title w-16 !mb-1"></div>
                    <div class="flex gap-1 w-full"><div class="w-1/2 h-8 wf-img rounded"></div><div class="w-1/2 h-8 wf-img rounded"></div></div>
                    <div class="wf-btn !w-12 !h-2 mt-1"></div>
                </div>""",
        "urls": [
            "medical-weight-loss-dallas.html#medications",
            "medical-weight-loss-dallas.html#body-reset",
            "medical-weight-loss-dallas.html#body-reset-journey",
            "medical-weight-loss-dallas.html#candidate",
            "medical-weight-loss-dallas.html#consultation-importance",
            "medical-weight-loss-dallas.html#schedule",
            "medical-weight-loss-dallas.html#skin-hair-integration",
            "medical-weight-loss-dallas.html#sua-glow-difference",
            "medical-weight-loss-dallas.html#which-reset-is-right-for-you"
        ]
    },
    "Oligio X": {
        "desc": "Custom showcase blocks for the flagship treatment.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box bg-slate-800 p-2 flex flex-col justify-center items-center">
                    <div class="w-20 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-2"></div>
                    <div class="wf-text w-16 bg-slate-600"></div>
                </div>""",
        "urls": [
            "oligio-x.html#alternatives-philosophy",
            "oligio-x.html#oligio-comparison",
            "oligio-x.html#other-technologies",
            "oligio-x.html#showcase-banner"
        ]
    },
    "Skin Quality Boosters": {
        "desc": "Unique breakdowns of booster ingredients and matrix.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box bg-white p-2 grid grid-cols-2 gap-1">
                    <div class="wf-img rounded-full h-8 w-8 place-self-center"></div>
                    <div class="flex flex-col justify-center"><div class="wf-title w-full !mb-1"></div><div class="wf-text w-full"></div></div>
                    <div class="flex flex-col justify-center"><div class="wf-title w-full !mb-1"></div><div class="wf-text w-full"></div></div>
                    <div class="wf-img rounded-full h-8 w-8 place-self-center"></div>
                </div>""",
        "urls": [
            "skin-quality-boosters.html#collagen-stimulation",
            "skin-quality-boosters.html#consultation",
            "skin-quality-boosters.html#dermal-matrix",
            "skin-quality-boosters.html#healing-essence",
            "skin-quality-boosters.html#hydration-glow"
        ]
    },
    "LDM Water Drop Lifting": {
        "desc": "Custom UI for ultrasound frequencies and modes.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box p-2 bg-blue-50 flex flex-col justify-center items-center border border-blue-100">
                    <div class="flex gap-2 mb-2"><div class="w-4 h-8 bg-blue-300 rounded-t-full"></div><div class="w-4 h-12 bg-blue-400 rounded-t-full"></div><div class="w-4 h-10 bg-blue-500 rounded-t-full"></div></div>
                    <div class="wf-title w-16 bg-blue-800"></div>
                </div>""",
        "urls": [
            "ldm-water-drop-lifting.html#dia-sono-310",
            "ldm-water-drop-lifting.html#treatment-modes",
            "ldm-water-drop-lifting.html#water-drop-lifting"
        ]
    },
    "Tone Up Facial": {
        "desc": "Comparison and custom thematic blocks.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box bg-white p-2 flex flex-col">
                    <div class="flex justify-between border-b pb-1 mb-1"><div class="wf-title w-10 !mb-0"></div><div class="wf-title w-10 !mb-0"></div></div>
                    <div class="flex justify-between"><div class="wf-text w-10"></div><div class="wf-text w-10"></div></div>
                </div>""",
        "urls": [
            "tone-up-facial.html#compare-treatments",
            "tone-up-facial.html#obsessed-with-glow",
            "tone-up-facial.html#what-is-tone-up"
        ]
    },
    "Skin Health & Scars": {
        "desc": "Custom groupings for skin rejuvenation and scar types.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box bg-slate-50 p-2 flex gap-2">
                    <div class="w-1/3 h-full wf-img rounded"></div>
                    <div class="w-2/3 flex flex-col gap-1 justify-center"><div class="wf-title w-full !mb-0"></div><div class="wf-text w-full"></div></div>
                </div>""",
        "urls": [
            "skin-health.html#k-beauty-facials",
            "skin-health.html#scar-treatment",
            "skin-health.html#skin-rejuvenation",
            "scar-treatment.html#scar-types"
        ]
    },
    "Misc. One-Offs": {
        "desc": "Single unique sections across various pages.",
        "wireframe": """<div class="w-32 h-24 shrink-0 wireframe-box p-3 bg-white flex flex-col justify-center items-center border border-dashed border-slate-300">
                    <svg class="w-8 h-8 text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z"></path></svg>
                    <div class="wf-title w-12 !mb-0"></div>
                </div>""",
        "urls": [
            "about.html#safety",
            "about.html#skin-boosters-dfw",
            "microneedling.html#clinical-focus",
            "financing.html#financing-widget",
            "dep.html#patient-experience",
            "needleless-infusion-therapy.html#patient-experience",
            "injectables.html#intro"
        ]
    }
}

html_blocks = []
for title, data in outliers_data.items():
    list_items = ""
    for url in data['urls']:
        list_items += f'                        <li><a href="https://suaglow.vercel.app/{url}" class="text-blue-500 hover:underline">suaglow.vercel.app/{url}</a></li>\n'
    
    block = f"""            <div class="flex items-start gap-4">
                {data['wireframe']}
                <div>
                    <h3 class="font-bold text-slate-900 mb-1">{title}</h3>
                    <p class="text-sm text-slate-600 mb-2">{data['desc']}</p>
                    <p class="text-xs text-slate-500 font-mono mb-1">Sections:</p>
                    <ul class="text-xs font-mono space-y-1 pl-2 border-l-2 border-slate-200 whitespace-nowrap overflow-x-auto pb-2">
{list_items}                    </ul>
                </div>
            </div>"""
    html_blocks.append(block)

new_outliers_html = f"""        <!-- 8. Outliers & Custom Sections -->
        <h2 class="text-2xl font-bold text-slate-900 mt-16 mb-6 pb-2 border-b border-slate-200">8. Outliers & Custom Sections</h2>
        <p class="mb-8 text-slate-700">These sections are highly specific or bespoke to a single page and do not follow the standard, repeatable layout patterns.</p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
{chr(10).join(html_blocks)}
        </div>"""

with open('dev-tools/content-styles.html', 'r') as f:
    content = f.read()

# Replace everything from "<!-- 8. Outliers" to just before "<!-- Tip Box -->"
pattern = re.compile(r'<!-- 8\. Outliers & Custom Sections -->.*?<!-- Tip Box -->', re.DOTALL)
new_content = pattern.sub(new_outliers_html + '\n\n        <!-- Tip Box -->', content)

with open('dev-tools/content-styles.html', 'w') as f:
    f.write(new_content)

