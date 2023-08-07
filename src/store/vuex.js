import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import CityStore from "./CityStore";
import WeatherStore from "./WeatherStore";
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  modules: {
    CityStore,
    WeatherStore,
  },
  plugins: [vuexLocal.plugin],
});

export default store;
