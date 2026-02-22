<script setup>
import { ref, computed } from 'vue'

const maritalStatus = ref('unmarried') // 'married' or 'unmarried'
const annualSalary = ref(600000)
const bonus = ref(0)
const insurance = ref(0)
const citPpf = ref(0) // CIT/Provident Fund contribution

const totalIncome = computed(() => Number(annualSalary.value) + Number(bonus.value))

const totalDeductions = computed(() => {
  // Insurance Limit: 40,000
  const ins = Math.min(Number(insurance.value), 40000)
  // CIT/PPF Limit: 1/3 of income or 300,000, whichever is lower
  const citLimit = Math.min(totalIncome.value / 3, 300000)
  const cit = Math.min(Number(citPpf.value), citLimit)
  
  return ins + cit
})

const taxableIncome = computed(() => Math.max(0, totalIncome.value - totalDeductions.value))

const taxLiability = computed(() => {
  let income = taxableIncome.value
  let tax = 0
  
  // Tax Slabs for FY 2081/82 (2024/25)
  // Unmarried: 500k (1%), Next 200k (10%), Next 300k (20%), Next 10L (30%), Above 20L (36%) 
  // Married: 600k (1%), Next 200k (10%), Next 300k (20%), Next 9L (30%), Above 20L (36%)
  
  const slabs = maritalStatus.value === 'married' 
    ? [600000, 200000, 300000, 900000, 2000000] 
    : [500000, 200000, 300000, 1000000, 2000000]

  // Slab 1 (1%) - Social Security Tax
  let slab1 = Math.min(income, slabs[0])
  tax += slab1 * 0.01
  income -= slab1
  
  if (income > 0) {
    // Slab 2 (10%)
    let slab2 = Math.min(income, slabs[1])
    tax += slab2 * 0.10
    income -= slab2
  }

  if (income > 0) {
    // Slab 3 (20%)
    let slab3 = Math.min(income, slabs[2])
    tax += slab3 * 0.20
    income -= slab3
  }

  if (income > 0) {
    // Slab 4 (30%)
    let slab4 = Math.min(income, slabs[3])
    tax += slab4 * 0.30
    income -= slab4
  }

  if (income > 0) {
    // Slab 5 (36%)
    let slab5 = Math.min(income, slabs[4]) // Actually remaining
    tax += income * 0.36 // 30% + 20% surcharge effectively 36%
  }
  
  return Math.round(tax)
})

const effectiveRate = computed(() => {
  if (totalIncome.value === 0) return 0
  return ((taxLiability.value / totalIncome.value) * 100).toFixed(1)
})
</script>

<template>
  <div class="calculator-card">
    <div class="header">
      <div class="status-toggle">
        <button 
          :class="{ active: maritalStatus === 'unmarried' }" 
          @click="maritalStatus = 'unmarried'">
          Unmarried
        </button>
        <button 
          :class="{ active: maritalStatus === 'married' }" 
          @click="maritalStatus = 'married'">
          Married
        </button>
      </div>
    </div>

    <div class="inputs">
      <div class="input-group">
        <label>Annual Salary (NPR)</label>
        <input type="number" v-model="annualSalary" step="10000" />
      </div>
      
      <div class="input-group">
        <label>Bonus / Allowances</label>
        <input type="number" v-model="bonus" step="5000" />
      </div>

      <div class="input-group">
        <label>Life Insurance (Max 40k)</label>
        <input type="number" v-model="insurance" />
      </div>

      <div class="input-group">
        <label>CIT / Provident Fund</label>
        <input type="number" v-model="citPpf" />
      </div>
    </div>

    <div class="results">
      <div class="main-result">
        <span>Annual Tax Liability</span>
        <div class="amount">NPR {{ taxLiability.toLocaleString() }}</div>
        <small>Effective Rate: {{ effectiveRate }}%</small>
      </div>

      <div class="breakdown">
        <div class="row">
          <span>Gross Income</span>
          <strong>{{ totalIncome.toLocaleString() }}</strong>
        </div>
        <div class="row deduction">
          <span>Allowable Deductions</span>
          <strong>- {{ totalDeductions.toLocaleString() }}</strong>
        </div>
        <div class="row taxable">
          <span>Taxable Income</span>
          <strong>{{ taxableIncome.toLocaleString() }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
}

.header {
  padding: 1.5rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: center;
}

.status-toggle {
  display: inline-flex;
  background: var(--vp-c-bg);
  padding: 4px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.status-toggle button {
  padding: 8px 24px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.status-toggle button.active {
  background: var(--vp-c-brand);
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.inputs {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .inputs { grid-template-columns: 1fr; }
}

.input-group label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  font-size: 1rem;
}

.results {
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 600px) {
  .results { flex-direction: column; text-align: center; gap: 2rem; }
}

.main-result span {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: var(--vp-c-text-2);
}

.main-result .amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vp-c-brand);
  margin: 0.5rem 0;
}

.breakdown {
  min-width: 250px;
}

.breakdown .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.deduction strong { color: var(--vp-c-green); }
.taxable { 
  margin-top: 0.5rem; 
  padding-top: 0.5rem; 
  border-top: 1px dashed var(--vp-c-divider);
  font-weight: bold;
}
</style>
