<script setup>
import { computed } from 'vue'
import { data as resources } from '../../../resources.data.ts'

const props = defineProps({
  type: String // Optional: 'Guide', 'Tool', 'Template', 'Blog'
})

const filteredResources = computed(() => {
  if (!props.type) return resources
  return resources.filter(r => r.type === props.type)
})

const getTypeColor = (type) => {
  const map = {
    'Guide': 'bg-blue-100 text-blue-800',
    'Tool': 'bg-purple-100 text-purple-800',
    'Template': 'bg-green-100 text-green-800',
    'Blog': 'bg-orange-100 text-orange-800'
  }
  return map[type] || 'bg-gray-100 text-gray-800'
}
</script>

<template>
  <div class="services-grid">
    <a 
      v-for="res in filteredResources" 
      :key="res.url"
      :href="res.url"
      class="s-card resource-card"
    >
      <div class="res-meta">
        <span 
          class="res-type"
          :class="getTypeColor(res.type || 'Guide')"
        >
          {{ res.type || 'Resource' }}
        </span>
        <span class="res-date">{{ res.date }}</span>
      </div>
      
      <h3 class="res-title">{{ res.title }}</h3>
      <p class="res-desc">{{ res.description }}</p>
      
      <div class="res-link">
        Read Resource <span>→</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.resource-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.res-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.res-type {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

.res-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.res-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.8rem 0;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.resource-card:hover .res-title {
  color: var(--vp-c-brand-1);
}

.res-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.res-link {
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
}

.res-link span {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.resource-card:hover .res-link span {
  transform: translateX(4px);
}

/* Type Colors */
.bg-blue-100 { background-color: #e0f2fe; color: #0369a1; }
.bg-purple-100 { background-color: #f3e8ff; color: #7e22ce; }
.bg-green-100 { background-color: #dcfce7; color: #15803d; }
.bg-orange-100 { background-color: #ffedd5; color: #c2410c; }
.bg-gray-100 { background-color: #f3f4f6; color: #374151; }
</style>
