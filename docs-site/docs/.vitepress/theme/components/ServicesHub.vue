<script setup>
defineProps({
  services: Array // Array of { title, description, href, icon, desc, details }
})
</script>

<template>
  <div class="services-hub-grid">
    <a 
      v-for="(service, index) in services" 
      :key="index"
      :href="service.link" 
      class="s-card service-hub-card"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="service-icon">{{ service.icon }}</div>
      <h3 class="service-card-title">{{ service.title }}</h3>
      <p class="service-card-desc">{{ service.desc }}</p>
      <ul v-if="service.details" class="service-details-list">
        <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
      </ul>
      <div class="service-learn-more">
        <span>Learn More</span>
        <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>
  </div>
</template>

<style scoped>
.services-hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.service-hub-card {
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 2rem !important;
  animation: fadeInUp 0.6s ease-out both;
}

.service-hub-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(20, 125, 52, 0.12);
}

.service-icon {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.service-hub-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card-title {
  margin: 0 0 0.5rem 0 !important;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 1.2rem;
  transition: color 0.2s;
}

.service-card-desc {
  margin: 0 !important;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.service-details-list {
  margin: 1rem 0 !important;
  padding-left: 0 !important;
  list-style: none !important;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.service-details-list li {
  margin-bottom: 0.35rem;
  position: relative;
  padding-left: 1.2rem;
}

.service-details-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand-1);
  font-weight: bold;
  font-size: 0.8rem;
}

.service-learn-more {
  margin-top: auto;
  padding-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s;
}

.service-hub-card:hover .arrow {
  transform: translateX(4px);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .services-hub-grid {
    grid-template-columns: 1fr;
  }
}
</style>
