import { DOMWrapper, mount, VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import PercentageBar from "@/components/HomePage/PercentageBar.vue";

describe('Проверка компонента статус бара', async () => {
    let wrapper: VueWrapper<InstanceType<typeof PercentageBar>>;
    let lineUp:DOMWrapper<HTMLDivElement>;
    beforeEach(() => {
        wrapper = mount(PercentageBar, {
            props:{
                percentage: 0
            }
        })
         lineUp= wrapper.find('.progress__bar-lineup');
    })

    it('Корректно принимает пропс percentage и отображает его нулевые значения',  () => {
        expect(lineUp.attributes('style')).toContain('width: 0%;');
        expect(lineUp.attributes('style')).toContain('background: rgb(255, 53, 49);');
    })

    it('Корректно отображает пропс на 50%', async () => {
        await wrapper.setProps({
            percentage:50
        })
        expect(lineUp.attributes('style')).toContain('width: 50%;');
        expect(lineUp.attributes('style')).toContain('background: yellow;');
    })

    it('Корректно отображает пропс на 75%', async () => {
        await wrapper.setProps({
            percentage: 75
        })
        expect(lineUp.attributes('style')).toContain('width: 75%;');
        expect(lineUp.attributes('style')).toContain('background: rgb(10, 250, 158);')
    })
    it('Корректно отображает пропс на 100%', async () => {
        await wrapper.setProps({
            percentage: 100
        })
        expect(lineUp.attributes('style')).toContain('width: 100%;');
        expect(lineUp.attributes('style')).toContain('background: rgb(4, 169, 109);')
    })
})
