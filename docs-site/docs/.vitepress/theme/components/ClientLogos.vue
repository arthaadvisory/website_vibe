<script setup>
const clients = [
  { name: 'Nabil Bank', logo: '/images/clients/nabil.png' },
  { name: 'Himalayan Power', logo: '/images/clients/himalayan.png' },
  { name: 'Chaudhary Group', logo: '/images/clients/cg.png' },
  { name: 'Nepal Life Insurance', logo: '/images/clients/nli.png' },
  { name: 'WorldLink', logo: '/images/clients/worldlink.png' },
  { name: 'Bhat-Bhateni', logo: '/images/clients/bbsm.png' }
]
</script>

<template>
  <div class="client-logos-section">
    <p class="trusted-by">Trusted by Industry Leaders</p>
    <div class="logo-track">
      <div class="logo-grid">
        <div v-for="client in clients" :key="client.name" class="logo-item">
          <span class="client-name">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-logos-section {
  text-align: center;
  padding: 3rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 2rem;
  overflow: hidden;
}

.trusted-by {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--vp-c-text-3);
  margin-bottom: 2rem;
}

.logo-track {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.logo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 3rem;
  align-items: center;
}

.logo-item {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.logo-item:hover {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.client-name {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  opacity: 0.6;
  transition: all 0.3s;
  white-space: nowrap;
}

.logo-item:hover .client-name {
  opacity: 1;
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .logo-grid {
    gap: 1rem 1.5rem;
  }
  .client-name {
    font-size: 0.95rem;
  }
  .logo-item {
    padding: 0.5rem 1rem;
  }
}
</style>
