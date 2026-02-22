<script setup>
import { ref, computed } from 'vue'

const principal = ref(5000000) // 50 Lakhs default
const rate = ref(12) // 12% Interest
const tenureYears = ref(15) // 15 Years

const monthlyRate = computed(() => rate.value / 12 / 100)
const tenureMonths = computed(() => tenureYears.value * 12)

const emi = computed(() => {
  const P = principal.value
  const r = monthlyRate.value
  const n = tenureMonths.value
  
  if (r === 0) return P / n
  
  const x = Math.pow(1 + r, n)
  const result = (P * r * x) / (x - 1)
  return Math.round(result)
})

const totalAmount = computed(() => emi.value * tenureMonths.value)
const totalInterest = computed(() => totalAmount.value - principal.value)

</script>

<template>
  <div class="calculator-card">
    <div class="inputs">
      <div class="input-group">
        <label>Loan Amount (NPR)</label>
        <input type="number" v-model="principal" min="10000" step="10000" />
        <input type="range" v-model="principal" min="100000" max="50000000" step="100000" class="slider" />
      </div>

      <div class="input-group">
        <label>Interest Rate (%)</label>
        <div class="row-input">
          <input type="number" v-model="rate" min="1" max="25" step="0.25" />
          <input type="range" v-model="rate" min="5" max="20" step="0.25" class="slider" />
        </div>
      </div>

      <div class="input-group">
        <label>Tenure (Years)</label>
        <div class="row-input">
          <input type="number" v-model="tenureYears" min="1" max="30" />
          <input type="range" v-model="tenureYears" min="1" max="30" step="1" class="slider" />
        </div>
      </div>
    </div>

    <div class="results">
      <div class="emi-display">
        <h3>Monthly EMI</h3>
        <div class="amount">NPR {{ emi.toLocaleString() }}</div>
      </div>

      <div class="breakdown">
        <div class="item">
          <span>Principal Amount</span>
          <strong>{{ principal.toLocaleString() }}</strong>
        </div>
        <div class="item interest">
          <span>Total Interest Payable</span>
          <strong>{{ totalInterest.toLocaleString() }}</strong>
        </div>
        <div class="item total">
          <span>Total Payment</span>
          <strong>{{ totalAmount.toLocaleString() }}</strong>
        </div>
      </div>
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
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .calculator-card {
    grid-template-columns: 1fr;
  }
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
}

.input-group input[type="number"] {
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.slider {
  width: 100%;
  cursor: pointer;
}

.results {
  background: var(--vp-c-bg);
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.emi-display {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.emi-display h3 {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.emi-display .amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vp-c-brand);
  line-height: 1.2;
  margin-top: 0.5rem;
}

.breakdown .item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.breakdown .total {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--vp-c-divider);
  font-weight: bold;
  font-size: 1.1rem;
}

.interest strong {
  color: var(--vp-c-danger);
}
</style>
