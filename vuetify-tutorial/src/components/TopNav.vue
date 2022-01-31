<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Awesome Shop</v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer"> Menu </v-btn>
      </span>
      <v-toolbar-items
        class="hidden-xs-only"
        v-for="item in items"
        :key="item.title"
      >
        <v-btn :to="item.link" text>
          <v-icon small left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer absolute right temporaly v-model="drawer">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
          {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/", icon: "mdi-home" },
        { title: "Store", link: "/store", icon: "mdi-basket" },
        { title: "Cart", link: "/cart", icon: "mdi-cart" },
      ],
    };
  },
};
</script>