// import autoInitVueApp from "./autoInitVueApp";
import Vue from "vue";
import App from "./App.vue";
import store from "./store/vuex";

Vue.config.productionTip = false;
// new Vue({
//   store: store,
//   render: (h) => h(App),
// }).$mount("weather-widget");

function autoInitVueApp() {
  const target = document.querySelector("weather-widget");
  if (!target) {
    console.warn(
      "Target element <weather-widget> for the wather app was not found."
    );
    return;
  }
  const app = new Vue({
    store: store,
    render: (h) => h(App),
  });
  app.$mount(target);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    autoInitVueApp();
  });
} else {
  autoInitVueApp();
}
