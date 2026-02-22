<script setup>
import { ref, computed } from 'vue'
import { data as resources } from '../../../resources.data.ts'
import ResourceCard from './ResourceCard.vue'

const categories = ['All', 'Guide', 'Tool', 'Template', 'Blog']
const activeCategory = ref('All')

const filteredResources = computed(() => {
  if (!Array.isArray(resources)) return []
  if (activeCategory.value === 'All') return resources
  return resources.filter(r => r.type === activeCategory.value)
})

// Get a featured resource (e.g., the latest Guide or a specific one)
const featuredResource = computed(() => {
  if (!Array.isArray(resources) || resources.length === 0) return null
  return resources.find(r => r.type === 'Guide') || resources[0]
})
</script>

<template>
  <div class="resources-layout">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="page-title">Our Resources</h1>
      <p class="page-subtitle">
        Expert guides, interactive tools, and templates to empower your financial decisions.
      </p>

      <!-- Filter Pills -->
      <div class="filter-bar">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="filter-pill"
          :class="{ active: activeCategory === cat }"
        >
          {{ cat === 'Blog' ? 'Insights' : cat + (cat === 'All' ? '' : 's') }}
        </button>
      </div>
    </div>

    <!-- Featured Resource Hero (Only on 'All' view) -->
    <div v-if="activeCategory === 'All' && featuredResource" class="featured-section container">
      <div class="featured-card">
        <div class="featured-content">
          <span class="tag tag-featured">
            {{ featuredResource.type }}
          </span>
          <h2 class="featured-title">{{ featuredResource.title }}</h2>
          <p class="featured-desc">{{ featuredResource.description }}</p>
          <a :href="featuredResource.url" class="btn-primary">
            Read Now
          </a>
        </div>
        <div class="featured-image-container">
           <div class="featured-main-image-wrapper">
              <img v-if="featuredResource.image" :src="featuredResource.image" :alt="featuredResource.title" class="featured-main-image greenduotone" />
              <div v-else class="placeholder-image">
                 {{ featuredResource.icon || '📄' }}
              </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Grid Section -->
    <div class="container pb-16">
      <div class="resources-grid">
        <!-- Loop through resources -->
        <template v-for="(res, index) in filteredResources" :key="res.url">
          <!-- Insert Newsletter Card after 5th item -->
          <div v-if="index === 5" class="newsletter-wrapper">
            <div class="newsletter-banner">
                <div class="newsletter-text">
                    <h3 class="newsletter-title">Stay Updated</h3>
                    <p class="newsletter-desc">Get the latest financial insights delivered to your inbox.</p>
                </div>
                <div class="newsletter-action">
                     <a href="#newsletter" class="btn-secondary">Subscribe</a>
                </div>
            </div>
          </div>
          
          <ResourceCard :resource="res" />
        </template>
      </div>
      
      <div v-if="filteredResources.length === 0" class="no-results">
        No resources found for this category.
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-section {
  padding: 4rem 1rem;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

/* Filter Bar */
.filter-bar {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.filter-pill {
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  background-color: transparent;
  border: 1px solid var(--vp-c-divider);
  font-weight: 600;
  transition: all 0.3s ease;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.95rem;
}

.filter-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.filter-pill.active {
  background-color: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

/* Featured Card */
.featured-section {
  margin-bottom: 4rem;
}

.featured-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 24px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid var(--vp-c-divider);
}

.featured-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('/images/headers/service-advisory.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.05;
  z-index: -1;
  filter: grayscale(100%);
  transition: opacity 0.4s ease;
}

.featured-card:hover::before {
  opacity: 0.1;
  filter: grayscale(0%);
}

@media (min-width: 768px) {
  .featured-card {
    flex-direction: row;
    text-align: left;
  }
}

.featured-content {
  flex: 1;
}

.featured-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.tag-featured {
  background-color: #e0f2fe;
  color: #0369a1;
}

.featured-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.featured-desc {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.featured-main-image-wrapper {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  background-color: var(--vp-c-bg);
  position: relative;
}

.featured-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-main-image {
  transform: scale(1.05);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

/* Grid */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .resources-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Newsletter */
.newsletter-wrapper {
  grid-column: 1 / -1;
}

.newsletter-banner {
  background-color: var(--vp-c-brand-soft); /* Using brand soft var */
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .newsletter-banner {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  }
}

.newsletter-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.newsletter-desc {
  color: var(--vp-c-text-2);
}

/* Buttons */
.btn-primary {
  display: inline-block;
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s;
  text-decoration: none;
}
.btn-primary:hover {
  background-color: var(--vp-c-brand-2);
}

.btn-secondary {
  display: inline-block;
  background-color: white;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background-color: var(--vp-c-brand-soft);
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-3);
  font-size: 1.1rem;
}
</style>
