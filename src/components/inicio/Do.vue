<template>
  <div>
    <!-- SECTION DO -->

    <div class="section_do">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <p class="titulo_do">
              Do.
            </p>
          </v-col>
          <v-col>
            <div class="parrafo_do">
              <h5 class="py-3">
                work
              </h5>
              <p class=" text-caption text-justify">
                Software developer, disfruto probar nuevas tecnologías por eso
                es que estoy siempre preparado para aprender e integrar nuevos
                conocimientos y habilidades. Me caracterizo por tener capacidad
                de adaptación, compromiso con las actividades que desarrollo y
                responsabilidad.
              </p>
              <v-btn @click="showAdd" dark class="my-3 amber darken-3">
                <span v-if="!add">Ver Experiencia</span>
                <span v-if="add">Quitar Experiencia</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- FINAL SECTION DO -->
    <Experiencias v-if="add" :experiencias="experiencias" />
  </div>
</template>

<script>
import Experiencias from "@/components/inicio/Experiencias.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Do",
  computed: {
    ...mapState("Inicio", ["experiencias", "add"]),
  },
  methods: {
    ...mapMutations("Inicio", ["MOSTRAR_ADD"]),
    showAdd() {
      this.MOSTRAR_ADD();
    },
  },
  components: {
    Experiencias,
  },
};
</script>

<style lang="scss" scoped>
.section_do {
  height: 100%;
  background: #ffbd71;
  .titulo_do {
    font-weight: 900;
    font-size: 100px;
    line-height: 90%;
    color: #fe676e;
  }
}

@media only screen and (min-width: 300px) and (max-width: 960px) {
  .parrafo_do {
    padding: 0px 10px;
  }
}

@media only screen and (min-width: 961px) {
  .parrafo_do {
    padding: 100px 0;
  }
  .titulo_do {
    padding: 150px 20px;
  }
}
</style>
