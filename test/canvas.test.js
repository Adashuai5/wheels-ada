const expect = chai.expect;
import Vue from "vue";
import Canvas from "../src/Canvas";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("w-canvas", Canvas);

describe("Canvas", () => {
  it("存在.", () => {
    expect(Canvas).to.be.ok;
  });
  xit("接收 drawed 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <div data-color='#426FC5'>
        <w-canvas :drawed="true" ref="el"></w-canvas>
      </div>
      `;
    const vm = new Vue({
      el: div
    });
    const canvas = vm.$refs.el.$refs.wCanvas;
    vm.$nextTick(() => {
      if (canvas && canvas.getContext("2d")) {
        const context = canvas.getContext("2d");
        expect(context.fillStyle).to.eq("#000000");
        expect(context.fillStyle).to.eq("#426FC5");
      }
      div.remove();
      vm.$destroy();
    });
  });
});
