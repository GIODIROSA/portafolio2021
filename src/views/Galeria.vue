<template>
  <div>
    <div class="galeria">
      <div class="encabezado_galeria pt-6">
        <h1 class="titulo_galeria text-center">Galería</h1>
        <h4 class="subtitulo_titulo text-caption text-center pb-5">
          Proyectos de Front | Diseño UI | Diseño Gráfico
        </h4>
      </div>
      <!-- CARD FRONT -->
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            v-for="(front, index) in proyectos"
            :key="index"
          >
            <ProyectoTesis :front="front" />
          </v-col>
        </v-row>
      </v-container>
      <!--FINAL CARD FRONT -->

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
import ProyectoTesis from "@/components/galeria/ProyectoTesis.vue";
export default {
  components: {
    ParallaxGaleria,
    ProyectoTesis,
  },
  computed: {
    ...mapState("Galeria", ["imagenes", "proyectos"]),
  },
};
</script>

<style lang="scss" scoped>
.galeria {
  background: #abb6c8;
}
.titulo_galeria {
  color: #dadada;
}
.subtitulo_titulo {
  color: #5d7599;
}
</style>
