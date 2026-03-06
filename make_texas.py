import urllib.request
import json

url = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
req = urllib.request.Request(url)
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())

texas_coords = None
for feature in data['features']:
    if feature['properties']['name'] == 'Texas':
        texas_coords = feature['geometry']['coordinates']

if not texas_coords:
    print("Texas not found!")
    exit(1)

# The geometry for Texas is a Polygon or MultiPolygon.
# It's a Polygon for Texas (wait, Texas has barrier islands, might be MultiPolygon)
# Let's extract the largest ring.
coords = []
def extract_rings(geom):
    rings = []
    if type(geom[0][0]) == list: # MultiPolygon
        for poly in geom:
            rings.append(poly[0]) # exterior ring
    else:
        rings.append(geom[0])
    return rings

rings = extract_rings(texas_coords)
largest_ring = max(rings, key=len)

min_x = min(p[0] for p in largest_ring)
max_x = max(p[0] for p in largest_ring)
min_y = min(p[1] for p in largest_ring)
max_y = max(p[1] for p in largest_ring)

w = max_x - min_x
h = max_y - min_y

# SVG coordinates have Y going down. GeoJSON has Y going up (latitude).
svg_path = []
for i, p in enumerate(largest_ring):
    # scale to 0-100
    x = (p[0] - min_x) / w * 100
    y = 100 - (p[1] - min_y) / h * 100
    cmd = 'M' if i == 0 else 'L'
    svg_path.append(f"{cmd} {x:.2f} {y:.2f}")

svg_path.append("Z")
print(" ".join(svg_path))
