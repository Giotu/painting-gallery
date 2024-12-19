<template>
  <section class="painting">
    <PaintingSearch />
    <div class="painting-list">
      <PaintingCard />
      <PaintingCard />
      <PaintingCard />
      <PaintingCard />
      <PaintingCard />
      <PaintingCard />
    </div>
  </section>
</template>

<script setup lang="ts">
import PaintingCard from "./PaintingCard.vue";
import PaintingSearch from "./PaintingSearch.vue";
</script>

<style scoped lang="scss">
.painting {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.painting-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
