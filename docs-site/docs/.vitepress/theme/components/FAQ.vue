<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array, // [{ question: string, answer: string }]
    required: true
  }
})

const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="faq-section">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="faq-item"
      :class="{ 'is-open': openIndex === index }"
    >
      <button 
        @click="toggle(index)"
        class="faq-question"
        :aria-expanded="openIndex === index"
      >
        <span class="question-text">{{ item.question }}</span>
        <span class="icon-wrapper">
          <svg 
            class="chevron-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        class="faq-answer-wrapper"
        :style="{ maxHeight: openIndex === index ? '1000px' : '0' }"
      >
        <div class="faq-answer">
          <div class="answer-content" v-html="item.answer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-section {
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item:hover {
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.faq-item.is-open {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 10px 30px rgba(20, 125, 52, 0.08);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
  padding-right: 1rem;
}

.faq-item.is-open .question-text {
  color: var(--vp-c-brand-1);
}

.icon-wrapper {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-alt);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.faq-item.is-open .icon-wrapper {
  background: var(--vp-c-brand-soft);
  transform: rotate(180deg);
}

.chevron-icon {
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-2);
  transition: color 0.3s ease;
}

.faq-item.is-open .chevron-icon {
  color: var(--vp-c-brand-1);
}

.faq-answer-wrapper {
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.answer-content {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.7;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
}

.answer-content :deep(p) {
  margin-bottom: 1rem;
}

.answer-content :deep(p:last-child) {
  margin-bottom: 0;
}

.answer-content :deep(ul), .answer-content :deep(ol) {
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.answer-content :deep(li) {
  margin-bottom: 0.5rem;
}

@media (max-width: 640px) {
  .question-text {
    font-size: 1rem;
  }
  
  .faq-question {
    padding: 1rem 1.25rem;
  }
  
  .faq-answer {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
}
</style>
