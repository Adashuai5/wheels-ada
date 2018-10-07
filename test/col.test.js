const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接收 span 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 12
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 12
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span: 12, offset: 12}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-pc-12')).to.eq(true)
        expect(vm.$el.classList.contains('col-pc-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span: 12, offset: 12}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-ipad-12')).to.eq(true)
        expect(vm.$el.classList.contains('col-ipad-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrow-pc 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span: 12, offset: 12}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-narrow-pc-12')).to.eq(true)
        expect(vm.$el.classList.contains('col-narrow-pc-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 wide-pc 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span: 12, offset: 12}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-wide-pc-12')).to.eq(true)
        expect(vm.$el.classList.contains('col-wide-pc-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})