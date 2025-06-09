<template>
  <div class="items">
    <div class="items__title text-2xl font-bold">Все задачи</div>
    <div class="items__content grid grid-cols-3 gap-4" v-auto-animate>
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStateStore } from "@/stores/state";
import { storeToRefs } from "pinia";
import Item from "@/components/HomePage/Items/Item.vue";
const store = useStateStore();
const { items } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.items {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}
</style>