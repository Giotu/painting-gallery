<template>
  <nav class="pagination">
    <button
      class="pagination__prev"
      type="button"
      @click="handleClick(store.currentPage - 1)"
    >
      <IconPrev />
    </button>
    <div class="buttons-container">
      <button
        v-for="page in dispayPages"
        :key="page"
        type="button"
        :class="{
          'active-page': page === store.currentPage,
          dot: page === '...',
        }"
        @click="handleClick(page)"
      >
        {{ page }}
      </button>
    </div>
    <button
      class="pagination__next"
      type="button"
      @click="handleClick(store.currentPage + 1)"
    >
      <IconPrev />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconPrev from "./IconArrow.vue";
import usePaintingsStore from "../../stores/paintings.ts";

const maxDisplayPage = 5;
const store = usePaintingsStore();

function handleClick(page: number | string) {
  if (typeof page === "number" && page > 0 && page <= store.countPages) {
    store.fetchPaintings(store.searchQuery, page);
  }
}

const dispayPages = computed(() => {
  let pages: (number | string)[] = [];
  const start = store.currentPage;

  if (
    store.countPages > maxDisplayPage &&
    start < store.countPages &&
    start > 2
  ) {
    pages = [start - 1, start, start + 1];
  } else if (store.countPages < maxDisplayPage) {
    for (let i = 1; i <= store.countPages; i += 1) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= store.countPages; i += 1) {
      pages = [1, 2, 3, "...", store.countPages];
    }
  }

  return pages;
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.pagination {
  display: flex;
  gap: 20px;
}

.buttons-container {
  display: flex;
  gap: 4px;
}

button {
  font-weight: 500;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: $primary-light-gray;
  cursor: pointer;

  &.active-page {
    background-color: $secondary-black;
  }
}

.pagination__next {
  transform: rotate(180deg);
}
</style>
