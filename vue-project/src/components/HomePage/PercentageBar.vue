<template>
  <div class="progress flex justify-center items-start font-semibold flex-col">
    <div class="text-2xl text-center">Ваш прогресс</div>
    <div class="progress__wrapper rounded-xl">
      <div class="progress__bar-wrapper rounded-xl"></div>
      <div
        :class="[
          'progress__bar-lineup rounded-l-xl transition-all ',
          percentage === 100 ? 'rounded-r-xl' : '',
        ]"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    percentage: number;
  }>(),
  {
    percentage: 0,
  }
);
</script>

<style  lang="scss" scoped>
.progress {
  &__wrapper {
    position: relative;
    width: 100%;
    height: 60px;
    margin-top: 20px;
    border: 1px solid black;
  }
  &__bar-wrapper {
    width: 100%;
    height: 100%;
    background: rgb(238, 235, 235);
  }
  &__bar-lineup {
    position: absolute;
    height: 100%;
    z-index: 10;
    top: 0;
    width: 10%;
    background: rgb(0, 209, 0);
  }
}
</style>