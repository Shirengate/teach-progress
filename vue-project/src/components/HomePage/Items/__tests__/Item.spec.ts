import Item from "@/components/HomePage/Items/Item.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import type { VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
interface ItemProps {
  id: number;
  name: string;
  description: string;
  complite: boolean;
}
describe("Компонент Item", () => {
  let wrapper: VueWrapper<InstanceType<typeof Item>>;
  beforeEach(() => {
    wrapper = mount(Item, {
      props: {
        item: {
          id: 0,
          name: "",
          description: "",
          complite: false,
        },
      },
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });
  it("корректно принимает пропс item", async () => {
    const testProps: ItemProps = {
      id: 2,
      name: "test2",
      description: "test",
      complite: false,
    };
    await wrapper.setProps({ item: testProps });
    expect(wrapper.props("item")).toEqual(testProps);
    expect(wrapper.text()).toContain("test2");
  });
});
