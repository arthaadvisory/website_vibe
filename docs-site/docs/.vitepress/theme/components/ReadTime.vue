<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const READING_SPEED = 200 // words per minute
const { page } = useData()

const minutes = ref(0) // Default to 0 or calculate from page title

onMounted(() => {
  // Simple estimation based on content length in DOM
  // Ideally this should be done at build time, but this works for client-side
  const content = document.querySelector('.vp-doc')
  if (content) {
    const text = content.innerText
    const wpm = READING_SPEED
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    minutes.value = time
  }
})
</script>

<template>
  <div v-if="minutes > 0" class="read-time">
    <span class="icon">⏱️</span>
    <span>{{ minutes }} min read</span>
  </div>
</template>

<style scoped>
.read-time {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  background: var(--vp-c-bg-alt);
  padding: 4px 10px;
  border-radius: 20px;
}
</style>
