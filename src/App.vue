<template>
  <div class="container">
    <TheHeader />
    <main class="main">
      <PaintingList />
      <ThePagination />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import PaintingList from "./components/PaintingList/PaintingList.vue";
import ThePagination from "./components/Pagination/ThePagination.vue";
import useThemeStore from "./stores/theme.ts";

const store = useThemeStore();
store.initTheme();
</script>

<style scoped lang="scss">
@import "./assets/styles/index.scss";
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
</style>
