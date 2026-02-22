<script setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

const { site, page, frontmatter } = useData()

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  
  const schema = {
    "@context": "https://schema.org",
    "@type": props.type,
    ...props.data
  }
  
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
})
</script>

<template>
  <!-- Schema emitted to Head -->
</template>
