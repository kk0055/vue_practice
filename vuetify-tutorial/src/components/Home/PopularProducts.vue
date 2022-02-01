<template>
  <v-container class="mb-12">
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>
          Popular Products
          <v-btn to="store" text color="primary" small>View All</v-btn>
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="(product, index) in $store.state.products.slice(0, 3)"
            :key="product.name"
          >
            <VerticalProduct :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalProduct from "../Cards/VerticalProduct";
export default {
  data() {
    return {};
  },
  components: {
    VerticalProduct,
  },
};
</script>
