<template>
  <div>
    <v-row v-for="(product, i) in products" :key="i">
      <HorizontalProduct :product="product" :i="i" btnAction="remove" />
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
    removeFromCart() {},
  },
};
</script>