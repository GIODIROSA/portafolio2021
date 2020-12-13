<template>
  <nav class="navbar_portafolio">
    <v-app-bar dark flat color="purple lighten-4" app>
      <v-toolbar-title>
        <router-link class="link_inicio" :to="{ name: 'Inicio' }">
          <h5 class="white--text">
            Giovanni Di Rosa
          </h5>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-app-bar>

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
            <v-list-item-title class="textNavigation">{{
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
        { icon: "mdi-adjust", text: "Inicio", route: "/" },
        {
          icon: "mdi-heart-circle-outline",
          text: "Galería",
          route: "/galeria",
        },
        {
          icon: "mdi-account-star-outline",
          text: "Contacto",
          route: "/contacto",
        },
      ],
      dialog: false,
      show1: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.textNavigation {
  color: #001b48;
}
.link_inicio {
  text-decoration: none;
}
</style>
