<template>
  <div class="home">
  <Product
  v-model:name="productsinfo.name"
  v-model:description="productsinfo.description"
  />
  <br/>
{{ productsinfo.name }}
{{ productsinfo.description }}
  </div>
</template>

<script>

import Product from '@/components/Product.vue'
export default {
  name: 'Cart',
  components: {
    Product
  },

  data() {
    return {
      productsinfo:{
        name:'',
        description:''
      }
    }
  }
}
</script>
