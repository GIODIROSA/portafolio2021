<template>
  <nav>
    <v-toolbar dense elevation="1" class="navPrincipal blue lighten-3">
      <v-toolbar-title>
        <h5 class="white--text">
          Giovanni Di Rosa
        </h5>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="navigationDrawer blue lighten-4"
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon left class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-heart", text: "Inicio", route: "/" },
        { icon: "mdi-ticket", text: "Galeria", route: "/galeria" },
        { icon: "mdi-music", text: "Quien soy", route: "/quiensoy" },
      ],
      dialog: false,
      show1: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
