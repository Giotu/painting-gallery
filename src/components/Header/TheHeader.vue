<template>
  <header class="header">
    <TheIcon />
    <ButtonTheme @click="store.toggleTheme()" />
  </header>
</template>

<script setup lang="ts">
import ButtonTheme from "./ButtonTheme.vue";
import TheIcon from "./TheIcon.vue";
import useThemeStore from "../../stores/theme.ts";

const store = useThemeStore();
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
.header {
  padding-block: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon,
  .button-theme {
    cursor: pointer;

    [data-theme="light"] & {
      background-color: $secondary-white;
      fill: $primary-dark-gray;
    }
  }
}
</style>
