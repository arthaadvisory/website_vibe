<script setup>
import { onMounted, onUnmounted } from 'vue'

const adjustLayout = () => {
  const bar = document.querySelector('.announcement-bar')
  if (bar) {
    const isMobile = window.innerWidth <= 960
    // On mobile, bar is relative, so nav should stay at top: 0
    // We set height to 0 for the CSS variable top offset
    const height = isMobile ? 0 : bar.offsetHeight 
    document.documentElement.style.setProperty('--vp-layout-top-height', `${height}px`)
  } else {
    document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
  }
}

onMounted(() => {
  adjustLayout()
  window.addEventListener('resize', adjustLayout)
  const observer = new MutationObserver(adjustLayout)
  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
  window.removeEventListener('resize', adjustLayout)
})
</script>

<template>
  <div class="announcement-bar">
    <!-- Desktop Version -->
    <div class="content desktop-only">
      <span class="badge">CONTACT</span>
      <span class="message">
        ✉️ arthaadvisory1@gmail.com | 
        <a href="https://wa.me/9779855053088?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20appointment." target="_blank" rel="noopener">Schedule Appointment 📅</a>
      </span>
    </div>
    
    <!-- Mobile Version (Refined) -->
    <div class="content mobile-only">
      <div class="contact-item">
        <span class="icon">✉️</span>
        <a href="mailto:arthaadvisory1@gmail.com">arthaadvisory1@gmail.com</a>
      </div>
      <span class="sep">|</span>
      <div class="contact-item">
        <a href="https://wa.me/9779855053088?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20appointment." target="_blank" rel="noopener">Schedule 📅</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.announcement-bar {
  background: linear-gradient(90deg, #052e16, #14532d); /* Darker Green (Slate-ish) */
  color: white;
  text-align: center;
  padding: 0.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.mobile-only {
  display: none;
}

@media (max-width: 960px) {
  .announcement-bar {
    position: relative !important; /* Scrolls away */
    font-size: 0.8rem;
    padding: 0.7rem 0.5rem;
    box-shadow: none;
  }
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
    white-space: normal;
    line-height: 1.4;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .sep {
    opacity: 0.5;
  }
  .mobile-only a {
    color: white;
    text-decoration: none;
  }
}

.badge {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
}

.message a {
  color: white;
  text-decoration: underline;
}

.message a:hover {
  opacity: 0.9;
}
</style>
