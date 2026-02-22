<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const searchQuery = ref('')

const categories = [
  'All',
  'Financial Interests',
  'Loans & Guarantees',
  'Business Relationships',
  'Family & Personal',
  'Employment',
  'Fees & Remuneration',
  'Gifts & Hospitality'
]

const scenarios = [
  {
    id: 1,
    category: 'Financial Interests',
    title: 'Holding Financial Interest in Client',
    description: 'A member of the audit team or their immediate family member holds shares or other financial interests in the audit client.',
    threats: ['Self-Interest Threat'],
    safeguards: [
      'Dispose of the direct financial interest immediately.',
      'Remove the individual from the audit team.',
      'If the interest is indirect and immaterial, no specific safeguard may be needed, but disclosure is recommended.'
    ],
    severity: 'High'
  },
  {
    id: 2,
    category: 'Loans & Guarantees',
    title: 'Loan from Audit Client',
    description: 'Accepting a loan or guarantee from an audit client that is a bank or financial institution.',
    threats: ['Self-Interest Threat'],
    safeguards: [
      'Ensure the loan is made under normal lending procedures, terms, and requirements.',
      'If the loan is material to the audit firm or individual, apply an independent review of the work.'
    ],
    severity: 'Medium'
  },
  {
    id: 3,
    category: 'Loans & Guarantees',
    title: 'Loan to/from Non-Bank Client',
    description: 'Accepting a loan from, or making a loan to, an audit client that is NOT a bank or financial institution.',
    threats: ['Self-Interest Threat'],
    safeguards: [
      'Strictly prohibited if material.',
      'No safeguard can reduce the threat to an acceptable level unless the loan is immaterial to both the firm and the client.'
    ],
    severity: 'Critical'
  },
  {
    id: 4,
    category: 'Business Relationships',
    title: 'Close Business Relationship',
    description: 'Entering into a close business relationship with an audit client or its management (e.g., joint venture, marketing arrangement).',
    threats: ['Self-Interest Threat', 'Intimidation Threat'],
    safeguards: [
      'Terminating the business relationship.',
      'Reducing the magnitude of the relationship so that the financial interest is immaterial.',
      'Refusing to perform the audit engagement.'
    ],
    severity: 'High'
  },
  {
    id: 5,
    category: 'Family & Personal',
    title: 'Family Member is Director/Officer',
    description: 'An immediate family member of the audit team is a Director or Officer of the client.',
    threats: ['Familiarity Threat', 'Self-Interest Threat'],
    safeguards: [
      'Remove the individual from the audit team.',
      'Structure the responsibilities of the audit team so the professional does not deal with matters within the responsibility of the family member.'
    ],
    severity: 'High'
  },
  {
    id: 6,
    category: 'Employment',
    title: 'Serving as Director/Officer',
    description: 'A partner or employee of the firm serves as a Director or Officer of the audit client.',
    threats: ['Self-Review Threat', 'Self-Interest Threat'],
    safeguards: [
      'Strictly Prohibited. No safeguard can reduce this threat to an acceptable level.',
      'The individual must resign from the position or the firm must decline the audit.'
    ],
    severity: 'Critical'
  },
  {
    id: 7,
    category: 'Employment',
    title: 'Recent Service with Client',
    description: 'A member of the audit team has recently served as a Director or Officer of the client covering the period under audit.',
    threats: ['Self-Interest Threat', 'Self-Review Threat', 'Familiarity Threat'],
    safeguards: [
      'The individual shall NOT be assigned to the audit team for that period.'
    ],
    severity: 'Critical'
  },
  {
    id: 8,
    category: 'Fees & Remuneration',
    title: 'Contingent Fees',
    description: 'Charging fees calculated on a predetermined basis relating to the outcome of a transaction or the result of the work.',
    threats: ['Self-Interest Threat'],
    safeguards: [
      'Strictly Prohibited for audit engagements.',
      'Fees should be based on time, skill, and complexity of the work.'
    ],
    severity: 'Critical'
  },
  {
    id: 9,
    category: 'Fees & Remuneration',
    title: 'Overdue Fees',
    description: 'A significant amount of fees from an audit client remains unpaid for a long time (e.g., considered as a loan).',
    threats: ['Self-Interest Threat', 'Intimidation Threat'],
    safeguards: [
      'Discuss the level of outstanding fees with the audit committee.',
      'Involve an additional professional who did not take part in the audit to provide advice or review the work.'
    ],
    severity: 'Medium'
  },
  {
    id: 10,
    category: 'Gifts & Hospitality',
    title: 'Accepting Gifts',
    description: 'Accepting gifts or hospitality from an audit client.',
    threats: ['Self-Interest Threat', 'Familiarity Threat', 'Intimidation Threat'],
    safeguards: [
      'Prohibited unless the value is trivial and inconsequential.',
      'If not trivial, decline the offer.'
    ],
    severity: 'Medium'
  }
]

const filteredScenarios = computed(() => {
  return scenarios.filter(scenario => {
    const matchesCategory = selectedCategory.value === 'All' || scenario.category === selectedCategory.value
    const matchesSearch = scenario.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          scenario.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const getSeverityClass = (severity) => {
  switch (severity) {
    case 'Critical': return 'bg-red-100 text-red-800 border-red-200'
    case 'High': return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}
</script>

<template>
  <div class="ethics-analyzer-container my-8">
    <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="mb-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Ethics Threat Analyzer</h3>
        <p class="text-gray-600">Select a category or search for a scenario to identify potential ethical threats and required safeguards as per the ICAN Code of Ethics 2023.</p>
      </div>

      <!-- Controls -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="w-full md:w-1/3">
          <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select 
            v-model="selectedCategory" 
            class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-0 focus:border-indigo-500 bg-gray-50 text-gray-900"
          >
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
        <div class="w-full md:w-2/3">
          <label class="block text-sm font-medium text-gray-700 mb-1">Search Scenarios</label>
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="e.g. 'shares', 'loans', 'family'"
            class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-0 focus:border-indigo-500 bg-gray-50 text-gray-900"
          />
        </div>
      </div>

      <!-- Results -->
      <div class="space-y-4">
        <div 
          v-for="scenario in filteredScenarios" 
          :key="scenario.id"
          class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <!-- Header -->
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <div class="font-semibold text-gray-800">{{ scenario.title }}</div>
            <div 
              class="text-xs font-medium px-2.5 py-0.5 rounded border"
              :class="getSeverityClass(scenario.severity)"
            >
              {{ scenario.severity }} Risk
            </div>
          </div>
          
          <!-- Body -->
          <div class="p-4">
            <p class="text-gray-700 mb-4">{{ scenario.description }}</p>
            
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Threat Column -->
              <div class="bg-red-50 p-3 rounded-lg border border-red-100">
                <h4 class="text-sm font-bold text-red-800 uppercase tracking-wide mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  Threats
                </h4>
                <ul class="list-disc list-inside text-sm text-red-700 space-y-1">
                  <li v-for="threat in scenario.threats" :key="threat">{{ threat }}</li>
                </ul>
              </div>
              
              <!-- Safeguard Column -->
              <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                <h4 class="text-sm font-bold text-green-800 uppercase tracking-wide mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Safeguards
                </h4>
                <ul class="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li v-for="guard in scenario.safeguards" :key="guard">{{ guard }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredScenarios.length === 0" class="text-center py-8 text-gray-500">
          No scenarios found matching your criteria.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
