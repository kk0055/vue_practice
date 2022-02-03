<template>
  <div>
    <v-card outlined>
      <v-card-title>Payment Details</v-card-title>
      <v-card-text>
        <v-text-field label="name" > </v-text-field>
        <v-text-field label="email"> </v-text-field>
        <p>Total:$</p>
        <v-btn color="primary" @click="goToCheckout"> CheckoutBox</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkoutForm: null,
      nameRules: [],
      name: "",
      emailRules: [],
      email: "",
    };
  },
  methods: {
    goToCheckout() {
      // this.$router.push({name:'checkout'})
      console.log('added');
    },
  },
};
</script>