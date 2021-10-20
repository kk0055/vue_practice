<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cart">Cart</router-link>|
    <router-link to="/checkout">Checkout</router-link>
  </div>
  <div class="p-grid">
    <div class="p-col-4 p-offset-4">
 <router-view/>

    </div>
  </div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
