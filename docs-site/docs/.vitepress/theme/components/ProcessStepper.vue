<template>
  <div class="process-stepper">
    <div v-for="(step, index) in steps" :key="index" class="step" :style="{ animationDelay: `${index * 0.15}s` }">
      <div class="step-indicator">
        <div class="step-number">{{ index + 1 }}</div>
        <div v-if="index < steps.length - 1" class="step-line"></div>
      </div>
      <div class="step-content">
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-description">{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.process-stepper {
  margin: 2rem 0;
}

.step {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0;
  padding: 1rem;
  border-radius: 12px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease-out both;
}

.step:hover {
  background-color: var(--vp-c-brand-soft);
  box-shadow: 0 4px 16px rgba(20, 125, 52, 0.06);
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.step-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(20, 125, 52, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover .step-number {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(20, 125, 52, 0.35);
}

.step-line {
  width: 2px;
  flex-grow: 1;
  min-height: 40px;
  margin-top: 0.5rem;
  background: linear-gradient(to bottom, var(--vp-c-brand-1), var(--vp-c-divider));
  border-radius: 2px;
}

.step-content {
  flex: 1;
  padding-bottom: 1.5rem;
}

.step-title {
  margin: 0 0 0.5rem 0 !important;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.step:hover .step-title {
  color: var(--vp-c-brand-1);
}

.step-description {
  margin: 0 !important;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .step {
    gap: 1rem;
    padding: 0.75rem;
  }
  .step-number {
    width: 36px;
    height: 36px;
    font-size: 0.95rem;
  }
}
</style>
