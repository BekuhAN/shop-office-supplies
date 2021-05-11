import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listCategories: [],
    listProducts: [],
  },
  getters: {
    listCategories(state) {
      return state.listCategories;
    },
    listProducts(state) {
      return state.listProducts;
    },
  },
  mutations: {
    updateListCategories(state, payload) {
      state.listCategories = payload;
    },
    updateListProducts(state, payload) {
      state.listProducts = payload;
    },
  },
  actions: {
    getListCategories({ commit }) {
      axios
        .get("http://localhost:3000/categories?_embed=products")
        .then(({ data }) => commit("updateListCategories", data));
    },
    getListProducts({ commit }, params) {
      axios
        .get("http://localhost:3000/products", { params })
        .then(({ data }) => commit("updateListProducts", data));
    },
  },
});
