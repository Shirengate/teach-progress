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
import { watch, ref } from "vue";
import { useIntervalFn, type Pausable } from "@vueuse/core";
import { useToast } from "vue-toast-notification";
const toast = useToast();
const isOnline = ref(true);
const {}: Pausable = useIntervalFn(async () => {
  try {
    await fetch("https://google.com", {
      mode: "no-cors",
    });
    isOnline.value = true;
  } catch (e) {
    isOnline.value = false;
  }
}, 5000);
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

