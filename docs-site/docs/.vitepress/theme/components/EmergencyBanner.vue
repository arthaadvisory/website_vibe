<script setup>
defineProps({
  phone: { type: String, default: '9855 053 088' },
  phoneRaw: { type: String, default: '+9779855053088' },
  hours: { type: String, default: '8 AM - 8 PM' }
})
</script>

<template>
  <div class="emergency-banner">
    <div class="emergency-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
    </div>
    <div class="emergency-content">
      <h3 class="emergency-title">Need Emergency Tax Support?</h3>
      <p class="emergency-desc">For urgent IRD notices or raid situations, call our <strong>Emergency Compliance Hotline</strong>:</p>
      <a :href="'tel:' + phoneRaw" class="emergency-phone">{{ phone }}</a>
      <p class="emergency-hours">(Available {{ hours }})</p>
    </div>
  </div>
</template>

<style scoped>
.emergency-banner {
  margin-top: 5rem;
  text-align: center;
  padding: 3rem;
  background: #fee2e2;
  border-radius: 16px;
  border: 1px solid #fecaca;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.dark .emergency-banner {
  background: rgba(220, 38, 38, 0.1);
  border-color: rgba(220, 38, 38, 0.2);
}

.emergency-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fca5a5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #991b1b;
}

.emergency-title {
  color: #991b1b;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.emergency-desc {
  color: #b91c1c;
  margin-bottom: 1rem;
}

.emergency-phone {
  font-size: 2rem;
  font-weight: 800;
  color: #dc2626;
  text-decoration: none;
  transition: color 0.2s;
}

.emergency-phone:hover {
  color: #991b1b;
}

.emergency-hours {
  color: #7f1d1d;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
