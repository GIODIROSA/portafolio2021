import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/galeria",
    name: "Galeria",
    component: () =>
      import(/* webpackChunkName: "galeria" */ "../views/Galeria.vue"),
  },
  {
    path: "/quiensoy",
    name: "QuienSoy",
    component: () =>
      import(/* webpackChunkName: "Quien Soy" */ "../views/QuienSoy.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
