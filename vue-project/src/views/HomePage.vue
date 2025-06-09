<template>
  <div class="main">
    <PercentageBar :percentage="percentage" />
    <Items />
    <div class="constructor-wrapper">
      <Constructor @addItem="getItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStateStore } from "@/stores/state";
import { useFetchData } from "@/stores/fetchData";
import PercentageBar from "@/components/HomePage/PercentageBar.vue";
import Items from "@/components/HomePage/Items/index.vue";
import Constructor from "@/components/HomePage/Constructor.vue";
import { type Item, type ItemsResponse } from "@/types/responses";
import { storeToRefs } from "pinia";

const percentage = computed<number>(() => {
  const complitedTasks: Item[] = items.value.filter((items) => items.complite);
  return Math.round((complitedTasks.length / items.value.length) * 100);
});

const store = useStateStore();
const { getData } = useFetchData();
const { items } = storeToRefs(store);

async function getItems(): Promise<void> {
  try {
    const data = await getData();
    items.value = data;
  } catch (e: unknown) {
    console.error(e as string);
  }
}
onMounted(async () => {
  await getItems();
});
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
}
</style>

