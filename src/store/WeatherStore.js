import WeatherApiClient from "../api/WeatherApiClient";

const PersoneStore = {
  state: {
    weather: [],
    loading: false,
  },
  mutations: {
    addWeather(state, cityWeather) {
      state.weather.push(cityWeather);
    },
    dellWeather(state, city) {
      state.weather = state.weather.filter((el) => el.city !== city);
    },
    updateWeather(state, weatherCites) {
      state.weather = weatherCites;
    },
    clearWeather(state) {
      state.weather = [];
    },
    moveWeatherIndex(state, indexes) {
      const { oldIndex, newIndex } = indexes;
      let arr = new Array(...state.weather);
      console.log(arr);
      const element = arr[oldIndex];
      arr.splice(oldIndex, 1);
      arr.splice(newIndex, 0, element);
      state.weather = arr;
    },
    changeLoadingState(state, bull) {
      state.loading = bull;
    },
  },
  actions: {
    async reloadAllData({ commit, getters }) {
      const weatherApi = new WeatherApiClient();
      console.log(getters.getCities);
      const weatherCites = await weatherApi.getCitiesWeather(getters.getCities);
      commit("updateWeather", weatherCites);
      commit("changeLoadingState", false);
    },
    async loadWeather({ commit }, city) {
      const weatherApi = new WeatherApiClient();
      const weatherCity = await weatherApi.getCityWather(city);
      weatherCity.city = city.city;

      // commit("clearWeather");
      commit("addWeather", weatherCity);
      // commit("changeLoadingState", false);
    },
    async firstLoadWeatherFromGeo({ commit }, city) {
      const weatherApi = new WeatherApiClient();
      const weatherCity = await weatherApi.getCityWather(city);
      city.city = weatherCity.city;
      city.country = weatherCity.country;
      commit("addWeather", weatherCity);
      commit("addCity", city);
      // commit("changeLoadingState", false);
    },
  },
  getters: {
    getAllWeather(state) {
      return state.weather;
    },
    isWeatherLoading(state) {
      return state.loading;
    },
  },
};
export default PersoneStore;
