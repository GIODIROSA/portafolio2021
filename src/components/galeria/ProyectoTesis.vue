<template>
  <div>
    <v-card max-width="550" color="blue-grey lighten-4">
      <v-img :src="front.data.imagen" height="500px"></v-img>

      <v-card-title>
        {{ front.data.titulo }}
      </v-card-title>

      <v-card-subtitle>
        Desarrollo: {{ front.data.desarrollo }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="blue-grey lighten-2" text>
          Descripción
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ front.data.descripcion }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProyectoTesis",
  props: ["front"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
