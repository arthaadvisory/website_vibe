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

## 📦 How to Publish (cPanel)

Every time you make updates to the content or code, follow these steps to generate a new package for your cPanel hosting:

1. **Run the Publish Script**:
   From the root directory, run:
   ```powershell
   .\to_publish.ps1
   ```
   *This script will build the latest version and create a `website_publish.zip` file.*

2. **Upload to cPanel**:
   - Log in to your cPanel -> **File Manager**.
   - Navigate to `public_html` (or your website folder).
   - **Upload** the `website_publish.zip` file.
   - **Extract** the zip file directly into the folder.

## 🛠️ After Each Update

- **Always verify locally**: Run `npm run docs:dev` to check your changes before publishing.
- **Check for Broken Links**: The build process will now report if you have broken internal links.
- **Commit your changes**: Pushing to GitHub keeps your source code safe.

---
© 2026 Artha Advisory
