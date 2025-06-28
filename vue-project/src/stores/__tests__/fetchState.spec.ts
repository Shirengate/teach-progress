import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useStateStore } from "@/stores/state";
describe("проверка стора состояний", async () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("корректно просчитывает процентр при разном состоянии", async () => {
    const state = useStateStore();
    state.items = [
      {
        id: 1,
        name: "test1",
        description: "test",
        complite: false,
      },
      {
        id: 2,
        name: "test2",
        description: "test",
        complite: true,
      },
    ];
    expect(state.percentage).toBe(50);
    state.items = [
      {
        id: 1,
        name: "test1",
        description: "test",
        complite: false,
      },
    ];
    expect(state.percentage).toBe(0);
  });
});
