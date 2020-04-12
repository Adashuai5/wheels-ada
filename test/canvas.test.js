const expect = chai.expect;
import Vue from "vue";
import Canvas from "../src/canvas";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("w-canvas", Canvas);

describe("Canvas", () => {
  it("存在.", () => {
    expect(Canvas).to.be.ok;
  });
  xit("接收 drawed 属性", done => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <div data-color='#426FC5'>
        <w-canvas ref="el" :drawed='true'></w-canvas>
      </div>
      `;
    const vm = new Vue({
      el: div
    });
    const canvas = vm.$refs.el.$refs.wCanvas;
    const context = canvas.getContext("2d");
    vm.$nextTick(() => {
      setTimeout(() => {
        if (context) {
          console.log(context.fillStyle);
          expect(context.fillStyle).to.eq("#426FC5");
        }
        done();
        div.remove();
        vm.$destroy();
      });
    });
  });
});
