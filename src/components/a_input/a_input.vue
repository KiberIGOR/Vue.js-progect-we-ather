<template>
  <div class="a-input__wrapper">
    <label v-if="label" :class="typelabel">{{ label }}</label>
    <div class="a-input__row">
      <input
        type="text"
        ref="a-input"
        class="a-input"
        :class="classes"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="valueThis"
        @change="changeHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        :maxlength="maxLength"
      />
      <i
        v-if="false"
        class="a-input__icon si-closeThin"
        @mousedown.prevent
        @click="clearableHandler"
      />
      <button
        class="a-input__enter"
        @click="emitValue"
        @keyup.enter="emitValue"
      >
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+CiAgICA8dGl0bGU+aWNfZmx1ZW50X2Fycm93X2VudGVyXzI0X3JlZ3VsYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i8J+UjS1TeXN0ZW0tSWNvbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY19mbHVlbnRfYXJyb3dfZW50ZXJfMjRfcmVndWxhciIgZmlsbD0iIzIxMjEyMSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjI1LDQgQzIxLjY2NDIxMzYsNCAyMiw0LjMzNTc4NjQ0IDIyLDQuNzUgTDIyLDQuNzUgTDIyLDExLjI1IEMyMiwxMy4zMjEwNjc4IDIwLjMyMTA2NzgsMTUgMTguMjUsMTUgTDE4LjI1LDE1IEw0LjU4NTgzNTc0LDE1IEw4LjMwNTE2NTgzLDE4LjcxOTY2OTkgQzguNTcxNDMyMzksMTguOTg1OTM2NSA4LjU5NTYzODQ0LDE5LjQwMjYwMDIgOC4zNzc3ODM5OCwxOS42OTYyMTE3IEw4LjMwNTE2NTgzLDE5Ljc4MDMzMDEgQzguMDM4ODk5MjcsMjAuMDQ2NTk2NiA3LjYyMjIzNTU4LDIwLjA3MDgwMjcgNy4zMjg2MjQwOSwxOS44NTI5NDgyIEw3LjI0NDUwNTY2LDE5Ljc4MDMzMDEgTDIuMjQ0NTA1NjYsMTQuNzgwMzMwMSBDMS45NzgyMzkwOSwxNC41MTQwNjM1IDEuOTU0MDMzMDQsMTQuMDk3Mzk5OCAyLjE3MTg4NzUsMTMuODAzNzg4MyBMMi4yNDQ1MDU2NiwxMy43MTk2Njk5IEw3LjI0NDUwNTY2LDguNzE5NjY5OTEgQzcuNTM3Mzk4ODgsOC40MjY3NzY3IDguMDEyMjcyNjEsOC40MjY3NzY3IDguMzA1MTY1ODMsOC43MTk2Njk5MSBDOC41NzE0MzIzOSw4Ljk4NTkzNjQ4IDguNTk1NjM4NDQsOS40MDI2MDAxNiA4LjM3Nzc4Mzk4LDkuNjk2MjExNjUgTDguMzA1MTY1ODMsOS43ODAzMzAwOSBMNC41ODU4MzU3NCwxMy41IEwxOC4yNSwxMy41IEMxOS40NDA4NjQsMTMuNSAyMC40MTU2NDQ5LDEyLjU3NDgzODQgMjAuNDk0ODA5MiwxMS40MDQwNDg4IEwyMC41LDExLjI1IEwyMC41LDQuNzUgQzIwLjUsNC4zMzU3ODY0NCAyMC44MzU3ODY0LDQgMjEuMjUsNCBaIiBpZD0i8J+OqC1Db2xvciI+Cg08L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          alt=""
          class="a-input__enter-img"
          :style="{ cursor: valueThis ? 'pointer' : 'not-allowed' }"
        />
      </button>
    </div>

    <span v-if="subscription" class="a-input__subscription" :class="typesubs">{{
      subscription
    }}</span>
  </div>
</template>

<script>
import "./a_input.scss";

export default {
  name: "a-input",
  data: () => ({
    touched: false,
  }),

  model: {
    prop: "value",
    event: "input",
  },

  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    subscription: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    labelIcon: {
      type: String,
    },
    maxLength: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER,
    },
    size: {
      type: String,
      validator(value) {
        return ["large", "medium", "small"].indexOf(value) !== -1;
      },
    },
    condition: {
      type: String,
      validator(value) {
        return ["base", "focus", "error"].indexOf(value) !== -1;
      },
    },
  },

  mounted() {},

  computed: {
    classes() {
      return {
        [`a-input--${this.size || "large"}`]: true,
        [`a-input--${this.condition || "base"}`]: true,
        [`a-input--error`]: this.subscription,
      };
    },
    typelabel() {
      return {
        "a-input__label": true,
        [`a-input__label--${this.size || "large"}`]: true,
        [`${this.labelIcon}`]: this.labelIcon,
        [`a-input__label--${this.condition}`]: this.condition,
      };
    },
    typesubs() {
      return {
        "a-input__subscription": true,
        [`a-input__subscription--${this.size || "large"}`]: true,
      };
    },

    valueThis: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },

  methods: {
    changeHandler() {
      this.$emit("change", this.valueThis);
    },
    focusHandler() {
      this.touched = true;
      this.$emit("focus");
    },
    blurHandler() {
      this.touched = false;
      this.$emit("blur");
    },
    clearableHandler() {
      this.$emit("input", "");
    },
    emitValue() {
      if (this.valueThis) {
        this.$emit("addCity", this.valueThis);
      }
    },
  },
};
</script>
