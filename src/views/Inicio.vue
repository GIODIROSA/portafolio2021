<template>
  <div class="home">
    <!-- SECTION PRINCIPAL -->
    <div class="header">
      <v-container class="header_titulo">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <p class="titulo_Inicial">
              Gio Think.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="texto_titulo ma-3">
              <h5>
                Di Rosa.
              </h5>
              <p class="parrafo_titulo text-caption text-justify">
                Soy desarrollador front-end y diseñador gráfico de profesión.
                Siempre con ganas de incorporar nuevas habilidades y de
                enfrentar desafíos que me hagan crecer tanto personal como
                profesionalmente. He incorporado herramientas de trabajo que
                permitieron mi formación como desarrollador front-end y
                diseñador UI, construyendo plataformas digitales que den
                soluciones eficientes e innovadoras a quienes lo necesiten,
                además de ser parte de equipos de trabajo en donde se comparten
                conocimientos y habilidades personales, utilizando metodologías
                ágiles SCRUM. Me caracterizo por tener una mente inquieta,
                sentido social y espíritu creador, y esto es lo que busco
                aportar a un equipo de trabajo.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- FINAL SECTION PRINCIPAL -->

    <!-- COMPONENTE PARALLAX DE 960 EN ADELANTE -->
    <ParallaxInicio class="parallaxInicio" />
    <!-- FINAL PARALLAX DE 960 EN ADELANTE -->

    <!-- DIV CON WIDTH 300 -->
    <div class="parallaxAlternativo">
      <h1 class="text-caption font-weight-thin white--text text-center">
        Giovanni Di Rosa
      </h1>
      <h5 class="text-caption font-weigth-black text-center white--text">
        FRONT END DEVELOPER
      </h5>
    </div>
    <!-- FINAL DIV CON WIDTH 300 -->

    <Do />

    <Education :educations="educations" />
  </div>
</template>

<script>
import ParallaxInicio from "@/components/inicio/ParallaxInicio.vue";
import Education from "@/components/inicio/Education.vue";
import Do from "@/components/inicio/Do.vue";
import { mapState } from "vuex";

export default {
  name: "Inicio",
  computed: {
    ...mapState("Inicio", ["educations"]),
  },
  components: {
    ParallaxInicio,
    Do,
    Education,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #cdb3d4;
  height: 100%;
  .titulo_Inicial {
    padding: 0px 30px;
    font-weight: 900;
    font-size: 100px;
    line-height: 90%;
    color: #ffc98b;
  }
  .header_titulo {
    padding: 150px 0px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 960px) {
  .parallaxInicio {
    display: none;
  }

  .parallaxAlternativo {
    padding: 150px 0px;
    background-image: url("../assets/img/gio_fotografia.png");
    height: 450px;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .titulo_do {
    padding: 0px 0;
  }
}
@media only screen and (min-width: 961px) {
  .parallaxAlternativo {
    display: none;
  }
}
</style>
