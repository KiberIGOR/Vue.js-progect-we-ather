import axios from "axios";
import WeatherModel from "../models/WeatherModel";

export default class WeatherApiClient {
  constructor() {
    this.#axiosHttpClient = axios.create();
  }
  #axiosHttpClient = null;

  async getCitiesWeather(cityArray) {
    const citiesWeatherList = [];
    try {
      for (let city of cityArray) {
        const cityWeather = this.getCityWather(city);
        citiesWeatherList.push(cityWeather);
      }
    } catch (e) {
      console.error(e);
      alert("Проверьте подключенние к api");
    }
  }
  async getCityWather(city) {
    const httpCloent = this.#axiosHttpClient;
    try {
      const cityWather = await httpCloent.get(
        `${process.env.VUE_APP_API_HOST}/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.VUE_APP_API_KEY}`
      );
      console.log(cityWather);
      if (
        cityWather != null &&
        cityWather.data != null &&
        cityWather.status == 200
      ) {
        const cityWeather = new WeatherModel(cityWather.data);
        return cityWeather;
      } else {
        alert("API-Weather вернула что-то не то");
      }
    } catch (e) {
      console.error(e);
      alert("Проверьте подключенние к api");
    }
  }
}
