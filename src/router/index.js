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
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "Contacto" */ "../views/Contacto.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
