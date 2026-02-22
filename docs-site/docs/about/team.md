---
title: Our Leadership Team
description: Meet the experienced partners and professionals behind Artha Advisory.
sidebar: false
parent: About Us|/about/
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { data as teamMembers } from './team.data.js'

const partners = teamMembers.filter(member => member.group?.trim() === 'Partners')
const seniorTeam = teamMembers.filter(member => member.group?.trim() === 'Senior Team')
</script>

<PageHeader 
  title="Our Leadership Team" 
  subtitle="Experts. Strategists. Partners."
  image="/images/headers/service-consulting.jpg" 
/>

<div class="container mx-auto px-4 py-8">

**Experts. Strategists. Partners.**

At Artha Advisory, our leadership team combines decades of experience in audit, tax, and legal frameworks. We don't just sign reports; we solve complex business problems. Our partners carry specific industry expertise—from Hydropower to Banking—ensuring you get specialized advice, not generic opinions.

## Why Our Team?
*   **Industry Insiders:** Former bankers and industry CFOs on the panel.
*   **Global Exposure:** Experience working with Big 4 firms and international donors.
*   **Accessible:** Partners who pick up the phone.

---

## Partners & Senior Management

<TeamHub size="medium" :members="partners" />

## Senior Team Members

<TeamHub size="small" :members="seniorTeam" />
</div>
