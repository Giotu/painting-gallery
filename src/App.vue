<template>
  <div class="container">
    <TheHeader />
    <PaintingList />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import PaintingList from "./components/PaintingList/PaintingList.vue";
</script>

<style scoped lang="scss">
@import "./assets/styles/index.scss";
</style>
