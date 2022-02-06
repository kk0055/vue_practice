<template>
  <div>
    <v-row v-for="(product, i) in products" :key="i">
      <HorizontalProduct
        :product="product"
        :updateCart="removeFromCart"
        btnAction="remove"
        :i="i"
      />
    </v-row>
  </div>
</template>
<script>
import HorizontalProduct from "@/components/Cards/HorizontalProduct.vue";
import { mapState } from "vuex";
export default {
  components: {
    HorizontalProduct,
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    removeFromCart() {},
  },
};
</script>