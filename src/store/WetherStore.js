import WetherApiClient from "../api/WetherApiClient";
import CityStore from "./CityStore";

const PersoneStore = {
  state: {
    wether: [],
    loading: true,
  },
  mutations: {
    addWether(state, wether) {
      state.wether.push(wether);
    },
    dellSity(state, city) {
      state.wether = state.wether.filter((el) => el.city !== city.city);
    },
    updateWether(state, wetherCites) {
      state.wether = wetherCites;
    },
    clearWether(state) {
      state.wether = [];
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async loadAllData({ commit }) {
      const wetherApi = new WetherApiClient();
      const wetherCites = await wetherApi.getCitiesWether(
        CityStore.state.sites
      );
      commit("updateWether", wetherCites);
      commit("changeLoadingState", false);
    },
    async load({ commit }) {
      const wetherApi = new WetherApiClient();
      const wetherCites = await wetherApi.getCitiesWether(
        CityStore.state.sites
      );
      commit("updateWether", wetherCites);
      commit("changeLoadingState", false);
    },
  },
  getters: {
    getPersones(state) {
      return state.persones;
    },
    filtaredPersonesByName: (state) => (NameFilter) => {
      return state.persones.filter((person) =>
        person.profileName.toUpperCase().includes(NameFilter)
      );
    },
    filtaredPersonesById: (state) => (Id) => {
      return state.persones.filter((person) => person.id == Id);
    },
  },
};
export default PersoneStore;
