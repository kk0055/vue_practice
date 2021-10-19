<template>
  <div class="home">

      <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper">

        <h2>Recommended</h2>

        <div class="recommended">

          <ProductCard 
          v-for="(product, index) in inventory.slice(0,3)" 
          :key="product.id" 
          :index="index"
          :product="product"
          :addToCart="addToCart"
          class="card">
           
          </ProductCard>
        </div>
      </main>
      <sidebar
        v-if="showSidebar"
        :toggle="toggleSidebar"
        :cart="cart"
        :inventory="inventory"
        :remove="removeItem"
      />
      <footer>
      </footer>

  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
