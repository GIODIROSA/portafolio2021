import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase"

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBvvqbV_kAuywngfzCfNR9qGco7sG2cexA",
  authDomain: "portafolio-giodirosa.firebaseapp.com",
  projectId: "portafolio-giodirosa",
  storageBucket: "portafolio-giodirosa.appspot.com",
  messagingSenderId: "179071771279",
  appId: "1:179071771279:web:0bb656392b2df5119306fa",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
