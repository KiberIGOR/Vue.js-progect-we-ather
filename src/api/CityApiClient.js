import axios from "axios";
import CityModel from "../models/CityModel";

export default class CityApiClient {
  async getCityCoordinates(cityName) {
    const httpCloent = axios.create();
    console.log(cityName, "Имя в фукции");

    try {
      const cityCoordinates = await httpCloent.get(
        `${process.env.VUE_APP_API_HOST}/geo/1.0/direct?q=${cityName}&appid=${process.env.VUE_APP_API_KEY}`
      );
      if (
        cityCoordinates != null &&
        cityCoordinates.data[0] != null &&
        cityCoordinates.status == 200
      ) {
        console.log(cityCoordinates);
        const cityModel = new CityModel(cityCoordinates.data[0]);
        return cityModel;
      } else {
        console.error("API-City return something wrong");
        return 0;
      }
    } catch (e) {
      console.error("API-City error", e);
      return 0;
    }
  }
}
