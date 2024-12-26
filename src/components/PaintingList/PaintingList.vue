<template>
  <section class="painting">
    <PaintingSearch @search="store.fetchPaintings($event, 1)" />
    <div class="painting-list">
      <PaintingCard
        v-for="painting in store.paintings"
        :key="painting.id"
        :painting="painting"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import PaintingCard from "./PaintingCard.vue";
import PaintingSearch from "./PaintingSearch.vue";
import usePaintingsStore from "../../stores/paintings.ts";

const store = usePaintingsStore();

onMounted(() => {
  store.fetchPaintings();
  store.fetchAuthors();
  store.fetchLocations();
});
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
  min-height: 570px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
}
</style>
