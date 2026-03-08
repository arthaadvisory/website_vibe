import { createContentLoader } from 'vitepress'

export default createContentLoader('services/**/*.md', {
    transform(rawData) {
        const services = rawData
            .filter(page => page.url !== '/services/') // Exclude index page
            .map(page => {
                let category = page.frontmatter.category || 'Other'

                // Derive category from URL using a mapping object
                const categoryMap: Record<string, string> = {
                    '/services/audit/': 'Audit & Assurance',
                    '/services/tax/': 'Taxation & Regulatory',
                    '/services/advisory/': 'Advisory & Strategic Growth',
                    '/services/outsourcing/': 'Financial Outsourcing',
                    '/services/support/': 'Corporate Support',
                    '/services/business-advisory/': 'Business Advisory'
                }

                const matchedKey = Object.keys(categoryMap).find(key => page.url.includes(key))
                if (matchedKey) category = categoryMap[matchedKey]

                return {
                    title: page.frontmatter.title || 'Untitled',
                    url: page.url,
                    description: page.frontmatter.description,
                    icon: page.frontmatter.icon,
                    image: page.frontmatter.image,
                    category: category,
                    parent: page.frontmatter.parent,
                    parentLink: matchedKey || null,
                    details: page.frontmatter.details || [],
                    keywords: page.frontmatter.keywords || []
                }
            })
            .sort((a, b) => (a.title || '').localeCompare(b.title || ''))

        // Hydrate sibling relationships: services in the same category
        const byCategory: Record<string, typeof services> = {}
        services.forEach(s => {
            if (!byCategory[s.category]) byCategory[s.category] = []
            byCategory[s.category].push(s)
        })

        return services.map(s => ({
            ...s,
            siblings: byCategory[s.category]?.filter(sib => sib.url !== s.url).slice(0, 4) || []
        }))
    }
})
