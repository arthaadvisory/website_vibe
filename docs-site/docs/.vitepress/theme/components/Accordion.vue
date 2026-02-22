<script setup>
defineProps({
  title: String,
  startOpen: Boolean
})
</script>

<template>
  <details class="accordion-item" :open="startOpen">
    <summary class="accordion-header">
      <span class="accordion-title">{{ title }}</span>
      <span class="icon-wrapper">
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </summary>
    <div class="accordion-content">
      <div class="content-inner">
        <slot></slot>
      </div>
    </div>
  </details>
</template>

<style scoped>
.accordion-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  margin-bottom: 0.75rem;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.accordion-item[open] {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 20px rgba(20, 125, 52, 0.08);
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.5rem;
  cursor: pointer;
  list-style: none;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 1.05rem;
  transition: background-color 0.2s;
  user-select: none;
}

.accordion-header::-webkit-details-marker {
  display: none;
}

.accordion-header:hover {
  background-color: var(--vp-c-bg-mute);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  flex-shrink: 0;
  margin-left: 1rem;
  background: var(--vp-c-brand-soft);
  transition: all 0.3s ease;
}

.chevron {
  color: var(--vp-c-brand-1);
  transition: transform 0.3s ease;
}

details[open] .icon-wrapper {
  background: var(--vp-c-brand-1);
}

details[open] .chevron {
  transform: rotate(180deg);
  color: white;
}

.accordion-content {
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  line-height: 1.7;
  animation: slideDown 0.3s ease-out;
}

.content-inner {
  padding: 1.5rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
