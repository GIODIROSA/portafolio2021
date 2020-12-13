<template>
  <div class="contacto">
    <h1 class="titulo_contacto text-center font-weight-black">Contacto</h1>
    <h4 class="subtitulo_contacto text-caption font-weight-bold text-center">
      Acceso directo para localizarme
    </h4>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center" cols="12">
          <div class="información">
            <v-card class="informacion_card">
              <v-card-title class="titulo_informacion">
                Información
              </v-card-title>
              <v-card-subtitle class="titulo_informacion">
                Giovanni Di Rosa | Nacionalidad: Chilena | Nacimiento: 1987
              </v-card-subtitle>
              <v-card-title class="titulo_informacion">
                Teléfono de Contacto
              </v-card-title>
              <v-card-subtitle>
                +56 9 30781873
              </v-card-subtitle>
              <v-card-title class="titulo_informacion">
                Email de Contacto
              </v-card-title>
              <v-card-subtitle>
                1) giodirosaartes@gmail.com <br />
                2) giodirosadeveloper@gmail.com
              </v-card-subtitle>
              <v-card-title class="titulo_informacion">
                Github
              </v-card-title>
              <v-card-subtitle>
                <a href="https://github.com/GIODIROSA"
                  >Acceso directo a Github</a
                >
              </v-card-subtitle>
              <v-card-title class="titulo_informacion">
                Linkedin
              </v-card-title>
              <v-card-subtitle>
                <a
                  href="https://www.linkedin.com/in/giovanni-di-rosa-5139aa124/"
                  >Acceso a Linkedin</a
                >
              </v-card-subtitle>
              <v-card-title class="titulo_informacion">
                Instagram
              </v-card-title>
              <v-card-subtitle>
                <a href="https://www.instagram.com/dessindirosa/"
                  >Acceso a Instagram</a
                >
              </v-card-subtitle>
              <router-link class="link_inicio" :to="{ name: 'Inicio' }">
                <v-btn dark color="teal lighten-4" block class="my-5">
                  Inicio
                </v-btn>
              </router-link>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contacto",
};
</script>

<style lang="scss" scoped>
.contacto {
  background: #7ec384;
  .titulo_contacto {
    color: #42625d;
  }
  .subtitulo_contacto {
    color: #3f7856;
  }
  .información {
    width: 550px;
    height: 650px;
    border-radius: 5px;
    background: #6aa5a9;
  }
  .informacion_card {
    background: #aac9ce;
  }
}
.link_inicio {
  text-decoration: none;
}
.titulo_informacion {
  color: #7097ab;
}
</style>
