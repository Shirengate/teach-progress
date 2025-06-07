<template>
  <div class="main">
    <PercentageBar :percentage="percentage" />
    <div class="items">
      <div class="item" @click="goToTask('html')">
        <span class="item__text">HTML</span>
      </div>
      <div class="item" @click="goToTask('css')">
        <span class="item__text">CSS</span>
      </div>
      <div class="item" @click="goToTask('javascript')">
        <span class="item__text">JavaScript</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import PercentageBar from "@/components/HomePage/PercentageBar.vue";

const percentage: Ref<number> = ref(10);
const router = useRouter();

const goToTask = (taskId: string) => {
  router.push(`/task/${taskId}`);
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
}

.items {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item {
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
    background: #f5f5f5;
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
}
</style>

