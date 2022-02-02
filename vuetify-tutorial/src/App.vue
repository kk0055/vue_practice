<template>
  <v-app>
    <v-main>
      <TopNav />
      <v-content>
        <router-view />
        <!-- <v-snackbar
          v-model="snackbar.show"
          :multi-line="true"
          :right="true"
          :top="true"
          :timeout="6000"
          :color="snackbar.variant"
        >
          {{ snackbar.message }}
          <v-btn dark text @click="updateSnackbar({ show: false })">
            Close
          </v-btn>
        </v-snackbar> -->
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
