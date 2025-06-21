<template>
  <div class="h-screen w-full flex flex-col">
    <Header />
    <div class="flex-1 max-w-[1200px] p-2 w-4/5 mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Layout/Header.vue";
</script>

