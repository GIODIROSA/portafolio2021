import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    imagenes: [],
    proyectos: [],
  },
  getters: {},
  mutations: {
    GET_IMAGENES(state, payload) {
      state.imagenes = payload;
    },
    OBTENER_PROYECTO(state, payload) {
      state.proyectos = payload;
    },
  },
  actions: {
    // OBTENER IMAGENES STORAGE
    obtenerImagenes({ commit }) {
      let storageRef = firebase.storage().ref("galeria");
      storageRef.listAll().then((result) => {
        let imagenes = [];
        result.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            imagenes.push(url);
          });
        });
        commit("GET_IMAGENES", imagenes);
      });
    },

    // OBTENER DATA DE PROYECTO

    async obtenerDataProyecto({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("proyecto")
          .orderBy("identificador", "asc")
          .onSnapshot((snapshot) => {
            let proyectos = [];
            snapshot.forEach((doc) => {
              proyectos.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_PROYECTO", proyectos);
          });
      } catch (error) {
        console.log("el error esta: ", error);
      }
    },
  }, //final de actions
};
