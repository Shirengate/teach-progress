<template>
  <!-- From Uiverse.io by DaniloMGutavo -->
  <label class="checkbox-container">
    <input
      class="custom-checkbox"
      @change="updateStatus"
      :checked="complite"
      type="checkbox"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">
import { type UpdateStatus } from "@/types/emits";
const emit = defineEmits<{
  (e: "updateStatus", payload: UpdateStatus): void;
}>();
const props = defineProps<{
  complite: boolean;
  id: number;
}>();

function updateStatus() {
  emit("updateStatus", {
    id: props.id,
    complite: !props.complite,
  });
}
</script>

<style lang="scss" scoped>
/* From Uiverse.io by DaniloMGutavo */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.custom-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 4px;
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.custom-checkbox:checked ~ .checkmark {
  background-color: #2196f3;
  box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);
}

.custom-checkbox:checked ~ .checkmark:after {
  display: block;
}

@keyframes checkAnim {
  0% {
    height: 0;
  }

  100% {
    height: 10px;
  }
}

.custom-checkbox:checked ~ .checkmark:after {
  animation: checkAnim 0.2s forwards;
}
</style>