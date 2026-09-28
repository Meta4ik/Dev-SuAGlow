import os
from PIL import Image, ImageDraw, ImageFont

# Canvas dimensions: US Letter at 200 DPI (1700 x 2200 pixels)
WIDTH = 1700
HEIGHT = 2200

# Color Palette (SuA Glow Luxury Clinical Brand)
TAUPE = (170, 152, 124)       # #AA987C
GOLD = (229, 184, 105)        # #E5B869
DARK_CHARCOAL = (30, 33, 36)  # #1E2124
OFF_WHITE = (248, 249, 250)   # #F8F9FA
WHITE = (255, 255, 255)
LIGHT_GRAY = (235, 237, 240)
TEXT_DARK = (40, 44, 48)
TEXT_MUTED = (120, 125, 130)
GREEN_ACCENT = (40, 167, 69)
CARD_BG = (255, 255, 255)

# Fonts
FONT_HELVETICA = "/System/Library/Fonts/Helvetica.ttc"
FONT_ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"

def get_font(size, bold=False, serif=False):
    try:
        if serif:
            return ImageFont.truetype(FONT_GEORGIA, size)
        elif bold:
            return ImageFont.truetype(FONT_ARIAL, size)
        else:
            return ImageFont.truetype(FONT_HELVETICA, size)
    except Exception:
        return ImageFont.load_default()

def draw_header(draw, title, subtitle, page_num):
    # Top brand bar
    draw.rectangle([(0, 0), (WIDTH, 20)], fill=TAUPE)
    
    # SuA Glow Logo text
    draw.text((80, 50), "SuA GLOW", font=get_font(28, bold=True), fill=TAUPE)
    draw.text((245, 54), "|  KOREAN CLINICAL AESTHETICS", font=get_font(18), fill=TEXT_MUTED)
    
    # Page indicator
    page_str = f"Page {page_num} of 4"
    draw.text((WIDTH - 220, 54), page_str, font=get_font(18), fill=TEXT_MUTED)
    
    draw.line([(80, 95), (WIDTH - 80, 95)], fill=LIGHT_GRAY, width=2)
    
    # Section Title & Subtitle
    draw.text((80, 120), title, font=get_font(38, bold=True), fill=DARK_CHARCOAL)
    draw.text((80, 170), subtitle, font=get_font(20), fill=TEXT_MUTED)
    draw.line([(80, 205), (320, 205)], fill=GOLD, width=4)

def draw_footer(draw):
    draw.line([(80, HEIGHT - 80), (WIDTH - 80, HEIGHT - 80)], fill=LIGHT_GRAY, width=2)
    draw.text((80, HEIGHT - 60), "SuA Glow Internal • Google Ads Campaign Deployment & Strategy Blueprint", font=get_font(16), fill=TEXT_MUTED)
    draw.text((WIDTH - 380, HEIGHT - 60), "suaglow.com • Carrollton, TX", font=get_font(16), fill=TAUPE)


# =========================================================================
# PAGE 1: EXECUTIVE COVER & CAMPAIGN MASTER SUMMARY
# =========================================================================
def create_page_1():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=OFF_WHITE)
    draw = ImageDraw.Draw(img)

    # Top Accent Bar
    draw.rectangle([(0, 0), (WIDTH, 30)], fill=TAUPE)
    draw.rectangle([(0, 30), (WIDTH, 40)], fill=GOLD)

    # Hero Brand Box
    hero_y = 120
    draw.rounded_rectangle([(80, hero_y), (WIDTH - 80, hero_y + 360)], radius=24, fill=DARK_CHARCOAL)
    
    draw.text((130, hero_y + 40), "SuA GLOW  •  CLIENT STRATEGY & LAUNCH DOSSIER", font=get_font(18, bold=True), fill=GOLD)
    draw.text((130, hero_y + 80), "Google Ads Campaign Architecture", font=get_font(46, bold=True), fill=WHITE)
    draw.text((130, hero_y + 145), "Korean Scalp & Hair Reset Protocol  |  Dallas–Fort Worth Expansion", font=get_font(24), fill=TAUPE)
    
    # Status badges
    draw.rounded_rectangle([(130, hero_y + 210), (330, hero_y + 260)], radius=12, fill=(40, 167, 69, 50), outline=GREEN_ACCENT, width=2)
    draw.text((155, hero_y + 225), "STATUS: ACTIVE / LIVE", font=get_font(16, bold=True), fill=WHITE)
    
    draw.rounded_rectangle([(350, hero_y + 210), (550, hero_y + 260)], radius=12, fill=(170, 152, 124, 50), outline=TAUPE, width=2)
    draw.text((375, hero_y + 225), "BUDGET: $40 / DAY", font=get_font(16, bold=True), fill=GOLD)
    
    draw.text((130, hero_y + 295), "Account: SuA Glow (480-656-3884)  •  Manager: 133-161-8593  •  Campaign ID: 24303707971", font=get_font(18), fill=(180, 185, 190))

    # Executive Overview Narrative
    curr_y = 530
    draw.rounded_rectangle([(80, curr_y), (WIDTH - 80, curr_y + 270)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
    draw.text((120, curr_y + 30), "EXECUTIVE SUMMARY", font=get_font(22, bold=True), fill=DARK_CHARCOAL)
    draw.line([(120, curr_y + 60), (280, curr_y + 60)], fill=GOLD, width=3)
    
    summary_text = (
        "This campaign deploys a high-converting, medically guided acquisition funnel engineered specifically for SuA Glow's\n"
        "flagship $399 Korean Scalp Reset experience. Moving beyond standard relaxation 'head spas,' this campaign positions\n"
        "SuA Glow as the premier clinical destination for non-surgical needle-free follicle infusion (DEP technology).\n\n"
        "Key Accomplishments:\n"
        "• 3 Dedicated Audience Segments: Differentiated ad groups for General Hair Loss, Female Thinning, and Men's Hairline.\n"
        "• 44 High-Intent Phrase Keywords: Eliminating search waste while dominating North Texas commercial queries.\n"
        "• 22 Waste-Prevention Negative Keywords: Shields budget from surgical procedures (FUE/FUT) and DIY searches.\n"
        "• Precision Municipal Geofencing: Strict 'Presence' targeting across Carrollton + 12 affluent surrounding DFW cities."
    )
    draw.text((120, curr_y + 80), summary_text, font=get_font(19), fill=TEXT_DARK, spacing=8)

    # Core Performance Metrics Table (4 Cards)
    cards_y = 840
    card_width = (WIDTH - 160 - 45) // 4
    metrics = [
        ("Daily Budget", "$40.00 / day", "~$1,200 / month pacing"),
        ("Ad Groups", "3 Segments", "100% 'Good' Ad Strength"),
        ("Target Keywords", "44 Keywords", "High-intent phrase match"),
        ("DFW Coverage", "13 Cities", "Presence-only targeting")
    ]
    
    for i, (m_title, m_val, m_sub) in enumerate(metrics):
        cx = 80 + i * (card_width + 15)
        draw.rounded_rectangle([(cx, cards_y), (cx + card_width, cards_y + 160)], radius=16, fill=WHITE, outline=LIGHT_GRAY, width=2)
        draw.text((cx + 25, cards_y + 25), m_title.upper(), font=get_font(15, bold=True), fill=TEXT_MUTED)
        draw.text((cx + 25, cards_y + 60), m_val, font=get_font(28, bold=True), fill=DARK_CHARCOAL)
        draw.text((cx + 25, cards_y + 110), m_sub, font=get_font(15), fill=TAUPE)

    # Strategic Value Proposition Pillars (3 columns)
    pillars_y = 1040
    p_width = (WIDTH - 160 - 30) // 3
    pillars = [
        ("Clinical Distinction", "Not a surface head spa. Emphasizes physician-guided, FDA-cleared needle-free DEP follicle infusion that penetrates transdermally to the hair root."),
        ("Transparent $399 Offer", "Front-loads the $399 Korean Scalp Reset intro pricing directly in headlines to pre-qualify high-intent patients and eliminate bargain hunters."),
        ("Localized DFW Relevance", "Strict presence targeting ensures budget is only spent on residents in Carrollton, Dallas, Plano, Frisco, and immediate neighboring communities.")
    ]

    for j, (p_title, p_desc) in enumerate(pillars):
        px = 80 + j * (p_width + 15)
        draw.rounded_rectangle([(px, pillars_y), (px + p_width, pillars_y + 320)], radius=18, fill=WHITE, outline=LIGHT_GRAY, width=2)
        draw.rectangle([(px, pillars_y), (px + p_width, pillars_y + 10)], fill=TAUPE)
        draw.text((px + 25, pillars_y + 35), p_title, font=get_font(22, bold=True), fill=DARK_CHARCOAL)
        draw.line([(px + 25, pillars_y + 70), (px + 100, pillars_y + 70)], fill=GOLD, width=3)
        draw.text((px + 25, pillars_y + 90), p_desc, font=get_font(18), fill=TEXT_DARK, spacing=6)

    # Launch Verification Checklist Status
    chk_y = 1400
    draw.rounded_rectangle([(80, chk_y), (WIDTH - 80, chk_y + 670)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
    draw.text((120, chk_y + 35), "CAMPAIGN SETTINGS & GOVERNANCE COMPLIANCE", font=get_font(22, bold=True), fill=DARK_CHARCOAL)
    draw.line([(120, chk_y + 68), (350, chk_y + 68)], fill=GOLD, width=3)

    items = [
        ("Search Network Exclusivity", "Google Display Expansion and Search Partners disabled to avoid low-quality app/display placements.", "VERIFIED"),
        ("Location Intent Protection", "Set strictly to 'Presence: People in or regularly in your included locations' (No international/out-of-state clicks).", "VERIFIED"),
        ("Bid Strategy Optimization", "Maximize Clicks with initial bid monitoring, transitioning to Target CPA once conversion baseline is established.", "ACTIVE"),
        ("Ad Strength Calibration", "Full 15-headline & 4-description RSA coverage per group. No draft ads active. 100% verified 'Good' score.", "OPTIMIZED"),
        ("Negative Keyword Shield", "22 strategic negatives installed to prevent bleed on surgery, hair transplants, wigs, haircuts, and job queries.", "DEPLOYED"),
        ("Conversion Landing Destination", "Directs traffic to https://suaglow.com/korean-scalp-hair-rejuvenation.html with verified mobile speed.", "LIVE")
    ]

    for k, (i_title, i_sub, i_tag) in enumerate(items):
        iy = chk_y + 95 + k * 90
        draw.rectangle([(120, iy), (124, iy + 60)], fill=GREEN_ACCENT)
        draw.text((140, iy + 5), i_title, font=get_font(18, bold=True), fill=DARK_CHARCOAL)
        draw.text((140, iy + 32), i_sub, font=get_font(16), fill=TEXT_MUTED)
        
        # Tag
        draw.rounded_rectangle([(WIDTH - 230, iy + 12), (WIDTH - 120, iy + 45)], radius=8, fill=(40, 167, 69, 30), outline=GREEN_ACCENT, width=1)
        draw.text((WIDTH - 215, iy + 20), i_tag, font=get_font(13, bold=True), fill=GREEN_ACCENT)

    draw_footer(draw)
    return img


# =========================================================================
# PAGE 2: THE 3 DEDICATED AD GROUPS ARCHITECTURE
# =========================================================================
def create_page_2():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=OFF_WHITE)
    draw = ImageDraw.Draw(img)

    draw_header(draw, "Audience Segmentation Architecture", "3 Dedicated Search Ad Groups Designed to Maximize Query-to-Ad Relevancy", 2)

    groups = [
        {
            "name": "Ad Group 1: Combined / Hair Loss",
            "tag": "BROAD INTENT & HEAD SPA DIFFERENTIATION",
            "tag_color": TAUPE,
            "path": "suaglow.com/.../scalp/reset",
            "hook": "Addresses top-of-funnel shedding, general thinning, and directly contrasts medical follicle care with head spas.",
            "keywords": [
                '"hair loss treatment Dallas"', '"hair loss treatment near me"', '"hair loss clinic near me"',
                '"scalp treatment for hair loss"', '"Korean scalp treatment"', '"hair loss specialist Dallas"',
                '"hair loss doctor near me"', '"scalp clinic near me"', '"scalp rejuvenation Dallas"',
                '"best hair loss clinic Dallas"', '"hair restoration near me non surgical"', '"Korean head spa hair loss"'
            ],
            "headlines": ["Hair Loss? Think Scalp.", "$399 Korean Scalp Reset", "Hair Loss Treatment Dallas", "Scalp Rejuvenation Dallas", "More Than a Head Spa"]
        },
        {
            "name": "Ad Group 2: Thinning / Women",
            "tag": "FEMALE DIFFUSE THINNING & PART-LINE RECOVERY",
            "tag_color": (214, 118, 150),
            "path": "suaglow.com/.../female/scalp-care",
            "hook": "Speaks to widening parts, diffuse vertex thinning, postpartum shedding, and needle-free comfort for women.",
            "keywords": [
                '"female hair loss treatment"', '"female hair loss treatment near me"', '"female thinning hair treatment"',
                '"thinning hair treatment near me"', '"treatment for thinning hair"', '"women hair loss clinic near me"',
                '"women thinning hair treatment near me"', '"female hair loss specialist Dallas"', '"widening part treatment"',
                '"female pattern hair loss treatment"', '"women hair thinning solutions"', '"diffuse thinning treatment female"'
            ],
            "headlines": ["Widening Part? Start Here.", "Female Thinning Hair Care", "$399 Scalp & Hair Reset", "Treatment For Thinning Hair", "Needle-Free Scalp Infusion"]
        },
        {
            "name": "Ad Group 3: Hairline / Men",
            "tag": "MALE RECEDING TEMPLE & CROWN THINNING",
            "tag_color": (52, 120, 246),
            "path": "suaglow.com/.../mens/hair-density",
            "hook": "Focuses on receding hairline, crown density, non-surgical alternatives to painful surgery, and physician guidance.",
            "keywords": [
                '"male hair loss treatment"', '"male thinning hair treatment"', '"hair loss clinic Dallas"',
                '"scalp therapy for hair loss"', '"male hair loss clinic near me"', '"men hair thinning treatment near me"',
                '"receding hairline treatment Dallas"', '"crown thinning treatment male"', '"non surgical male hair restoration"',
                '"hair loss treatment for men near me"', '"men scalp treatment for hair loss"', '"hair density treatment men"'
            ],
            "headlines": ["Thinning Hairline? Think Scalp", "Male Hair Loss Care Dallas", "$399 Korean Scalp Reset", "Non-Surgical Hair Care", "Advanced Scalp Infusion"]
        }
    ]

    card_y = 230
    card_h = 580

    for idx, grp in enumerate(groups):
        gy = card_y + idx * (card_h + 30)
        draw.rounded_rectangle([(80, gy), (WIDTH - 80, gy + card_h)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
        
        # Color bar
        draw.rectangle([(80, gy), (88, gy + card_h)], fill=grp["tag_color"])
        
        # Header line
        draw.text((115, gy + 25), grp["name"], font=get_font(26, bold=True), fill=DARK_CHARCOAL)
        
        # Pill
        draw.rounded_rectangle([(WIDTH - 460, gy + 25), (WIDTH - 115, gy + 60)], radius=8, fill=(240, 242, 245))
        draw.text((WIDTH - 445, gy + 32), grp["tag"], font=get_font(12, bold=True), fill=grp["tag_color"])
        
        draw.line([(115, gy + 75), (WIDTH - 115, gy + 75)], fill=LIGHT_GRAY, width=1)
        
        # Hook
        draw.text((115, gy + 90), "STRATEGIC HOOK & PATIENT PERSONA:", font=get_font(15, bold=True), fill=TEXT_MUTED)
        draw.text((115, gy + 115), grp["hook"], font=get_font(18), fill=TEXT_DARK)
        
        # Display Path & Destination
        draw.text((115, gy + 155), "DISPLAY URL PATH:", font=get_font(15, bold=True), fill=TEXT_MUTED)
        draw.text((280, gy + 155), grp["path"], font=get_font(16, bold=True), fill=TAUPE)

        # Keyword Box
        kw_box_y = gy + 195
        draw.rounded_rectangle([(115, kw_box_y), (WIDTH - 115, kw_box_y + 190)], radius=12, fill=OFF_WHITE, outline=LIGHT_GRAY, width=1)
        draw.text((135, kw_box_y + 15), "TARGET KEYWORD PHRASES (HIGH-INTENT COMMERCIAL MATCHES):", font=get_font(14, bold=True), fill=DARK_CHARCOAL)
        
        # Draw 2 columns of keywords
        for k_idx, kw in enumerate(grp["keywords"][:10]):
            col = k_idx // 5
            row = k_idx % 5
            kx = 135 + col * 420
            ky = kw_box_y + 45 + row * 26
            draw.text((kx, ky), f"• {kw}", font=get_font(16), fill=TEXT_DARK)
            
        # Top Headlines Sample
        hl_y = gy + 405
        draw.text((115, hl_y), "PRIMARY RESPONSIVE HEADLINES (SAMPLE):", font=get_font(15, bold=True), fill=TEXT_MUTED)
        
        hx = 115
        for hl in grp["headlines"]:
            hl_w = draw.textlength(hl, font=get_font(15, bold=True)) + 26
            if hx + hl_w > WIDTH - 115:
                break
            draw.rounded_rectangle([(hx, hl_y + 25), (hx + hl_w, hl_y + 60)], radius=8, fill=WHITE, outline=TAUPE, width=1)
            draw.text((hx + 13, hl_y + 33), hl, font=get_font(14, bold=True), fill=DARK_CHARCOAL)
            hx += hl_w + 12

    draw_footer(draw)
    return img


# =========================================================================
# PAGE 3: FULL COPY & AD STRENGTH ARCHITECTURE
# =========================================================================
def create_page_3():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=OFF_WHITE)
    draw = ImageDraw.Draw(img)

    draw_header(draw, "Ad Copy & Responsive Search Optimization", "15 Headlines and 4 Descriptions Engineered for 'Good/Excellent' Ad Strength", 3)

    sections = [
        {
            "title": "Ad Group 1 Copy Matrix (Combined / Hair Loss)",
            "headlines": [
                "Hair Loss Treatment Dallas", "Korean Scalp Treatment", "Scalp Treatment For Hair Loss",
                "Hair Loss Clinic Near You", "Hair Loss Treatment Near You", "$399 Korean Scalp Reset",
                "Hair Loss? Think Scalp.", "More Than a Head Spa", "SuA Glow Scalp Rejuvenation",
                "Needle-Free Follicle Care", "Physician-Guided Scalp Care", "FDA-Cleared Scalp Tech",
                "Seoul-Inspired Scalp Care", "Stop Hair Shedding Today", "Book Scalp Assessment Today"
            ],
            "descriptions": [
                "Concerned about thinning or shedding? Start your personalized scalp assessment today.",
                "Physician-guided Seoul-inspired hair loss treatment & scalp rejuvenation in Carrollton.",
                "Experience our $399 Korean Scalp Reset. Medically guided FDA-cleared scalp technology.",
                "Effective scalp treatment for hair loss with needle-free transdermal delivery. Book now."
            ]
        },
        {
            "title": "Ad Group 2 Copy Matrix (Thinning / Women)",
            "headlines": [
                "Female Hair Loss Treatment", "Treatment For Thinning Hair", "Female Thinning Hair Care",
                "Thinning Hair Treatment Dallas", "Hair Loss Treatment Near You", "Widening Part? Start Here.",
                "$399 Scalp & Hair Reset", "Needle-Free Scalp Infusion", "SuA Glow Women Scalp Care",
                "Restore Female Hair Density", "Gentle Needle-Free Follicle", "Korean Scalp Rejuvenation",
                "Physician-Guided Female Care", "Postpartum & Stress Thinning", "Book Scalp Assessment Today"
            ],
            "descriptions": [
                "Female hair loss treatment and thinning hair care. Start your scalp assessment today.",
                "Noticing hairline changes or shedding? Your scalp needs more than a surface power wash.",
                "Experience our $399 Korean Scalp Reset. No guessing, just a plan built around you.",
                "FDA-cleared needle-free technology for female thinning hair. Book your visit in DFW."
            ]
        },
        {
            "title": "Ad Group 3 Copy Matrix (Hairline / Men)",
            "headlines": [
                "Male Hair Loss Treatment", "Male Thinning Hair Care", "Hair Loss Clinic Dallas",
                "Scalp Therapy For Hair Loss", "Thinning Hairline? Think Scalp", "$399 Korean Scalp Reset",
                "Non-Surgical Hair Care", "Advanced Scalp Infusion", "Receding Hairline Care",
                "Crown Thinning Treatment", "Needle-Free Follicle Infusion", "SuA Glow Men Scalp Care",
                "Physician-Guided Scalp Plan", "No Surgery No Downtime", "Book Male Scalp Assessment"
            ],
            "descriptions": [
                "Male hair loss treatment in Dallas. Address crown thinning and receding hairlines.",
                "Receding hairline or crown thinning? Address it without painful surgery or downtime.",
                "Get a physician-guided scalp assessment and try our $399 Korean Scalp Reset today.",
                "FDA-cleared needle-free scalp therapy for hair loss. Book your consultation in DFW."
            ]
        }
    ]

    sec_y = 230
    sec_h = 580

    for s_idx, sec in enumerate(sections):
        sy = sec_y + s_idx * (sec_h + 30)
        draw.rounded_rectangle([(80, sy), (WIDTH - 80, sy + sec_h)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
        
        # Header
        draw.text((115, sy + 25), sec["title"], font=get_font(22, bold=True), fill=DARK_CHARCOAL)
        draw.rounded_rectangle([(WIDTH - 240, sy + 22), (WIDTH - 115, sy + 56)], radius=8, fill=(40, 167, 69, 25), outline=GREEN_ACCENT, width=1)
        draw.text((WIDTH - 225, sy + 30), "AD STRENGTH: GOOD", font=get_font(12, bold=True), fill=GREEN_ACCENT)
        draw.line([(115, sy + 70), (WIDTH - 115, sy + 70)], fill=LIGHT_GRAY, width=1)
        
        # Headlines grid (3 cols x 5 rows)
        draw.text((115, sy + 85), "15 OPTIMIZED HEADLINES (ALL UNDER 30 CHARACTERS):", font=get_font(14, bold=True), fill=TEXT_MUTED)
        
        col_w = (WIDTH - 230) // 3
        for h_i, h_txt in enumerate(sec["headlines"]):
            c = h_i // 5
            r = h_i % 5
            hx = 115 + c * col_w
            hy = sy + 115 + r * 38
            draw.rounded_rectangle([(hx, hy), (hx + col_w - 15, hy + 32)], radius=6, fill=OFF_WHITE)
            draw.text((hx + 8, hy + 7), f"{h_i+1}.", font=get_font(13, bold=True), fill=TAUPE)
            draw.text((hx + 32, hy + 7), h_txt, font=get_font(14), fill=DARK_CHARCOAL)

        # Descriptions block
        d_y = sy + 325
        draw.text((115, d_y), "4 EXPANDED DESCRIPTIONS (UP TO 90 CHARACTERS EACH):", font=get_font(14, bold=True), fill=TEXT_MUTED)
        
        for d_i, d_txt in enumerate(sec["descriptions"]):
            dy = d_y + 30 + d_i * 54
            draw.rectangle([(115, dy), (119, dy + 42)], fill=GOLD)
            draw.text((135, dy + 2), f"Description {d_i+1}:", font=get_font(14, bold=True), fill=DARK_CHARCOAL)
            draw.text((135, dy + 22), d_txt, font=get_font(15), fill=TEXT_MUTED)

    draw_footer(draw)
    return img


# =========================================================================
# PAGE 4: GEOFENCING, NEGATIVE SHIELD & CREATIVE ASSETS
# =========================================================================
def create_page_4():
    img = Image.new("RGB", (WIDTH, HEIGHT), color=OFF_WHITE)
    draw = ImageDraw.Draw(img)

    draw_header(draw, "Geofencing, Negatives & Creative Library", "Budget Protection, DFW Municipality Targeting, and Staged Visual Creative Assets", 4)

    # 1. GEOFENCING CARD
    geo_y = 230
    draw.rounded_rectangle([(80, geo_y), (WIDTH // 2 - 15, geo_y + 540)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
    draw.text((115, geo_y + 30), "13 DFW MUNICIPAL GEO-TARGETS", font=get_font(22, bold=True), fill=DARK_CHARCOAL)
    draw.text((115, geo_y + 60), "Setting: 'Presence' (People in or regularly in location)", font=get_font(14), fill=TAUPE)
    draw.line([(115, geo_y + 85), (WIDTH // 2 - 45, geo_y + 85)], fill=LIGHT_GRAY, width=1)

    cities = [
        ("Carrollton", "Home Clinic Base (0-5 mi)"),
        ("Dallas", "High-Density Metro Hub"),
        ("Plano", "Affluent North Corridor"),
        ("Frisco", "Rapid Growth Suburb"),
        ("The Colony", "Adjacent Lakefront Area"),
        ("Lewisville", "West Medical Corridor"),
        ("Richardson", "Telecom & Tech Corridor"),
        ("Addison", "High Commercial Traffic"),
        ("Farmers Branch", "Immediate South Border"),
        ("Irving", "Las Colinas Professional"),
        ("Flower Mound", "Affluent Family Suburb"),
        ("Allen & McKinney", "Far North High-Income")
    ]

    for c_i, (c_name, c_desc) in enumerate(cities):
        cy = geo_y + 105 + c_i * 34
        draw.text((115, cy), f"✓ {c_name}", font=get_font(17, bold=True), fill=DARK_CHARCOAL)
        draw.text((285, cy + 2), f"—  {c_desc}", font=get_font(14), fill=TEXT_MUTED)

    # 2. NEGATIVE KEYWORDS CARD
    neg_x = WIDTH // 2 + 15
    draw.rounded_rectangle([(neg_x, geo_y), (WIDTH - 80, geo_y + 540)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
    draw.text((neg_x + 35, geo_y + 30), "22 WASTE-PREVENTION NEGATIVES", font=get_font(22, bold=True), fill=DARK_CHARCOAL)
    draw.text((neg_x + 35, geo_y + 60), "Blocks non-commercial, surgical, and low-ticket searches", font=get_font(14), fill=TAUPE)
    draw.line([(neg_x + 35, geo_y + 85), (WIDTH - 115, geo_y + 85)], fill=LIGHT_GRAY, width=1)

    negatives_categories = [
        ("Surgical Transplants", ["transplant", "hair transplant", "FUE", "FUT", "Turkey"]),
        ("Cosmetic Hair Pieces", ["wig", "toupee", "extensions"]),
        ("Standard Salon Services", ["haircut", "hairstyle", "shampoo", "conditioner"]),
        ("E-Commerce & DIY", ["Amazon", "DIY", "home remedy", "free"]),
        ("Employment & Schooling", ["jobs", "career", "school", "certification", "course", "training"])
    ]

    n_curr_y = geo_y + 105
    for cat_title, kws in negatives_categories:
        draw.text((neg_x + 35, n_curr_y), cat_title.upper(), font=get_font(14, bold=True), fill=DARK_CHARCOAL)
        kw_str = ", ".join(f'"{k}"' for k in kws)
        draw.text((neg_x + 35, n_curr_y + 22), kw_str, font=get_font(15), fill=TEXT_MUTED)
        n_curr_y += 65

    # 3. CREATIVE ASSET LIBRARY (7 Images)
    img_y = 800
    draw.rounded_rectangle([(80, img_y), (WIDTH - 80, img_y + 560)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
    draw.text((115, img_y + 30), "7 CURATED CREATIVE IMAGE ASSETS (UPLOADED TO SHARED LIBRARY)", font=get_font(22, bold=True), fill=DARK_CHARCOAL)
    draw.text((115, img_y + 60), "Uploaded directly to Google Ads Shared Asset Library (Account 480-656-3884)", font=get_font(15), fill=TAUPE)
    draw.line([(115, img_y + 85), (WIDTH - 115, img_y + 85)], fill=LIGHT_GRAY, width=1)

    assets = [
        ("Male looking at Hair Loss.png", "1254 x 1254 (1:1)", "Ad Group 3: Men", "Receding temples & crown self-evaluation angle"),
        ("BA Side Profile.png", "2048 x 768 (2.6:1)", "Ad Group 3: Men", "Clinical temporal peak density restoration before/after"),
        ("Asian woman mature hair loss.png", "1024 x 1536 (2:3)", "Ad Group 2: Women", "Widening midline part & diffuse thinning concern"),
        ("Woman Blonde Asian Hair Loss on brush.png", "1024 x 1536 (2:3)", "Ad Group 2: Women", "Active emotional trigger (hair shedding seen on brush)"),
        ("Caucasian Hair Loss.png", "1186 x 1326 (~1:1)", "Ad Group 2: Women", "Vertex scalp thinning and clinical scalp diagnosis"),
        ("BA Hiar Loss 1 Curly Hair.png", "2048 x 768 (2.6:1)", "Ad Group 1: Combined", "Verified curly hair crown density transformation"),
        ("Hair Loss of Top.png", "1377 x 1142 (~1.2:1)", "Ad Group 1: Combined", "Macro top-of-head follicular diagnostic close-up")
    ]

    for a_i, (a_name, a_dim, a_grp, a_note) in enumerate(assets):
        ay = img_y + 105 + a_i * 60
        draw.rounded_rectangle([(115, ay), (WIDTH - 115, ay + 50)], radius=8, fill=OFF_WHITE)
        draw.text((135, ay + 15), a_name, font=get_font(16, bold=True), fill=DARK_CHARCOAL)
        draw.text((580, ay + 17), a_dim, font=get_font(14), fill=TEXT_MUTED)
        draw.text((760, ay + 17), a_grp, font=get_font(15, bold=True), fill=TAUPE)
        draw.text((980, ay + 17), a_note, font=get_font(14), fill=TEXT_DARK)

    # 4. NEXT 30-DAY PERFORMANCE ROADMAP
    road_y = 1390
    draw.rounded_rectangle([(80, road_y), (WIDTH - 80, road_y + 440)], radius=20, fill=WHITE, outline=LIGHT_GRAY, width=2)
    draw.text((115, road_y + 30), "NEXT 30-DAY SCALING & OPTIMIZATION ROADMAP", font=get_font(22, bold=True), fill=DARK_CHARCOAL)
    draw.line([(115, road_y + 65), (WIDTH - 115, road_y + 65)], fill=LIGHT_GRAY, width=1)

    steps = [
        ("Days 1 – 7: Algorithm Learning Phase", "Bid strategy: Maximize Clicks. Monitor daily query volume and verify all phone call clicks and lead form submits register accurately in Google Ads."),
        ("Days 8 – 14: Search Query Negative Scrubbing", "Inspect the real-world Search Terms Report. Add any irrelevant adjacent terms (e.g. shampoo brands, scalp ringworm) into the negative keyword shield."),
        ("Days 15 – 30: Smart Bidding (Target CPA) Transition", "Once the campaign logs 30–50 conversions, switch from Maximize Clicks to Target CPA to automate bidding toward the highest-converting patient inquiries."),
        ("Month 2: Image Extensions & Demand Gen Expansion", "As Google's 28-day spend threshold clears, link the 7 staged Image Assets to live Search ads and launch targeted Meta / YouTube companion remarketing.")
    ]

    for s_i, (s_title, s_desc) in enumerate(steps):
        sy = road_y + 85 + s_i * 82
        draw.ellipse([(115, sy + 5), (145, sy + 35)], fill=GOLD)
        draw.text((125, sy + 10), str(s_i + 1), font=get_font(16, bold=True), fill=WHITE)
        draw.text((165, sy + 5), s_title, font=get_font(18, bold=True), fill=DARK_CHARCOAL)
        draw.text((165, sy + 32), s_desc, font=get_font(15), fill=TEXT_MUTED)

    draw_footer(draw)
    return img

def main():
    print("Generating Page 1...")
    p1 = create_page_1()
    print("Generating Page 2...")
    p2 = create_page_2()
    print("Generating Page 3...")
    p3 = create_page_3()
    print("Generating Page 4...")
    p4 = create_page_4()

    output_path = "/Users/mw/Sites/SuAGlow/dev-site/internal/google-ads/sua_glow_campaign_overview.pdf"
    print(f"Saving multi-page PDF to {output_path}...")
    p1.save(output_path, "PDF", resolution=200.0, save_all=True, append_images=[p2, p3, p4])
    print("PDF generation complete! File size:", os.path.getsize(output_path))

if __name__ == "__main__":
    main()
