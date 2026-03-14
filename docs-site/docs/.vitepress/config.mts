import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  transformPageData(pageData) {
    const imageUrl = pageData.frontmatter.image || '/og_image_test.jpg'
    const description = pageData.frontmatter.description || pageData.description || "Nepal's Leading Tax & Audit Firm"
    const title = pageData.frontmatter.title ? `${pageData.frontmatter.title} | Artha Advisory` : 'Artha Advisory'
    pageData.frontmatter.head ??= []
    
    // Canonical Tag Implementation
    let path = pageData.relativePath.replace(/\.md$/, '')
    if (path.endsWith('index')) {
      path = path.slice(0, -5)
    }
    const slug = path.replace(/\/$/, '')
    const canonicalUrl = `https://arthaadvisory.com.np${slug ? '/' + slug : ''}`
    
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:image', content: `https://arthaadvisory.com.np${imageUrl}` }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'description', content: description }]
    )
  },
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
    hostname: 'https://arthaadvisory.com.np',
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
  lastUpdated: false,

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
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:site_name', content: 'Artha Advisory' }],
    ['link', { rel: 'preload', href: '/images/home/hero-main.jpg', as: 'image' }],

    // Font Preloading
    ['link', { rel: 'preload', href: '/fonts/FiraCode-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: '/fonts/FiraCode-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],

    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7XWG32RC28' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7XWG32RC28');`
    ],

    ['script', { type: 'application/ld+json' },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Artha Advisory",
        "url": "https://arthaadvisory.com.np",
        "logo": "https://arthaadvisory.com.np/logo-colored.png",
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
          },
          {
            "@type": "LocalBusiness",
            "name": "Artha Advisory - Kawasoti Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Infront of Tax Office, Kawasoti",
              "addressLocality": "Kawasoti",
              "addressRegion": "Lumbini",
              "addressCountry": "NP"
            },
            "telephone": "+977-9855063088"
          },
          {
            "@type": "LocalBusiness",
            "name": "Artha Advisory - Chormara Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Madyabindu-08, Ranitar",
              "addressLocality": "Chitwan",
              "addressRegion": "Bagmati",
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
  },
  */
  vite: {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
        exclude: undefined,
        include: undefined,
        includePublic: true,
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                },
                cleanupIDs: {
                  minify: false,
                  remove: false,
                },
                convertPathData: false,
              },
            },
            'sortAttrs',
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
              },
            },
          ],
        },
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 80,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 80,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 80,
        },
        webp: {
          // https://sharp.pixelplumbing.com/api-output#webp
          lossless: true,
        },
        avif: {
          // https://sharp.pixelplumbing.com/api-output#avif
          lossless: true,
        },
      }),
    ],
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('medium-zoom')) return 'vendor-zoom'
            }
          }
        }
      }
    },
    ssr: {
      noExternal: ['vitepress-plugin-mermaid', 'mark.js']
    },
    optimizeDeps: {
      include: ['mermaid']
    }
  }
}))
