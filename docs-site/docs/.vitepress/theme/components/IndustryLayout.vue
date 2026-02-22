<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

// For now, using a placeholder for stats
const stats = computed(() => {
  return frontmatter.value.stats || []
})
</script>

<template>
  <div class="industry-layout">
    <div class="header-container">
      <Breadcrumbs />
      
      <PageHeader 
        :title="frontmatter.title" 
        :description="frontmatter.description"
        :icon="frontmatter.icon"
      />
    </div>

    <!-- Quick Stats Bar (Optional) -->
    <div v-if="stats.length > 0" class="stats-bar">
      <div class="stats-container">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <main class="content-container">
      <div class="vp-doc">
        <Content />
      </div>
    </main>

    <footer class="industry-footer header-container">
      <hr class="divider" />
      
      <div class="related-section">
        <h3 class="section-title">Key Services for this Sector</h3>
        <ServiceList :limit="4" />
      </div>

      <CallToAction 
        title="Need Industry-Specific Advice?"
        description="Our sector experts understand the unique regulatory challenges of your industry."
        buttonText="Talk to a Sector Expert"
        buttonLink="/contact"
      />
    </footer>
  </div>
</template>

<style scoped>
.industry-layout {
  padding-bottom: 4rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
}

.stats-bar {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  margin: 3rem 0;
  padding: 2rem 0;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-brand);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.industry-footer {
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

.related-section {
  margin-bottom: 4rem;
}

@media (max-width: 768px) {
  .header-container, .content-container {
    padding: 1rem 1rem;
  }
  .stat-value {
    font-size: 1.5rem;
  }
}
</style>
