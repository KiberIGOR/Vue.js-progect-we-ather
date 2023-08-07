<template>
  <div class="m-settings">
    <div class="m-settings__inner">
      <div class="m-settings__box">
        <p class="m-settings__title">Settings</p>
        <div class="m-settings__cites">
          <img
            v-if="$store.getters.isWeatherLoading"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIA0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIHdpZHRoPSIyNCINCiAgaGVpZ2h0PSIyNCINCiAgdmlld0JveD0iMCAwIDI0IDI0Ig0KICBmaWxsPSJub25lIg0KICBzdHJva2U9IiMwMDAwMDAiDQogIHN0cm9rZS13aWR0aD0iMiINCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIg0KICBzdHJva2UtbGluZWpvaW49InJvdW5kIg0KPg0KICA8bGluZSB4MT0iMTIiIHkxPSIyIiB4Mj0iMTIiIHkyPSI2IiAvPg0KICA8bGluZSB4MT0iMTIiIHkxPSIxOCIgeDI9IjEyIiB5Mj0iMjIiIC8+DQogIDxsaW5lIHgxPSI0LjkzIiB5MT0iNC45MyIgeDI9IjcuNzYiIHkyPSI3Ljc2IiAvPg0KICA8bGluZSB4MT0iMTYuMjQiIHkxPSIxNi4yNCIgeDI9IjE5LjA3IiB5Mj0iMTkuMDciIC8+DQogIDxsaW5lIHgxPSIyIiB5MT0iMTIiIHgyPSI2IiB5Mj0iMTIiIC8+DQogIDxsaW5lIHgxPSIxOCIgeTE9IjEyIiB4Mj0iMjIiIHkyPSIxMiIgLz4NCiAgPGxpbmUgeDE9IjQuOTMiIHkxPSIxOS4wNyIgeDI9IjcuNzYiIHkyPSIxNi4yNCIgLz4NCiAgPGxpbmUgeDE9IjE2LjI0IiB5MT0iNy43NiIgeDI9IjE5LjA3IiB5Mj0iNC45MyIgLz4NCjwvc3ZnPg=="
            alt=""
            class="l-weather-widget__loading-icon"
          />
          <draggable
            v-if="$store.getters.getCities?.length"
            :list="$store.getters.getCities"
            @end="dropCity"
            :disabled="$store.getters.getCities?.length < 2"
            handle=".a-city__drug-icon"
          >
            <aCity
              v-for="(city, index) in $store.getters.getCities"
              :key="index"
              :city="city"
              @delete="deleteCity"
            />
          </draggable>
          <p
            v-else
            class="m-settings__cites-text"
            :style="{
              opacity: $store.getters.isWeatherLoading ? 0 + '%' : 100 + '%',
            }"
          >
            No cities selected
          </p>
        </div>
      </div>
      <div class="m-settings__input">
        <aInput
          label="Add Location:"
          placeholder="Enter city name"
          :value="cityInputValue"
          @addCity="checkCity"
          :subscription="errorText"
          @focus="errorText = ''"
          @input="cityInputValue = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import "./m-settings.scss";
import aCity from "../a-city/a-city.vue";
import aInput from "../a_input/a_input.vue";

const textAccess = Object.seal({
  public: {
    title: "Это открытое сообщество",
  },
});
export default {
  name: "m-settings",
  props: {
    info: Object,
  },
  components: {
    aCity,
    aInput,
    draggable,
  },
  computed: {},
  data() {
    return {
      textAccess,
      errorText: "",
      cityInputValue: "",
    };
  },
  methods: {
    async checkCity(cityName) {
      const error = await this.$store.dispatch("loadCity", cityName);
      if (error) {
        this.errorText = error;
      } else {
        this.cityInputValue = "";
      }
    },
    deleteCity(cityName) {
      this.$store.commit("dellCity", cityName);
      this.$store.commit("dellWeather", cityName);
    },
    dropCity(evt) {
      const { oldIndex } = evt;
      const { newIndex } = evt;
      const obg = {
        oldIndex: oldIndex,
        newIndex: newIndex,
      };
      console.log(oldIndex, newIndex, obg);
      this.$store.commit("moveCityIndex", oldIndex, newIndex);
      this.$store.commit("moveWeatherIndex", obg);
    },
  },
  mounted() {
    console.log(this.$store.getters.getCities);
  },
};
</script>
