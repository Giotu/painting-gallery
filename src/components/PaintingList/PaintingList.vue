<template>
  <div class="painting-list">
    <PaintingCard />
    <PaintingCard />
    <PaintingCard />
    <PaintingCard />
    <PaintingCard />
    <PaintingCard />
  </div>
</template>

<script setup lang="ts">
import PaintingCard from "./PaintingCard.vue";
</script>

<style scoped lang="scss">
.painting-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
