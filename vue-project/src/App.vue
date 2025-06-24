<template>
  <div class="h-screen w-full flex flex-col">
    <Header />
    <div class="flex-1 max-w-[1200px] p-2 w-4/5 mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Layout/Header.vue";
import { watch } from "vue";
import { useNetwork } from "@vueuse/core";
import { useToast } from "vue-toast-notification";
const toast = useToast();
const { isOnline } = useNetwork();

watch(
  () => isOnline.value,
  (nw: boolean) => {
    if (!nw) {
      toast.error("No internet connection");
    } else {
      toast.success("Internet connection restored");
    }
  }
);
</script>

