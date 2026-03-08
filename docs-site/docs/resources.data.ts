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

                // Basic reading time calculation based on roughly 200 words per minute
                const wordCount = page.src ? page.src.split(/\s+/).length : 0
                const readingTime = Math.max(1, Math.ceil(wordCount / 200))

                return {
                    title: page.frontmatter.title || 'Untitled',
                    url: page.url,
                    description: page.frontmatter.description,
                    date: dateStr,
                    type: type,
                    image: page.frontmatter.image || fallbacks[type] || '/images/home/hero-main.jpg',
                    icon: page.frontmatter.icon,
                    readingTime: readingTime,
                    tags: page.frontmatter.tags || []
                }
            })
            .sort((a, b) => {
                const dateA = a.date ? new Date(a.date).getTime() : 0
                const dateB = b.date ? new Date(b.date).getTime() : 0

                // If both dates are valid, sort descending
                if (!isNaN(dateA) && !isNaN(dateB) && (dateA || dateB)) {
                    return dateB - dateA
                }

                // Fallback to alphabetical sorting if dates are missing or invalid
                return (a.title || '').localeCompare(b.title || '')
            })
    }
})
