<script setup>
import { ref, computed } from 'vue'

const step = ref(1)
const answers = ref({
  shareholders: '',
  publicTrading: '',
  sector: ''
})

const result = ref(null)

const nextStep = (key, value) => {
  answers.value[key] = value
  
  // Logic to determine result or next step
  if (key === 'sector') {
    if (['Banking', 'Insurance', 'Stock Exchange', 'Pension Fund', 'Mutual Fund'].includes(value)) {
      setResult('Public Limited Company', 'Mandatory for Banking, Insurance, and Financial Institutions under the Banks and Financial Institutions Act.')
    } else {
      step.value = 2
    }
  } else if (key === 'publicTrading') {
    if (value === 'Yes') {
      setResult('Public Limited Company', 'Required if you intend to raise capital from the general public or trade shares on the Stock Exchange.')
    } else {
      step.value = 3
    }
  } else if (key === 'shareholders') {
    if (value === '1') {
      setResult('Private Limited Company (Single Shareholder)', 'A private company can be incorporated with a single shareholder.')
    } else if (value === '>101') {
      setResult('Public Limited Company', 'A Private Company cannot have more than 101 shareholders (limit increased from 50 by Companies Act 2063).')
    } else {
      setResult('Private Limited Company', 'Suitable for closely held businesses. Shareholders (1-101). No public trading.')
    }
  }
}

const setResult = (type, reason) => {
  result.value = { type, reason }
  step.value = 4 // Result step
}

const reset = () => {
  step.value = 1
  answers.value = { shareholders: '', publicTrading: '', sector: '' }
  result.value = null
}
</script>

<template>
  <div class="entity-wizard-container my-8">
    <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="mb-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Entity Formation Wizard</h3>
        <p class="text-gray-600">Answer a few questions to determine the most suitable company structure for your business in Nepal (Private vs. Public).</p>
      </div>

      <!-- Step 1: Sector -->
      <div v-if="step === 1" class="space-y-4">
        <h4 class="font-medium text-lg text-gray-800">1. What is the nature of your proposed business?</h4>
        <div class="grid md:grid-cols-2 gap-3">
          <button @click="nextStep('sector', 'General')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-left transition text-gray-700">General Trading / Manufacturing / Service</button>
          <button @click="nextStep('sector', 'Banking')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-left transition text-gray-700">Banking / Financial Institution</button>
          <button @click="nextStep('sector', 'Insurance')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-left transition text-gray-700">Insurance Company</button>
          <button @click="nextStep('sector', 'Hydropower')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-left transition text-gray-700">Hydropower / Telecommunications</button>
        </div>
      </div>

      <!-- Step 2: Public Trading -->
      <div v-if="step === 2" class="space-y-4">
        <h4 class="font-medium text-lg text-gray-800">2. Do you intend to invite the public to subscribe for shares?</h4>
        <div class="flex flex-col gap-3">
          <button @click="nextStep('publicTrading', 'Yes')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-left transition text-gray-700">Yes, we plan to issue an IPO.</button>
          <button @click="nextStep('publicTrading', 'No')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-left transition text-gray-700">No, funding will be private.</button>
        </div>
      </div>

      <!-- Step 3: Shareholders -->
      <div v-if="step === 3" class="space-y-4">
        <h4 class="font-medium text-lg text-gray-800">3. How many shareholders/promoters will the company have?</h4>
        <div class="grid md:grid-cols-3 gap-3">
          <button @click="nextStep('shareholders', '1')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-center transition text-gray-700">Only 1</button>
          <button @click="nextStep('shareholders', '2-101')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-center transition text-gray-700">2 to 101</button>
          <button @click="nextStep('shareholders', '>101')" class="p-4 border rounded-lg hover:bg-indigo-50 hover:border-indigo-300 text-center transition text-gray-700">More than 101</button>
        </div>
      </div>

      <!-- Result Step -->
      <div v-if="step === 4 && result" class="bg-indigo-50 p-6 rounded-lg text-center border border-indigo-100">
        <div class="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Recommended: {{ result.type }}</h3>
        <p class="text-gray-700 mb-6">{{ result.reason }}</p>
        <button @click="reset" class="text-indigo-600 font-medium hover:text-indigo-800 underline">Start Over</button>
      </div>

      <!-- Progress bar -->
      <div class="mt-8 h-1 bg-gray-100 rounded overflow-hidden" v-if="step < 4">
        <div class="h-full bg-indigo-500 transition-all duration-300" :style="{ width: (step / 3) * 100 + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles */
</style>
