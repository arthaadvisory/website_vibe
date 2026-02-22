---
layout: page
---

<script setup>
import { data as posts } from './insights.data.mjs'

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

# Latest Insights

Expert analysis and updates from our team.

<div class="posts-grid">
  <div v-for="post in posts" :key="post.url" class="post-card">
    <div class="post-content">
      <div class="post-meta-top">
        <span class="category-pill" v-if="post.author">{{ post.author }}</span>
        <span class="date-pill">{{ formatDate(post.date) }}</span>
      </div>
      <h2 class="post-heading">
        <a :href="post.url">{{ post.title }}</a>
      </h2>
      <div v-if="post.excerpt" class="post-summary" v-html="post.excerpt"></div>
      <div class="post-footer">
        <a :href="post.url" class="action-link">Read Analysis →</a>
      </div>
    </div>
  </div>
</div>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.post-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
}

.post-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
}

.category-pill {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
}

.date-pill {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.post-heading {
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  line-height: 1.3;
  border: none;
}

.post-heading a {
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.post-heading a:hover {
  color: var(--vp-c-brand-1);
}

.post-summary {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-footer {
  margin-top: auto;
}

.action-link {
  display: inline-block;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.action-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 640px) {
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
