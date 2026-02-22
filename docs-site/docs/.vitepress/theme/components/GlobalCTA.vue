<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== 'home'" class="doc-footer-cta">
    <div class="cta-bg"></div>
    <div class="cta-accent"></div>
    <div class="cta-icon">💼</div>
    <div class="cta-content">
      <h3>Ready to optimize your financial strategy?</h3>
      <p>Contact our experts today for a consultation.</p>
    </div>
    <div class="cta-action">
      <a href="/contact" class="cta-btn">
        <span>Request a Proposal</span>
        <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.doc-footer-cta {
  margin-top: 4rem;
  padding: 2.5rem 2.5rem 2.5rem 3rem;
  border-radius: 16px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  isolation: isolate;
}

.cta-bg {
  position: absolute;
  inset: 0;
  background-image: url('/images/home/hero-main.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.05;
  z-index: -1;
  filter: grayscale(100%);
  transition: opacity 0.4s ease;
}

.doc-footer-cta:hover .cta-bg {
  opacity: 0.15;
  filter: grayscale(0%);
}

.doc-footer-cta:hover {
  box-shadow: 0 8px 30px rgba(20, 125, 52, 0.08);
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-soft);
}

.cta-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 4px 0 0 4px;
}

.cta-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.cta-content h3 {
  margin: 0 0 0.3rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.cta-content p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 28px;
  text-decoration: none !important;
  border-radius: 10px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white !important;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

/* Shimmer */
.cta-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: 0.5s;
}

.cta-btn:hover::after {
  left: 100%;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(20, 125, 52, 0.3);
}

.btn-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.3s;
}

.cta-btn:hover .btn-arrow {
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .doc-footer-cta {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  .cta-accent {
    left: 0;
    top: 0;
    bottom: auto;
    width: 100%;
    height: 4px;
    border-radius: 4px 4px 0 0;
  }
  .cta-icon {
    font-size: 2.5rem;
  }
}
</style>
