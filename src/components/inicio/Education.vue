<template>
  <div class="education">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <p class="title_education">
            Everything will be digital. Even the things that won´t.
          </p>
        </v-col>
        <v-col>
          <div class="parrafo_education">
            <h5 class="py-3">
              education
            </h5>
            <p class=" text-caption text-justify">
              Software developer, disfruto probar nuevas tecnologías por eso es
              que estoy siempre preparado para aprender e integrar nuevos
              conocimientos y habilidades. Me caracterizo por tener capacidad de
              adaptación, compromiso con las actividades que desarrollo y
              responsabilidad.
            </p>
            <v-btn @click="accionarEducation" class="my-5">
              ESTUDIOS
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <!-- MODAL -->
      <v-dialog v-model="dialog" width="800">
        <v-card>
          <v-card-title>
            Education
          </v-card-title>
          <v-card-subtitle class="font-weight-bold">
            Centro Instituto de Diseño Gráfico CIDIG
          </v-card-subtitle>
          <v-card-text>
            Diplomado en ilustración (2005-2008) <br />
            Diplomado en Diseño Gráfico (2006-2009)
          </v-card-text>
          <v-card-subtitle class="font-weight-bold">
            Universidad Centroccidental "Lisandro Alvarado" UCLA
          </v-card-subtitle>
          <v-card-subtitle class="font-weight-bold">
            Decanato Experimental de Humanidades y Artes.
          </v-card-subtitle>
          <v-card-text>
            Licenciado en Artes Plástica (2008-2013) <br />
            Mención Honorifica Cumlaude. Universidad Centroccidental “Lisandro
            Alvarado” UCLA. Posición #3.
          </v-card-text>
          <v-card-subtitle class="font-weight-bold">
            Academia Desafío Latam
          </v-card-subtitle>
          <v-card-text>
            Front end Developer (2020) <br />
            Experiencia en VueJS - Preparanción en REACT.
          </v-card-text>
          <v-btn @click="accionarEducation">
            cerrar
          </v-btn>
        </v-card>
      </v-dialog>
      <!--FINAL MODAL -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      dialog: false,
    };
  }, //final de data
  methods: {
    accionarEducation() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss" scoped>
.education {
  padding: 150px 0;
  height: 100%;
  background: #fe676e;
  .title_education {
    font-weight: 900;
    font-size: 50px;
    line-height: 100%;
    color: #c73866;
  }
}

@media only screen and (min-width: 300px) and (max-width: 960px) {
  .education {
    padding: 0px;
  }
}
</style>
