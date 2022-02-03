<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"></v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInfo from "@/components/checkout/ContactInfo.vue";
import ShippingInfo from "@/components/checkout/ShippingInfo.vue";
import Review from "@/components/checkout/Review.vue";
export default {
  components: {
    ContactInfo,
    ShippingInfo,
    Review,
  },
  data() {
    return {
      step: 1,
      checkoutForm: false,
      data: {
        email: "",
        name: "",
        phone: "",
        street: "",
        state: "",
        zip: "",
      },
    };
  },
};
</script>