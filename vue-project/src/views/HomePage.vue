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
import { onMounted, ref } from "vue";
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

async function fetchData(): Promise<void> {
  const url: string =
    "https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg";
  const xhr = new XMLHttpRequest();
  xhr.onprogress = (event: ProgressEvent): void => {
    const status: number = Math.floor((event.loaded / event.total) * 100);
    console.log(status);
  };
  xhr.open("GET", url, true);
  xhr.send();
}
onMounted(async () => {
  await getItems();
  await fetchData();
});
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
}
</style>

