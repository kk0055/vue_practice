<template>
  <div class="home">
  <p>Checkout</p>
  <Contact/>
  <Shopping/>
  <Review/>

   <Button label="Submit" />
  </div>
</template>

<script>

import Contact from '@/components/Contact.vue'
import Shopping from '@/components/Shopping.vue'
import Review from '@/components/Review.vue'
import Button from 'primevue/button';
export default {
  name: 'CheckoutWizard',
  components: {
    Button,
    Contact,
    Shopping,
    Review
  },
  data() {
    return {
      step:1
    }
  }
}
</script>
