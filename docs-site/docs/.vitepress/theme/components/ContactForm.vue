<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Send a Message'
  }
})

onMounted(() => {
  // Load Tally embed script for dynamic height
  const d = document
  const w = "https://tally.so/widgets/embed.js"
  const v = function() {
    if (typeof Tally !== "undefined") {
      Tally.loadEmbeds()
    } else {
      d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
        e.src = e.dataset.tallySrc
      })
    }
  }
  
  if (typeof Tally !== "undefined") {
    v()
  } else if (d.querySelector('script[src="' + w + '"]') == null) {
    const s = d.createElement("script")
    s.src = w
    s.onload = v
    s.onerror = v
    d.body.appendChild(s)
  }
})
</script>

<template>
  <div class="form-container">
    <h3 class="form-title">{{ title }}</h3>
    <div class="tally-wrapper">
      <iframe 
        data-tally-src="https://tally.so/embed/aQ6o7E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
        loading="lazy" 
        width="100%" 
        height="500" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0" 
        title="Contact Form"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
}
.form-title {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
}
.tally-wrapper {
  width: 100%;
  min-height: 500px;
}
</style>
