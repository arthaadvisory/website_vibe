---
layout: home
description: Contact Artha Advisory for expert audit, tax, and strategic consulting services in Nepal. Visit our offices in Kathmandu, Chitwan, Pokhara, Biratnagar, and Kawasoti.

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

<ContactLayout 
  :cards="[
    {
      icon: '🏢',
      title: 'Head Office (Chitwan)',
      details: 'Bharatpur-12, Near Paras Buspark\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Bharatpur-12+Chitwan+Nepal', target: '_blank', rel: 'noopener noreferrer' }
      ]
    },
    {
      icon: '🏛️',
      title: 'Kathmandu Office',
      details: 'Teku, Kathmandu\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Teku+Kathmandu+Nepal', target: '_blank', rel: 'noopener noreferrer' }
      ]
    },
    {
      icon: '🌊',
      title: 'Pokhara Office',
      details: 'Pokhara-17, Birauta\nPhone: 9845360915',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Birauta+Pokhara-17+Nepal', target: '_blank', rel: 'noopener noreferrer' }
      ]
    },
    {
      icon: '🏗️',
      title: 'Biratnagar Office',
      details: 'Biratnagar-09, Main Road\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Biratnagar-09+Nepal', target: '_blank', rel: 'noopener noreferrer' }
      ]
    },
    {
      icon: '📍',
      title: 'Kawasoti Office',
      details: 'Infront of Tax Office, Kawasoti\nPhone: 9855063088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Kawasoti+Nawalparasi+Nepal', target: '_blank', rel: 'noopener noreferrer' }
      ]
    },
    {
      icon: '🌾',
      title: 'Chormara Office',
      details: 'Madyabindu-08, Ranitar\nPhone: 9855053088',
      links: [
        { label: 'Navigate on Map', href: 'https://www.google.com/maps/search/Madyabindu-08+Ranitar+Chitwan+Nepal', target: '_blank', rel: 'noopener noreferrer' }
      ]
    }
  ]"
  formTitle="Book a Discovery Call"
  mapTitle="Find Us"
/>

</div>

<EmergencyBanner />

</div>
