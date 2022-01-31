<template>
  <v-app>
    <v-main>
      <TopNav />
      <v-content>
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    TopNav,
  },
};
</script>
