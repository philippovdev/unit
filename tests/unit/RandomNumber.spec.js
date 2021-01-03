import RandomNumber from "@/components/RandomNumber";
import {mount} from '@vue/test-utils'

describe('RandomNumber', () => {
    it('RandomNumber initial value should be equal to "0"', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })
    it('Value is between 1 and 10, if min is 1 and max is 10', async () => {
        const wrapper = mount(RandomNumber)
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })
    it('Value is between 200 and 300, if min is 200 and max is 300', async () => {
        const wrapper = mount(RandomNumber, {
            propsData: {min: 200, max: 300}
        })
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})
