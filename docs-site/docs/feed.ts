import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import path from 'path'

const hostname = 'https://arthaadvisory.com'

export default async (config) => {
    const feed = new Feed({
        title: 'Artha Advisory Insights',
        description: 'Latest financial updates and expert analysis from Artha Advisory.',
        id: hostname,
        link: hostname,
        language: 'en',
        image: `${hostname}/logo.png`,
        favicon: `${hostname}/favicon.ico`,
        copyright: 'Copyright © 2026 Artha Advisory'
    })

    const posts = await createContentLoader('resources/insights/*.md', {
        excerpt: true,
        render: false
    }).load()

    posts.sort(
        (a, b) =>
            +new Date(b.frontmatter.date) -
            +new Date(a.frontmatter.date)
    )

    for (const { url, frontmatter, html } of posts) {
        feed.addItem({
            title: frontmatter.title,
            id: `${hostname}${url}`,
            link: `${hostname}${url}`,
            description: frontmatter.description,
            content: html,
            author: [
                {
                    name: frontmatter.author,
                    link: frontmatter.twitter
                }
            ],
            date: frontmatter.date
        })
    }

    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
