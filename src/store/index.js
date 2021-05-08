import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listCategories: [],
  },
  getters: {
    listCategories(state) {
      return state.listCategories;
    },
  },
  mutations: {
    updateListCategories(state, payload) {
      state.listCategories = payload;
    },
  },
  actions: {
    getListCategories({ commit }) {
      axios
        .get("http://localhost:3000/categories?_embed=products")
        .then(({ data }) => commit("updateListCategories", data));
    },
  },
});
