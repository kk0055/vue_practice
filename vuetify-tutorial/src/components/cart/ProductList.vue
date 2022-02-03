<template>
  <div>
    <v-row v-for="product in $store.state.products" :key="product.name">
      <HorizontalProduct :product="product" :btnAction="removeFromCart"/>
    </v-row>
  </div>
</template>
<script>
import HorizontalProduct from "@/components/Cards/HorizontalProduct.vue";
export default {
  components: {
    HorizontalProduct,
  },
  methods: {
    removeFromCart() {

    }
  }
};
</script>