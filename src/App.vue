<template>
  <div class="l-weather-widget">
    <div ref="weather" class="l-weather-widget__inner">
      <img
        v-if="!isVisibleSettings && $store.getters.isWeatherLoading"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIA0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIHdpZHRoPSIyNCINCiAgaGVpZ2h0PSIyNCINCiAgdmlld0JveD0iMCAwIDI0IDI0Ig0KICBmaWxsPSJub25lIg0KICBzdHJva2U9IiMwMDAwMDAiDQogIHN0cm9rZS13aWR0aD0iMiINCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIg0KICBzdHJva2UtbGluZWpvaW49InJvdW5kIg0KPg0KICA8bGluZSB4MT0iMTIiIHkxPSIyIiB4Mj0iMTIiIHkyPSI2IiAvPg0KICA8bGluZSB4MT0iMTIiIHkxPSIxOCIgeDI9IjEyIiB5Mj0iMjIiIC8+DQogIDxsaW5lIHgxPSI0LjkzIiB5MT0iNC45MyIgeDI9IjcuNzYiIHkyPSI3Ljc2IiAvPg0KICA8bGluZSB4MT0iMTYuMjQiIHkxPSIxNi4yNCIgeDI9IjE5LjA3IiB5Mj0iMTkuMDciIC8+DQogIDxsaW5lIHgxPSIyIiB5MT0iMTIiIHgyPSI2IiB5Mj0iMTIiIC8+DQogIDxsaW5lIHgxPSIxOCIgeTE9IjEyIiB4Mj0iMjIiIHkyPSIxMiIgLz4NCiAgPGxpbmUgeDE9IjQuOTMiIHkxPSIxOS4wNyIgeDI9IjcuNzYiIHkyPSIxNi4yNCIgLz4NCiAgPGxpbmUgeDE9IjE2LjI0IiB5MT0iNy43NiIgeDI9IjE5LjA3IiB5Mj0iNC45MyIgLz4NCjwvc3ZnPg=="
        alt=""
        class="l-weather-widget__loading-icon"
      />
      <template v-if="!isVisibleSettings">
        <template v-if="$store.getters.getAllWeather.length">
          <mWeather
            v-for="weather in $store.getters.getAllWeather"
            :key="weather.id"
            :weather="weather"
          />
        </template>
        <p
          :style="{
            opacity: $store.getters.isWeatherLoading ? 0 + '%' : 100 + '%',
          }"
          class="l-weather-widget__text"
          v-else
        >
          No selected cities
        </p>
      </template>
      <mSettings v-else :style="{ minWidth: settingsWidth + 'px' }" />
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJtODAuMTYgMjkuMDU0LTUuOTU4LS43MDkgNS45NTguNzFabTMxLjY4IDAtNS45NTguNzEgNS45NTgtLjcxWm0zNC4yMTcgMTkuNzU2LTIuMzY1LTUuNTE1IDIuMzY1IDUuNTE0Wm0xMC4wODEgMy4zNTIgNS4xOTYtMy01LjE5NiAzWm03Ljg5NiAxMy42NzYgNS4xOTYtMy01LjE5NiAzWm0tMi4xMzcgMTAuNDA3LTMuNTk0LTQuODA1IDMuNTk0IDQuODA1Wm0wIDM5LjUxIDMuNTkzLTQuODA1LTMuNTkzIDQuODA1Wm0yLjEzNyAxMC40MDcgNS4xOTYgMy01LjE5Ni0zWm0tNy44OTYgMTMuNjc2LTUuMTk2LTMgNS4xOTYgM1ptLTEwLjA4MSAzLjM1MyAyLjM2NC01LjUxNS0yLjM2NCA1LjUxNVptLTM0LjIxNyAxOS43NTUgNS45NTguNzA5LTUuOTU4LS43MDlabS0zMS42OCAwLTUuOTU4LjcwOSA1Ljk1OC0uNzA5Wm0tMzQuMjE3LTE5Ljc1NS0yLjM2NC01LjUxNSAyLjM2NCA1LjUxNVptLTEwLjA4LTMuMzUzLTUuMTk3IDMgNS4xOTYtM1ptLTcuODk3LTEzLjY3NiA1LjE5Ni0zLTUuMTk2IDNabTIuMTM3LTEwLjQwNyAzLjU5NCA0LjgwNS0zLjU5NC00LjgwNVptMC0zOS41MUwyNi41MSA4MS4wNWwzLjU5My00LjgwNVptLTIuMTM3LTEwLjQwNyA1LjE5NiAzLTUuMTk2LTNabTcuODk2LTEzLjY3Ni01LjE5Ni0zIDUuMTk2IDNabTEwLjA4MS0zLjM1Mi0yLjM2NCA1LjUxNCAyLjM2NC01LjUxNFptNy44NSAzLjM2NS0yLjM2NSA1LjUxNSAyLjM2NC01LjUxNVptMCA4Ny42NSAyLjM2NCA1LjUxNC0yLjM2NS01LjUxNFpNMzYuMjM1IDExMS4xN2wtMy41OTQtNC44MDUgMy41OTQgNC44MDVabTc2LjgyMyA0MS41MzUgNS45NTguNzEtNS45NTgtLjcxWm0zOS44NTQtNjkuNzQyLTMuNTkzLTQuODA1IDMuNTkzIDQuODA1Wm0tMTYuMzY5LTMwLjA3NCAyLjM2NCA1LjUxNC0yLjM2NC01LjUxNFptLTIzLjQ4NS0xMy41OTQtNS45NTguNzA5IDUuOTU4LS43MVpNODguMTA0IDE2YTE0IDE0IDAgMCAwLTEzLjkwMiAxMi4zNDVsMTEuOTE2IDEuNDE5QTIgMiAwIDAgMSA4OC4xMDQgMjhWMTZabTE1Ljc5MiAwSDg4LjEwNHYxMmgxNS43OTJWMTZabTEzLjkwMiAxMi4zNDVBMTQgMTQgMCAwIDAgMTAzLjg5NiAxNnYxMmEyIDIgMCAwIDEgMS45ODYgMS43NjRsMTEuOTE2LTEuNDE5Wm0xLjIxOSAxMC4yNC0xLjIxOS0xMC4yNC0xMS45MTYgMS40MTkgMS4yMTkgMTAuMjQgMTEuOTE2LTEuNDE5Wm0yNC42NzUgNC43MS05LjUxMyA0LjA4IDQuNzI5IDExLjAyOCA5LjUxMy00LjA4LTQuNzI5LTExLjAyOFptMTcuNjQyIDUuODY3YTE0IDE0IDAgMCAwLTE3LjY0Mi01Ljg2N2w0LjcyOSAxMS4wMjlhMiAyIDAgMCAxIDIuNTIxLjgzOGwxMC4zOTItNlptNy44OTYgMTMuNjc2LTcuODk2LTEzLjY3Ni0xMC4zOTIgNiA3Ljg5NiAxMy42NzYgMTAuMzkyLTZabS0zLjc0IDE4LjIxMmExNCAxNCAwIDAgMCAzLjc0LTE4LjIxMmwtMTAuMzkyIDZhMiAyIDAgMCAxLS41MzUgMi42MDJsNy4xODcgOS42MVptLTguOTg0IDYuNzE4IDguOTg0LTYuNzE4LTcuMTg3LTkuNjEtOC45ODMgNi43MTggNy4xODYgOS42MVptOC45ODQgMjMuMTgyLTguOTg0LTYuNzE4LTcuMTg2IDkuNjEgOC45ODMgNi43MTggNy4xODctOS42MVptMy43NCAxOC4yMTJhMTQgMTQgMCAwIDAtMy43NC0xOC4yMTJsLTcuMTg3IDkuNjFhMiAyIDAgMCAxIC41MzUgMi42MDJsMTAuMzkyIDZabS03Ljg5NiAxMy42NzYgNy44OTYtMTMuNjc2LTEwLjM5Mi02LTcuODk2IDEzLjY3NiAxMC4zOTIgNlptLTE3LjY0MiA1Ljg2N2ExNCAxNCAwIDAgMCAxNy42NDItNS44NjdsLTEwLjM5Mi02YTIuMDAxIDIuMDAxIDAgMCAxLTIuNTIxLjgzOGwtNC43MjkgMTEuMDI5Wm0tOS41MTMtNC4wOCA5LjUxMyA0LjA4IDQuNzI5LTExLjAyOS05LjUxMi00LjA3OS00LjczIDExLjAyOFptLTE2LjM4MSAxOS4wMyAxLjIxOS0xMC4yNC0xMS45MTYtMS40MTktMS4yMTkgMTAuMjQgMTEuOTE2IDEuNDE5Wk0xMDMuODk2IDE3NmExNCAxNCAwIDAgMCAxMy45MDItMTIuMzQ1bC0xMS45MTYtMS40MTlhMiAyIDAgMCAxLTEuOTg2IDEuNzY0djEyWm0tMTUuNzkyIDBoMTUuNzkydi0xMkg4OC4xMDR2MTJabS0xMy45MDItMTIuMzQ1QTE0IDE0IDAgMCAwIDg4LjEwNCAxNzZ2LTEyYTIgMiAwIDAgMS0xLjk4Ni0xLjc2NGwtMTEuOTE2IDEuNDE5Wm0tMS4wMTItOC41MDQgMS4wMTIgOC41MDQgMTEuOTE2LTEuNDE5LTEuMDEyLTguNTA0LTExLjkxNiAxLjQxOVpNNTEuNDI4IDEzNC4zMWwtNy44NSAzLjM2NiA0LjczIDExLjAyOSA3Ljg0OS0zLjM2Ni00LjczLTExLjAyOVptLTcuODUgMy4zNjZhMiAyIDAgMCAxLTIuNTItLjgzOGwtMTAuMzkyIDZhMTQgMTQgMCAwIDAgMTcuNjQyIDUuODY3bC00LjczLTExLjAyOVptLTIuNTItLjgzOC03Ljg5Ni0xMy42NzYtMTAuMzkyIDYgNy44OTYgMTMuNjc2IDEwLjM5Mi02Wm0tNy44OTYtMTMuNjc2YTIgMiAwIDAgMSAuNTM1LTIuNjAybC03LjE4Ny05LjYxYTE0IDE0IDAgMCAwLTMuNzQgMTguMjEybDEwLjM5Mi02Wm0uNTM1LTIuNjAyIDYuMTMyLTQuNTg1LTcuMTg3LTkuNjEtNi4xMzIgNC41ODUgNy4xODcgOS42MVpNMjYuNTEgODEuMDVsNi4xMzIgNC41ODYgNy4xODctOS42MS02LjEzMi00LjU4Ni03LjE4NyA5LjYxWm0tMy43NC0xOC4yMTJhMTQgMTQgMCAwIDAgMy43NCAxOC4yMTJsNy4xODctOS42MWEyIDIgMCAwIDEtLjUzNS0yLjYwMmwtMTAuMzkyLTZabTcuODk2LTEzLjY3NkwyMi43NyA2Mi44MzhsMTAuMzkyIDYgNy44OTYtMTMuNjc2LTEwLjM5Mi02Wm0xNy42NDItNS44NjdhMTQgMTQgMCAwIDAtMTcuNjQyIDUuODY3bDEwLjM5MiA2YTIgMiAwIDAgMSAyLjUyLS44MzhsNC43My0xMS4wMjlabTcuODQ5IDMuMzY2LTcuODUtMy4zNjYtNC43MjkgMTEuMDI5IDcuODUgMy4zNjYgNC43MjktMTEuMDI5Wm0xOC4wNDUtMTguMzE2LTEuMDEyIDguNTA0IDExLjkxNiAxLjQxOSAxLjAxMi04LjUwNC0xMS45MTYtMS40MTlabS0xLjc1NCAyNy41NTJjNi4wNzgtMy40MjYgMTEuNjktOS41MDIgMTIuNjU4LTE3LjYzTDczLjE5IDM2Ljg1Yy0uMzgyIDMuMjA5LTIuNzY5IDYuNDE1LTYuNjM1IDguNTk1bDUuODkzIDEwLjQ1M1ptLTIxLjAyIDEuNzkzYzcuMjg0IDMuMTI0IDE1LjA1NSAxLjU3IDIxLjAyLTEuNzkzbC01Ljg5My0xMC40NTNjLTMuNzA0IDIuMDg4LTcuNDgxIDIuNDY4LTEwLjM5OCAxLjIxN2wtNC43MyAxMS4wMjlaTTQ5IDk2YzAtNy4xLTIuNTQ4LTE1LjAyMi05LjE3MS0xOS45NzVsLTcuMTg3IDkuNjFDMzUuMzYgODcuNjY4IDM3IDkxLjQzOCAzNyA5NmgxMlptMjMuNDQ4IDQwLjEwM2MtNS45NjUtMy4zNjMtMTMuNzM2LTQuOTE3LTIxLjAyLTEuNzkzbDQuNzI5IDExLjAyOWMyLjkxNy0xLjI1MSA2LjY5NC0uODcxIDEwLjM5OCAxLjIxOGw1Ljg5My0xMC40NTRabS0zMi42Mi0yMC4xMjhDNDYuNDUyIDExMS4wMjIgNDkgMTAzLjEgNDkgOTZIMzdjMCA0LjU2My0xLjY0IDguMzMzLTQuMzU4IDEwLjM2NWw3LjE4NyA5LjYxWm03OC42NzkgMTkuNTc1Yy01LjUzNiAzLjI5OC0xMC41MTcgOC45ODItMTEuNDA2IDE2LjQ0NmwxMS45MTYgMS40MTljLjMyOS0yLjc2NSAyLjMxOC01LjU4MiA1LjYzMi03LjU1N2wtNi4xNDItMTAuMzA4Wm0yMC40MDItMS45NTNjLTcuMDk0LTMuMDQyLTE0LjY2OS0xLjQ2My0yMC40MDIgMS45NTNsNi4xNDIgMTAuMzA4YzMuMzgyLTIuMDE1IDYuODcyLTIuMzcyIDkuNTMtMS4yMzNsNC43My0xMS4wMjhabS01My44MDMgMjAuMTM1Yy0uOTY4LTguMTI3LTYuNTgtMTQuMjAyLTEyLjY1OC0xNy42MjlsLTUuODkzIDEwLjQ1NGMzLjg2NiAyLjE3OSA2LjI1MyA1LjM4NSA2LjYzNSA4LjU5NGwxMS45MTYtMS40MTlaTTE0MSA5NmMwIDYuMzg5IDIuMzk4IDEzLjQxNCA4LjMyIDE3Ljg0Mmw3LjE4Ni05LjYxQzE1NC4zNzQgMTAyLjYzOCAxNTMgOTkuNjY4IDE1MyA5NmgtMTJabTguMzItMTcuODQyQzE0My4zOTggODIuNTg2IDE0MSA4OS42MSAxNDEgOTZoMTJjMC0zLjY2OCAxLjM3NC02LjYzOCAzLjUwNi04LjIzMmwtNy4xODYtOS42MVpNMTE4LjUwNyA1Ni40NWM1LjczMyAzLjQxNiAxMy4zMDggNC45OTUgMjAuNDAxIDEuOTUzbC00LjcyOS0xMS4wMjljLTIuNjU4IDEuMTQtNi4xNDguNzgyLTkuNTMtMS4yMzNsLTYuMTQyIDEwLjMxWm0tMTEuNDA2LTE2LjQ0NmMuODg5IDcuNDY0IDUuODcgMTMuMTQ4IDExLjQwNiAxNi40NDZsNi4xNDItMTAuMzA5Yy0zLjMxNC0xLjk3NC01LjMwMy00Ljc5LTUuNjMyLTcuNTU2bC0xMS45MTYgMS40MTlaIi8+PHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMTIiIGQ9Ik05NiAxMjBjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0cy0xMC43NDUtMjQtMjQtMjQtMjQgMTAuNzQ1LTI0IDI0IDEwLjc0NSAyNCAyNCAyNFoiLz48L3N2Zz4="
        v-if="!isVisibleSettings"
        class="l-weather-widget__settings-icon"
        alt=""
        @click="toggleSettings(true)"
      />
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTAuNSAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02Ljk2OTY3IDE2LjQ2OTdDNi42NzY3OCAxNi43NjI2IDYuNjc2NzggMTcuMjM3NCA2Ljk2OTY3IDE3LjUzMDNDNy4yNjI1NiAxNy44MjMyIDcuNzM3NDQgMTcuODIzMiA4LjAzMDMzIDE3LjUzMDNMNi45Njk2NyAxNi40Njk3Wk0xMy4wMzAzIDEyLjUzMDNDMTMuMzIzMiAxMi4yMzc0IDEzLjMyMzIgMTEuNzYyNiAxMy4wMzAzIDExLjQ2OTdDMTIuNzM3NCAxMS4xNzY4IDEyLjI2MjYgMTEuMTc2OCAxMS45Njk3IDExLjQ2OTdMMTMuMDMwMyAxMi41MzAzWk0xMS45Njk3IDExLjQ2OTdDMTEuNjc2OCAxMS43NjI2IDExLjY3NjggMTIuMjM3NCAxMS45Njk3IDEyLjUzMDNDMTIuMjYyNiAxMi44MjMyIDEyLjczNzQgMTIuODIzMiAxMy4wMzAzIDEyLjUzMDNMMTEuOTY5NyAxMS40Njk3Wk0xOC4wMzAzIDcuNTMwMzNDMTguMzIzMiA3LjIzNzQ0IDE4LjMyMzIgNi43NjI1NiAxOC4wMzAzIDYuNDY5NjdDMTcuNzM3NCA2LjE3Njc4IDE3LjI2MjYgNi4xNzY3OCAxNi45Njk3IDYuNDY5NjdMMTguMDMwMyA3LjUzMDMzWk0xMy4wMzAzIDExLjQ2OTdDMTIuNzM3NCAxMS4xNzY4IDEyLjI2MjYgMTEuMTc2OCAxMS45Njk3IDExLjQ2OTdDMTEuNjc2OCAxMS43NjI2IDExLjY3NjggMTIuMjM3NCAxMS45Njk3IDEyLjUzMDNMMTMuMDMwMyAxMS40Njk3Wk0xNi45Njk3IDE3LjUzMDNDMTcuMjYyNiAxNy44MjMyIDE3LjczNzQgMTcuODIzMiAxOC4wMzAzIDE3LjUzMDNDMTguMzIzMiAxNy4yMzc0IDE4LjMyMzIgMTYuNzYyNiAxOC4wMzAzIDE2LjQ2OTdMMTYuOTY5NyAxNy41MzAzWk0xMS45Njk3IDEyLjUzMDNDMTIuMjYyNiAxMi44MjMyIDEyLjczNzQgMTIuODIzMiAxMy4wMzAzIDEyLjUzMDNDMTMuMzIzMiAxMi4yMzc0IDEzLjMyMzIgMTEuNzYyNiAxMy4wMzAzIDExLjQ2OTdMMTEuOTY5NyAxMi41MzAzWk04LjAzMDMzIDYuNDY5NjdDNy43Mzc0NCA2LjE3Njc4IDcuMjYyNTYgNi4xNzY3OCA2Ljk2OTY3IDYuNDY5NjdDNi42NzY3OCA2Ljc2MjU2IDYuNjc2NzggNy4yMzc0NCA2Ljk2OTY3IDcuNTMwMzNMOC4wMzAzMyA2LjQ2OTY3Wk04LjAzMDMzIDE3LjUzMDNMMTMuMDMwMyAxMi41MzAzTDExLjk2OTcgMTEuNDY5N0w2Ljk2OTY3IDE2LjQ2OTdMOC4wMzAzMyAxNy41MzAzWk0xMy4wMzAzIDEyLjUzMDNMMTguMDMwMyA3LjUzMDMzTDE2Ljk2OTcgNi40Njk2N0wxMS45Njk3IDExLjQ2OTdMMTMuMDMwMyAxMi41MzAzWk0xMS45Njk3IDEyLjUzMDNMMTYuOTY5NyAxNy41MzAzTDE4LjAzMDMgMTYuNDY5N0wxMy4wMzAzIDExLjQ2OTdMMTEuOTY5NyAxMi41MzAzWk0xMy4wMzAzIDExLjQ2OTdMOC4wMzAzMyA2LjQ2OTY3TDYuOTY5NjcgNy41MzAzM0wxMS45Njk3IDEyLjUzMDNMMTMuMDMwMyAxMS40Njk3WiIgZmlsbD0iIzAwMDAwMCIvPg0KPC9zdmc+"
        v-else
        class="l-weather-widget__settings-icon"
        alt=""
        @click="toggleSettings(false)"
      />
    </div>
  </div>
</template>

<script>
import mWeather from "./components/m-wetcher/m-weather.vue";
import mSettings from "./components/m-settings/m-settings.vue";
export default {
  name: "App",
  components: {
    mWeather,
    mSettings,
  },
  data() {
    return {
      isVisibleSettings: false,
      settingsWidth: 0,
    };
  },
  methods: {
    toggleSettings(bull) {
      if (bull) {
        const { weather } = this.$refs;
        this.settingsWidth = weather.offsetWidth - 30;
      }
      this.isVisibleSettings = bull;
    },
    async getPositionSuccess(pos) {
      const crd = pos.coords;
      const city = {
        city: "",
        lat: crd.latitude,
        lon: crd.longitude,
        country: "",
      };
      await this.$store.dispatch("firstLoadWeatherFromGeo", city);
      this.$store.commit("changeLoadingState", false);
    },
    getPositionError(err) {
      console.warn(
        `Failed to get geolocation to automatically determine the weather in your area, please select your city yourself:ERROR:(${err.code}): ${err.message}`
      );
      this.$store.commit("changeLoadingState", false);
    },
  },
  mounted() {
    if (this.$store.getters.isInitialOpening) {
      this.$store.commit("changeLoadingState", true);
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      navigator.geolocation.getCurrentPosition(
        this.getPositionSuccess,
        this.getPositionError,
        options
      );
      this.$store.commit("initialOpening");
    }
  },
};
</script>

<style lang="scss">
.l-weather-widget {
  @import "./assets/css/common/_style.scss";
  &__inner {
    position: relative;
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 18px;
    width: fit-content;
  }
  &__text {
    margin-top: 50px;
    text-align: center;
    width: 273.5px;
    &:before {
      content: "";
      position: absolute;
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiA1VjE5TTEyIDVMNiAxMU0xMiA1TDE4IDExIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4=);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 40px;
      height: 40px;
      right: 5px;
      top: 40px;
      transform: translate(0, 0);
      @keyframes l-weather-widget-text-animation {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(0, 10px);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      animation: l-weather-widget-text-animation 1s ease-in-out infinite;
      animation-fill-mode: forwards;
    }
  }
  &__loading-icon {
    position: absolute;
    top: 50%;
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    transform: rotate(0deg);
    @keyframes l-weather-widget-loading-animation {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(1000deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    animation: l-weather-widget-loading-animation 3s ease-in-out infinite;
    animation-fill-mode: forwards;
  }
  &__settings-icon {
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
  }
}
</style>
