<script setup>
import ContactCard from './ContactCard.vue'

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
    <!-- TOP: Form + Map Side by Side -->
    <div class="contact-hero-grid">
      <!-- Left: Form -->
      <div class="contact-form-col">
        <div class="form-header">
          <span class="form-label">Get in Touch</span>
          <h2 class="form-title">{{ formTitle || 'Book a Discovery Call' }}</h2>
          <p class="form-subtitle">Fill out the form and our team will get back to you within 24 hours.</p>
        </div>
        <div class="tally-form-container">
          <iframe data-tally-src="https://tally.so/embed/aQ6o7E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="200" style="height: 70vh;" frameborder="0" marginheight="0" marginwidth="0" title="Contact Form"></iframe>
        </div>
      </div>

      <!-- Right: Map + Quick Contact -->
      <div class="contact-map-col">
        <div class="quick-contact-card">
          <div class="qc-item">
            <span class="qc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </span>
            <div>
              <p class="qc-label">Call Us</p>
              <a href="tel:+9779855053088" class="qc-value">+977 985-5053088</a>
            </div>
          </div>
          <div class="qc-item">
            <span class="qc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </span>
            <div>
              <p class="qc-label">Email Us</p>
              <a href="mailto:arthaadvisory1@gmail.com" class="qc-value">arthaadvisory1@gmail.com</a>
            </div>
          </div>
          <div class="qc-item">
            <span class="qc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </span>
            <div>
              <p class="qc-label">Office Hours</p>
              <p class="qc-value">Sun – Fri: 10 AM – 5 PM</p>
            </div>
          </div>
        </div>

        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3819646965476!2d84.4400054754662!3d27.674587076201313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e50044c6dc8d%3A0xa27955b68d320179!2sPandey%20S.%26%20Associates!5e0!3m2!1sen!2snp!4v1772884157811!5m2!1sen!2snp" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

    <!-- BOTTOM: Office Locations Grid -->
    <div class="offices-section">
      <div class="offices-header">
        <span class="offices-label">Our Presence</span>
        <h2 class="offices-title">📍 Office Locations</h2>
        <p class="offices-subtitle">6 strategic locations across Nepal to serve you better.</p>
      </div>
      <div class="offices-grid">
        <ContactCard 
          v-for="(card, index) in cards" 
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-layout-wrapper {
  margin-top: 2rem;
}

/* Form + Map Hero Grid */
.contact-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.form-header {
  margin-bottom: 2rem;
}

.form-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.form-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0.5rem 0;
}

.form-subtitle {
  color: var(--vp-c-text-3);
  font-size: 0.95rem;
  line-height: 1.6;
}

.tally-form-container {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 1.5rem;
  overflow: hidden;
}

/* Quick Contact Card */
.quick-contact-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.qc-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.qc-icon {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 12px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.qc-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-3);
  font-weight: 600;
  margin-bottom: 0.15rem;
}

.qc-value {
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.95rem;
}

a.qc-value:hover {
  color: var(--vp-c-brand-1);
}

/* Map */
.map-container {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
}

/* Offices Section */
.offices-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--vp-c-divider);
}

.offices-header {
  text-align: center;
  margin-bottom: 3rem;
}

.offices-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.offices-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.5rem 0;
  color: var(--vp-c-text-1);
}

.offices-subtitle {
  color: var(--vp-c-text-3);
  font-size: 1rem;
}

.offices-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Responsive */
@media (max-width: 960px) {
  .contact-hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .offices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .offices-grid {
    grid-template-columns: 1fr;
  }

  .form-title {
    font-size: 1.5rem;
  }
}
</style>
