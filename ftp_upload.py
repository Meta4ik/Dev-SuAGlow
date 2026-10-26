import ftplib
import os

FTP_HOST = "suaglow.com"
FTP_USER = ""
FTP_PASS = ""

with open(".env") as f:
    for line in f:
        line = line.strip()
        if line.startswith('FTP_USER='):
            FTP_USER = line.split('=', 1)[1]
        elif line.startswith('FTP_PASS='):
            FTP_PASS = line.split('=', 1)[1]

REMOTE_DIR = "/public_html"

print(f"Connecting to {FTP_HOST}...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

# Exclude list - files and directories that must NEVER be pushed to production FTP
EXCLUDE = {
    '.git', 'node_modules', 'src', 'scratch', 'dev-tools', 'internal', 
    'kam_doc_updates', '.env', 'ftp_upload.py', 'package.json', 'package-lock.json', 
    '.DS_Store', 'DEPLOYMENT.md', 'search-index.js', 'extract_logos.py', '.gitignore', 
    'staging.html', 'iv-infusion-wellness-therapy.html', 'exoblanc-mobile-app', '.agent', '.agents', 
    '.vercel', '.venv-rembg'
}

# Remove version 2 from remote if it exists
try:
    ftp.delete("skincare-products-v2.html")
    print("Deleted obsolete remote file: skincare-products-v2.html")
except Exception:
    pass

uploaded_count = 0
skipped_count = 0

def upload_dir(local_dir, remote_dir):
    global uploaded_count, skipped_count
    try:
        ftp.mkd(remote_dir)
    except ftplib.error_perm:
        pass # Directory likely exists
        
    try:
        remote_entries = {name: facts for name, facts in ftp.mlsd(remote_dir)}
    except Exception:
        remote_entries = {}
        
    for item in sorted(os.listdir(local_dir)):
        if item in EXCLUDE or item.startswith('.') or item.endswith('.bak'):
            continue
            
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}" if remote_dir != "." else item
        
        if os.path.isdir(local_path):
            upload_dir(local_path, remote_path)
        else:
            local_size = os.path.getsize(local_path)
            facts = remote_entries.get(item)

            # For static media and assets, skip if remote size matches exactly.
            # For HTML pages and core layout scripts/styles, always upload to guarantee updates.
            is_core_web_file = item.endswith('.html') or item in {'navbar.js', 'navbar.html', 'footer.js', 'script.js', 'output.css'}
            if not is_core_web_file and facts and int(facts.get('size', -1)) == local_size:
                skipped_count += 1
                continue
                
            with open(local_path, 'rb') as f:
                ftp.storbinary(f"STOR {remote_path}", f)
            uploaded_count += 1
            print(f"Uploaded: {remote_path} ({local_size:,} bytes)")

print("Starting smart FTP upload...")
upload_dir(".", ".")
ftp.quit()
print(f"\nFTP upload complete! {uploaded_count} files uploaded, {skipped_count} unchanged files skipped.")
