<template>
  <div>
    <div class="progress rounded-xl">
      <div class="progress__bar-wrapper rounded-xl"></div>
      <div
        :class="[
          'progress__bar-lineup rounded-l-xl transition-all ',
          presenrage === 100 ? 'rounded-r-xl' : '',
        ]"
        :style="{ width: `${presenrage}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
const presenrage: Ref<number> = ref(0);
</script>

<style lang="scss" scoped>
.progress {
  position: relative;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border: 1px solid black;
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