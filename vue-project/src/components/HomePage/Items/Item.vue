<template>
  <div
    :class="[
      'item relative min-h-[100px] flex items-center justify-center',
      item.complite ? 'complite' : '',
    ]"
    :style="{ backgroundImage: `url(${item.imageUrl || ''})` }"
    @click="goToTask(item.id)"
  >
    <span class="item__text">{{ item.name }}</span>
    <div @click.stop="" class="complete absolute bottom-5 right-0">
      <Checkbox
        :complite="item.complite"
        :id="item.id"
        @updateStatus="updateStatus"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { Item, UpdateStatus } from "@/types/index";
import { useStateStore } from "@/stores/state";
import { useFetchData } from "@/stores/fetchData";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Checkbox from "@/components/HomePage/UI/Checkbox.vue";
defineProps<{
  item: Item;
}>();
const router = useRouter();
const store = useStateStore();
const fetchData = useFetchData();
const { patchData } = fetchData;
const { items } = storeToRefs(store);
const goToTask = (taskId: number) => {
  router.push(`/task/${taskId}`);
};
async function updateStatus(payload: UpdateStatus): Promise<void> {
  const { id } = payload;
  try {
    const data = await patchData(payload);
    items.value = items.value.map((item: Item) => {
      if (item.id === id) {
        return { ...data };
      }
      return item;
    });
  } catch (e: unknown) {
    console.error(e as string);
  }
}
</script>

<style lang="scss" scoped>
.item {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s linear;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: translateY(-4px);
  }
  &__text {
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
}
.complite {
  background: rgb(6, 232, 6);
}
</style>