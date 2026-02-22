import { createContentLoader } from 'vitepress'

export default createContentLoader('services/**/*.md', {
    transform(rawData) {
        return rawData
            .filter(page => page.url !== '/services/') // Exclude index page
            .map(page => {
                let category = page.frontmatter.category || 'Other'

                // Derive category from URL if not explicitly set
                if (page.url.includes('/services/audit/')) category = 'Audit & Assurance'
                else if (page.url.includes('/services/tax/')) category = 'Taxation & Regulatory'
                else if (page.url.includes('/services/advisory/')) category = 'Advisory & Strategic Growth'
                else if (page.url.includes('/services/outsourcing/')) category = 'Financial Outsourcing'
                else if (page.url.includes('/services/support/')) category = 'Corporate Support'
                else if (page.url.includes('/services/business-advisory/')) category = 'Business Advisory'

                return {
                    title: page.frontmatter.title || 'Untitled',
                    url: page.url,
                    description: page.frontmatter.description,
                    icon: page.frontmatter.icon,
                    image: page.frontmatter.image,
                    category: category,
                    parent: page.frontmatter.parent,
                    details: page.frontmatter.details || []
                }
            })
            .sort((a, b) => (a.title || '').localeCompare(b.title || ''))
    }
})
