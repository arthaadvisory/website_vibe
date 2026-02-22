<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<template>
  <div class="page-hero">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
    </div>
    <!-- Duotone Effect Layer -->
    <div class="hero-image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="duotone-overlay"></div>
  </div>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: var(--vp-c-brand-1);
  animation: heroFadeIn 0.8s ease-out;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: grayscale(100%) contrast(1.2);
  transition: transform 8s ease;
}

.page-hero:hover .hero-image {
  transform: scale(1.05);
}

.duotone-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(135deg, rgba(20, 125, 52, 0.9), rgba(32, 119, 188, 0.8));
  mix-blend-mode: multiply;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: 2rem;
  max-width: 800px;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  color: #ffffff !important;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.95;
  font-weight: 500;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);
  color: #ffffff !important;
  line-height: 1.5;
}

@keyframes heroFadeIn {
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .page-hero {
    height: 240px;
    border-radius: 12px;
  }
}
</style>
