<script setup>
import { ref } from 'vue'

defineProps({
  members: {
    type: Array,
    required: true
  },
  size: {
    type: String,
    default: 'medium'
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
  <div class="team-hub" :class="`size-${size}`">
    <div v-for="member in members" :key="member.name" class="team-card" @click="openModal(member)">
      <div class="card-content">
        <div class="avatar-wrapper">
          <img v-if="member.avatar && member.avatar !== '👤'" :src="member.avatar" :alt="member.name" class="avatar greenduotone" />
          <div v-else class="avatar-placeholder">👤</div>
        </div>
        <div class="info">
          <h3 class="name">{{ member.name }}</h3>
          <p class="title">{{ member.title }}</p>
          <p class="org">{{ member.org }}</p>
          <button class="view-profile">View Full Bio →</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="selectedMember" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">&times;</button>
          
          <div class="modal-header">
            <div class="modal-avatar-wrapper">
              <img v-if="selectedMember.avatar" :src="selectedMember.avatar" :alt="selectedMember.name" class="modal-avatar greenduotone" />
            </div>
            <div class="modal-title-block">
              <h2>{{ selectedMember.name }}</h2>
              <p class="modal-role">{{ selectedMember.title }}</p>
              <p class="modal-org">{{ selectedMember.org }}</p>
              
              <div class="modal-contact">
                <a v-if="selectedMember.email" :href="`mailto:${selectedMember.email}`" class="contact-link">📧 {{ selectedMember.email }}</a>
                <a v-if="selectedMember.phone" :href="`tel:${selectedMember.phone}`" class="contact-link">📱 {{ selectedMember.phone }}</a>
                <a v-if="selectedMember.linkedin" :href="selectedMember.linkedin" target="_blank" class="contact-link">🔗 LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div class="modal-body" v-html="selectedMember.bio"></div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.team-hub {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}

.size-medium {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.size-small {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.team-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border-top: 4px solid var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  height: 100%;
  cursor: pointer;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  background: var(--vp-c-bg-mute);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.avatar-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.25rem;
  background: var(--vp-c-bg);
  border: 3px solid var(--vp-c-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}

.size-small .avatar-wrapper {
  width: 100px;
  height: 100px;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 3rem;
  color: var(--vp-c-text-3);
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.name {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.title {
  margin: 0 0 0.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.org {
  margin: 0 0 1.25rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.view-profile {
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.view-profile:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.modal-content {
  background: var(--vp-c-bg);
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  border-radius: 16px;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--vp-c-divider);
  animation: modal-pop 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

@keyframes modal-pop {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: var(--vp-c-text-2);
  cursor: pointer;
  z-index: 10;
}

.close-btn:hover {
  color: var(--vp-c-brand-1);
}

.modal-header {
  padding: 2rem 2rem 1.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-avatar-wrapper {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--vp-c-brand-soft);
}

.modal-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-title-block h2 {
  margin: 0;
  font-size: 1.8rem;
  color: var(--vp-c-text-1);
}

.modal-role {
  color: var(--vp-c-brand-1);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.25rem 0;
}

.modal-org {
  color: var(--vp-c-text-2);
  font-style: italic;
  margin: 0 0 1rem;
}

.modal-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.contact-link {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  padding: 4px 10px;
  background: var(--vp-c-bg-soft);
  border-radius: 20px;
  transition: all 0.2s;
}

.contact-link:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
}

.modal-body {
  padding: 2rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.modal-body :deep(h3) {
  font-size: 1.3rem;
  margin: 1.5rem 0 1rem;
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.modal-body :deep(ul) {
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.modal-body :deep(li) {
  margin-bottom: 0.5rem;
}

@media (max-width: 640px) {
  .team-hub {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .modal-header {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }
  
  .modal-contact {
    justify-content: center;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
}
</style>
