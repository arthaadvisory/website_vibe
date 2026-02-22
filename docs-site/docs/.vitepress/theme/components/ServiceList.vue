<script setup>
import { computed } from 'vue'
import { data as services } from '../../../services.data.ts'

const props = defineProps({
  category: String // Optional: 'Audit', 'Tax', etc. to filter
})

const filteredServices = computed(() => {
  if (!props.category) return services
  return services.filter(s => s.category === props.category)
})
</script>

<template>
  <div class="services-grid">
    <a 
      v-for="service in filteredServices" 
      :key="service.url"
      :href="service.url"
      class="s-card group"
    >
      <div class="service-header">
        <span class="service-icon">{{ service.icon || '💼' }}</span>
        <h3 class="service-title">{{ service.title }}</h3>
      </div>
      <p class="service-desc">{{ service.description }}</p>
      
      <div v-if="service.details && service.details.length" class="service-details">
        <ul>
          <li v-for="(detail, i) in service.details.slice(0, 3)" :key="i">
            {{ detail }}
          </li>
        </ul>
      </div>
      
      <div class="service-link">
        Learn more <span>→</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.service-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.service-icon {
  font-size: 1.8rem;
  background-color: var(--vp-c-brand-soft);
  padding: 0.5rem;
  border-radius: 8px;
  margin-right: 1rem;
  transition: transform 0.3s ease;
}

.group:hover .service-icon {
  transform: scale(1.1);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
  transition: color 0.3s ease;
}

.group:hover .service-title {
  color: var(--vp-c-brand-1);
}

.service-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
}

.service-details {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.service-details ul {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.service-details li {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.3rem;
  position: relative;
  padding-left: 1rem;
}

.service-details li::before {
  content: "•";
  color: var(--vp-c-brand-1);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.service-link {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
}

.service-link span {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.group:hover .service-link span {
  transform: translateX(4px);
}
</style>
