---
layout: home
description: Nepal's leading professional services firm specializing in Tax, Audit, and Strategic Advisory.

hero:
  name: "Artha Advisory"
  text: "Integrity. Insight. Innovation."
  tagline: We bridge the gap between traditional accounting and the evolving needs of a globalized economy.
  actions:
    - theme: brand
      text: Meet the Team
      link: /about/team
    - theme: alt
      text: Our Journey
      link: #our-journey

features:
  - title: Pandey S. & Associates
    details: Market leaders in statutory auditing, tax litigation, and corporate governance.
    icon: ⚖️
    link: /about/pandey-associates
    linkText: Learn More →
  
  - title: Bimal Prasad Bhusal & Associates
    details: Specialists in complex tax restructuring, strategic consultancy, and international accounting standards.
    icon: 🌏
    link: /about/bhusal-prasad-associates
    linkText: Learn More →
  
  - title: Bhusal & Associates
    details: Experts in high-caliber assurance and public financial management for institutional integrity.
    icon: 🛡️
    link: /about/bhusal-associates
    linkText: Learn More →
---

<div class="home-content-container">

<div class="about-intro" style="text-align: center; max-width: 900px; margin: 4rem auto;">
  <p style="font-size: 1.2rem; line-height: 1.85; color: var(--vp-c-text-1); margin-bottom: 1.5rem;">
    A premier professional services firm with offices in <strong style="color: var(--vp-c-brand-1);">Bharatpur, Kathmandu, Pokhara, Biratnagar, and Kawasoti</strong> — redefining assurance, advisory, and financial consultancy in Nepal.
  </p>
  <a href="#about-full-story" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--vp-c-brand-1); font-weight: 600; text-decoration: none; font-size: 1rem;">Read Our Full Story ↓</a>
</div>

<div class="explore-section">
  <h2 class="explore-title">Explore More</h2>
  <div class="explore-grid">
    <a href="/about/team" class="card link-card image-card" style="--card-bg: url('/images/headers/service-consulting.jpg')">
      <h3>👥 Leadership Team</h3>
      <p>Meet the partners driving our excellence.</p>
    </a>
    <a href="/about/values" class="card link-card image-card" style="--card-bg: url('/images/headers/service-legal.jpg')">
      <h3>💎 Core Values</h3>
      <p>Integrity, Excellence, Innovation, and Client-Centricity.</p>
    </a>
    <a href="/about/why-us" class="card link-card image-card" style="--card-bg: url('/images/industries/ind-tech.jpg')">
      <h3>🎯 Why Partner With Us?</h3>
      <p>Technical precision, proactive approach, and proven results.</p>
    </a>
    <a href="/about/founder-message" class="card link-card image-card" style="--card-bg: url('/images/home/hero-main.jpg')">
      <h3>✉️ Founder's Message</h3>
      <p>A commitment from our Managing Director.</p>
    </a>
    <a href="/about/gallery" class="card link-card image-card" style="--card-bg: url('/images/gallery/industry-banking.jpg')">
      <h3>📸 Life at Artha</h3>
      <p>Culture, collaboration, and community impact.</p>
    </a>
    <a href="/about/awards" class="card link-card image-card" style="--card-bg: url('/images/headers/service-advisory.jpg')">
      <h3>🏆 Awards & Recognitions</h3>
      <p>Honoring excellence and commitment to quality.</p>
    </a>
  </div>
</div>

<StrategicGrid />

<div id="our-journey" style="margin-top: 6rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider);">
  <h2 style="text-align: center; font-size: 2rem; font-weight: 700; margin-bottom: 3rem;">Our Journey</h2>
  <Timeline :items="[
    { year: '2003', desc: 'Established as Sole Proprietorship in Bharatpur.' },
    { year: '2021', desc: 'Expansion to Biratnagar.' },
    { year: '2024', desc: 'Expansion to Kathmandu & Kawasoti.' },
    { year: '2026', desc: 'Extension counters in Bharatpur & Pokhara.' }
  ]" />
</div>

<div id="about-full-story" style="margin-top: 6rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider);">
  <h2 style="text-align: center; font-size: 2rem; font-weight: 700; margin-bottom: 2rem;">Our Story</h2>
  <div style="max-width: 900px; margin: 0 auto;">
    <p style="font-size: 1.05rem; line-height: 1.85; color: var(--vp-c-text-2); margin-bottom: 1.5rem;">
      Artha Advisory is a premier professional services firm dedicated to redefining the landscape of assurance, advisory, and financial consultancy in Nepal. Founded on the principles of integrity, insight, and innovation, we bridge the gap between traditional accounting and the evolving needs of a globalized economy. Our forward-looking vision positions financial services as a catalyst for growth rather than a mere procedural necessity. By moving beyond "box-ticking," we provide value-driven solutions that empower clients across diverse sectors—including manufacturing, hydropower, technology, and the development sector (INGOs/NGOs)—to navigate complex regulatory environments with absolute confidence.
    </p>
    <p style="font-size: 1.05rem; line-height: 1.85; color: var(--vp-c-text-2);">
      Our strength lies in a synergistic approach that combines the energy and agility of a modern consultancy with the seasoned wisdom of experienced professionals. We leverage innovative practices and creative auditing methodologies to provide deep insights into business performance and sustainability while offering a one-stop solution for tax, financial outsourcing, and strategic risk management. At Artha Advisory, we place our clients' values at the forefront, fostering close collaborations to ensure our strategies are tailored to the unique heartbeat of each organization. We don't just measure success through numbers; we measure it through the sustainable growth and lasting trust we build.
    </p>
  </div>
</div>

</div>

<style>
/* Premium Card Styles */
.card {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(20, 125, 52, 0.05), rgba(11, 69, 29, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(20, 125, 52, 0.15);
  border-color: var(--vp-c-brand-1);
}

.card:hover::before {
  opacity: 1;
}

/* Image-backed cards */
.image-card {
  position: relative;
  z-index: 1;
  background-color: var(--vp-c-bg-soft);
}

.image-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--card-bg);
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -2;
  transition: all 0.4s ease;
  filter: grayscale(100%);
}

.image-card:hover::after {
  opacity: 0.25;
  filter: grayscale(0%);
  transform: scale(1.05);
}

.image-card:hover {
  border-color: var(--vp-c-brand-soft);
}

.link-card {
  text-decoration: none !important;
  color: inherit;
  display: block;
}

.card h3 {
  margin-top: 0;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
}

.card p, .card ul {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* Strategic Section grid */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

/* Explore Section grid */
.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Timeline Component handles Timeline Polish */

/* Layout Container */
.home-content-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 4rem 24px;
}
@media (min-width: 640px) {
  .home-content-container {
    padding: 6rem 48px;
  }
}

/* Hero Override for About */
.VPDoc { padding-top: 0 !important; }
.VPDoc .container { max-width: 100% !important; padding: 0 !important; }

.VPHomeHero {
  position: relative;
  padding-top: 8rem !important;
  padding-bottom: 8rem !important;
  background-color: var(--vp-c-bg);
  overflow: hidden;
}

/* Specific About Hero Image */
.VPHomeHero::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('/images/home/hero-main.jpg'); /* Reuse main hero */
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  filter: grayscale(100%);
  z-index: 0;
}

.VPHomeHero::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at top right, rgba(20, 125, 52, 0.15), transparent 50%),
              radial-gradient(circle at bottom left, rgba(20, 125, 52, 0.1), transparent 50%);
  z-index: 0;
}

.VPHomeHero .container {
  position: relative;
  z-index: 2;
}
</style>

