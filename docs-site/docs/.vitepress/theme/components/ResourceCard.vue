<script setup>
import { computed } from 'vue'

const props = defineProps({
  resource: Object
})

const typeStyles = computed(() => {
  const styles = {
    'Guide': { bg: '#eff6ff', color: '#2563eb' },
    'Tool': { bg: '#faf5ff', color: '#9333ea' },
    'Template': { bg: '#f0fdf4', color: '#16a34a' },
    'Blog': { bg: '#fff7ed', color: '#c2410c' }
  }
  return styles[props.resource.type] || { bg: '#f3f4f6', color: '#374151' }
})
</script>

<template>
  <a :href="props.resource.url" class="resource-card">
    <!-- Image Area -->
    <div class="card-image-area">
        <img v-if="props.resource.image" :src="props.resource.image" alt="" class="card-image greenduotone">
        <div v-else class="card-icon">
            {{ props.resource.icon || '📄' }}
        </div>
        
        <!-- Type Tag -->
        <span 
            class="card-tag"
            :style="{ background: typeStyles.bg, color: typeStyles.color }"
        >
            {{ props.resource.type || 'Resource' }}
        </span>
    </div>

    <!-- Content Area -->
    <div class="card-content">
      <h3 class="card-title">
        {{ props.resource.title }}
      </h3>
      <p class="card-desc">
        {{ props.resource.description }}
      </p>

      <div class="card-footer">
        <span class="card-date">{{ props.resource.date }}</span>
        <div class="arrow-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
            </svg>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.resource-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(20, 125, 52, 0.1);
  border-color: var(--vp-c-brand-soft);
}

.card-image-area {
  height: 180px;
  background-color: var(--vp-c-bg-soft);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.resource-card:hover .card-image {
  transform: scale(1.05);
}

.card-icon {
  font-size: 3rem;
  transition: transform 0.3s ease;
}

.resource-card:hover .card-icon {
  transform: scale(1.15) rotate(5deg);
}

.card-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.resource-card:hover .card-title {
  color: var(--vp-c-brand-1);
}

.card-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.card-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.arrow-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  transition: all 0.3s ease;
}

.arrow-icon svg {
  width: 16px;
  height: 16px;
}

.resource-card:hover .arrow-icon {
  background-color: var(--vp-c-brand-1);
  color: white;
  transform: rotate(-45deg);
}
</style>
