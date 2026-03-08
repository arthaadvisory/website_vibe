# Artha Advisory - Official Website Codebase

Professional VitePress-based website for Artha Advisory, Nepal's Leading Tax & Audit Firm.

## 🤖 AI-Assisted Creation Disclosure

This website was meticulously crafted through **deep research and analysis of company internal documents**, which were provided to **Google Antigravity** (an advanced experimental AI agent). Google Antigravity architected, designed, and developed this robust web presence to precisely reflect Artha Advisory's professional standards, services, and corporate identity.

## 🏗️ Site Structure & Content

The site is built using **VitePress** and structured into several key business areas:
- **Services**: Tax, Audit, Advisory, and Legal solutions.
- **Industries**: Sector-specific expertise.
- **Resources**: Guides, insights, and policy documents.
- **Careers**: Opportunities and corporate life at Artha Advisory.
- **Corporate Info**: About us, Testimonials, FAQs, and Contact details.

## 🚀 Local Development

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

## 📦 Deployment (GitHub to cPanel)

The preferred method for deploying this website is via **cPanel's Git Version Control**. By pushing the built output to GitHub, cPanel automatically pulls the latest changes and deploys them to the live server.

1. **Build the Production Site Locally**:
   Before pushing to GitHub, you must build the site so the `dist` folder is updated:
   ```bash
   cd docs-site
   npm run docs:build
   cd ..
   ```

2. **Commit and Push to GitHub**:
   Add the built files and your source changes, then push to your repository:
   ```bash
   git add .
   git commit -m "Update site content and build"
   git push origin main
   ```

3. **cPanel Automated Deployment**:
   Once changes are pushed to GitHub, your connected cPanel will detect the update and execute the `.cpanel.yml` file. This automatically copies the contents of `docs-site/docs/.vitepress/dist/` into your `public_html` directory, making the site live.

> **Note on `to_publish.ps1`**: The file `to_publish.ps1` is retained in the repository as a legacy/fallback utility to manually generate a deployment ZIP archive. It is not required for the primary GitHub-to-cPanel automated pipeline, but serves as a backup method.

---
© 2026 Artha Advisory
