import ftplib
import os
from dotenv import load_dotenv

load_dotenv()

FTP_HOST = "suaglow.com"
FTP_USER = os.getenv("FTP_USER")
FTP_PASS = os.getenv("FTP_PASS")
REMOTE_DIR = "/public_html"

print(f"Connecting to {FTP_HOST}...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

# Exclude list
EXCLUDE = {'.git', 'node_modules', 'src', 'scratch', 'dev-tools', 'kam_doc_updates', '.env', 'ftp_upload.py', 'package.json', 'package-lock.json', '.DS_Store', 'DEPLOYMENT.md', 'search-index.js', 'extract_logos.py'}

def upload_dir(local_dir, remote_dir):
    try:
        ftp.mkd(remote_dir)
    except ftplib.error_perm:
        pass # Directory likely exists
        
    for item in os.listdir(local_dir):
        if item in EXCLUDE or item.startswith('.'):
            continue
            
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}"
        
        if os.path.isdir(local_path):
            upload_dir(local_path, remote_path)
        else:
            with open(local_path, 'rb') as f:
                ftp.storbinary(f"STOR {remote_path}", f)
            print(f"Uploaded: {remote_path}")

print("Starting upload of live-site...")
upload_dir(".", ".")
ftp.quit()
print("FTP upload complete!")
