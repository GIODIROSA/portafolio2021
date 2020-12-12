<template>
  <div>
    <div class="galeria">
      <h1>Hola soy galeria</h1>
      <!-- PARALLAX -->
      <ParallaxGaleria />
      <!-- FINAL DE PARALLAX -->
      <v-container>
        <template>
          <v-row>
            <v-col
              v-for="(imagen, index) in imagenes"
              :key="index"
              class="d-flex child-flex"
              cols="6"
              md="4"
              lg="4"
            >
              <v-img :src="imagen" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ParallaxGaleria from "@/components/galeria/ParallaxGaleria.vue";
export default {
  components: {
    ParallaxGaleria,
  },
  computed: {
    ...mapState("Galeria", ["imagenes"]),
  },
};
</script>

<style lang="scss" scoped>
.galeria {
  background: #abb6c8;
}
</style>
