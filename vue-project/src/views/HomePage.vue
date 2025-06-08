<template>
  <div class="main">
    <PercentageBar :percentage="percentage" />
    <div class="items">
      <div class="items__title text-2xl font-bold">Все задачи</div>
      <div class="items__content grid grid-cols-3 gap-4">
        <template v-for="item in items" :key="item.id">
          <div
            class="item relative min-h-[100px] flex items-center justify-center"
            @click="goToTask(item.id)"
          >
            <span class="item__text">{{ item.name }}</span>
            <div @click.stop="" class="complete absolute bottom-5 right-0">
              <Checkbox />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PercentageBar from "@/components/HomePage/PercentageBar.vue";
import Checkbox from "@/components/HomePage/UI/Checkbox.vue";
import { type Item, type ItemsResponse } from "@/types/responses";
const percentage: Ref<number> = ref(10);
const router = useRouter();

const items: Ref<Item[]> = ref([]);

const goToTask = (taskId: number) => {
  router.push(`/task/${taskId}`);
};

onMounted(async () => {
  try {
    const response = await fetch("https://e72b706bba1ca1f0.mokky.dev/items");
    const data: ItemsResponse = await response.json();
    items.value = data;
    return data;
  } catch (e: unknown) {
    console.log(e);
    return e;
  }
});
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

