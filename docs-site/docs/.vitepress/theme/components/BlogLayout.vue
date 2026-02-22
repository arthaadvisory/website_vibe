<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

const date = computed(() => {
  if (!frontmatter.value.date) return null
  return new Date(frontmatter.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
  <div class="blog-layout">
    <div class="header-container">
      <Breadcrumbs />
      
      <header class="article-header">
        <div class="article-meta">
          <span v-if="date" class="meta-item">{{ date }}</span>
          <span v-if="frontmatter.author" class="meta-item">By {{ frontmatter.author }}</span>
          <ReadTime v-if="frontmatter.readTime" :minutes="frontmatter.readTime" />
        </div>
        
        <h1 class="article-title">{{ frontmatter.title }}</h1>
        <p v-if="frontmatter.description" class="article-subtitle">{{ frontmatter.description }}</p>
      </header>
    </div>

    <main class="content-container">
      <article class="vp-doc">
        <slot />
      </article>
    </main>

    <footer class="blog-footer header-container">
      <hr class="divider" />
      
      <div class="related-section">
        <h3 class="section-title">Related Insights</h3>
        <ResourceList :limit="3" />
      </div>

      <CallToAction 
        title="Stay Informed"
        description="Subscribe to our newsletter for weekly regulatory updates and expert analysis."
        buttonText="Subscribe Now"
        buttonLink="/contact"
      />
    </footer>
  </div>
</template>

<style scoped>
.blog-layout {
  padding-bottom: 4rem;
}

.header-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
}

.article-header {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}

.article-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.article-subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
}

.blog-footer {
  margin-top: 4rem;
}

.divider {
  border: 0;
  border-top: 1px solid var(--vp-c-divider);
  margin: 3rem 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .article-title {
    font-size: 1.75rem;
  }
  .article-subtitle {
    font-size: 1.125rem;
  }
}
</style>
