<script setup>
import { computed } from 'vue'
import { data as services } from '../../../services.data.ts'
import ServiceCard from './ServiceCard.vue'

// Group services by Category
const groupedServices = computed(() => {
  const groups = {}
  
  services.forEach(service => {
    const cat = service.category || 'Other'
    if (!groups[cat]) {
      groups[cat] = []
    }
    groups[cat].push(service)
  })
  
  return groups
})

const categories = Object.keys(groupedServices.value).sort()

// Core Categories Metadata
const coreCategoryMeta = {
  'Audit & Assurance': {
    icon: '🔍',
    description: 'Statutory audits, internal controls, and forensic investigations ensuring financial integrity.',
    url: '/services/audit/',
    image: '/images/headers/service-audit.jpg'
  },
  'Taxation & Regulatory': {
    icon: '🏛️',
    description: 'Strategic tax planning, VAT compliance, and litigation support for businesses.',
    url: '/services/tax/',
    image: '/images/headers/service-tax.jpg'
  },
  'Advisory & Strategic Growth': {
    icon: '📈',
    description: 'Mergers & Acquisitions, Virtual CFO services, and risk management frameworks.',
    url: '/services/advisory/',
    image: '/images/headers/service-advisory.jpg'
  },
  'Financial Outsourcing': {
    icon: '⚙️',
    description: 'Managed accounting, payroll processing, and back-office optimization.',
    url: '/services/outsourcing/',
    image: '/images/headers/service-outsourcing.jpg'
  },
  'Corporate Support': {
    icon: '🤝',
    description: 'Company registration, secretarial services, and regulatory compliance.',
    url: '/services/support/',
    image: '/images/headers/service-legal.jpg'
  },
  'Business Advisory': {
    icon: '🚀',
    description: 'Operational excellence, market entry strategies, and startup consulting.',
    url: '/services/business-advisory/',
    image: '/images/headers/service-consulting.jpg'
  }
}

const coreCategories = Object.keys(coreCategoryMeta)
</script>

<template>
  <div class="services-layout">
    <!-- HERO SECTION (Consistent with About/Careers) -->
    <section class="services-hero">
      <div class="container hero-content-centered">
        <span class="hero-label">Our Expertise</span>
        <h1 class="hero-title">Comprehensive Financial &amp; Legal Solutions</h1>
        <p class="hero-subtitle">
          Strategic guidance tailored to your business lifecycle. From compliance to complex advisory, we have you covered.
        </p>
        <div class="hero-actions-centered">
          <a href="#core-services" class="btn-primary">Explore Services</a>
          <a href="/contact" class="btn-secondary">Book Consultation</a>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES GRID (Immediately after Hero) -->
    <div class="container content-container" id="core-services" style="margin-top: 2rem; position: relative; z-index: 10;">
        
        <!-- Core Grid (Homepage Style) -->
        <div class="services-grid-home">
            <a v-for="cat in coreCategories" 
                 :key="cat" 
                 :href="coreCategoryMeta[cat]?.url || '#'"
                 class="service-home-card group"
                 :style="{ '--service-bg': 'url(' + (coreCategoryMeta[cat]?.image || '/images/home/hero-main.jpg') + ')' }">
                
                <div class="service-icon-wrapper">
                    <span class="service-icon" style="font-size: 2.5rem;">{{ coreCategoryMeta[cat]?.icon || '💼' }}</span>
                </div>
                
                <h3 class="service-title">{{ cat }}</h3>
                <p class="service-desc">{{ coreCategoryMeta[cat]?.description || 'Professional services.' }}</p>
                
                <span class="learn-more">
                    Explore {{ cat.split(' ')[0] }} <span class="arrow">→</span>
                </span>
            </a>
        </div>

        <!-- Browse by Category - Clean Directory -->
        <div class="browse-section">
          <div class="browse-header">
            <span class="browse-label">Browse by Category</span>
            <h2 class="browse-title">All Services Directory</h2>
          </div>

          <div class="browse-grid">
            <div v-for="category in categories" :key="category" v-if="category !== 'Other'" class="browse-category">
              <a :href="coreCategoryMeta[category]?.url || '#'" class="browse-cat-header">
                <span class="browse-cat-icon">{{ coreCategoryMeta[category]?.icon || '💼' }}</span>
                <h3>{{ category }}</h3>
                <span class="browse-arrow">→</span>
              </a>
              <ul class="browse-list">
                <li v-for="service in groupedServices[category]" :key="service.url">
                  <a :href="service.url" class="browse-link">
                    <span v-if="service.icon" class="browse-item-icon">{{ service.icon }}</span>
                    {{ service.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* Content Container */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 24px;
}

/* ======== HERO CSS (Consistent with About/Careers) ======== */
.services-hero {
    position: relative;
    padding: 8rem 0;
    text-align: center;
    background-color: var(--vp-c-bg);
    overflow: hidden;
    /* Pull up behind nav */
    margin-top: calc(-1 * (var(--vp-nav-height) + var(--vp-layout-top-height, 0px)));
}

.services-hero::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('/images/home/hero-main.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    filter: grayscale(100%);
    z-index: 0;
}

.services-hero::after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at top right, rgba(20, 125, 52, 0.1), transparent 50%),
                radial-gradient(circle at bottom left, rgba(20, 125, 52, 0.05), transparent 50%);
    z-index: 0;
}

.hero-content-centered {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
}

.hero-label {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    background: linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-text-1));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.25rem);
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin-bottom: 3rem;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
}

.hero-actions-centered {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary {
    background-color: var(--vp-c-brand-1);
    color: white;
    padding: 1rem 2.25rem;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 14px rgba(20, 125, 52, 0.3);
}

.btn-primary:hover {
    background-color: var(--vp-c-brand-2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(20, 125, 52, 0.4);
}

.btn-secondary {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    padding: 1rem 2.25rem;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid var(--vp-c-divider);
    transition: all 0.3s;
}

.btn-secondary:hover {
    border-color: var(--vp-c-brand-1);
    background-color: var(--vp-c-bg-mute);
}

/* ======== SERVICES GRID (Homepage Style) ======== */
.services-section { /* This class is not used in the template, but kept for consistency if it's a general section style */
    padding: 6rem 0;
    background-color: var(--vp-c-bg);
    position: relative;
    z-index: 10;
}

.services-grid-home {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
}

.service-home-card {
    background: var(--vp-c-bg-soft);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid var(--vp-c-divider);
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    height: 100%;
    color: inherit;
}

.service-home-card::before {
    content: "";
    position: absolute;
    inset: 0;
    /* Green Duotone Overlay */
    background-image:
        linear-gradient(135deg, rgba(20, 125, 52, 0.9), rgba(11, 69, 29, 0.95)),
        var(--service-bg);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    opacity: 0.05;
    filter: grayscale(100%);
    z-index: -1;
    transition: all 0.4s ease;
}

.service-home-card:hover::before {
    opacity: 0.3;
    filter: grayscale(0%);
    transform: scale(1.05);
}

.service-home-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
    border-color: var(--vp-c-brand-soft);
}

.service-icon-wrapper {
    width: 64px;
    height: 64px;
    background: var(--vp-c-bg);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    transition: background 0.3s;
}

.service-home-card:hover .service-icon-wrapper {
    background: var(--vp-c-brand-soft);
}

.service-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    margin-top: 0;
}

.service-desc {
    color: var(--vp-c-text-2);
    margin-bottom: 1.5rem;
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.6;
}

.learn-more {
    font-weight: 600;
    color: var(--vp-c-brand-1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
}

/* Browse by Category Directory */
.browse-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--vp-c-divider);
}

.browse-header {
  text-align: center;
  margin-bottom: 3rem;
}

.browse-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.browse-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.5rem 0 0;
  color: var(--vp-c-text-1);
}

.browse-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.browse-category {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.browse-category:hover {
  border-color: var(--vp-c-brand-soft);
}

.browse-cat-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: background 0.2s;
}

.browse-cat-header:hover {
  background: var(--vp-c-brand-soft);
}

.browse-cat-icon {
  font-size: 1.4rem;
}

.browse-cat-header h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  color: var(--vp-c-text-1);
}

.browse-arrow {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 0.2s;
}

.browse-cat-header:hover .browse-arrow {
  transform: translateX(4px);
}

.browse-list {
  list-style: none;
  padding: 0.75rem 0;
  margin: 0;
}

.browse-list li {
  margin: 0;
}

.browse-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  transition: all 0.15s;
}

.browse-link:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding-left: 1.75rem;
}

.browse-item-icon {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .browse-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 640px) {
    .services-grid-home {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .services-grid-home {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
