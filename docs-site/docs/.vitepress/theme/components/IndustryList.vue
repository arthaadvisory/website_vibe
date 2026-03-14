<script setup>
import { data as industries } from '../../../industries.data.ts'

const slugToImage = {
  'hydropower': 'hydro',
  'real-estate': 'realestate',
  'ngo-ingo': 'ngo',
  'tourism-hospitality': 'tourism',
  'technology': 'tech',
  'fintech-startups': 'tech',
  'trading-retail': 'tourism',
  'capital-markets': 'banking'
}

function getIndustryBg(url) {
  const slug = url.split('/').filter(Boolean).pop()
  const filename = slugToImage[slug] || slug
  return `url(/images/industries/ind-${filename}.jpg)`
}
</script>

<template>
  <div class="services-grid">
    <a 
      v-for="ind in industries" 
      :key="ind.url"
      :href="ind.url"
      class="s-card industry-card"
      :style="{ '--ind-bg': getIndustryBg(ind.url) }"
    >
      <div class="card-content-overlay">
        <span class="ind-icon">{{ ind.icon || '🏭' }}</span>
        <h3 class="ind-title">{{ ind.title }}</h3>
        <p class="ind-desc">{{ ind.description }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.industry-card {
  text-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background-color: var(--vp-c-bg-soft);
  min-height: 240px;
  justify-content: center;
}

.industry-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--ind-bg);
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
  transition: all 0.4s ease;
  filter: grayscale(100%);
}

.industry-card:hover::before {
  opacity: 0.25;
  filter: grayscale(0%);
  transform: scale(1.05);
}

.card-content-overlay {
    position: relative;
    z-index: 2;
}

.ind-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.industry-card:hover .ind-icon {
  transform: scale(1.15) rotate(5deg);
}

.ind-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  transition: color 0.3s ease;
}

.industry-card:hover .ind-title {
  color: var(--vp-c-brand-1);
}

.ind-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
