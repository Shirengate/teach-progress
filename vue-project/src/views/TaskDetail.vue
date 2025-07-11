<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Task Header -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-3xl font-bold text-gray-800">{{ item.name }}</h1>
        <div class="flex items-center gap-4">
          <span
            class="px-4 py-2 rounded-full text-sm"
            :class="
              item.complite
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            "
          >
            {{ item.complite ? "Completed!" : "In Progress" }}
          </span>
        </div>
      </div>

      <!-- Task Description -->
      <p class="text-gray-600 text-lg leading-relaxed mb-6">
        {{ item.description }}
      </p>

      <!-- Action Button -->
      <div class="flex justify-end gap-4">
        <button
          class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span @click="deleteTask(Number(id))">Delete Task</span>
        </button>
        <button
          @click="updateStatus"
          :disabled="item.complite"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          :class="{ 'opacity-50 cursor-not-allowed': item.complite }"
        >
          <span v-if="!item.complite">Mark as Complete</span>
          <span v-else>Completed!</span>
          <svg
            v-if="item.complite"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Item } from "@/types/responses";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFetchData } from "@/stores/fetchData";
import type { UpdateStatus } from "@/types/emits";
const fetchData = useFetchData();
const { patchData } = fetchData;
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const item = reactive<Omit<Item, "id">>({
  name: "",
  description: "",
  complite: false,
});

async function updateStatus(): Promise<void> {
  const payload: UpdateStatus = {
    id: Number(id),
    complite: !item.complite,
  };
  try {
    const response = await patchData(payload);
    item.complite = response.complite;
  } catch (e: unknown) {
    console.error(e as string);
  }
}

async function deleteTask(id: number): Promise<void> {
  const confirm = window.confirm("Are you sure you want to delete this task?");
  if (confirm) {
    try {
      await fetch(`https://e72b706bba1ca1f0.mokky.dev/items/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (e: unknown) {
      console.log(e);
    }
  }
}
onMounted(async () => {
  try {
    const response = await fetch(
      `https://e72b706bba1ca1f0.mokky.dev/items/${id}`
    );
    const data = await response.json();
    item.name = data.name;
    item.description = data.description;
    item.complite = data.complite;
  } catch (e) {
    console.log(e);
  }
});
</script>
