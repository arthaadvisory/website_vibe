<script setup>
import { ref, computed } from 'vue'

const salary = ref(25000)

const basicSalary = computed(() => Number(salary.value) || 0)

// Contribution Rates (as per SSF Act 2074)
const RATES = {
  pf_employer: 0.10,
  pf_employee: 0.10,
  gratuity_employer: 0.0833,
  social_security_employer: 0.0167,
  unemployment_employee: 0.01
}

const breakdown = computed(() => {
  const b = basicSalary.value
  return {
    pf_employer: Math.round(b * RATES.pf_employer),
    pf_employee: Math.round(b * RATES.pf_employee),
    gratuity_employer: Math.round(b * RATES.gratuity_employer),
    social_security_employer: Math.round(b * RATES.social_security_employer),
    unemployment_employee: Math.round(b * RATES.unemployment_employee)
  }
})

const totalEmployer = computed(() => 
  breakdown.value.pf_employer + 
  breakdown.value.gratuity_employer + 
  breakdown.value.social_security_employer
)

const totalEmployee = computed(() => 
  breakdown.value.pf_employee + 
  breakdown.value.unemployment_employee
)

const totalDeposit = computed(() => totalEmployer.value + totalEmployee.value)
</script>

<template>
  <div class="calculator-card">
    <div class="input-group">
      <label>Monthly Basic Salary (NPR)</label>
      <input type="number" v-model="salary" min="0" step="1000" />
    </div>

    <div class="results-grid">
      <div class="result-box employer">
        <h3>Employer Contribution (20%)</h3>
        <div class="row">
          <span>Provident Fund (10%)</span>
          <strong>{{ breakdown.pf_employer }}</strong>
        </div>
        <div class="row">
          <span>Gratuity (8.33%)</span>
          <strong>{{ breakdown.gratuity_employer }}</strong>
        </div>
        <div class="row">
          <span>Social Security (1.67%)</span>
          <strong>{{ breakdown.social_security_employer }}</strong>
        </div>
        <div class="total">
          <span>Total Employer Cost</span>
          <strong>NPR {{ totalEmployer }}</strong>
        </div>
      </div>

      <div class="result-box employee">
        <h3>Employee Contribution (11%)</h3>
        <div class="row">
          <span>Provident Fund (10%)</span>
          <strong>{{ breakdown.pf_employee }}</strong>
        </div>
        <div class="row">
          <span>Social Security Tax (1%)</span>
          <strong>{{ breakdown.unemployment_employee }}</strong>
        </div>
        <div class="total">
          <span>Total Deduction</span>
          <strong>NPR {{ totalEmployee }}</strong>
        </div>
      </div>
    </div>

    <div class="grand-total">
      <h3>Total Monthly Deposit to SSF</h3>
      <div class="amount">NPR {{ totalDeposit.toLocaleString() }}</div>
    </div>
  </div>
</template>

<style scoped>
.calculator-card {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  margin: 2rem 0;
}

.input-group {
  margin-bottom: 2rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}

.result-box {
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
}

.result-box h3 {
  margin-top: 0;
  font-size: 1.1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.employer h3 { color: var(--vp-c-brand); }
.employee h3 { color: var(--vp-c-text-2); }

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.total {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.1rem;
}

.grand-total {
  text-align: center;
  background: var(--vp-c-brand-soft);
  padding: 1.5rem;
  border-radius: 8px;
  color: var(--vp-c-brand-dark);
}

.grand-total h3 { margin: 0; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.grand-total .amount { font-size: 2rem; font-weight: 800; margin-top: 0.5rem; }
</style>
