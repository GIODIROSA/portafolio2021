import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    educations: [],
    experiencias: [],
    referencias: [],
    add: false,
  },
  getters: {},
  mutations: {
    OBTENER_EDUCATION(state, payload) {
      state.educations = payload;
    },
    OBTENER_WORK(state, payload) {
      state.experiencias = payload;
    },
    OBTENER_REFERENCIAS(state, payload) {
      state.referencias = payload;
    },
    MOSTRAR_ADD(state) {
      state.add = !state.add;
    },
  },
  actions: {
    async getData_education({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("education")
          .orderBy("annos", "desc")
          .onSnapshot((snapshot) => {
            let educacion = [];
            snapshot.forEach((doc) => {
              educacion.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_EDUCATION", educacion);
          });
      } catch (error) {
        console.log("hay un error en: ", error);
      }
    }, //final de getData_education

    async getData_work({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("work")
          .orderBy("annos", "desc")
          .onSnapshot((snapshot) => {
            let experiencias = [];
            snapshot.forEach((doc) => {
              experiencias.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_WORK", experiencias);
          });
      } catch (error) {
        console.log("hubo un error en: ", error);
      }
    },

    async getData_referencias({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("referencias")
          .orderBy("identificador", "asc")
          .onSnapshot((snapshot) => {
            let referencias = [];
            snapshot.forEach((doc) => {
              referencias.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_REFERENCIAS", referencias);
          });
      } catch (error) {
        console.log("el error esta en : ", error);
      }
    },
  }, //final de actions
};
