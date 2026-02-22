<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Load Tally embed script
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
  <div class="newsletter-box">
    <div class="newsletter-inner">
      <div class="content">
        <span class="label-pill">📬 Newsletter</span>
        <h3>Stay Updated on Tax Laws</h3>
        <p>Get the latest Finance Act updates and compliance alerts directly to your inbox.</p>
      </div>
      <div class="tally-wrapper">
        <iframe 
          data-tally-src="https://tally.so/embed/2Ee5qb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="300" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0" 
          title="Newsletter Subscription"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsletter-box {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  border-radius: 16px;
  margin-top: 4rem;
  padding: 3px;
  position: relative;
  overflow: hidden;
}

.newsletter-inner {
  position: relative;
  z-index: 1;
  padding: 3rem 2.5rem;
  text-align: center;
}

.label-pill {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.content h3 {
  margin: 0 0 0.5rem;
  color: white;
  font-size: 1.75rem;
  font-weight: 800;
}

.content p {
  margin: 0 0 2rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
}

.tally-wrapper {
  max-width: 460px;
  margin: 0 auto;
  min-height: 200px;
}

@media (max-width: 500px) {
  .newsletter-inner {
    padding: 2rem 1.5rem;
  }
  .content h3 {
    font-size: 1.4rem;
  }
}
</style>
