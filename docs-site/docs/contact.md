---
layout: home

hero:
  name: "Contact Artha Advisory"
  text: "Let's Start a Conversation"
  tagline: Visit our offices in Chitwan, Kathmandu, Pokhara, Biratnagar, and Kawasoti.
  actions:
    - theme: brand
      text: Book Consultation
      link: #contact-form
    - theme: alt
      text: Email Us
      link: mailto:arthaadvisory1@gmail.com

features:
  - title: National Reach
    details: 5 strategic locations serving businesses across Nepal.
    icon: 🇳🇵

  - title: Emergency Support
    details: Urgent compliance and raid support available 8 AM - 8 PM.
    icon: 🚨

  - title: Digital First
    details: Book virtual consultations or visit us in person.
    icon: 💻
---

<div class="home-content-container">

<div id="contact-form" style="margin-top: 4rem;">

Artha Advisory operates across **5 strategic locations** in Nepal to serve you better. Whether you need a local auditor in Chitwan or an FDI consultant in Kathmandu, our team is ready.

---

## 📩 Email Us Directly

**General Inquiries:**
*   📧 [arthaadvisory1@gmail.com](mailto:arthaadvisory1@gmail.com)

**Partner Direct Governance:**
*   **Audit & Assurance:** [arthaadvisory1@gmail.com](mailto:arthaadvisory1@gmail.com)
*   **Tax & FDI:** [arthaadvisory1@gmail.com](mailto:arthaadvisory1@gmail.com)

---

## 📍 Our Offices

<ContactLayout 
  :cards="[
    {
      icon: '🏢',
      title: 'Head Office (Chitwan)',
      details: 'Bharatpur-12, Near Paras Buspark\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Bharatpur-12+Chitwan+Nepal' }
      ]
    },
    {
      icon: '🏛️',
      title: 'Kathmandu Office',
      details: 'Teku, Kathmandu\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Teku+Kathmandu+Nepal' }
      ]
    },
    {
      icon: '🌊',
      title: 'Pokhara Office',
      details: 'Pokhara-17, Birauta\nPhone: 9845360915',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Birauta+Pokhara-17+Nepal' }
      ]
    },
    {
      icon: '🏗️',
      title: 'Biratnagar Office',
      details: 'Biratnagar-09, Main Road\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Biratnagar-09+Nepal' }
      ]
    },
    {
      icon: '📍',
      title: 'Kawasoti Office',
      details: 'Infront of Tax Office, Kawasoti\nPhone: 9855063088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Kawasoti+Nawalparasi+Nepal' }
      ]
    },
    {
      icon: '🌾',
      title: 'Chormara Office',
      details: 'Madyabindu-08, Ranitar\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Madyabindu-08+Ranitar+Chitwan+Nepal' }
      ]
    }
  ]"
  formTitle="Book a Discovery Call"
  :formLabels="{
    name: 'Full Name',
    email: 'Work Email',
    subject: 'Service Interest (e.g., Audit, Tax, FDI)',
    message: 'Briefly describe your business challenge...',
    submit: 'Request Call Back'
  }"
  mapTitle="Find Us"
/>

</div>

<div class="emergency-banner" style="margin-top: 5rem; text-align: center; padding: 3rem; background: #fee2e2; border-radius: 12px; border: 1px solid #fecaca;">
  <h3 style="color: #991b1b; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Need Emergency Tax Support?</h3>
  <p style="color: #b91c1c; margin-bottom: 1.5rem;">For urgent IRD notices or raid situations, call our <strong>Emergency Compliance Hotline</strong>:</p>
  <a href="tel:+9779855053088" style="font-size: 2rem; font-weight: 800; color: #dc2626; text-decoration: none;">9855 053 088</a>
  <p style="color: #7f1d1d; font-size: 0.875rem; margin-top: 0.5rem;">(Available 8 AM - 8 PM)</p>
</div>

</div>

<style>
/* Hero Override for Contact */
.VPDoc { padding-top: 0 !important; }
.VPDoc .container { max-width: 100% !important; padding: 0 !important; }

.VPHomeHero {
  position: relative;
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;
  background-color: var(--vp-c-bg);
  overflow: hidden;
}

/* Specific Contact Hero Image */
.VPHomeHero::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('/images/home/hero-main.jpg'); /* Or specific communication/phone image */
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
