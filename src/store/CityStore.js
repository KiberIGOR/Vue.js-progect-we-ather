import CityApiClient from "../api/CityApiClient";

const SitesStore = {
  state: {
    sites: [],
  },
  mutations: {
    addSity(state, city) {
      state.sites.push(city);
    },
    dellSity(state, city) {
      state.sites = state.sites.filter((el) => el.city !== city.city);
    },
    clearSites(state) {
      state.sites = [];
    },
  },
  actions: {
    async loadSite({ commit }, cityName) {
      const cityApi = new CityApiClient();
      const cityCoordinates = await cityApi.getCityCoordinates(cityName);
      commit("addSity", cityCoordinates);
    },
  },
  getters: {
    getSites(state) {
      return state.sites;
    },
  },
};
export default SitesStore;
