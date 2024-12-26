<template>
  <section class="painting">
    <PaintingSearch @search="store.fetchPaintings($event, 1)" />
    <div v-if="store.paintings.length > 0" class="painting-list">
      <PaintingCard
        v-for="painting in store.paintings"
        :key="painting.id"
        :painting="painting"
      />
    </div>
    <div
      v-else-if="!store.isLoading && store.paintings.length === 0"
      class="no-matches"
    >
      <p>No matches for {{ store.searchQuery }}</p>
      <p class="no-matches__hint">
        Please try again with a different spelling or keywords.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import PaintingCard from "./PaintingCard.vue";
import PaintingSearch from "./PaintingSearch.vue";
import usePaintingsStore from "../../stores/paintings.ts";

const store = usePaintingsStore();

onMounted(async () => {
  store.isLoading = true;
  await Promise.all([
    store.fetchPaintings(),
    store.fetchAuthors(),
    store.fetchLocations(),
  ]);
  store.isLoading = false;
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
.painting {
  display: flex;
  width: 100%;
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

.no-matches {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.no-matches__hint {
  font-size: 14px;
  font-weight: 300;
  color: $secondary-gray;
}
</style>
