export default class CityModel {
  constructor(data) {
    if (data) {
      this.city = data.name;
      this.lat = data.lat;
      this.lon = data.lon;
      this.country = data.country;
    }
  }
  city = null;
  lat = null;
  lon = null;
  country = null;
}
