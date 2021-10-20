<template>
  <div class="home">
  <p>Checkout</p>
  <Contact/>
  <Shopping/>
  <Review/>
  </div>
</template>

<script>

import Contact from '@/components/Contact.vue'
import Shopping from '@/components/Shopping.vue'
import Review from '@/components/Review.vue'

export default {
  name: 'CheckoutWizard',
  components: {
    Contact,
    Shopping,
    Review
    
  }
}
</script>
