---
layout: home

hero:
  name: "Industries We Serve"
  text: "Specialized Expertise"
  tagline: Navigating the specific regulatory challenges of Nepal's key economic sectors.
  actions:
    - theme: brand
      text: Explore Sectors
      link: #sectors
    - theme: alt
      text: Book Consultation
      link: /contact

features:
  - title: Manufacturing & Trade
    details: Cost audit, inventory management, and EXIM compliance.
    icon: 🏭
  
  - title: Banking & Insurance
    details: NFRS implementation, risk-based audit, and regulatory reporting.
    icon: 🏦
  
  - title: Hydropower & Energy
    details: Project finance, PPA advisory, and tax holiday optimization.
    icon: ⚡
---

<div class="home-content-container">

<div id="sectors" style="margin-top: 4rem; text-align: center;">
  <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">Sector Expertise</h2>
  <p style="color: var(--vp-c-text-2); max-width: 600px; margin: 0 auto 3rem;">
    Our sector-specific teams bring deep domain knowledge to help you navigate compliance and drive growth.
  </p>
  
  <IndustryList />
</div>

</div>

<style>
/* Hero Override for Industries */
.VPDoc { padding-top: 0 !important; }
.VPDoc .container { max-width: 100% !important; padding: 0 !important; }

.VPHomeHero {
  position: relative;
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;
  background-color: var(--vp-c-bg);
  overflow: hidden;
}

.VPHomeHero::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('/images/home/hero-main.jpg'); /* Or industry specific if available */
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
</style>
