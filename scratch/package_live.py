import os
import shutil

def main():
    workspace_dir = "/Users/mw/Sites/SuAGlow"
    source_dir = os.path.join(workspace_dir, "dev-site")
    live_site_dir = os.path.join(workspace_dir, "live-site")
    zip_output_path = os.path.join(source_dir, "suaglow-live.zip")

    # 1. Clean zip if exists
    if os.path.exists(zip_output_path):
        os.remove(zip_output_path)
        print("Removed existing suaglow-live.zip archive.")

    # 2. Clear and recreate the live-site directory
    if os.path.exists(live_site_dir):
        shutil.rmtree(live_site_dir)
        print("Cleared existing live-site directory.")
    
    os.makedirs(live_site_dir)

    # 3. Production HTML files to include
    html_files = [
        "index.html",
        "about.html",
        "bridal-glow.html",
        "coming-soon.html",
        "contact.html",
        "cosmetic-tox.html",
        "dermal-filler.html",
        "financing.html",
        "injectables.html",
        "medical-tox.html",
        "oligio-x.html",
        "one-day-glow.html",
        "press-media.html",
        "privacy-policy.html",
        "hippa-policy.html",
        "accessibility-statement.html",
        "cookie-notices-choices.html",
        "radiesse.html",
        "referral.html",
        "salmon-pn-facial.html",
        "scar-treatment.html",
        "seoul-man.html",
        "shop-skincare-rejuran.html",
        "shop-skincare.html",
        "signature-treatment.html",
        "sitemap.html",
        "sua_glow_sitemap_v2.html",
        "skin-health.html",
        "skin-quality-boosters.html",
        "specials.html",
        "testimonials.html"
    ]

    # 4. Production JS files to include
    js_files = [
        "navbar.js",
        "footer.js",
        "script.js",
        "nearme.js",
        "news.js",
        "nocache.js",
        "specials.js",
        "sophia.js"
    ]

    # 5. Other root files
    other_files = [
        "OurTeam_no_bg.webp",
        "vercel.json"
    ]

    # 6. Production directories
    directories_to_copy = [
        "dist",
        "assets",
        "education"
    ]

    # Copy files
    print("Copying files to live-site folder...")
    for file_list in [html_files, js_files, other_files]:
        for filename in file_list:
            src_path = os.path.join(source_dir, filename)
            dest_path = os.path.join(live_site_dir, filename)
            if os.path.exists(src_path):
                shutil.copy2(src_path, dest_path)
            else:
                print(f"Warning: File {filename} does not exist in source directory.")

    # Copy directories
    print("Copying directories to live-site folder...")
    for dir_name in directories_to_copy:
        src_path = os.path.join(source_dir, dir_name)
        dest_path = os.path.join(live_site_dir, dir_name)
        if os.path.exists(src_path):
            shutil.copytree(src_path, dest_path)
        else:
            print(f"Warning: Directory {dir_name} does not exist in source directory.")

    print(f"Successfully populated production files at: {live_site_dir}")

if __name__ == "__main__":
    main()
