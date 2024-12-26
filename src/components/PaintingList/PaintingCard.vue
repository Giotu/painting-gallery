<template>
  <div class="painting-card">
    <img :src="baseUrl + painting.imageUrl" :alt="painting.name" />
    <div class="painting-card__info">
      <span class="painting-card__name">{{ painting.name }}</span>
      <span class="painting-card__date">{{ painting.created }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const baseUrl = "https://test-front.framework.team";
defineProps(["painting"]);
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.painting-card {
  flex: 0 1 clamp(17.5rem, 15.1667rem + 11.6667vw, 24.5rem);
  height: auto;
  max-height: 260px;
  aspect-ratio: 3 / 2;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .painting-card__info {
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

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 2px;
      height: 50%;
      background-color: $accent-gold;
    }

    @media (max-width: 768px) {
      padding: 12px;
    }
  }

  .painting-card__name,
  .painting-card__date {
    text-transform: uppercase;
  }

  .painting-card__name {
    font-family: $second-family;
    color: $primary-light-gray;

    @media (max-width: 380px) {
      font-size: 12px;
    }
  }

  .painting-card__date {
    color: $accent-gold;
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 8px;
  }
}
</style>
