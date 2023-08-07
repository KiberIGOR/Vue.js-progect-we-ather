<template>
  <div class="m-weather">
    <div class="m-weather__inner">
      <p class="m-weather__city">{{ weather.city + ", " + weather.country }}</p>
      <div class="m-weather__weather">
        <div class="m-weather__weather-temp">
          <img
            :src="require(`../../assets/${weather.weather.icon}.png`)"
            alt=""
            class="m-weather__weather-temp-icon"
          />
          <p class="m-weather__weather-temp-number">
            {{ weather.main.temp }}°С
          </p>
        </div>
        <div class="m-weather__weather-text">
          <p class="m-weather__weather-text-feels">
            Feels like {{ weather.main.feels_like }}°С.
          </p>
          <p class="m-weather__weather-text-light">
            {{ weather.weather.icon.includes("d") ? "Day" : "Night" }}
          </p>
        </div>
        <p class="m-weather__weather-description">
          {{ weather.weather.description }}
        </p>
        <div class="m-weather__weather-other">
          <div class="m-weather__weather-wind">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDx0aXRsZT45NSBDb21wYXNzIFdlc3Q8L3RpdGxlPgogICAgPGRlc2NyaXB0aW9uPkNyZWF0ZWQgd2l0aCBTa2V0Y2ggKGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCk8L2Rlc2NyaXB0aW9uPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Ikljb25zIG5ldyBBcnJhbmdlZCBOYW1lcyBDb2xvciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ijk1IENvbXBhc3MgV2VzdCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiwzMCBDOC4yNjgwMTMxMiwzMCAyLDIzLjczMTk4NjkgMiwxNiBDMiw4LjI2ODAxMzEyIDguMjY4MDEzMTIsMiAxNiwyIEMyMy43MzE5ODY5LDIgMzAsOC4yNjgwMTMxMiAzMCwxNiBDMzAsMjMuNzMxOTg2OSAyMy43MzE5ODY5LDMwIDE2LDMwIFogTTE2LDI4IEMyMi42Mjc0MTczLDI4IDI4LDIyLjYyNzQxNzMgMjgsMTYgQzI4LDkuMzcyNTgyNjcgMjIuNjI3NDE3Myw0IDE2LDQgQzkuMzcyNTgyNjcsNCA0LDkuMzcyNTgyNjcgNCwxNiBDNCwyMi42Mjc0MTczIDkuMzcyNTgyNjcsMjggMTYsMjggWiBNMTYsMjgiIGlkPSJPdmFsIDI3OCBjb3B5IDMiIGZpbGw9IiM0MDQwNDAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTUsMTYgQzUsMTYgMTMuNzkwMDAwOSwxMiAxNiwxMiBDMTguMjA5OTk5MSwxMi4wMDAwMDAxIDIwLDEzLjc5MDg2MDkgMjAsMTYgQzIwLDE4LjIwOTEzOTEgMTguMjA5OTk5MSwxOS45OTk5OTk5IDE2LDIwIEMxMy43OTAwMDA5LDIwIDUsMTYgNSwxNiBaIE0xNiwxOCBDMTcuMTA0NTY5NiwxOCAxOCwxNy4xMDQ1Njk2IDE4LDE2IEMxOCwxNC44OTU0MzA0IDE3LjEwNDU2OTYsMTQgMTYsMTQgQzE0Ljg5NTQzMDQsMTQgMTQsMTQuODk1NDMwNCAxNCwxNiBDMTQsMTcuMTA0NTY5NiAxNC44OTU0MzA0LDE4IDE2LDE4IFogTTE2LDE4IiBpZD0iVHJpYW5nbGUgMjUgY29weSAyIiBmaWxsPSIjMjM4MUJGIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
              alt=""
              :style="{ transform: `rotate(${90 + weather.wind.deg}deg)` }"
              class="m-weather__weather-wind-icon"
            />
            <p class="m-weather__weather-wind-number">
              {{ weather.wind.speed }} m/s SSE
            </p>
          </div>
          <div class="m-weather__weather-pressure">
            <img
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWljb24iIHN0eWxlPSJ3aWR0aDogMWVtO2hlaWdodDogMWVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ZmlsbDogY3VycmVudENvbG9yO292ZXJmbG93OiBoaWRkZW47IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU3LjY3NzY0MyAxNTkuNjQ0NjE3YzAgMTEuODAxNzMzIDQuNzAyOTQ2IDIzLjE1OTc5MiAxMy4wNDQwMjEgMzEuNTAwODY3IDguMzQxMDc1IDguMzQxMDc1IDE5LjY5OTEzMyAxMy4wNDQwMjEgMzEuNTAwODY2IDEzLjA0NDAyaDgxOS41NTQ5NGMxMS44MDE3MzMgMCAyMy4xNTk3OTItNC43MDI5NDYgMzEuNTAwODY2LTEzLjA0NDAyIDguMzQxMDc1LTguMzQxMDc1IDEzLjA0NDAyMS0xOS42OTkxMzMgMTMuMDQ0MDIxLTMxLjUwMDg2N3MtNC43MDI5NDYtMjMuMTU5NzkyLTEzLjA0NDAyMS0zMS41MDA4NjdjLTguMzQxMDc1LTguMzQxMDc1LTE5LjY5OTEzMy0xMy4wNDQwMjEtMzEuNTAwODY2LTEzLjA0NDAySDEwMi4yMjI1M2MtMTEuODAxNzMzIDAtMjMuMTU5NzkyIDQuNzAyOTQ2LTMxLjUwMDg2NiAxMy4wNDQwMi04LjM0MTA3NSA4LjM0MTA3NS0xMy4wNDQwMjEgMTkuNjk5MTMzLTEzLjA0NDAyMSAzMS41MDA4Njd6IG0wIDczMC41NTM4OTljMCAxMS44MDE3MzMgNC43MDI5NDYgMjMuMTU5NzkyIDEzLjA0NDAyMSAzMS41MDA4NjcgOC4zNDEwNzUgOC4zNDEwNzUgMTkuNjk5MTMzIDEzLjA0NDAyMSAzMS41MDA4NjYgMTMuMDQ0MDIxaDgwOC4wMTk0MTFjMTEuODAxNzMzIDAgMjMuMTU5NzkyLTQuNzAyOTQ2IDMxLjUwMDg2Ny0xMy4wNDQwMjEgOC4zNDEwNzUtOC4zNDEwNzUgMTMuMDQ0MDIxLTE5LjY5OTEzMyAxMy4wNDQwMi0zMS41MDA4NjdzLTQuNzAyOTQ2LTIzLjE1OTc5Mi0xMy4wNDQwMi0zMS41MDA4NjZjLTguMzQxMDc1LTguMzQxMDc1LTE5LjY5OTEzMy0xMy4wNDQwMjEtMzEuNTAwODY3LTEzLjA0NDAyMUgxMDIuMjIyNTNjLTExLjgwMTczMyAwLTIzLjE1OTc5MiA0LjcwMjk0Ni0zMS41MDA4NjYgMTMuMDQ0MDIxLTguMzQxMDc1IDguMzQxMDc1LTEzLjA0NDAyMSAxOS42OTkxMzMtMTMuMDQ0MDIxIDMxLjUwMDg2NnoiIGZpbGw9IiMwMDAiIC8+PHBhdGggZD0iTTc1MS4xNDAzODEgNzgwLjc4ODQ2NGwtMTA1LjY4MzE4OS0xNDEuOTc1NzM2IDM1LjU4MjY2OS0yNi41MzE3MTYgNDcuOTE2ODExIDY0LjQyMTQ5MXYtMzcwLjQ2NzkzOGg0NC4zNjc0MTh2MzcwLjQ2NzkzOGw0OC4wMDU1NDYtNjQuNDIxNDkxIDM1LjU4MjY2OSAyNi41MzE3MTYtMTA1Ljc3MTkyNCAxNDEuOTc1NzM2eiBtLTQ3OC4yODA3NjIgMGwtMTA1LjY4MzE4OS0xNDEuOTc1NzM2IDM1LjU4MjY2OS0yNi41MzE3MTYgNDcuOTE2ODExIDY0LjQyMTQ5MXYtMzcwLjQ2NzkzOGg0NC4zNjc0MTh2MzcwLjQ2NzkzOGw0OC4wMDU1NDUtNjQuNDIxNDkxIDM1LjU4MjY2OSAyNi41MzE3MTYtMTA1Ljc3MTkyMyAxNDEuOTc1NzM2eiBtMjM5LjE0MDM4MSAwbC0xMDUuNjgzMTg5LTE0MS45NzU3MzYgMzUuNTgyNjY5LTI2LjUzMTcxNiA0OC4wMDU1NDYgNjQuNDIxNDkxdi0zNzAuNDY3OTM4aDQ0LjM2NzQxOHYzNzAuNDY3OTM4bDQ4LjAwNTU0Ni02NC40MjE0OTEgMzUuNTgyNjY5IDI2LjUzMTcxNi0xMDUuODYwNjU5IDE0MS45NzU3MzZ6IiBmaWxsPSIjMjM4MUJGIiAvPjwvc3ZnPg=="
              alt=""
              class="m-weather__weather-pressure-icon"
            />
            <p class="m-weather__weather-pressure-number">
              {{ weather.main.pressure }} hPa
            </p>
          </div>
          <div class="m-weather__weather-humidity">
            <p class="m-weather__weather-humidity-number">
              Humidity: {{ weather.main.humidity }}%
            </p>
          </div>
          <div class="m-weather__weather-dewpoint">
            <p class="m-weather__weather-dewpoint-number">
              Dew point: {{ weather.main.dew_point }}°С
            </p>
          </div>
          <div class="m-weather__weather-visibility">
            <p class="m-weather__weather-visibility-number">
              Visibility: {{ (weather.main.visibility / 1000).toFixed(1) }}km
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./m-weather.scss";

const textAccess = Object.seal({
  public: {
    title: "Это открытое сообщество",
  },
});
export default {
  name: "m-weather",
  props: {
    weather: Object,
  },
  computed: {},
  data() {
    return {
      textAccess,
    };
  },
};
</script>
