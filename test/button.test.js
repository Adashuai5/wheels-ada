const expect = chai.expect;
import Vue from "vue";
import Button from "../src/button";
import Icon from "../src/icon";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("w-icon", Icon);

describe("Button", () => {
  it("存在.", () => {
    expect(Button).to.be.ok;
  });
  describe("props", () => {
    const Constructor = Vue.extend(Button);
    let vm;
    afterEach(() => {});
    it("可以设置icon.", () => {
      vm = new Constructor({
        propsData: {
          icon: "settings",
        },
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.equal("#i-settings");
    });
    it("可以设置disabled.", () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      const buttonElement = vm.$el;
      expect(buttonElement.disabled).to.equal(true);
    });
    it("可以设置loading.", () => {
      vm = new Constructor({
        propsData: {
          icon: "settings",
          loading: true,
        },
      }).$mount();
      const useElements = vm.$el.querySelectorAll("use");
      expect(useElements.length).to.equal(1);
      expect(useElements[0].getAttribute("xlink:href")).to.equal("#i-loading");
    });
    it("接收 round 属性", () => {
      vm = new Constructor({
        propsData: {
          round: true,
        },
      }).$mount();
      expect(vm.$el.classList.contains("is-round")).to.equal(true);
    });
    it("接收 border 属性", () => {
      vm = new Constructor({
        propsData: {
          border: true,
        },
      }).$mount();
      expect(vm.$el.classList.contains("border-primary")).to.equal(true);
    });
    it("可以设置 border,type", () => {
      vm = new Constructor({
        propsData: {
          icon: "settings",
          type: "success",
          border: true,
        },
      }).$mount();
      const useElements = vm.$el.querySelectorAll("use");
      expect(useElements.length).to.equal(1);
      expect(useElements[0].className.animVal).to.equal("color-success");
    });
    it("icon 默认的 order 是 1", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);

      vm = new Constructor({
        propsData: {
          icon: "settings",
        },
      }).$mount(div);
      const icon = vm.$el.querySelector("svg");
      expect(getComputedStyle(icon).order).to.eq("1");
      vm.$el.remove();
    });
    it("设置 iconPosition 可以改变 order", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);

      vm = new Constructor({
        propsData: {
          icon: "settings",
          iconPosition: "right",
        },
      }).$mount(div);
      const icon = vm.$el.querySelector("svg");
      expect(getComputedStyle(icon).order).to.eq("2");
      vm.$el.remove();
    });
  });
  describe("事件", () => {
    const Constructor = Vue.extend(Button);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it("点击 button 触发 click 事件", () => {
      vm = new Constructor({
        propsData: {
          icon: "settings",
        },
      }).$mount();

      const callback = sinon.fake();
      vm.$on("click", callback);
      vm.$el.click();
      expect(callback).to.have.been.called;
    });
    it("点击 button 触发 click 事件，有涟漪效果", (done) => {
      vm = new Constructor({
        propsData: {
          type: "success",
          icon: "settings",
        },
      }).$mount();
      const callback = sinon.fake();
      vm.$on("click", callback);
      const canvas = vm.$el.querySelector("canvas");
      const context = canvas.getContext("2d");
      expect(context.fillStyle).to.eq("#000000");
      vm.$nextTick(() => {
        canvas.click();
        expect(context.fillStyle).to.eq("#5ab446");
        expect(callback).to.have.been.called;
        done();
      });
    });
  });
});
