import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: {
    count1: 1,
  },
  mutations: {
    increment(state) {
      state.count1++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    computedCount(state) {
      return state.count1 + 1;
    },
  },
};
const moduleB = {
  namespaced: true,
  state: {
    count2: 1,
  },
  mutations: {
    increment(state) {
      state.count2++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    computedCount(state) {
      return state.count2 + 1;
    },
  },
};

export default new Vuex.Store({
  state: {
    globalCount: 0,
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    a: moduleA,
    b: moduleB,
  },
});
