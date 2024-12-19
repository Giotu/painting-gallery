<template>
  <div class="painting-card">
    <img src="/image1.png" alt="test" />
    <div class="painting-card__info">
      <span class="painting-card__name">cascate di tivoli</span>
      <span class="painting-card__date">1761</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.painting-card {
  max-width: 392px;
  max-height: 260px;
  position: relative;

  img {
    width: 100%;
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
    max-width: 300px;
    width: 100%;
    margin-right: 52px;
  }

  .painting-card__name,
  .painting-card__date {
    text-transform: uppercase;
  }

  .painting-card__name {
    font-family: $second-family;
    color: $primary-light-gray;
  }

  .painting-card__date {
    color: $accent-gold;
  }
}
</style>
