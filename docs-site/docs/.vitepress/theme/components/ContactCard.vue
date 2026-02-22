<script setup>
defineProps({
  icon: String,
  title: String,
  details: String,
  links: Array // Array of { text: string, href: string }
})
</script>

<template>
  <div class="contact-card-item">
    <div class="card-header">
      <div class="icon-circle">
        <span class="card-icon">{{ icon }}</span>
      </div>
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <div class="card-body">
      <template v-if="details">
        <div v-html="details" class="card-details"></div>
      </template>
      <div v-if="links && links.length" class="card-links">
        <a v-for="(link, index) in links" :key="index" :href="link.href" class="card-link">
          {{ link.text }}
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-card-item {
  padding: 2rem;
  margin-bottom: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.contact-card-item:hover {
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 8px 24px rgba(20, 125, 52, 0.06);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--vp-c-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon {
  font-size: 1.4rem;
}

.card-title {
  color: var(--vp-c-text-1);
  font-weight: 700;
  font-size: 1.15rem;
  margin: 0 !important;
}

.card-body {
  padding-left: 3.5rem;
}

.card-details {
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.card-links {
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.2s, color 0.2s;
}

.card-link:hover {
  color: var(--vp-c-brand-2);
  gap: 0.7rem;
}

.link-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}

.card-link:hover .link-arrow {
  transform: translateX(2px);
}

@media (max-width: 640px) {
  .card-body {
    padding-left: 0;
  }
  .contact-card-item {
    padding: 1.5rem;
  }
}
</style>
