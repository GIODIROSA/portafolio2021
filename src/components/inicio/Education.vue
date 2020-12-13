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
            <h5 class="titulo_education py-3">
              education.
            </h5>
            <p class="texto-education text-caption text-justify">
              Mi objetivo es integrar mi formación académica y experiencia al
              servicio de una organización, contribuyendo así al cumplimiento de
              sus objetivos y su misión, permitiéndome lograr un crecimiento
              sólido como profesional en la industria tecnológica.
            </p>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  @click="accionarEducation"
                  class="my-5 pink lighten-1"
                  v-bind="attrs"
                  v-on="on"
                >
                  ESTUDIOS
                </v-btn>
              </template>
              <span>Estudios Realizados</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
      <!-- MODAL -->
      <v-dialog v-model="dialog" width="800">
        <v-card class="modal_education cyan lighten-3">
          <div v-for="(estudio, index) in educations" :key="index">
            <v-card-subtitle class="education_institucion light-blue lighten-2">
              Institución: {{ estudio.data.institucion }}
            </v-card-subtitle>
            <v-card-title class="education_titulacion">
              {{ estudio.data.titulacion }}
            </v-card-title>
            <v-card-subtitle class="education_lugar">
              Lugar de estudio: {{ estudio.data.lugar }} -
              {{ estudio.data.annos }}
            </v-card-subtitle>
            <v-card-text>
              {{ estudio.data.skill }}
            </v-card-text>
          </div>
        </v-card>
        <v-btn dark class="cyan accent-3" @click="accionarEducation">
          cerrar
        </v-btn>
      </v-dialog>
      <!--FINAL MODAL -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: ["educations"],
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
.titulo_education {
  color: #ffb62b;
}

.texto-education {
  color: #5d7599;
}

.education_titulacion {
  color: #01579b;
}

@media only screen and (min-width: 300px) and (max-width: 960px) {
  .education {
    padding: 0px;
  }
}
</style>
