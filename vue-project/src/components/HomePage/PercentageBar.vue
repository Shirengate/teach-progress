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
        :style="{ width: `${percentage}%`, background: color }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    percentage: number;
  }>(),
  {
    percentage: 0,
  }
);
const color = computed<string>((): string => {
  if (props.percentage === 100) {
    return "#04a96d";
  }
  if (props.percentage > 75) {
    return "#0afa9e";
  }
  if (props.percentage > 50) {
    return "#yellow";
  }
  return "#ff3531";
});
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
  }
}
</style>