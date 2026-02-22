---
layout: home
hero:
  name: "Open Positions"
  text: "Join Our Team"
  tagline: Explore opportunities to grow with Artha Advisory.
  actions:
    - theme: brand
      text: Back to Careers
      link: /careers/
---

<script setup>
import JobHub from '../.vitepress/theme/components/JobHub.vue'
import { data } from './jobs.data.js'
</script>


<div class="home-content-container">

<div class="container mx-auto px-4 py-8">

## Current Openings

<JobHub 
  :jobs="data"
  contactEmail="arthaadvisory1@gmail.com"
/>

<div class="why-join-section">
  <h2 class="section-title">Life at Artha</h2>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">📈</div>
      <h3>Continuous Growth</h3>
      <p>Regular training, mentorship, and a clear path to partnership.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">💼</div>
      <h3>High-Impact Work</h3>
      <p>Work on complex audits and strategic projects for top-tier clients.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🤝</div>
      <h3>Inclusive Culture</h3>
      <p>A collaborative environment where every voice is heard and valued.</p>
    </div>
  </div>
</div>

<div class="general-app-box">
  <h3>Don't see a perfect fit?</h3>
  <p>We are always looking for exceptional talent. specific openings or not.</p>
  <a href="mailto:arthaadvisory1@gmail.com?subject=General Application" class="outline-btn">Send us your CV →</a>
</div>

</div>
</div>

<style>
/* Hero Override for Openings */
.VPDoc { padding-top: 0 !important; }
.VPDoc .container { max-width: 100% !important; padding: 0 !important; }

.careers-hero {
  position: relative;
  padding: 6rem 2rem 4rem;
  background: var(--vp-c-bg); /* Simpler background for sub-page */
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.home-content-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 4rem 24px;
}
@media (min-width: 640px) {
  .home-content-container {
    padding: 0 48px;
  }
}

.why-join-section {
  margin-top: 5rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 3rem;
}

.section-title {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(20, 125, 52, 0.05), rgba(11, 69, 29, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 30px rgba(20, 125, 52, 0.15);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.feature-card:hover .feature-icon {
  filter: grayscale(0%);
}

.feature-card h3 {
  margin: 0.5rem 0 1rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 1rem;
}

.general-app-box {
  background: linear-gradient(135deg, rgba(20, 125, 52, 0.1), rgba(11, 69, 29, 0.05));
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 16px;
  padding: 3rem 2rem;
  margin-top: 5rem;
  text-align: center;
}

.general-app-box h3 {
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 1rem;
}

.general-app-box p {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.outline-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border: 2px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s;
  font-size: 1.1rem;
}

.outline-btn:hover {
  background: var(--vp-c-brand-1);
  color: white;
  box-shadow: 0 8px 20px rgba(20, 125, 52, 0.2);
}
</style>
