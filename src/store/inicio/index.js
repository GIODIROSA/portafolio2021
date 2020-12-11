import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    educations: [],
  },
  getters: {},
  mutations: {
    OBTENER_EDUCATION(state, payload) {
      state.educations = payload;
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
    },
  },
};
