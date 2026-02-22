<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import StickyMobileCTA from './components/StickyMobileCTA.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
import GlobalCTA from './components/GlobalCTA.vue'
import NewsletterSignup from './components/NewsletterSignup.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import BackToTop from './components/BackToTop.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import PageHeader from './components/PageHeader.vue'
import CallToAction from './components/CallToAction.vue'
import ServiceLayout from './components/ServiceLayout.vue'
import IndustryLayout from './components/IndustryLayout.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const route = useRoute()

// Layout detection
const layout = computed(() => frontmatter.value.layout || frontmatter.value.type)
const isService = computed(() => {
  if (layout.value === 'service') return true
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return path.startsWith('/services') && path !== '/services'
})
const isIndustry = computed(() => {
  if (layout.value === 'industry') return true
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return path.startsWith('/industries') && path !== '/industries'
})
const isBlog = computed(() => {
  if (layout.value === 'blog') return true
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return path.startsWith('/blog') || path.startsWith('/resources/insights')
})
const isContact = computed(() => {
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return path === '/contact'
})
const hasCustomLayout = computed(() => isService.value || isIndustry.value || isBlog.value)

// Dynamic Header Image Logic
const headerImage = computed(() => {
  if (frontmatter.value.heroImage) return frontmatter.value.heroImage
  if (frontmatter.value.image) return frontmatter.value.image
  
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  
  if (isIndustry.value) {
    const slug = path.split('/').pop()
    // Map slugs to consolidated folder
    const industryMap = {
      'hydropower': 'hydro',
      'real-estate': 'realestate',
      'ngo-ingo': 'ngo',
      'tourism-hospitality': 'tourism',
      'technology': 'tech',
      'fintech-startups': 'tech', // Use tech for fintech
      'trading-retail': 'tourism', // Use tourism/commercial for trading
      'capital-markets': 'banking' // Use banking for capital markets
    }
    const filename = industryMap[slug] || slug
    return `/images/industries/ind-${filename}.jpg`
  }
  
  if (isService.value) {
    const segments = path.split('/')
    const slug = segments.length > 2 ? segments[segments.length - 2] : segments.pop()
    return `/images/headers/service-${slug}.jpg`
  }
  
  return null
})
</script>

<template>
  <Layout :class="{ 'contact-page': isContact }">
    <template #layout-top>
      <AnnouncementBar />
    </template>
    
    <template #doc-before>
      <div v-if="hasCustomLayout" class="custom-layout-header">
        <Breadcrumbs />
        
        <!-- Service Specific Header -->
        <PageHeader 
          v-if="isService"
          :title="frontmatter.title" 
          :subtitle="frontmatter.description"
          :icon="frontmatter.icon"
          :image="headerImage"
        />

        <!-- Blog/Article Header -->
        <header v-if="isBlog" class="article-header">
          <h1 class="article-title">{{ frontmatter.title }}</h1>
          <p v-if="frontmatter.description" class="article-subtitle">{{ frontmatter.description }}</p>
        </header>

        <!-- Industry Header -->
        <PageHeader 
          v-if="isIndustry"
          :title="frontmatter.title" 
          :subtitle="frontmatter.description"
          :icon="frontmatter.icon"
          :image="headerImage"
        />

        <!-- Quick Stats Bar (Industries) -->
        <div v-if="isIndustry && frontmatter.stats && frontmatter.stats.length > 0" class="industry-stats-bar">
          <div class="stats-container">
            <div v-for="(stat, index) in frontmatter.stats" :key="index" class="stat-item">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #doc-footer-before>
      <StickyMobileCTA />
    </template>

    <template #doc-after>
      <!-- Auto-CTA for Services/Industries if not hidden -->
      <div v-if="isService || isIndustry" class="doc-post-footer">
        
        <!-- Industry Specific: Related Services -->
        <div v-if="isIndustry" class="related-services-section">
           <hr class="divider" />
           <h3 class="related-title">Key Services for this Sector</h3>
           <ServiceList :limit="4" />
        </div>

        <CallToAction 
          title="Ready to Scale Your Business?"
          :description="isIndustry ? 'Our sector experts understand the unique regulatory challenges of your industry.' : 'Schedule a consultation with our experts to discuss your specific requirements.'"
          :buttonText="isIndustry ? 'Talk to a Sector Expert' : 'Book a Consultation'"
          buttonLink="/contact"
        />
      </div>
      
      <GlobalCTA v-if="!frontmatter.hideCTA" />
      <NewsletterSignup v-if="!frontmatter.hideNewsletter" />
    </template>

    <template #layout-bottom>
      <GlobalFooter />
      <BackToTop />
      <WhatsAppButton />
    </template>
  </Layout>
</template>

<style scoped>
.custom-layout-header {
  padding-bottom: 2rem;
}

.article-header {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
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

@media (max-width: 768px) {
  .article-title {
    font-size: 1.75rem;
  }
}

/* Industry Stats Bar Styles */
.industry-stats-bar {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  margin: 1.5rem 0;
  padding: 1.5rem 0;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 120px;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-top: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.doc-post-footer {
  margin-top: 4rem;
}

.related-services-section {
  margin-bottom: 4rem;
}

.related-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

.divider {
  border: 0;
  border-top: 1px solid var(--vp-c-divider);
  margin: 3rem 0;
}
</style>
