<template>
 <div>
    <v-app-bar>
    <v-toolbar-title>Awesome Shop</v-toolbar-title>
  
  <v-spacer></v-spacer>
  <span class="hidden-sm-and-up" >
<v-btn @click.stop="drawer = !drawer" >
  Menu
</v-btn>

  </span>
    <v-toolbar-items class="hidden-xs-only" v-for="item in items" :key="item.title">
      <v-btn :to="item.link" text>
      <v-icon small left>{{item.icon}}</v-icon>
      {{ item.title }}
      </v-btn>
    
    </v-toolbar-items>
  </v-app-bar>

<v-navigation-drawer 
absolute
right
temporaly
v-model="drawer"
>
  Hello
</v-navigation-drawer>

 </div>
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