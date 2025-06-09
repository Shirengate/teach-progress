<template>
  <div
    :class="[
      'item relative min-h-[100px] flex items-center justify-center',
      item.complite ? 'complite' : '',
    ]"
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
import { type Item } from "@/types/responses";
import { type UpdateStatus } from "@/types/emits";
import { useStateStore } from "@/stores/state";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Checkbox from "@/components/HomePage/UI/Checkbox.vue";
const props = defineProps<{
  item: Item;
}>();
const router = useRouter();
const store = useStateStore();
const { items } = storeToRefs(store);
const goToTask = (taskId: number) => {
  router.push(`/task/${taskId}`);
};
async function updateStatus(payload: UpdateStatus): Promise<void> {
  const { id, complite } = payload;
  try {
    const response = await fetch(
      `https://e72b706bba1ca1f0.mokky.dev/items/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          complite,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: Item = await response.json();
    items.value = items.value.map((item: Item) => {
      if (item.id === id) {
        return { ...data };
      }
      return item;
    });
  } catch (e: unknown) {
    console.log(e);
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