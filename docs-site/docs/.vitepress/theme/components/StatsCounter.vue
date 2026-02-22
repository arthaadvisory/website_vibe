<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    required: true,
    // Expected format: [{ number: 100, suffix: '+', label: 'Clients' }]
  }
})

const statsRef = ref(null)
const hasAnimated = ref(false)

// Animation logic
const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    obj.current = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    } else {
      obj.current = end // Ensure it lands on exact number
    }
  }
  window.requestAnimationFrame(step)
}

const runAnimation = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true
  
  props.stats.forEach(stat => {
    // Add reactivity if not already (though props are reactive, we need a local mutable copy)
    // Actually, let's look at the template rendering.
    // We need a reactive array to hold current display values
  })
}

// Improved Logic: Create a local reactive copy of stats with 'current' value
const displayStats = ref(props.stats.map(s => ({ ...s, current: 0 })))

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        displayStats.value.forEach(stat => {
          animateValue(stat, 0, stat.number, 2000)
        })
      }
    })
  }, { threshold: 0.5 })

  if (statsRef.value) observer.observe(statsRef.value)
})
</script>

<template>
  <div class="stats-container" ref="statsRef">
    <div v-for="(stat, index) in displayStats" :key="index" class="stat-item">
      <div class="stat-number">
        {{ stat.current }}{{ stat.suffix }}
      </div>
      <div class="stat-label">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.stat-item {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(20, 125, 52, 0.05);
}

.stat-item:hover {
  transform: translateY(-5px);
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
  line-height: 1;
  font-family: var(--vp-font-family-mono);
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
