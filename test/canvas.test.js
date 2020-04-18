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
  it("接收 drawed 属性", (done) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <div data-color='#66b1ff'>
        <w-canvas ref="el" :drawed='true'></w-canvas>
      </div>
      `;
    const vm = new Vue({
      el: div,
    });
    const canvas = vm.$refs.el.$refs.wCanvas;
    vm.$nextTick(() => {
      const context = canvas.getContext("2d");
      expect(context.fillStyle.toLowerCase()).to.eq("#66b1ff");
      done();
      div.remove();
      vm.$destroy();
    });
  });
  it("接收 globalListen 属性", (done) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <div data-color='#66b1ff'>
        <w-canvas ref="el" :globalListen='true' :drawed='true'></w-canvas>
      </div>
      `;
    const vm = new Vue({
      el: div,
    });
    const canvas = vm.$refs.el.$refs.wCanvas;
    vm.$nextTick(() => {
      const context = canvas.getContext("2d");
      document.body.click();
      expect(context.fillStyle.toLowerCase()).to.eq("#000000");
      done();
      div.remove();
      vm.$destroy();
    });
  });
});
