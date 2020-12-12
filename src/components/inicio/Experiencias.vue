<template>
  <div>
    <section class="experiencia">
      <v-container>
        <v-row>
          <v-col>
            <div>
              <h1 class="titulo_experiencia text-center pt-5">
                Experiencia Laboral
              </h1>
              <p class="subtitulo_experiencia text-caption text-center">
                Desarrollador Front End Vue Trainee, poner a prueba mis
                conocimientos, dispuesto siempre a expandir habilidades.
              </p>
              <template>
                <v-simple-table class="tabla_work teal accent-3">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="titulo_datos text-left">
                          Work
                        </th>
                        <th class="titulo_datos text-left">
                          Time
                        </th>
                        <th class="titulo_datos text-left">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in experiencias" :key="index">
                        <td class="datos py-3">{{ item.data.empresa }}</td>
                        <td class="datos py-3">{{ item.data.annos }}</td>
                        <td class="datos py-3">{{ item.data.descripcion }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Experiencias",
  props: ["experiencias"],
};
</script>

<style lang="scss" scoped>
.experiencia {
  height: 100%;
  background: #b3ddd1;
}
.titulo_experiencia {
  color: #80beaf;
}
.subtitulo_experiencia {
  color: #289c85;
}
.titulo_datos {
  color: #117c6f;
}
.datos {
  color: #289c85;
}
</style>
