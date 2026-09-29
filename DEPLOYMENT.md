# Deployment Guide

This guide outlines the commands and workflows for deploying your site to Vercel (via Git) and your live FTP server. 

## 1. Pushing to Git & Vercel
Because Vercel is connected to your GitHub repository (`dev-site`), anytime you commit and push to the `main` branch, Vercel will automatically trigger a build and deploy it.

Run these commands from inside your `dev-site` folder:

```bash
# 1. Build your latest CSS and search index
npm run build

# 2. Add all changed files to staging
git add .

# 3. Commit your changes with a message
git commit -m "Your descriptive commit message here"

# 4. Push to GitHub (This automatically triggers a Vercel deploy!)
git push
```

## 2. Syncing to your Live Site Folder
Before pushing to FTP or manually updating your production environment, you should sync your compiled `dev-site` over to your `live-site` folder to ensure everything is identical.

Run this command from inside your `dev-site` folder:

```bash
# Syncs all files while ignoring .git, node_modules, internal, dev-tools, and other dev files
rsync -av --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='src' \
  --exclude='scratch' \
  --exclude='dev-tools' \
  --exclude='internal' \
  --exclude='kam_doc_updates' \
  . ../live-site/
```

## 3. Pushing to FTP (`suaglow.com/public_html`)
Once your files are synced to the `live-site` folder, you can upload them to your FTP server.

> [!CAUTION]
> **Strict Production Rule**: `internal/` (internal dossiers, ad collateral) and `dev-tools/` must **NEVER** be uploaded to the live FTP server!

**Option A: Using your AppleScript Droplet**
1. Open Finder and go to the `live-site` folder.
2. Select the files/folders you want to upload (or select all with `Cmd + A`).
3. Drag and drop them onto your `suaglow.com - public_html droplet.app` droplet.

*(Remember to configure your droplet's preferences to ignore `.git`, `node_modules`, `kam_doc_updates`, `dev-tools`, `internal`, and `scratch`!)*

**Option B: Using Python Automation (What we used today)**
If the droplet acts up, you can run the python script from your `dev-site` or `live-site` folder (exclusions for `internal/` and `dev-tools/` are enforced automatically):

```bash
cd ../live-site
python3 ftp_upload.py
```

**Option C: Using `lftp` (Command Line)**
If you install `lftp` via Homebrew (`brew install lftp`), you can run this from your `live-site` folder:

```bash
lftp -u qzao065afvpx,'r5697@sJY9PgOYEh' ftp://suaglow.com -e "mirror -R -x '^\.' -x '^node_modules/' -x '^scratch/' -x '^dev-tools/' -x '^internal/' -x '^kam_doc_updates/' -x '^src/' . public_html; quit"
```
