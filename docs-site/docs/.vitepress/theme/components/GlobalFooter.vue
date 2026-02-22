<script setup>
import { useData } from 'vitepress'

const { site, theme } = useData()

const columns = [
  {
    title: 'Services',
    links: [
      { text: 'Audit & Assurance', link: '/services/audit' },
      { text: 'Tax & Compliance', link: '/services/tax' },
      { text: 'Business Advisory', link: '/services/advisory' },
      { text: 'NFRS Advisory', link: '/services/tax/nfrs-advisory' }
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', link: '/about/' },
      { text: 'Our Team', link: '/about/team' },
      { text: 'Careers', link: '/careers' },
      { text: 'Contact Us', link: '/contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', link: '/privacy-policy' },
      { text: 'Terms of Service', link: '/terms' }
    ]
  }
]

const contactDetails = [
  { 
    icon: '📍', 
    text: 'Head Office: Pandey S & Associates (Bharatpur-12)', 
    link: 'https://maps.app.goo.gl/3HA48Djt8XkNso849' 
  },
  { 
    icon: '🏢', 
    text: 'Bhusal & Associates', 
    link: 'https://maps.app.goo.gl/U91wFngSjcGQPTDa9' 
  },
  { 
    icon: '📞', 
    isHtml: true,
    text: '<a href="tel:+9779855053088" style="color:inherit;text-decoration:none">+977 985-5053088</a> / <a href="tel:+9779855063088" style="color:inherit;text-decoration:none">985-5063088</a>'
  },
  { 
    icon: '✉️', 
    text: 'arthaadvisory1@gmail.com', 
    link: 'mailto:arthaadvisory1@gmail.com' 
  }
]

const copyrightText = `© ${new Date().getFullYear()} Artha Advisory. All rights reserved.`
</script>

<template>
  <footer class="global-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h2 class="brand-title">Artha Advisory</h2>
        <p class="brand-desc">
          Empowering businesses with financial excellence and integrity.
        </p>
        <div class="social-links">
          <a v-if="theme.socialLinks" v-for="social in theme.socialLinks" :key="social.link" :href="social.link" target="_blank" class="social-icon">
             <svg v-if="social.icon === 'facebook'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             <svg v-else-if="social.icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             <svg v-else-if="social.icon === 'tiktok'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9v17z"></path></svg>
             <span v-else>{{ social.icon }}</span>
          </a>
        </div>
      </div>
      
      <div class="footer-links-grid">
        <div v-for="col in columns" :key="col.title" class="footer-col">
          <h3 class="col-title">{{ col.title }}</h3>
          <ul>
            <li v-for="link in col.links" :key="link.text">
              <a :href="link.link" class="footer-link">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        
        <div class="footer-col contact-col">
          <h3 class="col-title">Contact Details</h3>
          <div v-for="(item, index) in contactDetails" :key="index" class="contact-item">
             <span class="c-icon">{{ item.icon }}</span>
             <div v-if="item.isHtml" v-html="item.text"></div>
             <a v-else-if="item.link" :href="item.link" class="contact-link" target="_blank">{{ item.text }}</a>
             <span v-else>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-trust-signals">
      <div class="trust-signal">
        <span class="trust-icon">⚖️</span>
        <span class="trust-text">ICAN Registered Firm</span>
      </div>
      <div class="trust-signal">
        <span class="trust-icon">🛡️</span>
        <span class="trust-text">ISO 9001:2015 Certified</span>
      </div>
      <div class="trust-signal">
        <span class="trust-icon">🖋️</span>
        <span class="trust-text">Peer Reviewed Unit</span>
      </div>
    </div>

    <div class="footer-bottom">
      <p>{{ copyrightText }}</p>
      <p class="developer-credit">
        Developed by <a href="https://scholar.google.com/citations?user=WZlKvaoAAAAJ&hl=en" target="_blank" rel="noopener">Sundeep Dawadi</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.global-footer {
  background-color: #0b451d; /* Dark Artha Green */
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 5rem 1.5rem 2rem;
  margin-top: 0;
}

.footer-container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 4rem;
}

@media (max-width: 960px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.brand-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
}

.brand-desc {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 320px;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
  background: var(--vp-c-brand-2);
  color: white;
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-2);
}

.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .footer-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-links-grid {
    grid-template-columns: 1fr;
  }
}

.col-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;
}

.footer-link:hover {
  color: #ffffff;
  padding-left: 4px;
}

.contact-item {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.contact-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-trust-signals {
  max-width: var(--vp-layout-max-width);
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.trust-signal {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.trust-signal:hover {
  opacity: 1;
}

.trust-icon {
  font-size: 1.2rem;
}

.trust-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-bottom {
  max-width: var(--vp-layout-max-width);
  margin: 2rem auto 0;
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
}

.developer-credit {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.developer-credit a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dashed rgba(255,255,255,0.4);
}

.developer-credit:hover {
  opacity: 1;
}

.developer-credit a:hover {
  color: #ffffff;
  border-bottom-style: solid;
}
</style>
