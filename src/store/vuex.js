import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import CityStore from "./CityStore";
import WetherStore from "./WetherStore";
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  modules: {
    CityStore,
    WetherStore,
  },
  plugins: [vuexLocal.plugin],
});

export default store;
