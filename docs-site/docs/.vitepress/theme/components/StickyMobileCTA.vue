<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const show = computed(() => {
  return frontmatter.value.layout !== 'home' 
})
</script>

<template>
  <div v-if="show" class="mobile-sticky-cta">
    <a href="tel:+9779800000000" class="cta-item call">
      <svg class="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>Call</span>
    </a>
    <a href="/contact" class="cta-item book">
      <span>Book Consultation</span>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</template>

<style scoped>
.mobile-sticky-cta {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--vp-c-divider);
  z-index: 1000;
  padding: 12px 16px;
  gap: 10px;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
}

.dark .mobile-sticky-cta {
  background: rgba(27, 27, 31, 0.95);
}

.cta-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 12px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cta-item:active {
  transform: scale(0.97);
}

.cta-item.call {
  flex: 0 0 90px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.cta-item.book {
  flex: 1;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  box-shadow: 0 2px 8px rgba(20, 125, 52, 0.3);
}

.phone-icon {
  width: 18px;
  height: 18px;
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 960px) {
  .mobile-sticky-cta {
    display: none !important;
  }
}
</style>
