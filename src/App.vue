<template>
  <v-app>
    <Navbar />

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("Inicio", ["getData_education", "getData_work"]),
    ...mapActions("Galeria", ["obtenerImagenes", "obtenerDataProyecto"]),
  },
  created() {
    this.getData_education();
    this.getData_work();
    this.obtenerImagenes();
    this.obtenerDataProyecto();
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
</style>
