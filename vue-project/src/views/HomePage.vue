<template>
  <div class="main">
    <div><PercentageBar :percentage="percentage" /></div>
    <Items />
    <div class="constructor-wrapper">
      <Constructor @addItem="getItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useStateStore } from "@/stores/state";
import { useFetchData } from "@/stores/fetchData";
import PercentageBar from "@/components/HomePage/PercentageBar.vue";
import Items from "@/components/HomePage/Items/index.vue";
import Constructor from "@/components/HomePage/Constructor.vue";
import { storeToRefs } from "pinia";

const store = useStateStore();
const { getData } = useFetchData();
const { items, percentage } = storeToRefs(store);
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

