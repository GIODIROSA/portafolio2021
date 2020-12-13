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
      <v-container>
        <h1 class="titulo_experiencia text-center pt-5">
          Referencias Personales
        </h1>
        <p class="subtitulo_experiencia text-caption text-center">
          Datos | Contacto de profesionales
        </p>
        <v-expansion-panels class="panel_referencias">
          <v-expansion-panel
            v-for="(item, i) in referencias"
            :key="i"
            class="itemPanel_referencias"
          >
            <v-expansion-panel-header class="headerPanel_referencia">
              {{ item.data.titulo }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="contenido_referencia">
              <h5 class="text-caption mt-5">{{ item.data.profesional }}</h5>
              <p>
                {{ item.data.contacto }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Experiencias",
  props: ["experiencias"],
  computed: {
    ...mapState("Inicio", ["referencias"]),
  },
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
.panel_referencias {
  background: #08979d;
}
.headerPanel_referencia {
  background: #b2c5b2;
  color: #6d8c8e;
}
.contenido_referencia {
  background: #aec8ca;
  color: #6d8c8e;
}
</style>
