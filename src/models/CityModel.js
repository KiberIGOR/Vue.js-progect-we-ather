export default class SityModel {
  constructor(data) {
    if (data) {
      this.city = data.name;
      this.lat = data.lat;
      this.lon = data.lon;
      this.country = data.country;
      this.state = data.state;
    }
  }
  city = null;
  lat = null;
  lon = null;
  country = null;
  state = null;
}
