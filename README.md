# Artha Advisory - Website Code

Professional VitePress-based website for Artha Advisory.

## 🚀 Quick Start (Local Development)

1. **Install Dependencies**:
   ```bash
   cd docs-site
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run docs:dev
   ```
   Open `http://localhost:5173` in your browser.

## 📦 How to Publish (cPanel Git Deployment)

This project uses cPanel's Git Version Control for automated deployment. This bypasses the need for ZIP uploads and avoids common false-positive virus alerts.

1. **Prerequisite**:
   - Ensure you have a Git repository set up in your cPanel.
   - Update `.cpanel.yml` with your actual cPanel username.

2. **Generate Build & Push**:
   Run the following commands:
   ```powershell
   # 1. Build the latest version
   cd docs-site
   npm run docs:build
   cd ..

   # 2. Add and commit the changes (including the 'dist' folder)
   git add .
   git commit -m "Site update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

   # 3. Push to your cPanel remote (e.g., 'cpanel' or 'origin')
   git push cpanel main
   ```

3. **Deployment**:
   cPanel will automatically see the new commit and run the tasks defined in `.cpanel.yml` to move the files into your `public_html` folder.

---

## 🛠️ After Each Update

- **Always verify locally**: Run `npm run docs:dev` to check your changes before publishing.
- **Check for Broken Links**: The build process will now report if you have broken internal links.
- **Commit your changes**: Pushing to GitHub keeps your source code safe.

---
© 2026 Artha Advisory
