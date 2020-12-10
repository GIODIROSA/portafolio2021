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
            <div class="texto_titulo ma-6">
              <h5>
                Di Rosa.
              </h5>
              <p class="parrafo_titulo text-caption text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                culpa officia itaque nostrum consequuntur unde ut rem, et
                labore. Harum perspiciatis qui maiores expedita nisi pariatur
                alias consectetur tempora laborum, laboriosam iusto eveniet
                quisquam nostrum iste hic veniam cum nobis quos accusantium
                totam ad eos! Excepturi quis vel officiis mollitia.
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
              <h5>
                work
              </h5>
              <p class=" text-caption text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                id eveniet iste. Tempore nobis eveniet dolorem iure dolores
                explicabo in error provident ullam aspernatur consequatur velit
                beatae dicta ipsum quasi, ratione iste nihil consequuntur dolore
                laboriosam voluptas consectetur suscipit! Culpa, qui
                praesentium? Laboriosam provident reiciendis non! Consectetur
                suscipit ab aspernatur voluptatibus eos reiciendis sequi
                perferendis culpa ullam. Velit unde, alias rem, necessitatibus
                ut molestiae doloremque voluptate veniam sit quidem distinctio
                inventore suscipit ducimus? Tempora labore repellendus dolorem
                hic optio illo vel voluptates repellat molestias culpa
                recusandae, quae iure voluptatibus reiciendis perferendis ea
                similique ex ad consequuntur consequatur placeat eaque. Dolor
                provident magni unde, quia possimus neque adipisci mollitia
                necessitatibus enim non incidunt, dolores iste ex ipsam natus
                quisquam odit corrupti.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ParallaxInicio from "@/components/inicio/ParallaxInicio.vue";

export default {
  name: "Inicio",
  components: {
    ParallaxInicio,
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
  .parallaxInicio {
    display: none;
  }
  .parrafo_do {
    padding: 0px 10px;
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
  .parrafo_do {
    padding: 100px 0;
  }
  .titulo_do {
    padding: 150px 20px;
  }
}
</style>
