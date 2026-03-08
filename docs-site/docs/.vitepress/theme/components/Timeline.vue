<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="custom-timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <span class="year">{{ item.year }}</span>
      <span class="desc">{{ item.desc }}</span>
    </div>
  </div>
</template>

<style scoped>
.custom-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
  border-left: 3px solid var(--vp-c-divider);
}

.timeline-item {
  position: relative;
  padding-left: 1rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.65rem;
  top: 0.3rem;
  width: 1.2rem;
  height: 1.2rem;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  border: 4px solid var(--vp-c-bg);
  transition: all 0.3s ease;
  box-shadow: 0 0 0 1px var(--vp-c-divider);
}

.timeline-item:hover::before {
  transform: scale(1.3);
  box-shadow: 0 0 0 6px rgba(20, 125, 52, 0.2);
  background: var(--vp-c-brand-2);
}

.year {
  display: block;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.25rem;
  line-height: 1;
}

.desc {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}
</style>
