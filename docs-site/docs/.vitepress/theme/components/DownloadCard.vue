<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    default: 'PDF' // PDF, EXCEL, DOC, ZIP
  },
  size: {
    type: String,
    default: ''
  }
})

const icons = {
  PDF: '📄',
  EXCEL: '📊',
  DOC: '📝',
  ZIP: '📦'
}

const typeColors = {
  PDF: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
  EXCEL: { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0' },
  DOC: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
  ZIP: { bg: '#faf5ff', text: '#9333ea', border: '#e9d5ff' }
}
</script>

<template>
  <div class="download-card">
    <div class="icon-box" :style="{ background: typeColors[fileType]?.bg || '#f3f4f6' }">
      {{ icons[fileType] || '📄' }}
    </div>
    <div class="content">
      <h4>{{ title }}</h4>
      <p v-if="description">{{ description }}</p>
      <div class="meta">
        <span class="badge" :style="{ 
          background: typeColors[fileType]?.bg, 
          color: typeColors[fileType]?.text, 
          borderColor: typeColors[fileType]?.border 
        }">{{ fileType }}</span>
        <span v-if="size" class="size">• {{ size }}</span>
      </div>
    </div>
    <div class="action">
      <a :href="link" download class="download-btn">
        <span>Download</span>
        <svg class="dl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.download-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.download-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(20, 125, 52, 0.08);
  border-color: var(--vp-c-brand-soft);
}

.icon-box {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 12px;
  margin-right: 1.5rem;
  flex-shrink: 0;
  transition: transform 0.3s;
}

.download-card:hover .icon-box {
  transform: scale(1.08);
}

.content {
  flex: 1;
  min-width: 0;
}

.content h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.content p {
  margin: 0.25rem 0 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.badge {
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: 1px solid;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--vp-c-brand-1);
  color: white !important;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none !important;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.download-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: 0.5s;
}

.download-btn:hover::after {
  left: 100%;
}

.download-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(20, 125, 52, 0.25);
}

.dl-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s;
}

.download-card:hover .dl-icon {
  animation: bounce-down 0.6s ease-in-out;
}

@keyframes bounce-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

@media (max-width: 600px) {
  .download-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  .icon-box { margin-right: 0; }
  .action { width: 100%; }
  .download-btn { justify-content: center; width: 100%; }
}
</style>
