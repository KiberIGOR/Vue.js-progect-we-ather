import axios from "axios";
import WetherModel from "../models/WetherModel";

export default class UserApiClient {
  constructor() {
    this.#axiosHttpClient = axios.create();
  }
  #axiosHttpClient = null;

  async getCitiesWether(cityArray) {
    const citiesWetherList = [];
    try {
      for (let city of cityArray) {
        const cityWether = this.getCityWather(city);
        citiesWetherList.push(cityWether);
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
        const cityWether = new WetherModel(cityWather.data);
        return cityWether;
      } else {
        alert("API-Wether вернула что-то не то");
      }
    } catch (e) {
      console.error(e);
      alert("Проверьте подключенние к api");
    }
  }
}
