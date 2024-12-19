<script setup lang="ts">
import IconTheme from "./IconTheme.vue";
</script>

<template>
  <button class="button-theme" type="button">
    <IconTheme />
  </button>
</template>

<style scoped lang="scss">
@use "../assets/styles/variables.scss";
.button-theme {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background-color: variables.$secondary-black;
}
</style>
