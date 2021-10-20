<template>
  <div class="home">
  <p>Checkout</p>
   <Card>

    <template #title>
       {{ stepTitle }}
    </template>
    <template #content>
   <Contact v-if="step ===1" />
  <Shopping v-else-if="step ===2"/>
  <Review v-else/>
    </template>
    <template #footer>
     <Button label="Previous" v-if="step > 1" @click="step -= 1" />
   <Button label="Next" v-if="step < 3" @click="step += 1" />
   <Button label="Submit" v-else @click="submit" />
    </template>
</Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
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
    Review,
    Card
  },
  data() {
    return {
      step:1
    }
  },
  computed: {
    stepTitle() {
      if (this.step === 1) {
        return 'Contact'
      }else if (this.step === 2) {
        return 'Shopping'
      } else {
          return 'Review'
      }
    }
  }
}
</script>
<style >
  input {
    width:100%
  }

</style>