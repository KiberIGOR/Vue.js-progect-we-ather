<template>
  <div class="a-city">
    <div class="a-city__inner">
      <div class="a-city__drug">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00IDE4TDIwIDE4IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8cGF0aCBkPSJNNCAxMkwyMCAxMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPHBhdGggZD0iTTQgNkwyMCA2IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8L3N2Zz4="
          alt=""
          class="a-city__drug-icon"
        />
        <p class="a-city__name">{{ city.city + ", " + city.country }}</p>
      </div>
      <div class="a-city__delete">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEuNzVWM2g1LjI1YS43NS43NSAwIDAxMCAxLjVIMi43NWEuNzUuNzUgMCAwMTAtMS41SDhWMS43NUM4IC43ODQgOC43ODQgMCA5Ljc1IDBoNC41QzE1LjIxNiAwIDE2IC43ODQgMTYgMS43NXptLTYuNSAwYS4yNS4yNSAwIDAxLjI1LS4yNWg0LjVhLjI1LjI1IDAgMDEuMjUuMjVWM2gtNVYxLjc1eiIvPjxwYXRoIGQ9Ik00Ljk5NyA2LjE3OGEuNzUuNzUgMCAxMC0xLjQ5My4xNDRMNC45MTYgMjAuOTJhMS43NSAxLjc1IDAgMDAxLjc0MiAxLjU4aDEwLjY4NGExLjc1IDEuNzUgMCAwMDEuNzQyLTEuNTgxbDEuNDEzLTE0LjU5N2EuNzUuNzUgMCAwMC0xLjQ5NC0uMTQ0bC0xLjQxMiAxNC41OTZhLjI1LjI1IDAgMDEtLjI0OS4yMjZINi42NThhLjI1LjI1IDAgMDEtLjI0OS0uMjI2TDQuOTk3IDYuMTc4eiIvPjxwYXRoIGQ9Ik05LjIwNiA3LjUwMWEuNzUuNzUgMCAwMS43OTMuNzA1bC41IDguNUEuNzUuNzUgMCAxMTkgMTYuNzk0bC0uNS04LjVhLjc1Ljc1IDAgMDEuNzA1LS43OTN6bTYuMjkzLjc5M0EuNzUuNzUgMCAxMDE0IDguMjA2bC0uNSA4LjVhLjc1Ljc1IDAgMDAxLjQ5OC4wODhsLjUtOC41eiIvPjwvc3ZnPg=="
          alt=""
          class="a-city__delete-img"
          @click="deleteObg(city.city)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./a-city.scss";

export default {
  name: "a-city",
  props: {
    city: Object,
  },
  methods: {
    deleteObg(cityName) {
      this.$emit("delete", cityName);
    },
  },
};
</script>
