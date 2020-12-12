<template>
  <div>
    <v-parallax dark :src="imageParallax">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            FRONT END - DISEÑO
          </h1>
          <h4 class="subheading">
            SOFTWARE DEVELOPER CON FORTALEZA EN DISEÑO
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageParallax:
        "https://firebasestorage.googleapis.com/v0/b/portafolio-giodirosa.appspot.com/o/ambiente%2Fparallax.png?alt=media&token=a10da86f-bf77-4abb-a527-ace4195d6a8e",
    };
  },
};
</script>

<style></style>
