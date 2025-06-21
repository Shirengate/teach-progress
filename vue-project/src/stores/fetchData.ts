import { defineStore } from "pinia";
import type { Item, ItemsResponse } from "@/types/responses";
import type { UpdateStatus } from "@/types/emits";
export const useFetchData = defineStore("fetchData", () => {
  const url: string = "https://e72b706bba1ca1f0.mokky.dev";

  async function getData(): Promise<ItemsResponse> {
    const response = await fetch(`${url}/items`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data: ItemsResponse = await response.json();

    return data;
  }

  async function patchData(payload: UpdateStatus): Promise<Item> {
    const { id, complite } = payload;
    const response = await fetch(`${url}/items/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ complite }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  return { getData, patchData };
});
