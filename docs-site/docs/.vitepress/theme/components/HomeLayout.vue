<script setup>
import { computed } from 'vue'
import { data as services } from '../../../services.data.ts'
import { data as resources } from '../../../resources.data.ts'
import ServiceCard from './ServiceCard.vue'
import ResourceCard from './ResourceCard.vue'

// Filter services for specific highlights
// Filter services for specific highlights
const coreServices = computed(() => {
  return services.filter(s => [
    'Audit & Assurance Services', 
    'Taxation & Regulatory Compliance', 
    'Advisory & Strategic Growth', 
    'Financial & Operational Outsourcing'
  ].includes(s.title))
})

// Latest Insights (Get top 3 latest)
const latestInsights = computed(() => {
  return resources.slice(0, 3)
})
</script>

<template>
  <div class="home-layout">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-row container">
        <div class="hero-content">
          <span class="hero-label">A Different Kind of Advisory Firm</span>
          <h1 class="hero-title">Strategic Financial &amp; Legal <br/> Partners for Growth.</h1>
          <p class="hero-subtitle">
              We simplify complex regulatory landscapes so you can focus on building your business.
              <strong>Audit. Tax. Advisory. Outsourcing.</strong>
          </p>
          <div class="hero-actions">
              <a href="/contact" class="btn-primary">Schedule a Consultation</a>
              <a href="/services/" class="btn-secondary">Explore Services</a>
          </div>
          
          <div class="trust-indicators">
             <p class="trust-text">Industry Deep Expertise</p>
             <div class="logos-grid-wrapper">
               <div class="logos-grid-track">
                  <!-- Original Items -->
                  <a href="/industries/manufacturing" class="logo-item"><span class="expert-dot"></span> Manufacturing</a>
                  <a href="/industries/banking" class="logo-item"><span class="expert-dot"></span> Banking &amp; Finance</a>
                  <a href="/industries/technology" class="logo-item"><span class="expert-dot"></span> Technology &amp; IT</a>
                  <a href="/industries/hydropower" class="logo-item"><span class="expert-dot"></span> Hydropower</a>
                  <a href="/industries/real-estate" class="logo-item"><span class="expert-dot"></span> Real Estate</a>
                  
                  <!-- Duplicate for infinite scroll -->
                  <a href="/industries/manufacturing" class="logo-item"><span class="expert-dot"></span> Manufacturing</a>
                  <a href="/industries/banking" class="logo-item"><span class="expert-dot"></span> Banking &amp; Finance</a>
                  <a href="/industries/technology" class="logo-item"><span class="expert-dot"></span> Technology &amp; IT</a>
                  <a href="/industries/hydropower" class="logo-item"><span class="expert-dot"></span> Hydropower</a>
                  <a href="/industries/real-estate" class="logo-item"><span class="expert-dot"></span> Real Estate</a>
               </div>
             </div>
          </div>
        </div>
        <div class="hero-spacer"></div>
      </div>
      <div class="hero-bg-accent">
        <img src="/images/home/hero-main.jpg" alt="Hero Background" class="hero-bg-image greenduotone" />
        <div class="hero-overlay"></div>
      </div>
    </section>

    <!-- FEATURE HIGHLIGHTS (Services / Team / Resources) -->
    <section class="features-highlight-section">
      <div class="container">
        <div class="features-highlight-grid">
          <a href="/services/" class="feature-highlight-card" style="--fh-bg: url('/images/headers/service-advisory.jpg')">
            <div class="fh-content">
              <div class="fh-icon">📋</div>
              <h3>Comprehensive Services</h3>
              <p>From Audit &amp; Assurance to Business Advisory and Taxation, we offer a full suite of financial solutions.</p>
              <span class="fh-link">View Services →</span>
            </div>
          </a>
          <a href="/about/team" class="feature-highlight-card" style="--fh-bg: url('/images/home/hero-main.jpg')">
            <div class="fh-content">
              <div class="fh-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Led by seasoned professionals committed to your financial success and sustainable growth.</p>
              <span class="fh-link">Meet the Team →</span>
            </div>
          </a>
          <a href="/resources/" class="feature-highlight-card" style="--fh-bg: url('/images/industries/ind-tech.jpg')">
            <div class="fh-content">
              <div class="fh-icon">📚</div>
              <h3>Knowledge Hub</h3>
              <p>Stay updated with our latest insights, publications, and tax compliance calendar.</p>
              <span class="fh-link">Explore Resources →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- TRUSTED BY INDUSTRY LEADERS -->
    <section class="trusted-section">
      <div class="container">
        <p class="trusted-label">Trusted by Industry Leaders</p>
        <div class="trusted-logos-wrapper">
          <div class="trusted-logos-track">
             <!-- Original Items -->
             <div class="trusted-logo-item"><span class="tl-icon">🏦</span><span>Nabil Bank</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">⚡</span><span>Himalayan Power</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🏭</span><span>Chaudhary Group</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🛡️</span><span>Nepal Life Insurance</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🌐</span><span>WorldLink</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🛒</span><span>Bhat-Bhateni</span></div>
             
             <!-- Duplicate Items -->
             <div class="trusted-logo-item"><span class="tl-icon">🏦</span><span>Nabil Bank</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">⚡</span><span>Himalayan Power</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🏭</span><span>Chaudhary Group</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🛡️</span><span>Nepal Life Insurance</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🌐</span><span>WorldLink</span></div>
             <div class="trusted-logo-item"><span class="tl-icon">🛒</span><span>Bhat-Bhateni</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="services-section">
       <div class="container">
          <div class="section-header text-center mb-12">
             <h2 class="section-title">Comprehensive Business Solutions</h2>
             <p class="section-desc">From company registration to IPO, we are with you at every stage.</p>
          </div>
          
          <div class="services-grid-home">
             <a :href="s.url" class="service-home-card group" v-for="s in coreServices" :key="s.url" :style="{ '--service-bg': 'url(' + s.image + ')' }">
                <div class="service-icon-wrapper">
                    <span class="service-icon">{{ s.icon }}</span>
                </div>
                <h3 class="service-title">{{ s.title }}</h3>
                <p class="service-desc">{{ s.description }}</p>
                <span class="learn-more">Learn more →</span>
             </a>
          </div>
          
          <div class="text-center mt-12">
             <a href="/services/" class="btn-secondary">View Complete Service Portfolio</a>
          </div>
       </div>
    </section>

    <!-- FOUNDER MESSAGE -->
    <section class="founder-section">
      <div class="container founder-container">
        <div class="founder-image-side">
          <div class="founder-photo-frame">
            <img src="/images/team/susmita-pandey.png" alt="CA Susmita Pandey" />
          </div>
        </div>
        <div class="founder-text-side">
          <span class="founder-badge">Message from the Founder</span>
          <h2 class="section-title">Building Trust Through Excellence</h2>
          <blockquote class="founder-quote">
            "At Artha Advisory, we don't just measure success through numbers; we measure it through the sustainable growth and lasting trust we build. Our forward-looking vision positions financial services as a catalyst for growth rather than a mere procedural necessity."
          </blockquote>
          <div class="founder-name">
            <strong>CA Susmita Pandey</strong>
            <span>Managing Director, Artha Advisory</span>
          </div>
          <a href="/about/founder-message" class="btn-secondary" style="margin-top: 1.5rem;">Read Full Message →</a>
        </div>
      </div>
    </section>

    <!-- WHY PARTNER WITH US -->
    <section class="why-partner-section">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="section-title">Why Partner With Us?</h2>
        </div>
        <div class="partner-grid">
          <div class="partner-card">
            <div class="partner-icon">🏆</div>
            <div class="partner-content">
              <h3>Proven Expertise</h3>
              <p>Over 15 years of experience serving diverse industries across Nepal.</p>
            </div>
          </div>
          <div class="partner-card">
            <div class="partner-icon">⚖️</div>
            <div class="partner-content">
              <h3>Ethical Standards</h3>
              <p>Uncompromising commitment to integrity and regulatory compliance.</p>
            </div>
          </div>
          <div class="partner-card">
            <div class="partner-icon">🤝</div>
            <div class="partner-content">
              <h3>Client-Centric</h3>
              <p>Tailored solutions that align with your specific business goals.</p>
            </div>
          </div>
          <div class="partner-card">
            <div class="partner-icon">💡</div>
            <div class="partner-content">
              <h3>Technology Driven</h3>
              <p>Leveraging modern tools for accuracy, efficiency, and real-time insights.</p>
            </div>
          </div>
        </div>

        <!-- Stats row -->
        <div class="stats-row">
          <div class="stat-card">
            <span class="stat-number">15+</span>
            <span class="stat-label">Years of Experience</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5,000+</span>
            <span class="stat-label">Entities Audited</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5</span>
            <span class="stat-label">Offices Nationwide</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">3</span>
            <span class="stat-label">Associate Firms</span>
          </div>
        </div>
      </div>
    </section>

    <!-- LATEST INSIGHTS -->
    <section class="insights-section">
       <div class="container">
          <div class="section-header">
             <div>
                <h2 class="section-title">Knowledge Hub</h2>
                <p class="section-desc">Latest guides, regulatory updates, and expert insights.</p>
             </div>
             <a href="/resources/" class="desktop-only-link link-brand">View All Resources →</a>
          </div>
          
          <div class="resources-grid">
             <ResourceCard v-for="res in latestInsights" :key="res.url" :resource="res" />
          </div>
          
          <div class="mobile-only-link">
             <a href="/resources/" class="link-brand">View All Resources →</a>
          </div>
       </div>
    </section>

    <!-- CTA FOOTER -->
    <section class="cta-section">
       <div class="container cta-inner">
          <h2 class="cta-heading">Ready to Scale Your Business?</h2>
          <p class="cta-desc">
             Schedule a free discovery call with our partners to discuss your specific needs.
          </p>
          <a href="/contact" class="btn-white">Book a Consultation</a>
       </div>
    </section>
  </div>
</template>

<style scoped>
/* RESET - pull layout up to remove VitePress nav gap */
.home-layout {
  margin-top: calc(-1 * (var(--vp-nav-height) + var(--vp-layout-top-height, 0px)));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ======== HERO ======== */
.hero-section {
    position: relative;
    padding: 10rem 0 6rem;
    overflow: hidden;
    background: var(--vp-c-bg);
}

.hero-bg-accent {
    position: absolute;
    top: 0;
    right: 0;
    width: 55%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
}

.hero-bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--vp-c-bg) 0%, transparent 100%);
    z-index: 2;
}

.hero-row {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: flex-start;
}

.hero-content {
    flex: 1;
    max-width: 100%;
    width: 100%;
}

@media (min-width: 768px) {
    .hero-content {
        max-width: 700px;
    }
}

.hero-spacer {
    flex: 0 0 20%;
}

.hero-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    border-radius: 99px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    color: var(--vp-c-text-1);
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--vp-c-text-2);
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 600px;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 4rem;
}

/* Buttons */
.btn-primary {
    background-color: var(--vp-c-brand-1);
    color: white;
    padding: 0.875rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
}
.btn-primary:hover {
    background-color: var(--vp-c-brand-2);
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    padding: 0.875rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
}
.btn-secondary:hover {
    background-color: var(--vp-c-bg-mute);
}

/* Trust indicators / industry links */
.trust-indicators {
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 2rem;
}

.trust-text {
    font-size: 0.8rem;
    color: var(--vp-c-text-3);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.logos-grid-wrapper {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    width: 100%;
}

.logos-grid-track {
    display: flex;
    gap: 2.5rem;
    width: max-content;
    animation: scroll-horizontal 20s linear infinite;
    padding-bottom: 0.5rem; /* Space for hover effects if needed */
}

.logos-grid-track:hover {
    animation-play-state: paused;
}

.logo-item {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--vp-c-text-2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: color 0.2s;
    white-space: nowrap;
    flex: 0 0 auto;
}
.logo-item:hover {
    color: var(--vp-c-brand-1);
}

.expert-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--vp-c-brand-1);
}

/* ======== FEATURE HIGHLIGHTS ======== */
.features-highlight-section {
    padding: 4rem 0;
    background: var(--vp-c-bg);
    border-top: 1px solid var(--vp-c-divider);
}

.features-highlight-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
}

.feature-highlight-card {
    background: var(--vp-c-bg-soft);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid var(--vp-c-divider);
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    isolation: isolate;
}
.feature-highlight-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--fh-bg);
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: -1;
    transition: all 0.4s ease;
    filter: grayscale(100%);
}

.feature-highlight-card:hover::before {
    opacity: 0.15;
    filter: grayscale(0%);
    transform: scale(1.05);
}

.feature-highlight-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px -8px rgba(0,0,0,0.08);
    border-color: var(--vp-c-brand-soft);
}

.fh-content {
    position: relative;
    z-index: 1;
}

.fh-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.feature-highlight-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin-bottom: 0.5rem;
}

.feature-highlight-card p {
    color: var(--vp-c-text-2);
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 1rem;
}

.fh-link {
    color: var(--vp-c-brand-1);
    font-weight: 600;
    font-size: 0.95rem;
}

/* ======== TRUSTED BY ======== */
.trusted-section {
    padding: 2.5rem 0;
    background: var(--vp-c-bg-alt);
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);
}

.trusted-label {
    text-align: center;
    font-size: 0.8rem;
    color: var(--vp-c-text-3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    margin-bottom: 1.25rem;
}

.trusted-logos-wrapper {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.trusted-logos-track {
    display: flex;
    align-items: center;
    gap: 3rem;
    width: max-content;
    animation: scroll-horizontal 25s linear infinite;
    padding-bottom: 1rem;
}

.trusted-logos-track:hover {
    animation-play-state: paused;
}

/* Define keyframes globally for scoped use */
@keyframes scroll-horizontal {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.trusted-logo-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
    opacity: 0.7;
    transition: opacity 0.2s;
    white-space: nowrap;
    flex: 0 0 auto;
}
.trusted-logo-item:hover {
    opacity: 1;
}

.tl-icon {
    font-size: 1.25rem;
}

/* ======== SERVICES ======== */
.services-section {
    padding: 6rem 0;
    background-color: var(--vp-c-bg);
}

.section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.section-desc {
    color: var(--vp-c-text-2);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
}

.services-grid-home {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.service-home-card {
    background: var(--vp-c-bg-soft);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid var(--vp-c-divider);
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    isolation: isolate;
}

.service-home-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    /* Green Duotone Overlay */
    background-image: 
        linear-gradient(135deg, rgba(20, 125, 52, 0.9), rgba(11, 69, 29, 0.95)),
        var(--service-bg);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    opacity: 0.05;
    transition: all 0.4s ease;
    z-index: -1;
    filter: grayscale(100%);
}

.service-home-card:hover::before {
    opacity: 0.3; /* Adjusted opacity */
    filter: grayscale(0%);
    transform: scale(1.05);
}

.service-home-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
    border-color: var(--vp-c-brand-soft);
}

.service-icon-wrapper {
    width: 64px;
    height: 64px;
    background: var(--vp-c-bg);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    transition: background 0.3s;
}

.service-home-card:hover .service-icon-wrapper {
    background: var(--vp-c-brand-soft);
}

.service-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.3;
}

.service-desc {
    color: var(--vp-c-text-2);
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.learn-more {
    font-weight: 600;
    color: var(--vp-c-brand-1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* ======== FOUNDER MESSAGE ======== */
.founder-section {
    padding: 6rem 0;
    background: var(--vp-c-bg-alt);
}

.founder-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

.founder-image-side {
    display: flex;
    justify-content: center;
}

.founder-photo-frame {
    width: 280px;
    height: 340px;
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid var(--vp-c-brand-soft);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.founder-photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.founder-text-side {
    display: flex;
    flex-direction: column;
}

.founder-badge {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    border-radius: 99px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    width: fit-content;
}

.founder-quote {
    border-left: 3px solid var(--vp-c-brand-1);
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: var(--vp-c-text-2);
    font-size: 1.1rem;
    line-height: 1.7;
    background: var(--vp-c-bg);
    border-radius: 0 12px 12px 0;
}

.founder-name {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.founder-name strong {
    font-size: 1.1rem;
    color: var(--vp-c-text-1);
}

.founder-name span {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
}

/* ======== WHY PARTNER ======== */
.why-partner-section {
    padding: 6rem 0;
    background: var(--vp-c-bg);
}

.partner-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1rem;
}

.partner-card {
    background: var(--vp-c-bg-soft);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid var(--vp-c-divider);
    text-align: left;
    transition: all 0.3s ease;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
}
.partner-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px -6px rgba(0,0,0,0.08);
    border-color: var(--vp-c-brand-soft);
}

.partner-icon {
    font-size: 2.5rem;
    margin-bottom: 0;
    line-height: 1;
    flex-shrink: 0;
}

.partner-content {
    flex: 1;
}

.partner-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin-bottom: 0.5rem;
    margin-top: 0;
}

.partner-card p {
    color: var(--vp-c-text-2);
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
}

.stats-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

.stat-card {
    background: var(--vp-c-bg-soft);
    padding: 1.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    border: 1px solid var(--vp-c-divider);
}

.stat-number {
    display: block;
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--vp-c-brand-1);
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.85rem;
    color: var(--vp-c-text-2);
    font-weight: 600;
}

/* ======== INSIGHTS ======== */
.insights-section {
    padding: 6rem 0;
    background-color: var(--vp-c-bg-alt);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
}

.link-brand {
    color: var(--vp-c-brand-1);
    font-weight: 600;
    text-decoration: none;
}
.link-brand:hover {
    text-decoration: underline;
}

.desktop-only-link {
    display: none;
}

.mobile-only-link {
    margin-top: 2rem;
    text-align: center;
}

.resources-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
}

/* ======== CTA ======== */
.cta-section {
    padding: 6rem 0;
    margin-bottom: 0;
    /* Duotone effect: Image + Brand Overlay */
    background-image: 
        linear-gradient(135deg, rgba(20, 125, 52, 0.92), rgba(11, 69, 29, 0.96)),
        url('/images/headers/service-consulting.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}

.cta-inner {
    text-align: center;
}

.cta-heading {
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #ffffff;
}

.cta-desc {
    color: rgba(255, 255, 255, 0.85);
    max-width: 42rem;
    margin: 0 auto 2rem;
    font-size: 1.125rem;
    line-height: 1.6;
}

.btn-white {
    background: white;
    color: var(--vp-c-brand-1);
    padding: 1rem 2.5rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.125rem;
    display: inline-block;
    text-decoration: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.2s;
}

.btn-white:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

/* Utilities */
.text-center { text-align: center; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-12 { margin-bottom: 3rem; }
.mt-12 { margin-top: 3rem; }

/* ======== RESPONSIVE ======== */
@media (min-width: 640px) {
    .features-highlight-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .partner-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .stats-row {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 768px) {
    .services-grid-home {
        grid-template-columns: repeat(2, 1fr);
    }
    .resources-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .desktop-only-link {
        display: block;
    }
    .mobile-only-link {
        display: none;
    }
    .founder-container {
        grid-template-columns: 300px 1fr;
    }
    .partner-grid {
        grid-template-columns: repeat(2, 1fr); /* Tablet & Desktop: 2 columns for distinct look */
        gap: 2rem;
    }
}

@media (min-width: 1024px) {
    .services-grid-home {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    .hero-section {
        padding: 7rem 0 4rem;
    }
    .hero-spacer {
        display: none;
    }
    .hero-bg-accent {
        display: none;
    }
    .trusted-logos-bar {
        gap: 1rem;
    }
    .trusted-logo-item {
        font-size: 0.85rem;
    }
    .section-title {
        font-size: 1.75rem;
    }
}
</style>
