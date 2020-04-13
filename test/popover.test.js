const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('w-popover', Popover)

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position.', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <w-popover position="left" ref="el">
            <template slot="content">
                content-
            </template>
            <button>点我</button>
        </w-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const { contentWrapper } = vm.$refs.el.$refs
            expect(contentWrapper.classList.contains('position-left')).to.be.true
            done()
        })
    })
    xit('可以设置trigger.', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <w-popover trigger="hover" ref="el">
            <template slot="content">
                content-
            </template>
            <button>点我</button>
        </w-popover>
        `
        const vm = new Vue({
            el: div
        })
        const { contentWrapper, triggerWrapper } = vm.$refs.el.$refs
        vm.$nextTick(() => {
            let event = new Event('mouseenter')
            triggerWrapper.dispatchEvent(event)
            const callback = sinon.fake();
            vm.$on('mouseenter', callback)
            vm.$nextTick(() => {
                expect(contentWrapper).to.be.exist
                done()
            })
        })
    })
})
