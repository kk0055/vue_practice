import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCPS49ArP69lD8OxPLwZb4toyx6uYn2bFk",
  authDomain: "vue-calendar-f88f3.firebaseapp.com",
  projectId: "vue-calendar-f88f3",
  storageBucket: "vue-calendar-f88f3.appspot.com",
  messagingSenderId: "500925790672",
  appId: "1:500925790672:web:fe6a17f0e7a0dccd7461d5"
});

export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
