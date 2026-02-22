<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter, theme } = useData()
const route = useRoute()

const props = defineProps({
  title: String,
  subtitle: String,
  parent: String, // format: "Title|/link"
  image: String
})

const pageTitle = computed(() => props.title || frontmatter.value?.title)
const pageSubtitle = computed(() => props.subtitle || frontmatter.value?.description)
const bgImage = computed(() => props.image || frontmatter.value?.heroImage || frontmatter.value?.image || '/images/hero-default.jpg')

const breadcrumbs = computed(() => {
  const crumbs = [{ text: 'Home', link: '/' }]
  
  const parentRaw = props.parent || frontmatter.value.parent
  if (parentRaw) {
    const [text, link] = parentRaw.split('|')
    crumbs.push({ text, link })
  }
  
  crumbs.push({ text: pageTitle.value, link: route.path })
  return crumbs
})
</script>

<template>
  <div class="page-header">
    <!-- Background Image with Overlay -->
    <div class="header-bg">
      <img :src="bgImage" alt="Header Background" class="header-bg-image greenduotone" />
      <div class="header-gradient-overlay"></div>
    </div>

    <!-- Content -->
    <div class="header-content">
      <!-- Breadcrumbs -->
      <nav class="header-breadcrumbs">
        <template v-for="(crumb, index) in breadcrumbs" :key="index">
          <span v-if="index > 0" class="crumb-sep">/</span>
          <a v-if="index < breadcrumbs.length - 1" :href="crumb.link" class="crumb-link">
            {{ crumb.text }}
          </a>
          <span v-else class="crumb-current">{{ crumb.text }}</span>
        </template>
      </nav>

      <h1 class="header-title">{{ pageTitle }}</h1>
      <p v-if="pageSubtitle" class="header-subtitle">{{ pageSubtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  margin-top: calc(var(--vp-nav-height) * -1);
  padding-top: var(--vp-nav-height);
  border-radius: 0 0 16px 16px;
}

/* Background layer */
.header-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-color: #0b451d;
}

.header-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.header-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 50%, rgba(0,0,0,0.2));
}

/* Content layer */
.header-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Breadcrumbs */
.header-breadcrumbs {
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.crumb-sep {
  color: rgba(255, 255, 255, 0.4);
}

.crumb-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.crumb-link:hover {
  color: white;
}

.crumb-current {
  color: white;
  font-weight: 600;
}

/* Title */
.header-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: white;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.header-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .page-header {
    height: 240px;
  }
}
</style>
