<script setup>
import { ref } from 'vue'

defineProps({
  jobs: {
    type: Array,
    required: true
  },
  contactEmail: String
})

const selectedJob = ref(null)

const openModal = (job) => {
  selectedJob.value = job
  document.body.style.overflow = 'hidden'
  // Trigger Tally load after modal renders
  setTimeout(() => {
    if (typeof Tally !== "undefined") {
        Tally.loadEmbeds()
    } else {
        const iframes = document.querySelectorAll("iframe[data-tally-src]:not([src])")
        iframes.forEach(e => e.src = e.dataset.tallySrc)
    }
  }, 100)
}

const closeModal = () => {
  selectedJob.value = null
  document.body.style.overflow = ''
}

import { onMounted } from 'vue'

onMounted(() => {
    // Tally Embed Script
    const d = document
    const w = "https://tally.so/widgets/embed.js"
    const v = function() {
        if (typeof Tally !== "undefined") {
            Tally.loadEmbeds()
        } else {
            d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
                e.src = e.dataset.tallySrc
            })
        }
    }
    
    if (typeof Tally !== "undefined") {
        v()
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
        const s = d.createElement("script")
        s.src = w
        s.onload = v
        s.onerror = v
        d.body.appendChild(s)
    }
})
</script>

<template>
  <div class="job-hub">
    <div v-for="(job, index) in jobs" :key="index" class="job-card" @click="openModal(job)">
      <div class="card-content">
        <div class="job-header">
           <h3 class="job-title">{{ job.title }}</h3>
           <span class="job-type-badge">{{ job.type }}</span>
        </div>
        <div class="job-meta">
           <span>📍 {{ job.location }}</span>
           <span>💼 {{ job.experience }}</span>
        </div>
        <p class="job-snippet">{{ job.description }}</p>
        
        <div v-if="job.responsibilities && job.responsibilities.length" class="card-details-list">
          <h4>Key Responsibilities:</h4>
          <ul>
            <li v-for="res in job.responsibilities.slice(0, 3)" :key="res">{{ res }}</li>
          </ul>
        </div>
        
        <div v-if="job.requirements && job.requirements.length" class="card-details-list">
          <h4>Requirements:</h4>
          <ul>
            <li v-for="req in job.requirements.slice(0, 3)" :key="req">{{ req }}</li>
          </ul>
        </div>

        <button class="view-details-btn">Apply Now →</button>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="selectedJob" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">&times;</button>
          
          <div class="modal-header">
            <div class="modal-title-block">
              <h2>{{ selectedJob.title }}</h2>
              <div class="modal-meta">
                <span class="meta-tag">{{ selectedJob.type }}</span>
                <span class="meta-tag">{{ selectedJob.location }}</span>
                <span class="meta-tag">{{ selectedJob.experience }}</span>
              </div>
            </div>
          </div>
          
           <div class="modal-body">
             <div class="apply-section" style="margin-top: 0; padding-top: 0; border-top: none;">
                <div class="tally-form-container">
                    <iframe data-tally-src="https://tally.so/embed/aQ6o7E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" src="https://tally.so/embed/aQ6o7E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="200" style="height: 80vh;" frameborder="0" marginheight="0" marginwidth="0" title="Job application"></iframe>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.job-hub {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.job-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.job-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.job-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.job-type-badge {
  font-size: 0.75rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  padding: 4px 8px;
  border-radius: 12px;
  white-space: nowrap;
}

.job-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.job-snippet {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-details-list {
  margin-bottom: 1rem;
}

.card-details-list h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.4rem;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-details-list ul {
  padding-left: 1rem;
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.card-details-list li {
  margin-bottom: 0.2rem;
}

.view-details-btn {
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: none;
  border: 2px solid var(--vp-c-brand-1);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.view-details-btn:hover {
  background: var(--vp-c-brand-1);
  color: white;
  text-decoration: none;
}

/* Modal Styles - Shared with TeamHub logic nicely */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);
  z-index: 1000; display: flex; justify-content: center; align-items: center; padding: 20px;
}

.modal-content {
  background: var(--vp-c-bg); width: 100%; max-width: 700px; max-height: 90vh;
  border-radius: 16px; position: relative; overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--vp-c-divider);
  animation: modal-pop 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

@keyframes modal-pop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.close-btn {
  position: absolute; top: 15px; right: 20px; background: none; border: none;
  font-size: 2rem; line-height: 1; color: var(--vp-c-text-2); cursor: pointer; z-index: 10;
}

.modal-header {
  padding: 2rem 2rem 1.5rem; border-bottom: 1px solid var(--vp-c-divider);
}

.modal-title-block h2 { margin: 0; font-size: 1.8rem; color: var(--vp-c-text-1); margin-bottom: 0.8rem; }

.modal-meta { display: flex; gap: 0.8rem; flex-wrap: wrap; }
.meta-tag { background: var(--vp-c-bg-soft); padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; color: var(--vp-c-text-2); border: 1px solid var(--vp-c-divider); }

.modal-body { padding: 2rem; color: var(--vp-c-text-1); }
.modal-body h3 { font-size: 1.2rem; font-weight: 700; margin: 1.5rem 0 0.8rem; color: var(--vp-c-text-1); }
.modal-body ul { padding-left: 1.2rem; margin-bottom: 1.5rem; }
.modal-body li { margin-bottom: 0.5rem; color: var(--vp-c-text-2); }

.apply-section {
  margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider); text-align: center;
}
.apply-btn-large {
  display: inline-block; background: var(--vp-c-brand-1); color: white;
  padding: 0.8rem 2rem; border-radius: 30px; font-weight: 700; text-decoration: none;
  margin-top: 1rem; transition: background 0.2s;
}
.apply-btn-large:hover { background: var(--vp-c-brand-2); }
</style>
