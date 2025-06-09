import { defineStore } from "pinia";
import { ref, type Ref, computed } from "vue";
import { type Item } from "@/types/responses";
export const useStateStore = defineStore("state", () => {
  const items: Ref<Item[]> = ref([]);
  const percentage = computed<number>(() => {
    const complitedTasks: Item[] = items.value.filter(
      (item: Item) => item.complite
    );
    return Math.round((complitedTasks.length / items.value.length) * 100);
  });

  return { items, percentage };
});
