const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.exist
    })
    describe('props', () => {
        it('接收 selected 属性.', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-tabs selected="sports">
                <g-tabs-head>
                    <g-tabs-item name="woman"> 美女 </g-tabs-item>
                    <g-tabs-item name="finance"> 财经 </g-tabs-item>
                    <g-tabs-item name="sports"> 体育 </g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="woman"> 美女对应新闻 </g-tabs-pane>
                    <g-tabs-pane name="sports"> 体育对应新闻 </g-tabs-pane>
                    <g-tabs-pane name="finance"> 财经对应新闻 </g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
            `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                const x = vm.$el.querySelector('.tabs-item[data-name="sports"]')
                expect(x.classList.contains('active')).to.be.true
                done()
                div.remove()
                vm.$destroy()
            })
        })
        it('接收 direction prop 属性.',()=>{})
    })
})