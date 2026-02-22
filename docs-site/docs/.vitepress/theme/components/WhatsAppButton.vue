<script setup>
import { ref, onMounted } from 'vue'

const whatsappNumber = "9779855053088"
const whatsappLink = `https://wa.me/${whatsappNumber}`
const visible = ref(false)

// Delayed entrance animation
onMounted(() => {
  setTimeout(() => { visible.value = true }, 2000)
})
</script>

<template>
  <transition name="bounce-in">
    <a v-if="visible" :href="whatsappLink" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <div class="whatsapp-pulse"></div>
      <div class="whatsapp-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </div>
      <span class="whatsapp-tooltip">Chat with us</span>
    </a>
  </transition>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  left: 20px;
  bottom: 80px;
  z-index: 100;
  transition: transform 0.3s ease;
  text-decoration: none;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-icon {
  width: 56px;
  height: 56px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

/* Pulse ring */
.whatsapp-pulse {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.3);
  animation: pulse 2s ease-out infinite;
  z-index: 1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* Tooltip */
.whatsapp-tooltip {
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  background: var(--vp-c-text-1, #1a1a1a);
  color: var(--vp-c-bg, white);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.whatsapp-tooltip::before {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: var(--vp-c-text-1, #1a1a1a);
}

.whatsapp-float:hover .whatsapp-tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(2px);
}

/* Entrance animation */
.bounce-in-enter-active {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes bounceIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    transform: scale(1.15);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .whatsapp-tooltip {
    display: none;
  }
}
</style>
