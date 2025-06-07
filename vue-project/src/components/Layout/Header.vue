<template>
  <header class="bg-white shadow-md">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Логотип и название -->
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-lg">P</span>
          </div>
          <span class="text-xl font-semibold text-gray-800"
            >Progress Tracker</span
          >
        </div>

        <!-- Навигация -->
        <nav class="flex items-center space-x-8">
          <RouterLink
            to="/"
            class="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            Главная
          </RouterLink>
        </nav>

        <!-- Правая часть хедера -->
        <div class="flex items-center space-x-4">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Начать
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>