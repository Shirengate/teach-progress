import Item from "@/components/HomePage/Items/Item.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import type { VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

// Тип для пропса `item` (совпадает с интерфейсом в компоненте)
interface ItemProps {
    id: number;
    name: string;
    description: string;
    complite: boolean; // Опечатка? Возможно, должно быть `complete`?
}

describe('Компонент Item', () => {
    let wrapper: VueWrapper<InstanceType<typeof Item>>;

    beforeEach(() => {
        // Монтируем компонент с обязательным пропсом `item`
        wrapper = mount(Item, {
            props: {
                item: { // Дефолтные значения для инициализации
                    id: 0,
                    name: '',
                    description: '',
                    complite: false,
                }
            },
            global: {
                plugins: [createTestingPinia()]
            }
        });
    });

    it('корректно принимает пропс item',async () => {
        const testProps: ItemProps = {
            id: 2,
            name: 'test2',
            description: 'test',
            complite: false,
        };

        // Обновляем пропс
        await wrapper.setProps({ item: testProps });

        // Проверяем, что пропс установился
        expect(wrapper.props('item')).toEqual(testProps);
        
        // Дополнительно: проверяем отображение в компоненте
        expect(wrapper.text()).toContain('test2');
    });
});