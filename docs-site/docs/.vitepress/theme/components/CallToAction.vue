<script setup>
defineProps({
  title: {
    type: String,
    default: 'Ready to elevate your business?'
  },
  text: {
    type: String,
    default: 'Book a free discovery call with our experts today.'
  },
  link: {
    type: String,
    default: '/contact'
  },
  buttonText: {
    type: String,
    default: 'Book Consultation'
  },
  type: {
    type: String,
    default: 'primary' // primary, secondary, danger
  }
})
</script>

<template>
  <div class="cta-box" :class="type">
    <div class="cta-accent"></div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
    <div class="action">
      <a :href="link" class="cta-button">
        <span>{{ buttonText }}</span>
        <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 12px;
  margin: 2.5rem 0;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.cta-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(20, 125, 52, 0.08);
}

.cta-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 4px 0 0 4px;
}

.cta-box.primary .cta-accent {
  background: linear-gradient(to bottom, var(--vp-c-brand-1), var(--vp-c-brand-2));
}

.cta-box.secondary .cta-accent {
  background: var(--vp-c-divider);
}

.cta-box.danger .cta-accent {
  background: linear-gradient(to bottom, #dc2626, #f97316);
}

@media (max-width: 640px) {
  .cta-box {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 2rem;
  }
  .cta-accent {
    left: 0;
    top: 0;
    bottom: auto;
    width: 100%;
    height: 4px;
    border-radius: 4px 4px 0 0;
  }
}

.cta-box.primary {
  background: var(--vp-c-brand-soft);
  border-color: rgba(20, 125, 52, 0.1);
}

.cta-box.secondary {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.cta-box.danger {
  background: rgba(220, 38, 38, 0.05);
  border-color: rgba(220, 38, 38, 0.15);
}

.content h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.content p {
  margin: 0.5rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 28px;
  background: var(--vp-c-brand-1);
  color: white !important;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

/* Shimmer effect */
.cta-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: 0.5s;
}

.cta-button:hover::after {
  left: 100%;
}

.cta-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(20, 125, 52, 0.3);
}

.cta-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.3s;
}

.cta-button:hover .cta-arrow {
  transform: translateX(3px);
}

.danger .cta-button {
  background: #dc2626;
}

.danger .cta-button:hover {
  background: #b91c1c;
  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.3);
}
</style>
