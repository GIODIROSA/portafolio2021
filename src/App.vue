<template>
  <v-app>
    <Navbar class="navbar_portafolio" />

    <v-main class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("Inicio", [
      "getData_education",
      "getData_work",
      "getData_referencias",
    ]),
    ...mapActions("Galeria", ["obtenerImagenes", "obtenerDataProyecto"]),
  },
  created() {
    this.getData_education();
    this.getData_work();
    this.obtenerImagenes();
    this.obtenerDataProyecto();
    this.getData_referencias();
  },
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap");

* {
  font-family: "Lato", sans-serif;
}
html,
body {
  font-family: "Lato", sans-serif;
}
// CONFIGURACION DE LA ANIMACION
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
