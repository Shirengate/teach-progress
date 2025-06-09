import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { type Item } from "@/types/responses";
export const useStateStore = defineStore('state', () => {
    const items: Ref<Item[]> = ref([]);
    return {items}
})