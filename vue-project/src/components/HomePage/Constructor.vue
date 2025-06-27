<template>
  <div
    class="mt-5 constructor bg-white p-6 rounded-lg shadow-lg w-full"
    ref="constructor"
  >
    <div class="flex flex-col gap-4">
      <input
        type="text"
        v-model="item.name"
        placeholder="Название задачи"
        class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <textarea
        placeholder="Описание задачи"
        v-model="item.description"
        class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-none"
      ></textarea>
      <button
        @click="addItem"
        class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import interact from "interactjs";
import { reactive, onMounted, ref } from "vue";
import { type Item } from "@/types/responses";

type Payload = Omit<Item, "id">;
function clearItem(): void {
  item.name = "";
  item.description = "";
}

// Функция для обработки перетаскивания

const emit = defineEmits<{
  (e: "addItem"): void;
}>();
const item = reactive<Pick<Item, "name" | "description">>({
  name: "",
  description: "",
});

function openXHR(payload: Payload): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.upload.onprogress = (event) => {
      console.log((event.loaded / event.total) * 100);
    };
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(xhr.statusText);
    };
    xhr.open("POST", "https://e72b706bba1ca1f0.mokky.dev/items");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(payload));
  });
}
async function addItem(): Promise<void> {
  if (!item.name || !item.description) {
    alert("Заполните все поля");
    return;
  }
  const payload: Payload = {
    name: item.name,
    description: item.description,
    complite: false,
  };

  await openXHR(payload);
  emit("addItem");
  clearItem();
}
const constructor = ref<any>(null);
onMounted(() => {
  interact(constructor.value).resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute("data-x")) || 0;
        var y = parseFloat(target.getAttribute("data-y")) || 0;

        // update the element's style
        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;
        target.style.transform = "translate(" + x + "px," + y + "px)";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      },
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: "parent",
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 },
      }),
    ],

    inertia: true,
  });
});
</script>

<style lang="scss" scoped>
.constructor {
  z-index: 1000;
  touch-action: none;
  box-sizing: border-box;
}
</style>