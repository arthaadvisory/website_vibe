import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#f1f8f3',
      primaryTextColor: '#1f2937',
      primaryBorderColor: '#147D34',
      lineColor: '#147D34',
      secondaryColor: '#f3f4f6',
      tertiaryColor: '#ffffff'
    }
  },
  ignoreDeadLinks: false,
  cleanUrls: true,
  title: "Artha Advisory",
  description: "Nepal's Leading Tax & Audit Firm",

  sitemap: {
    hostname: 'https://arthaadvisory.com',
    transformItems(items) {
      return items.map((item) => {
        if (item.url.includes('/services/')) {
          item.priority = 0.9
        } else if (item.url.includes('/resources/guides/')) {
          item.priority = 0.8
        } else {
          item.priority = 0.6
        }
        return item
      })
    }
  },
  lastUpdated: true,

  // i18n Configuration
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },


  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-colored.png' }],
    ['meta', { name: 'theme-color', content: '#147D34' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:site_name', content: 'Artha Advisory' }],
    ['meta', { name: 'og:image', content: 'https://arthaadvisory.com/og-image.jpg' }],

    // Fonts Phase 7
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code&display=swap', rel: 'stylesheet' }],
    ['script', { type: 'application/ld+json' },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Artha Advisory",
        "url": "https://arthaadvisory.com",
        "logo": "https://arthaadvisory.com/logo-colored.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+977-9855053088",
          "email": "arthaadvisory1@gmail.com",
          "contactType": "customer service",
          "areaServed": "NP",
          "availableLanguage": ["English", "Nepali"]
        },
        "department": [
          {
            "@type": "LocalBusiness",
            "name": "Artha Advisory - head Office (Chitwan)",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bharatpur-12, Near Paras Buspark",
              "addressLocality": "Chitwan",
              "addressRegion": "Bagmati",
              "postalCode": "44200",
              "addressCountry": "NP"
            },
            "telephone": "+977-9855053088"
          },
          {
            "@type": "LocalBusiness",
            "name": "Artha Advisory - Kathmandu Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Teku",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "addressCountry": "NP"
            },
            "telephone": "+977-9855053088"
          },
          {
            "@type": "LocalBusiness",
            "name": "Artha Advisory - Pokhara Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pokhara-17, Birauta",
              "addressLocality": "Pokhara",
              "addressRegion": "Gandaki",
              "addressCountry": "NP"
            },
            "telephone": "+977-9855053088"
          },
          {
            "@type": "LocalBusiness",
            "name": "Artha Advisory - Biratnagar Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Biratnagar-09, Main Road",
              "addressLocality": "Biratnagar",
              "addressRegion": "Koshi",
              "addressCountry": "NP"
            },
            "telephone": "+977-9855053088"
          }
        ]
      })
    ]
  ],
  themeConfig: {
    // Native Search
    search: {
      provider: 'local'
    },

    // Website Logo
    logo: '/logo-colored.png',
    siteTitle: 'Artha Advisory',

    // Native Edit Link (Removed as per user request)
    // editLink: {
    //   pattern: 'https://github.com/artha-advisory/docs-site/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // Detailed Outline
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Services', link: '/services/' },
      { text: 'Industries', link: '/industries/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Careers', link: '/careers/' },
      { text: 'Contact', link: '/contact' }
    ],


    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/artha.advisory.2025' },
      { icon: 'instagram', link: 'https://www.instagram.com/artha_advisory_chitwan' },
      { icon: 'tiktok', link: 'https://www.tiktok.com/@artha.advisory5' }
    ]
  },
  markdown: {
    math: false,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  /*
  buildEnd: async (config) => {
    // Dynamic import to avoid build issues
    const { default: createFeed } = await import('../feed.ts')
    await createFeed(config)
  }
  */
}))
