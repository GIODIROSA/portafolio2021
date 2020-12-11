import Vue from "vue";
import Vuex from "vuex";

// MODULES
import Inicio from "../store/inicio/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Inicio,
  },
});
