# CMS Integration Readiness — Frontmatter Schema

This document defines the frontmatter fields expected by the VitePress data loaders and Vue components, making it easy to map to any headless CMS (Netlify CMS, Sanity, Contentful, etc.).

## Resources (`resources/**/*.md`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | ✅ | Display title |
| `description` | `string` | ✅ | Short summary (used in cards and meta) |
| `date` | `string` (ISO) | ✅ | Publication date (e.g. `2025-03-01`) |
| `image` | `string` | ❌ | Hero image path (auto-fallback if missing) |
| `icon` | `string` | ❌ | Emoji or icon for card display |
| `tags` | `string[]` | ❌ | Filterable tags (e.g. `['Audit', 'Tax']`) |
| `draft` | `boolean` | ❌ | If `true`, excluded from build |

## Services (`services/**/*.md`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | ✅ | Service name |
| `description` | `string` | ✅ | Brief description |
| `icon` | `string` | ❌ | Emoji/icon for cards |
| `image` | `string` | ❌ | Background image |
| `category` | `string` | ❌ | Auto-derived from URL if missing |
| `parent` | `string` | ❌ | Format: `"Parent Title\|/parent-link/"` |
| `details` | `string[]` | ❌ | Bullet points for detailed info |
| `keywords` | `string[]` | ❌ | Keywords for related resources |

## Team Members (`about/team.data.js`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | ✅ | Full name |
| `title` | `string` | ✅ | Job title |
| `avatar` | `string` | ✅ | Image path |
| `bio` | `string` | ❌ | Short biography |
| `links` | `object[]` | ❌ | Social links |

## Blog Posts (`resources/insights/*.md`)

Inherits Resources schema plus:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `author` | `string` | ❌ | Author name |
| `readingTime` | `number` | ❌ | Auto-computed at build time |
