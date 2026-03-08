# Agent Guide: Building VitePress Sites

> Hard-won lessons from building [arthaadvisory.com.np](https://arthaadvisory.com.np) — a 100+ page professional services site with custom layouts, data loaders, and component-driven pages.

---

## 🏗️ Project Structure

```
docs-site/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # Site config (nav, sidebar, head, vite)
│   │   ├── theme/
│   │   │   ├── index.js        # Theme entry — component registration, setup
│   │   │   ├── style.css       # Global CSS (brand vars, dark mode, animations)
│   │   │   ├── MyLayout.vue    # Master layout wrapper (all pages)
│   │   │   ├── components/     # Auto-registered Vue components
│   │   │   └── composables/    # Vue composables (useForm, etc.)
│   │   └── CMS_SCHEMA.md       # Frontmatter field documentation
│   ├── public/                 # Static assets (images, .htaccess, robots.txt)
│   ├── services.data.ts        # Content loader for services
│   ├── industries.data.ts      # Content loader for industries
│   ├── resources.data.ts       # Content loader for resources
│   └── [content]/**/*.md       # Markdown content pages
└── package.json
```

---

## ⚠️ Critical Gotchas (Will Bite You)

### 1. Markdown Inside Vue Components Needs Blank Lines
**THE #1 ISSUE.** Markdown inside `<div>`, `<Accordion>`, or any HTML/Vue tag will NOT be processed unless there's a **blank line** after the opening tag.

```markdown
<!-- ❌ BAD — renders as raw "## Heading" text -->
<div>
## Heading
Content here
</div>

<!-- ✅ GOOD — blank line triggers markdown processing -->
<div>

## Heading

Content here

</div>
```

### 2. Markdown Links Don't Work Inside Vue Component Slots
Markdown `[link text](/url)` renders as literal text inside `<Accordion>`, `<FAQ>`, etc. Use HTML `<a>` tags instead.

```markdown
<!-- ❌ BAD -->
<Accordion title="Question">
Visit [our page](/contact) for more info.
</Accordion>

<!-- ✅ GOOD -->
<Accordion title="Question">
Visit <a href="/contact">our page</a> for more info.
</Accordion>
```

### 3. Clean URLs + cPanel/LiteSpeed = 404s
With `cleanUrls: true`, VitePress generates `/services/tax.html` but the URL is `/services/tax`. LiteSpeed doesn't resolve this automatically. **You MUST add a `.htaccess` in `docs/public/`:**

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} /$
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}index.html -f
RewriteRule ^(.+)/$ $1/index.html [L]

ErrorDocument 404 /404.html
```

### 4. `lastUpdated: true` Requires Git
Setting `lastUpdated: true` in config will **crash the build** with `spawn git ENOENT` if `git` is not on the system PATH. Always verify git is available before enabling.

### 5. Content Loaders + Clean URLs = Ghost Entries
When using `createContentLoader('industries/**/*.md')`, the `index.md` file gets URL `/industries/` (not `/industries/index`). A filter like `!page.url.includes('/index')` will **miss it**, causing "Untitled" ghost cards. Always add explicit URL exclusion:

```ts
.filter(page => page.url !== '/industries/' && !page.url.includes('/index'))
```

### 6. Mermaid Syntax Is Fragile
- **No quoted strings inside pipe labels:** `E -->| "text" | F` breaks. Use `E -->|text| F`
- **Special characters in node labels** need bracket quoting: `A["Node with (parens)"]`
- Mermaid requires `ssr.noExternal` and `optimizeDeps.include` in Vite config:

```ts
vite: {
  ssr: { noExternal: ['vitepress-plugin-mermaid', 'mark.js'] },
  optimizeDeps: { include: ['mermaid'] }
}
```

### 7. `manualChunks` Circular Dependencies
Don't do `if (id.includes('vue')) return 'vendor-vue'` AND `return 'vendor'` as a catch-all — Vue dependencies in other vendor packages create circular refs. Only split specific large libs (like mermaid).

### 8. Dead Links Block Builds
With `ignoreDeadLinks: false`, any broken link in any `.md` file will fail the entire build. Always verify links exist before adding them, especially in sitemap/all-pages files.

---

## 🎨 Theming & CSS

### Brand Variables (`:root`)
```css
:root {
  --vp-c-brand-1: #147D34;        /* Primary green */
  --vp-c-brand-2: #2077BC;        /* Secondary blue */
  --vp-c-brand-3: #116b2c;        /* Darker green */
  --vp-c-brand-soft: rgba(20, 125, 52, 0.05);
}
```

### Dark Mode
VitePress uses `.dark` class on `<html>`. Override brand vars:
```css
.dark {
  --vp-c-brand-1: #34d058;
  --vp-c-brand-2: #4ac0ff;
}
```

### Footer Z-Index
The VitePress sidebar has a z-index that can overlap custom footers. Always set:
```css
.global-footer { position: relative; z-index: 30; }
```

---

## 🧩 Component Architecture

### Auto-Registration (index.js)
All `.vue` files in `theme/components/` are auto-registered globally via:
```js
const components = import.meta.glob('./components/*.vue', { eager: true })
// Registers each as app.component(filename, module.default)
```
This means you can use `<MyComponent />` in any `.md` file without imports.

### Key Components
| Component | Purpose |
|-----------|---------|
| `MyLayout.vue` | Master layout — wraps all pages with nav slots |
| `HomeLayout.vue` | Custom homepage with hero, services, industries |
| `ServicesLayout.vue` | Services index with category grid + directory |
| `ResourcesLayout.vue` | Resources page with filters and pagination |
| `ContactLayout.vue` | Contact form + map + office grid |
| `ServiceLayout.vue` | Individual service page wrapper |
| `IndustryLayout.vue` | Individual industry page wrapper |
| `PageHeader.vue` | Reusable hero banner with background image |
| `Accordion.vue` | Expandable FAQ items |
| `GlobalFooter.vue` | Site-wide footer |
| `AnnouncementBar.vue` | Top bar with contact info |

### Header Image Resolution Order
`MyLayout.vue` resolves header images in this order:
1. `frontmatter.heroImage` (explicit)
2. `frontmatter.image` (explicit)
3. Auto-detect from URL path: `/images/headers/service-{slug}.jpg` or `/images/industries/ind-{slug}.jpg`
4. `null` (no header)

**Always add explicit `image:` frontmatter** if the auto-detected path doesn't have a matching file.

---

## 📊 Data Loaders

### Pattern
```ts
// services.data.ts
import { createContentLoader } from 'vitepress'
export default createContentLoader('services/**/*.md', {
  transform(rawData) {
    return rawData
      .filter(page => /* exclude indexes, drafts */)
      .map(page => ({
        title: page.frontmatter.title || 'Untitled',
        url: page.url,
        // ... extract frontmatter fields
      }))
  }
})
```

### Import in Components
```vue
<script setup>
import { data as services } from '../../../services.data.ts'
</script>
```

**Path gotcha:** The import is relative to the `.vue` file location, NOT the project root. Components in `theme/components/` need `../../../` to reach `docs/`.

---

## 🚀 Deployment (cPanel)

1. **Build:** `npx vitepress build docs`
2. **Output:** `docs/.vitepress/dist/`
3. **Upload** contents of `dist/` to cPanel `public_html/`
4. **`.htaccess`** is auto-included from `docs/public/.htaccess`
5. **Verify** direct subpage access (e.g. `/services/tax`) works

### Build Checklist
- [ ] No dead links (`ignoreDeadLinks: false`)
- [ ] No missing images in frontmatter
- [ ] Mermaid diagrams syntax-free
- [ ] `lastUpdated: false` if no git
- [ ] `.htaccess` in `docs/public/`

---

## 📝 Common Tasks

### Adding a New Service Page
1. Create `docs/services/{category}/{slug}.md`
2. Add frontmatter: `title`, `description`, `icon`, `parent`, `layout: doc`, `image`
3. The data loader auto-picks it up
4. Verify the `category` field matches an existing category key

### Adding a New Industry Page
1. Create `docs/industries/{slug}.md`
2. Add frontmatter: `title`, `description`, `icon`, `stats[]`
3. Verify the slug maps correctly in `MyLayout.vue` `industryMap`

### Fixing Missing Header Images
1. Check `docs/public/images/headers/` for available files
2. Add explicit `image: /images/headers/{file}.jpg` to frontmatter
3. Available images: `service-advisory.jpg`, `service-audit.jpg`, `service-consulting.jpg`, `service-dd.jpg`, `service-exit.jpg`, `service-hr.jpg`, `service-legal.jpg`, `service-ma.jpg`, `service-outsourcing.jpg`, `service-tax.jpg`

### Embedding Tally.so Forms
Forms use `data-tally-src` + a loader script in `onMounted`:
```html
<iframe data-tally-src="https://tally.so/embed/{ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  loading="lazy" width="100%" height="200" frameborder="0"></iframe>
```
The `ContactLayout.vue` handles the Tally embed script injection automatically.

---

## 🐛 Debugging Tips

| Symptom | Likely Cause |
|---------|-------------|
| Raw `##` showing on page | Missing blank line after HTML/Vue tag |
| `[link](/path)` showing as text | Markdown link inside Vue slot — use `<a>` |
| 404 on direct URL visit (cPanel) | Missing `.htaccess` rewrite rules |
| "Untitled" card in grid | Data loader not filtering index page |
| Build fails: `spawn git ENOENT` | `lastUpdated: true` but no git |
| Build fails: dead links | Link to non-existent `.md` page |
| Mermaid "Parse error" | Quoted strings or special chars in diagram |
| Sidebar overlaps footer | Footer needs `z-index: 30` |
| Header image missing | No matching file for auto-detected path |
| Component not found | File not in `theme/components/` directory |
