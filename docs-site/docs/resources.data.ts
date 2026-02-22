import { createContentLoader } from 'vitepress'

export default createContentLoader('resources/**/*.md', {
    transform(rawData) {
        return rawData
            .filter(page => !page.url.endsWith('/') && !page.url.endsWith('index.html') && !page.frontmatter.draft)
            .map(page => {
                const type = page.url.includes('/guides/') ? 'Guide' :
                    page.url.includes('/tools/') ? 'Tool' :
                        page.url.includes('/templates/') ? 'Template' :
                            page.url.includes('/insights/') ? 'Blog' : 'Resource'

                const dateValue = page.frontmatter.date ? new Date(page.frontmatter.date) : null
                const dateStr = (dateValue && !isNaN(dateValue.getTime())) ? dateValue.toLocaleDateString('en-US') : ''

                const fallbacks: Record<string, string> = {
                    'Guide': '/images/headers/service-advisory.jpg',
                    'Tool': '/images/industries/ind-tech.jpg',
                    'Template': '/images/headers/service-outsourcing.jpg',
                    'Blog': '/images/gallery/industry-banking.jpg'
                }

                return {
                    title: page.frontmatter.title || 'Untitled',
                    url: page.url,
                    description: page.frontmatter.description,
                    date: dateStr,
                    type: type,
                    image: page.frontmatter.image || fallbacks[type] || '/images/home/hero-main.jpg',
                    icon: page.frontmatter.icon
                }
            })
            .sort((a, b) => {
                const dateA = a.date ? new Date(a.date).getTime() : 0
                const dateB = b.date ? new Date(b.date).getTime() : 0
                if (dateA || dateB) return dateB - dateA
                return (a.title || '').localeCompare(b.title || '')
            })
    }
})
