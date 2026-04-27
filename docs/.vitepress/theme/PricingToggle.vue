<template>
  <div class="pricing-toggle-wrapper">
    <div class="pricing-toggle">
      <button 
        :class="['toggle-btn', { active: billingCycle === 'monthly' }]"
        @click="billingCycle = 'monthly'"
      >
      monthly
      </button>
      <button 
        :class="['toggle-btn', { active: billingCycle === 'yearly' }]"
        @click="billingCycle = 'yearly'"
      >
      yearly
      </button>
    </div>

    <div class="pricing-grid">
      <!-- Community Card (Always Free) -->
      <div  class="pricing-card">
        <div class="pricing-title">Community</div>
        <div class="pricing-price">Free</div>
        <a href="/download/" class="btn-outline">Get Started</a>
        <ul class="pricing-features">
          <li>Intelligent command completion</li>
          <li>Cloud data synchronization</li>
          <li>Limited plugin/extension support</li>
          <li>Open source and base models</li>
          <li>Limited agent request count</li>
          <li>1GB personal knowledge base</li>
          <li>Manual contextual knowledge</li>
          <li>Community support</li>
        </ul>
      </div>

      <!-- Professional Card -->
      <div class="pricing-card">
        <div class="pricing-title">Professional</div>
        <div class="pricing-price" v-if="billingCycle === 'yearly'">$99 / Year</div>
        <div class="pricing-price" v-else>$19 / Month</div>
        <a class="price-btn btn-primary">Buy Now</a>
        <ul class="pricing-features">
          <li>All Community Edition features</li>
          <li>Intelligent voice input</li>
          <li>Full plugin/extension support</li>
          <li>Stronger monetization model</li>
          <li>10x more agent requests</li>
          <li>50GB personal knowledge base</li>
          <li>Automatic contextual knowledge</li>
          <li>Email support</li>
        </ul>
      </div>

      <!-- Enterprise Card -->
      <div class="pricing-card">
        <div class="pricing-title">Enterprise</div>
        <div class="pricing-price" v-if="billingCycle === 'yearly'">$299 / Year</div>
        <div class="pricing-price" v-else>$59 / Month</div>
        <a class="price-btn btn-primary">Buy Now</a>
        <ul class="pricing-features">
          <li>All Pro Edition features</li>
          <li>50x fewer agent requests</li>
          <li>Team knowledge management and sharing</li>
          <li>Enterprise SSO login</li>
          <li>Zero trust support, trusted devices</li>
          <li>Enterprise-level management and auditing</li>
          <li>Enterprise bastion host support</li>
          <li>Enterprise SLA support</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const billingCycle = ref('yearly')
</script>

<style scoped>
.pricing-toggle-wrapper {
  width: 100%;
}

.pricing-toggle {
  display: flex;
  justify-content: center;
  gap: 0;
  margin: 2rem auto 3rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 9999px;
  padding: 4px;
  width: fit-content;
}

.dark .pricing-toggle {
  background: rgba(255, 255, 255, 0.1);
}

.toggle-btn {
  padding: 0.6rem 2rem;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 9999px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.toggle-btn.active {
  background: linear-gradient(90deg, #91B4FF 0%, #4070FF 100%);
  color: #fff;
  font-weight: 600;
}

.toggle-btn:hover:not(.active) {
  color: var(--vp-c-text-1);
}

.pricing-note {
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: -1.5rem auto 1.5rem;
  max-width: 900px;
}

</style>
