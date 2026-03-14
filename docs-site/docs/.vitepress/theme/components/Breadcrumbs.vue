<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, page } = useData()

const crumbs = computed(() => {
  const list = [{ text: 'Home', link: '/' }]
  
  // Standardized path normalization
  const normalizePath = (path) => {
    return path
      .replace(/\.html$/, '')
      .replace(/\/index$/, '')
      .replace(/\/$/, '') || '/'
  }

  // Custom parent logic from frontmatter
  if (frontmatter.value.parent) {
    const [text, link] = frontmatter.value.parent.split('|')
    if (text && link) {
      list.push({ text, link })
    }
  } else {
    // Auto-detect parents from URL path segments
    const path = page.value.relativePath.replace(/\.md$/, '').replace(/\/index$/, '')
    const segments = path.split('/').filter(Boolean)
    
    // Add intermediate segments as parent links (skip the last one)
    for (let i = 0; i < segments.length - 1; i++) {
      const link = '/' + segments.slice(0, i + 1).join('/') + '/'
      const text = segments[i].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      list.push({ text, link })
    }
  }

  // Current page
  list.push({ 
    text: frontmatter.value.title || page.value.title,
    link: null // No link for current page
  })

  return list
})
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item">
        <template v-if="crumb.link">
          <a :href="crumb.link" class="breadcrumb-link">{{ crumb.text }}</a>
          <span class="breadcrumb-separator" aria-hidden="true">/</span>
        </template>
        <span v-else class="breadcrumb-current">{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: var(--vp-c-brand-next);
  text-decoration: underline;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: var(--vp-c-divider);
  user-select: none;
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

@media (max-width: 640px) {
  .breadcrumbs {
    font-size: 0.75rem;
  }
}
</style>
