<template>
  <v-app-bar>
    <v-toolbar-title>Awesome Shop</v-toolbar-title>

    <v-toolbar-items v-for="item in items">
      <v-btn :to="item.link" text>
      <v-icon small left>{{item.icon}}</v-icon>
      {{ item.title }}
      </v-btn>
    
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      drawer:false,
      items: [
        {title:"Home", link:'/', icon:'mdi-home'},
        {title:"Store", link:'/store', icon:'mdi-basket'},
        {title:"Cart", link:'/cart', icon:'mdi-cart'},
      ]
    }
  }
}
</script>