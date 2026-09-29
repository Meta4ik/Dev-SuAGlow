import math
from PIL import Image, ImageDraw, ImageFont

W, H = 1540, 920

# Bounding coordinates for DFW North target area
MIN_LON, MAX_LON = -97.16, -96.56
MIN_LAT, MAX_LAT = 32.72, 33.26

PAD_X = 130
PAD_Y = 100
PLOT_W = W - 2 * PAD_X
PLOT_H = H - 2 * PAD_Y

def geo_to_xy(lat, lon):
    x = PAD_X + ((lon - MIN_LON) / (MAX_LON - MIN_LON)) * PLOT_W
    y = H - PAD_Y - ((lat - MIN_LAT) / (MAX_LAT - MIN_LAT)) * PLOT_H
    return int(x), int(y)

def get_font(size, bold=False):
    try:
        if bold:
            return ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)
        return ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size)
    except:
        return ImageFont.load_default()

# Colors
BG_COLOR = (248, 249, 250)
MAP_BG = (242, 245, 248)
BORDER_COL = (222, 228, 235)
ROAD_MAIN = (195, 204, 214)
ROAD_TOLL = (185, 178, 168)
GOLD = (229, 184, 105)
TAUPE = (170, 152, 124)
DARK = (28, 32, 36)
WHITE = (255, 255, 255)
GREEN = (16, 185, 129)
WATER_COLOR = (212, 228, 240)

img = Image.new("RGBA", (W, H), BG_COLOR)
draw = ImageDraw.Draw(img)

# Outer map card
draw.rounded_rectangle([(30, 24), (W - 30, H - 24)], radius=20, fill=MAP_BG, outline=BORDER_COL, width=2)

# Subtle grid background
for gx in range(PAD_X, W - PAD_X, 100):
    draw.line([(gx, 40), (gx, H - 40)], fill=(232, 236, 240), width=1)
for gy in range(PAD_Y, H - PAD_Y, 80):
    draw.line([(40, gy), (W - 40, gy)], fill=(232, 236, 240), width=1)

# Water bodies
lake_lewisville = [
    geo_to_xy(33.15, -97.05),
    geo_to_xy(33.13, -96.96),
    geo_to_xy(33.09, -96.94),
    geo_to_xy(33.05, -96.98),
    geo_to_xy(33.03, -97.03),
    geo_to_xy(33.08, -97.07),
]
draw.polygon(lake_lewisville, fill=WATER_COLOR)
lx, ly = geo_to_xy(33.11, -97.04)
draw.text((lx, ly), "Lake Lewisville", font=get_font(11, bold=True), fill=(130, 160, 180))

lake_grapevine = [
    geo_to_xy(32.99, -97.15),
    geo_to_xy(32.98, -97.06),
    geo_to_xy(32.95, -97.09),
    geo_to_xy(32.97, -97.16)
]
draw.polygon(lake_grapevine, fill=WATER_COLOR)
gx, gy = geo_to_xy(32.97, -97.14)
draw.text((gx, gy), "Grapevine Lake", font=get_font(11), fill=(130, 160, 180))

# High-Intent Geofence Halo
geofence_poly = [
    geo_to_xy(33.24, -96.63), # McKinney N
    geo_to_xy(33.19, -96.82), # Frisco N
    geo_to_xy(33.12, -96.89), # The Colony
    geo_to_xy(33.08, -97.09), # Flower Mound / Lewisville N
    geo_to_xy(32.96, -97.10), # Flower Mound S
    geo_to_xy(32.81, -96.98), # Irving S
    geo_to_xy(32.74, -96.85), # Dallas S
    geo_to_xy(32.75, -96.74), # Dallas E
    geo_to_xy(32.95, -96.68), # Richardson E
    geo_to_xy(33.05, -96.64), # Plano E
    geo_to_xy(33.14, -96.61), # Allen E
]
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ov_draw = ImageDraw.Draw(overlay)
ov_draw.polygon(geofence_poly, fill=(170, 152, 124, 26), outline=(170, 152, 124, 110), width=2)
img = Image.alpha_composite(img, overlay)
draw = ImageDraw.Draw(img)

# Concentric distance rings around SuA Glow Clinic
clinic_x, clinic_y = geo_to_xy(33.0553, -96.8875)

for r_mi, r_px in [(5, 75), (10, 150), (18, 270)]:
    draw.ellipse([(clinic_x - r_px, clinic_y - r_px), (clinic_x + r_px, clinic_y + r_px)], outline=(170, 152, 124, 55), width=1)
    draw.text((clinic_x - 14, clinic_y + r_px + 2), f"{r_mi} MILES", font=get_font(10, bold=True), fill=(160, 145, 125))

# Highway Arteries
# SH-121
sh121_pts = [
    geo_to_xy(32.92, -97.12),
    geo_to_xy(32.98, -97.03),
    geo_to_xy(33.03, -96.93),
    geo_to_xy(33.0553, -96.8875),
    geo_to_xy(33.09, -96.83),
    geo_to_xy(33.14, -96.75),
    geo_to_xy(33.20, -96.63)
]
for i in range(len(sh121_pts)-1):
    draw.line([sh121_pts[i], sh121_pts[i+1]], fill=GOLD, width=4)

# DNT
dnt_pts = [
    geo_to_xy(32.76, -96.82),
    geo_to_xy(32.88, -96.82),
    geo_to_xy(32.96, -96.82),
    geo_to_xy(33.04, -96.82),
    geo_to_xy(33.16, -96.82),
    geo_to_xy(33.24, -96.82)
]
for i in range(len(dnt_pts)-1):
    draw.line([dnt_pts[i], dnt_pts[i+1]], fill=ROAD_TOLL, width=3)

# I-35E
i35_pts = [
    geo_to_xy(32.74, -96.81),
    geo_to_xy(32.85, -96.87),
    geo_to_xy(32.94, -96.90),
    geo_to_xy(33.04, -96.99),
    geo_to_xy(33.14, -97.06)
]
for i in range(len(i35_pts)-1):
    draw.line([i35_pts[i], i35_pts[i+1]], fill=ROAD_MAIN, width=3)

# PGBT
pgbt_pts = [
    geo_to_xy(32.83, -96.99),
    geo_to_xy(32.92, -96.93),
    geo_to_xy(32.98, -96.86),
    geo_to_xy(33.00, -96.77),
    geo_to_xy(32.98, -96.67),
    geo_to_xy(32.92, -96.60)
]
for i in range(len(pgbt_pts)-1):
    draw.line([pgbt_pts[i], pgbt_pts[i+1]], fill=ROAD_TOLL, width=3)

# US-75
us75_pts = [
    geo_to_xy(32.75, -96.78),
    geo_to_xy(32.93, -96.74),
    geo_to_xy(33.02, -96.70),
    geo_to_xy(33.10, -96.66),
    geo_to_xy(33.23, -96.61)
]
for i in range(len(us75_pts)-1):
    draw.line([us75_pts[i], us75_pts[i+1]], fill=ROAD_MAIN, width=3)

# Highway Badges
def draw_shield(text, x, y, bg=DARK, text_col=GOLD):
    tw = len(text) * 8 + 12
    draw.rounded_rectangle([(x - tw//2, y - 10), (x + tw//2, y + 10)], radius=4, fill=bg)
    draw.text((x - tw//2 + 6, y - 7), text, font=get_font(10, bold=True), fill=text_col)

draw_shield("SH-121", sh121_pts[1][0] + 30, sh121_pts[1][1] - 18, GOLD, DARK)
draw_shield("SH-121", sh121_pts[5][0] - 25, sh121_pts[5][1] - 18, GOLD, DARK)
draw_shield("DNT", dnt_pts[4][0] + 18, dnt_pts[4][1] + 15, DARK, WHITE)
draw_shield("I-35E", i35_pts[4][0] - 25, i35_pts[4][1] + 15, DARK, WHITE)
draw_shield("PGBT", pgbt_pts[2][0] + 20, pgbt_pts[2][1] - 16, DARK, WHITE)
draw_shield("US-75", us75_pts[3][0] + 25, us75_pts[3][1] + 15, DARK, WHITE)

# 13 Targeted Municipalities
cities = [
    ("Carrollton", 32.9537, -96.8903, 14, -10),
    ("The Colony", 33.0882, -96.8864, 14, -10),
    ("Lewisville", 33.0462, -97.0078, -90, -10),
    ("Flower Mound", 33.0322, -97.0700, -115, -10),
    ("Frisco", 33.1507, -96.8236, 14, -10),
    ("Plano", 33.0198, -96.6989, 14, -10),
    ("Allen", 33.1032, -96.6706, 14, -10),
    ("McKinney", 33.1972, -96.6398, -85, -28),
    ("Addison", 32.9618, -96.8292, 14, -10),
    ("Farmers Branch", 32.9265, -96.8961, -125, -10),
    ("Richardson", 32.9483, -96.7299, 14, -10),
    ("Irving (Las Colinas)", 32.8340, -96.9489, 14, -10),
    ("Dallas", 32.7867, -96.7970, 14, -10),
]

for name, lat, lon, ox, oy in cities:
    cx, cy = geo_to_xy(lat, lon)
    
    # City marker node
    draw.ellipse([(cx - 7, cy - 7), (cx + 7, cy + 7)], fill=WHITE, outline=DARK, width=2)
    draw.ellipse([(cx - 3, cy - 3), (cx + 3, cy + 3)], fill=GREEN)
    
    # Badge
    tw = len(name) * 8 + 16
    bx = cx + ox
    by = cy + oy
    draw.rounded_rectangle([(bx, by), (bx + tw, by + 22)], radius=5, fill=WHITE, outline=BORDER_COL, width=1)
    draw.text((bx + 8, by + 4), name, font=get_font(12, bold=True), fill=DARK)

# SuA Glow Clinic HQ Marker
for r in [30, 20, 12]:
    draw.ellipse([(clinic_x - r, clinic_y - r), (clinic_x + r, clinic_y + r)], fill=None, outline=(229, 184, 105, 140), width=2)

draw.ellipse([(clinic_x - 11, clinic_y - 11), (clinic_x + 11, clinic_y + 11)], fill=DARK, outline=GOLD, width=3)

# 5-point Star helper
def draw_star(draw, cx, cy, r_out, r_in, fill=GOLD):
    points = []
    for i in range(10):
        r = r_out if i % 2 == 0 else r_in
        angle = i * math.pi / 5 - math.pi / 2
        px = cx + r * math.cos(angle)
        py = cy + r * math.sin(angle)
        points.append((px, py))
    draw.polygon(points, fill=fill)

draw_star(draw, clinic_x, clinic_y, 7, 3, GOLD)

# SuA Glow Clinic Callout Card - Placed at (380, 190) with an elegant angled pointer line
card_w = 340
card_h = 82
card_x = 360
card_y = 190

# Angled pointer line from card to clinic pin
draw.line([(card_x + card_w, card_y + 50), (clinic_x - 15, clinic_y - 8)], fill=GOLD, width=3)
draw.ellipse([(clinic_x - 17, clinic_y - 10), (clinic_x - 13, clinic_y - 6)], fill=GOLD)

draw.rounded_rectangle([(card_x, card_y), (card_x + card_w, card_y + card_h)], radius=12, fill=DARK, outline=GOLD, width=2)

# Card header with gold star
draw_star(draw, card_x + 24, card_y + 20, 6, 3, GOLD)
draw.text((card_x + 38, card_y + 12), "SuA GLOW CLINIC HEADQUARTERS", font=get_font(12, bold=True), fill=GOLD)
draw.text((card_x + 18, card_y + 34), "4116 State Hwy 121, Suite 120, Office O", font=get_font(13, bold=True), fill=WHITE)
draw.text((card_x + 18, card_y + 54), "Carrollton, TX 75010  •  972-665-8737", font=get_font(11), fill=TAUPE)

# Map Legend Box (Bottom Left)
leg_x = 55
leg_y = H - 185
draw.rounded_rectangle([(leg_x, leg_y), (leg_x + 380, leg_y + 135)], radius=12, fill=WHITE, outline=BORDER_COL, width=1)
draw.text((leg_x + 16, leg_y + 14), "GEOTARGETING MAP LEGEND", font=get_font(12, bold=True), fill=DARK)

# Legend items
draw.ellipse([(leg_x + 18, leg_y + 40), (leg_x + 28, leg_y + 50)], fill=DARK, outline=GOLD, width=2)
draw_star(draw, leg_x + 23, leg_y + 45, 4, 2, GOLD)
draw.text((leg_x + 38, leg_y + 38), "SuA Glow Clinic Flagship (Carrollton)", font=get_font(11, bold=True), fill=DARK)

draw.ellipse([(leg_x + 18, leg_y + 64), (leg_x + 28, leg_y + 74)], fill=WHITE, outline=DARK, width=2)
draw.ellipse([(leg_x + 21, leg_y + 67), (leg_x + 25, leg_y + 71)], fill=GREEN)
draw.text((leg_x + 38, leg_y + 62), "13 Targeted DFW Municipalities (Active)", font=get_font(11), fill=DARK)

draw.line([(leg_x + 16, leg_y + 92), (leg_x + 32, leg_y + 92)], fill=GOLD, width=4)
draw.text((leg_x + 38, leg_y + 84), "SH-121 Corridor (Direct Transit Route to Clinic)", font=get_font(11), fill=DARK)

draw.rectangle([(leg_x + 16, leg_y + 110), (leg_x + 30, leg_y + 120)], fill=(170, 152, 124, 90), outline=(170, 152, 124))
draw.text((leg_x + 38, leg_y + 107), "Presence Geofence Halo (Zero Out-of-Area Bleed)", font=get_font(11), fill=DARK)

# Map Title Banner (Top Left)
t_x = 55
t_y = 45
draw.rounded_rectangle([(t_x, t_y), (t_x + 480, t_y + 82)], radius=12, fill=WHITE, outline=BORDER_COL, width=1)
draw.text((t_x + 18, t_y + 14), "DFW METROPLEX GEOTARGETING MAP", font=get_font(15, bold=True), fill=DARK)
draw.text((t_x + 18, t_y + 38), "Strict 'Presence' Setting  •  13 Targeted Municipalities", font=get_font(12), fill=TAUPE)
draw.text((t_x + 18, t_y + 57), "Targeted Catchment Population: ~3.8 Million Residents", font=get_font(11), fill=(100, 110, 120))

img.save("images/dfw_geotargeting_map.png")
print("Saved clean map to images/dfw_geotargeting_map.png")
