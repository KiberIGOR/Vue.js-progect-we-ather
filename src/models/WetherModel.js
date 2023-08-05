export default class UserModel {
  constructor(data) {
    if (data) {
      this.id = data.id;
      this.city = data.name;
      this.weather.id = data.weather[0].id;
      this.weather.icon = data.weather[0].icon;
      this.main.temp = data.main.temp;
      this.main.feels_like = data.main.feels_like;
      this.weather.description = data.weather[0].description;
      this.wind.speed = data.wind.speed;
      this.wind.gust = data.wind.gust;
      this.main.pressure = data.main.pressure;
      this.main.humidity = data.main.humidity;
      this.main.dew_point = Math.round(
        (237,
        7 *
          ((17, 27 * data.main.temp) / (237, 7 + data.main.temp) +
            Math.log(data.main.humidity / 100))) /
          (17,
          27 -
            ((17, 27 * data.main.temp) / (237, 7 + data.main.temp) +
              Math.log(data.main.humidity / 100)))
      );
      this.main.visibility = data.visibility;
    }
  }
  id = null;
  city = null;
  weather = {
    id: null,
    icon: null,
    description: null,
  };
  main = {
    temp: null,
    feels_like: null,
    pressure: null,
    humidity: null,
    dew_point: null,
  };
  wind = {
    speed: null,
    gust: null,
  };
}
