import { createContentLoader } from 'vitepress'

export default createContentLoader('industries/**/*.md', {
    transform(rawData) {
        return rawData
            .filter(page => page.url !== '/industries/' && !page.url.includes('/index') && !page.url.endsWith('.bak'))
            .map(page => {
                return {
                    title: page.frontmatter.title || 'Untitled Industry',
                    url: page.url,
                    description: page.frontmatter.description || 'Expert financial and regulatory guidance for this sector.',
                    icon: page.frontmatter.icon || '🏢'
                }
            })
            .sort((a, b) => (a.title || '').localeCompare(b.title || ''))
    }
})
