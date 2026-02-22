---
layout: home

hero:
  name: "Knowledge Bank"
  text: "Insights that Empower"
  tagline: Expert analysis, regulatory updates, and strategic guidance for Nepal's financial landscape.
  actions:
    - theme: brand
      text: Browse Articles
      link: #latest-insights
    - theme: alt
      text: Subscribe
      link: #newsletter

features:
  - title: Regulatory Updates
    details: Timely breakdowns of new directives from IRD, NRB, and OCR.
    icon: 📢
  
  - title: In-Depth Analysis
    details: Comprehensive articles on tax planning, audit standards, and business strategy.
    icon: 🧠
  
  - title: Case Studies
    details: Real-world examples of how we solve complex financial challenges.
    icon: 📂
---

<div class="home-content-container">

<div id="latest-insights" style="margin-top: 4rem;">
  <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; text-align: center;">Latest Articles</h2>
  <p style="color: var(--vp-c-text-2); text-align: center; max-width: 600px; margin: 0 auto 3rem;">
    Stay informed with our expert commentary on the issues that matter to your business.
  </p>
  <ResourceList type="Blog" />
</div>

<div id="newsletter" class="newsletter-premium" style="margin-top: 5rem; padding: 4rem 2rem; background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); border-radius: 16px; text-align: center;">
  <h2>Stay Ahead with Artha Insights</h2>
  <p>
    Subscribe to our newsletter for the latest updates on tax laws, regulatory changes, and financial trends in Nepal.
  </p>
  <form style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; max-width: 500px; margin: 0 auto;">
    <input type="email" placeholder="Enter your email address" required>
    <button type="submit">Subscribe Now</button>
  </form>
</div>

</div>

<style>
.home-content-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}
@media (min-width: 640px) {
  .home-content-container {
    padding: 0 48px;
  }
}
</style>
