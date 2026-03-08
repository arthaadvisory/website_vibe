<script setup>
import { ref } from 'vue'

const props = defineProps({
  members: {
    type: Array,
    default: () => []
  }
})

const selectedMember = ref(null)

const openModal = (member) => {
  selectedMember.value = member
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMember.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="team-roster">
    <div class="team-grid">
      <button 
        v-for="member in members" 
        :key="member.name" 
        class="member-card"
        @click="openModal(member)"
      >
        <div class="member-avatar">
          <img v-if="member.avatar" :src="member.avatar" :alt="member.name" loading="lazy" />
          <div v-else class="avatar-placeholder">{{ member.name?.charAt(0) }}</div>
        </div>
        <h3>{{ member.name }}</h3>
        <p class="member-role">{{ member.title }}</p>
      </button>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedMember" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>
            <div class="modal-header">
              <div class="modal-avatar">
                <img v-if="selectedMember.avatar" :src="selectedMember.avatar" :alt="selectedMember.name" />
                <div v-else class="avatar-placeholder large">{{ selectedMember.name?.charAt(0) }}</div>
              </div>
              <div class="modal-info">
                <h2>{{ selectedMember.name }}</h2>
                <p class="modal-role">{{ selectedMember.title }}</p>
              </div>
            </div>
            <div class="modal-body" v-if="selectedMember.bio">
              <p>{{ selectedMember.bio }}</p>
            </div>
            <div class="modal-links" v-if="selectedMember.links?.length">
              <a v-for="link in selectedMember.links" :key="link.link" :href="link.link" target="_blank" rel="noopener noreferrer" class="social-link">
                {{ link.icon }} {{ link.label || 'Link' }}
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.member-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-soft);
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3px solid var(--vp-c-brand-soft);
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 2rem;
  font-weight: 700;
}

.avatar-placeholder.large {
  font-size: 3rem;
}

.member-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.member-role {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--vp-c-bg);
  border-radius: 20px;
  max-width: 480px;
  width: 100%;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--vp-c-bg-soft);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.modal-close:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.modal-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid var(--vp-c-brand-soft);
}

.modal-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.modal-role {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.modal-body p {
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.modal-links {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-link {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.social-link:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content {
  transform: scale(0.95) translateY(20px);
}

.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(20px);
}
</style>
