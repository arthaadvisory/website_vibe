<script setup>
defineProps({
  name: String,
  role: String,
  message: String,
  avatar: String,
  company: String,
  rating: {
    type: Number,
    default: 0 // 0 = don't show, 1-5 = show stars
  }
})
</script>

<template>
  <div class="testimonial-card">
    <div class="card-accent"></div>
    <div class="card-quote">"</div>
    
    <!-- Star rating -->
    <div v-if="rating > 0" class="card-rating">
      <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= rating }">★</span>
    </div>
    
    <p class="card-message">{{ message }}</p>
    <div class="card-footer">
      <div v-if="avatar" class="avatar">
        <img :src="avatar" :alt="name">
      </div>
      <div v-else class="avatar-placeholder">
        {{ name.charAt(0) }}
      </div>
      <div class="info">
        <h4 class="name">{{ name }}</h4>
        <p class="role">{{ role }}{{ company ? ` @ ${company}` : '' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background: var(--vp-c-bg-soft);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  opacity: 0;
  transition: opacity 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 40px rgba(20, 125, 52, 0.12);
}

.testimonial-card:hover .card-accent {
  opacity: 1;
}

.card-quote {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: var(--vp-c-brand-1);
  opacity: 0.08;
  font-family: Georgia, serif;
  line-height: 1;
}

/* Star rating */
.card-rating {
  display: flex;
  gap: 2px;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
}

.star {
  font-size: 1.1rem;
  color: var(--vp-c-divider);
  transition: color 0.2s;
}

.star.filled {
  color: #f59e0b;
}

.card-message {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar, .avatar-placeholder {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--vp-c-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid var(--vp-c-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.avatar-placeholder {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info .name {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.info .role {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>
