<template>
  <header class="header">
    <TheIcon />
    <ButtonTheme />
  </header>
</template>

<script setup lang="ts">
import ButtonTheme from "./ButtonTheme.vue";
import TheIcon from "./TheIcon.vue";
</script>

<style scoped>
.header {
  padding-block: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .icon,
  & > .button-theme {
    cursor: pointer;
  }
}
</style>
