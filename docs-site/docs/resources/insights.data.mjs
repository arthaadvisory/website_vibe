import { createContentLoader } from 'vitepress'

export default createContentLoader('resources/insights/*.md', {
    excerpt: true,
    transform(raw) {
        return raw
            .filter(({ frontmatter }) => !frontmatter.draft)
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title || 'Untitled',
                url,
                excerpt,
                date: frontmatter.date,
                author: frontmatter.author || 'Artha Team'
            }))
            .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    }
})
