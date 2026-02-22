<script setup>
import { ref, computed } from 'vue'

const income = ref(0)
const type = ref('individual') // individual or couple

const calculatedTax = computed(() => {
  let annualIncome = income.value
  let tax = 0
  
  // Very simplified illustrative Nepal tax logic (subject to actual budget rates)
  // For demonstration only
  if (type.value === 'individual') {
    if (annualIncome > 500000) tax += (annualIncome - 500000) * 0.10
    if (annualIncome > 700000) tax += (annualIncome - 700000) * 0.20
  } else {
    if (annualIncome > 600000) tax += (annualIncome - 600000) * 0.10
    if (annualIncome > 800000) tax += (annualIncome - 800000) * 0.20
  }
  
  return tax.toLocaleString()
})
</script>

<template>
  <div style="background: var(--vp-c-bg-soft); padding: 2.5rem; border-radius: 16px; border: 1px solid var(--vp-c-divider); margin-top: 2rem;">
    <div style="display: grid; gap: 2rem;">
      <div>
        <label style="display: block; font-weight: 700; margin-bottom: 0.8rem;">Annual Taxable Income (NPR)</label>
        <input 
          v-model.number="income" 
          type="number" 
          placeholder="e.g. 1200000"
          style="width: 100%; padding: 0.8rem; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); font-size: 1.1rem; outline: none; transition: border-color 0.2s;"
        >
      </div>

      <div>
        <label style="display: block; font-weight: 700; margin-bottom: 0.8rem;">Filing Category</label>
        <div style="display: flex; gap: 1.5rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="radio" v-model="type" value="individual"> Individual
          </label>
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="radio" v-model="type" value="couple"> Couple/Family
          </label>
        </div>
      </div>

      <div style="border-top: 1px solid var(--vp-c-divider); padding-top: 1.5rem; text-align: center;">
        <p style="text-transform: uppercase; font-size: 0.85rem; font-weight: 700; color: var(--vp-c-text-2); letter-spacing: 0.05em;">Estimated Income Tax</p>
        <p style="font-size: 2.5rem; font-weight: 800; color: var(--vp-c-brand-1); margin: 0.5rem 0;">NPR {{ calculatedTax }}</p>
        <p style="font-size: 0.85rem; color: var(--vp-c-text-3);">* This is a simplified estimate for illustrative purposes only.</p>
      </div>

      <div style="text-align: center;">
        <a href="/contact" class="VPButton medium brand">Consult an Expert for Precise Calculation</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus {
  border-color: var(--vp-c-brand-1);
}
</style>
