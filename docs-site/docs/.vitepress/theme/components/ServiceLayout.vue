<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

// For now, using a placeholder for related services
// In a future step, this will be driven by data/frontmatter
const relatedServices = computed(() => {
  return [] // TODO: Logic to fetch siblings/related
})
</script>

<template>
  <div class="service-layout">
    <!-- Breadcrumbs Section -->
    <div class="header-container">
      <Breadcrumbs />
      
      <!-- Auto Header -->
      <PageHeader 
        :title="frontmatter.title" 
        :description="frontmatter.description"
        :icon="frontmatter.icon"
      />
    </div>

    <!-- Main Content -->
    <main class="content-container">
      <div v-if="frontmatter.steps" class="process-section">
        <ProcessStepper :steps="frontmatter.steps" />
      </div>

      <div class="vp-doc">
        <Content />
      </div>
    </main>

    <!-- Footer Components -->
    <footer class="service-footer header-container">
      <hr class="divider" />
      
      <div v-if="relatedServices.length > 0" class="related-section">
        <h3 class="section-title">Related Services</h3>
        <ServiceList :limit="3" />
      </div>

      <CallToAction 
        title="Ready to Scale Your Business?"
        description="Schedule a consultation with our experts to discuss your specific requirements."
        buttonText="Book a Consultation"
        buttonLink="/contact"
      />
    </footer>
  </div>
</template>

<style scoped>
.service-layout {
  padding-bottom: 4rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.service-footer {
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
}
</style>
