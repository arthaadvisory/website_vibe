<script setup>
const props = defineProps({
  service: Object
})

import { computed } from 'vue'

const serviceImage = computed(() => {
    if (props.service.image) return props.service.image
    
    const cat = (props.service.category || '').toLowerCase()
    if (cat.includes('audit')) return '/images/headers/service-audit.jpg'
    if (cat.includes('tax')) return '/images/headers/service-tax.jpg'
    if (cat.includes('advisory')) return '/images/headers/service-advisory.jpg'
    if (cat.includes('outsourcing')) return '/images/headers/service-outsourcing.jpg'
    
    return '/images/home/hero-main.jpg'
})
</script>

<template>
  <a :href="props.service.url" class="service-card group">
    <div class="card-image-wrapper">
        <img :src="serviceImage" alt="" class="card-image greenduotone">
    </div>
    
    <div class="card-content">
        <h3 class="card-title group-hover:text-brand">
            {{ props.service.title }}
        </h3>
        <p class="card-description">
            {{ props.service.description }}
        </p>
        
        <ul v-if="props.service.details && props.service.details.length > 0" class="card-details">
            <li v-for="(detail, index) in props.service.details.slice(0, 3)" :key="index">
                • {{ detail }}
            </li>
        </ul>
        
        <div class="card-action">
            Learn More <span class="arrow">→</span>
        </div>
    </div>
  </a>
</template>

<style scoped>
.service-card {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    text-decoration: none;
    color: inherit;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
    border-color: var(--vp-c-brand-soft);
}

.card-image-wrapper {
    height: 160px;
    background-color: var(--vp-c-bg-soft);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-card:hover .card-image {
    transform: scale(1.05);
}

.card-icon-placeholder {
    font-size: 4rem;
    color: var(--vp-c-text-3);
    transition: transform 0.3s ease;
}

.service-card:hover .card-icon-placeholder {
    transform: scale(1.1);
}

.card-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    transition: color 0.3s;
}

.group-hover\:text-brand:hover {
    color: var(--vp-c-brand-1);
}

.service-card:hover .card-title {
    color: var(--vp-c-brand-1);
}

.card-description {
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
    margin-bottom: 1rem;
    line-height: 1.5;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-details {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    font-size: 0.85rem;
    color: var(--vp-c-text-3);
}

.card-details li {
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-action {
    margin-top: auto;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--vp-c-brand-1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.arrow {
    transition: transform 0.3s;
}

.service-card:hover .arrow {
    transform: translateX(4px);
}
</style>
