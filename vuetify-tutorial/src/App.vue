<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

    </v-app-bar>

    <v-main>
      <TopNav/>
    <v-content>  <router-view/></v-content>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    TopNav
  }
};
</script>
