<template>
  <div class="painting-card">
    <img :src="src" :alt="painting.name" />
    <div class="painting-card__info">
      <span class="painting-card__name">{{ painting.name }}</span>
      <span class="painting-card__date">{{ painting.created }}</span>
      <div class="painting-card__additional-info">
        <span class="painting-card__author">{{ authorName }}</span>
        <span class="painting-card__location">{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import usePaintingsStore from "../../stores/paintings.ts";
import type { Painting } from "../../types/Painting";

const store = usePaintingsStore();
const baseUrl = "https://test-front.framework.team";

const props = defineProps<{ painting: Painting }>();
const src = computed(() => `${baseUrl}${props.painting.imageUrl}`);
const authorName = computed(
  () =>
    store.authors.find((author) => author.id === props.painting.authorId)?.name,
);
const location = computed(
  () =>
    store.locations.find((loc) => loc.id === props.painting.locationId)
      ?.location,
);
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.painting-card {
  flex: 0 1 clamp(17.5rem, 15.1667rem + 11.6667vw, 24.5rem);
  height: auto;
  max-height: 260px;
  aspect-ratio: 3 / 2;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .painting-card__name,
  &:hover .painting-card__date {
    transform: translateY(300%);
  }

  &:hover .painting-card__additional-info {
    transform: translateX(0%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease-in-out;
  }

  .painting-card__info,
  .painting-card__additional-info {
    background-color: $primary-black;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: clamp(14.75rem, 13.4167rem + 6.6667vw, 18.75rem);
    width: 100%;
    transition: transform 0.2s ease-in-out;

    [data-theme="light"] & {
      background-color: $primary-white;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 2px;
      height: 50%;
      background-color: $accent-gold;

      [data-theme="light"] & {
        color: $accent-red;
      }
    }

    @media (max-width: 768px) {
      padding: 12px;
    }
  }

  .painting-card__additional-info {
    transform: translateX(-100%);
  }

  .painting-card__name,
  .painting-card__date,
  .painting-card__author,
  .painting-card__location {
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
  }

  .painting-card__name,
  .painting-card__author {
    font-family: $second-family;
    color: $primary-light-gray;

    [data-theme="light"] & {
      color: $primary-black;
    }

    @media (max-width: 380px) {
      font-size: 12px;
    }
  }

  .painting-card__date,
  .painting-card__location {
    color: $accent-gold;
    font-size: 12px;

    [data-theme="light"] & {
      color: $accent-red;
    }
  }
  @media (max-width: 380px) {
    font-size: 8px;
  }
}
</style>
