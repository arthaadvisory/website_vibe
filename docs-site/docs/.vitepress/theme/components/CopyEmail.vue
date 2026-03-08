<script setup>
import { ref } from 'vue'

const props = defineProps({
  email: { type: String, default: 'arthaadvisory1@gmail.com' }
})

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea')
    textarea.value = props.email
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>

<template>
  <span class="copy-email-wrapper">
    <a :href="'mailto:' + email" class="email-link">{{ email }}</a>
    <button @click.prevent="copyEmail" class="copy-btn" :title="copied ? 'Copied!' : 'Copy email'">
      <!-- Copy Icon -->
      <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <!-- Check Icon -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    </button>
    <transition name="fade">
      <span v-if="copied" class="copied-toast">Copied!</span>
    </transition>
  </span>
</template>

<style scoped>
.copy-email-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.email-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.email-link:hover {
  text-decoration: underline;
}

.copy-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 4px 6px;
  cursor: pointer;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.copied-toast {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-brand-1);
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
