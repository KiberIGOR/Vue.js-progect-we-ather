import axios from "axios";
import CityModel from "../models/CityModel";

export default class CityApiClient {
  async getCityCoordinates(cityName) {
    const httpCloent = axios.create();

    try {
      const cityCoordinates = await httpCloent.get(
        `${process.env.VUE_APP_API_HOST}/geo/1.0/direct?q=${cityName}&appid=${process.env.VUE_APP_API_KEY}`
      );
      console.log(cityCoordinates);
      if (
        cityCoordinates != null &&
        cityCoordinates.data != null &&
        cityCoordinates.status == 200
      ) {
        console.log(cityCoordinates);
        const cityModel = new CityModel(cityCoordinates.data[0]);
        return cityModel;
      } else {
        alert("API-City вернула что-то не то");
      }
    } catch (e) {
      console.error(e);
      alert("Проверьте подключенние к api");
    }
  }
}
