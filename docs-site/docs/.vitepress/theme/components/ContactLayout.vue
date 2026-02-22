<script setup>
import ContactCard from './ContactCard.vue'
import ContactForm from './ContactForm.vue'

defineProps({
  cards: Array, // Array of { icon, title, details, links }
  formTitle: String,
  formLabels: Object,
  mapTitle: String
})

import { onMounted } from 'vue'

onMounted(() => {
    // Tally Embed Script
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
  <div class="contact-layout-wrapper">
    <div class="contact-main-grid">
      <div class="contact-left-col">
        <ContactCard 
          v-for="(card, index) in cards" 
          :key="index"
          v-bind="card"
        />
      </div>
      <div class="contact-right-col">
        <!-- Tally Form Embed -->
        <div class="tally-form-container">
            <iframe data-tally-src="https://tally.so/embed/b57721?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" src="https://tally.so/embed/b57721?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" loading="lazy" width="100%" height="200" style="height: 80vh;" frameborder="0" marginheight="0" marginwidth="0" title="Contact Form Template"></iframe>
        </div>
      </div>
    </div>

    <div v-if="mapTitle" class="contact-map-section">
      <h2 class="map-heading">{{ mapTitle }}</h2>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.47131756667!2d85.310!3d27.710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a000000001%3A0x0!2zMjfCsDQyJzM2LjAiTiA4NcKwMTgnMzYuMCJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-layout-wrapper {
  margin-top: 2rem;
}

.contact-main-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.contact-left-col {
  flex: 1;
  min-width: 300px;
}

.contact-right-col {
  flex: 1.5;
  min-width: 350px;
}

.contact-map-section {
  margin-top: 4rem;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 2rem;
}

.map-heading {
  margin-bottom: 2rem;
  color: var(--vp-c-brand-1);
}

.map-container {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

@media (max-width: 768px) {
  .contact-main-grid {
    flex-direction: column;
    gap: 2rem;
  }
  .contact-right-col {
    min-width: unset;
  }
}
</style>
