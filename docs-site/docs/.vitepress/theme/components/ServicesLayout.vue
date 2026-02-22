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

        <!-- Category Sliders -->
        <template v-for="category in categories" :key="category">
            <div v-if="category !== 'Other'" :id="category.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')" class="category-section">
                <div class="category-header">
                    <h2 class="category-title">{{ category }}</h2>
                    <div class="category-line"></div>
                    <a :href="'/contact?subject=' + category" class="consult-btn">Consult</a>
                </div>
                
                <div class="slider-container">
                    <div class="services-slider">
                        <ServiceCard 
                            v-for="service in groupedServices[category]" 
                            :key="service.url" 
                            :service="service" 
                            class="slider-item"
                        />
                    </div>
                </div>
            </div>
        </template>
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

/* Category Sections & Sliders */
.category-section {
    margin-bottom: 4rem;
    scroll-margin-top: 5rem;
}

.category-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
}

.category-line {
    height: 1px;
    background: var(--vp-c-divider);
    flex-grow: 1;
}

.consult-btn {
    font-size: 0.9rem;
    color: var(--vp-c-brand-1);
    font-weight: 600;
    text-decoration: none;
    border: 1px solid var(--vp-c-brand-1);
    padding: 0.4rem 1rem;
    border-radius: 6px;
    transition: all 0.2s;
}

.consult-btn:hover {
    background: var(--vp-c-brand-1);
    color: white;
}

.slider-container {
    overflow-x: auto;
    padding-bottom: 1.5rem;
    margin: 0 -24px;
    padding: 0 24px 1.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
}

.services-slider {
    display: flex;
    gap: 1.5rem;
    width: max-content;
}

.slider-item {
    width: 300px;
    flex-shrink: 0;
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
