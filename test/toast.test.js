const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.exist
    })
    describe('props', () => {
        it('接收 autoClose 属性.', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.equal(false)
                done()
                div.remove()
                vm.$destroy()
            })
        })
        it('接收 closeButton 属性.', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.equal('关闭')
            closeButton.click()
            expect(callback).to.have.been.called
            vm.$el.remove()
            vm.$destroy()
        })
        it('接收 enableHTML 属性.', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {enableHTML: true}
            })
            vm.$slots.default = ['<p id="test">hi<p>']
            vm.$mount()
            const p = vm.$el.querySelector('#test')
            expect(p).to.exist
            vm.$el.remove()
            vm.$destroy()
        })
        it('接收 position 属性.', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {position: 'top'}
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.equal(true)
            vm.$el.remove()
            vm.$destroy()
        })
    })
})
