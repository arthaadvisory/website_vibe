<script setup>
import { ref, computed } from 'vue'
import { data as services } from '../../../services.data.ts'
import { useData } from 'vitepress'

const { page } = useData()

// Determine which category this index page belongs to
const categoryMap = {
  '/services/audit/': 'Audit & Assurance',
  '/services/tax/': 'Taxation & Regulatory',
  '/services/advisory/': 'Advisory & Strategic Growth',
  '/services/outsourcing/': 'Financial Outsourcing',
  '/services/support/': 'Corporate Support',
  '/services/business-advisory/': 'Business Advisory'
}

const currentCategory = computed(() => {
  const path = page.value.relativePath.replace(/index\.md$/, '').replace(/\\/g, '/')
  const matchedKey = Object.keys(categoryMap).find(key => ('/' + path).includes(key))
  return matchedKey ? categoryMap[matchedKey] : 'Services'
})

const categoryServices = computed(() => {
  if (!Array.isArray(services)) return []
  return services.filter(s => s.category === currentCategory.value)
})
</script>

<template>
  <div class="service-category-layout">
    <div class="category-header">
      <h1>{{ currentCategory }}</h1>
      <p class="category-desc">Explore our {{ currentCategory.toLowerCase() }} services tailored for your business needs.</p>
    </div>

    <div class="service-cards-grid">
      <a v-for="service in categoryServices" :key="service.url" :href="service.url" class="service-card">
        <div class="service-card-icon" v-if="service.icon">{{ service.icon }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <span class="card-link">Learn More →</span>
      </a>
    </div>

    <div v-if="categoryServices.length === 0" class="empty-state">
      <p>No services found in this category. <a href="/services/">View all services →</a></p>
    </div>
  </div>
</template>

<style scoped>
.service-category-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 24px;
}

.category-header {
  text-align: center;
  margin-bottom: 4rem;
}

.category-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.category-desc {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .service-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .service-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-soft);
}

.service-card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.service-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex: 1;
}

.card-link {
  margin-top: 1rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-3);
}
</style>
