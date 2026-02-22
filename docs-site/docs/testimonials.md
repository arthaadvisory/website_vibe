---
layout: home

hero:
  name: "Client Success Stories"
  text: "Trust Earned Through Results"
  tagline: See why leading businesses and entrepreneurs across Nepal trust Artha Advisory.
  actions:
    - theme: brand
      text: Share Your Story
      link: /contact
    - theme: alt
      text: View Services
      link: /services/

features:
  - title: 15+ Years
    details: Of professional excellence in audit and taxation.
    icon: 🗓️
  
  - title: 500+ Clients
    details: From startups to multinational corporations.
    icon: 🤝
  
  - title: 5 Locations
    details: Serving clients across Bagmati, Gandaki, and Koshi provinces.
    icon: 📍
---

<script setup>
import { VPFeatures } from 'vitepress/theme'
import TestimonialCard from './.vitepress/theme/components/TestimonialCard.vue'

const testimonials = [
  {
    title: 'Ramesh Adhikari',
    details: '"Artha Advisory has been instrumental in streamlining our financial operations. Their expertise in tax planning saved us significant costs."',
    icon: '🏭'
  },
  {
    title: 'Sanjay Gupta',
    details: '"The team at Artha Advisory provided exceptional support during our company registration and VAT setup. True professionals!"',
    icon: '💻'
  },
  {
    title: 'Laxmi Sharma',
    details: '"We have been working with Artha Advisory for over 5 years. Their payroll management services are flawless."',
    icon: '🏨'
  },
  {
    title: 'Bikash Thapa',
    details: '"Navigating export regulations was challenging until we partnered with Artha Advisory. Their expertise is invaluable."',
    icon: '🌏'
  },
  {
    title: 'Sunita Rai',
    details: '"Real-time reporting and accurate inventory tracking helped us make better business decisions."',
    icon: '🛒'
  },
  {
    title: 'Dr. Prakash Shrestha',
    details: '"As an NGO, compliance is critical. Artha Advisory handles our audit and financial reporting with utmost professionalism."',
    icon: '🏥'
  }
]
</script>

<div class="home-content-container">

<div style="margin-top: 4rem; text-align: center;">
  <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 3rem;">What Our Clients Say</h2>
</div>

<div class="testimonials-grid">
  <TestimonialCard 
    v-for="t in testimonials" 
    :key="t.title"
    :name="t.title"
    :message="t.details"
    role="Business Owner"
  />
</div>
</div>

<style>
.home-content-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

@media (min-width: 640px) {
  .home-content-container {
    padding: 0 48px;
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
