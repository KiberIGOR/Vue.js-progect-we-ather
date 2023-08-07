import CityApiClient from "../api/CityApiClient";

const CitiesStore = {
  state: {
    cities: [],
    isInitialOpening: true,
  },
  mutations: {
    addCity(state, city) {
      state.cities.push(city);
    },
    dellCity(state, city) {
      state.cities = state.cities.filter((el) => el.city !== city);
    },
    clearCites(state) {
      state.cities = [];
    },
    initialOpening(state) {
      state.isInitialOpening = false;
    },
    moveCityIndex(state, fromIndex) {
      const element = state.cities.splice(fromIndex, 1)[0];
      state.cities.splice(fromIndex, 0, element);
    },
  },
  actions: {
    async loadCity({ commit, state, dispatch }, cityName) {
      if (
        !state.cities.find(
          (el) => el.city.toLowerCase() === cityName.toLowerCase()
        )
      ) {
        const cityApi = new CityApiClient();
        const cityCoordinates = await cityApi.getCityCoordinates(cityName);
        if (cityCoordinates?.city?.toLowerCase() === cityName.toLowerCase()) {
          commit("addCity", cityCoordinates);
          dispatch("loadWeather", cityCoordinates);
          return;
        } else {
          return "Invalid input, please check the name";
        }
      }
      return "This city has already been added";
    },
  },
  getters: {
    getCities(state) {
      return state.cities;
    },
    isInitialOpening(state) {
      return state.isInitialOpening;
    },
  },
};
export default CitiesStore;
