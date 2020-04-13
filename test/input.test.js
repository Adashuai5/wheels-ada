const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  it("存在.", () => {
    expect(Input).to.be.exist;
  });
  describe("props", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it("可以接收 value", () => {
      vm = new Constructor({
        propsData: {
          value: "1234"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
    });
    it("可以设置 disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
    });
    it("可以设置 readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
    });
    it("可以设置 error", () => {
      vm = new Constructor({
        propsData: {
          error: "错了"
        }
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.equal("#i-error");
      const errorMessage = vm.$el.querySelector(".error-message");
      expect(errorMessage.innerText).to.equal("错了");
    });
  });
  describe("事件", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it("支持 change/focus/input/blur 事件", () => {
      ["change", "focus", "input", "blur"].forEach(eventName => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        // 模拟触发 eventName 事件
        const event = new Event(eventName);
        Object.defineProperty(event, "target", {
          value: { value: "hi" },
          enumerable: true
        });
        const inputElement = vm.$el.querySelector("input");
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith("hi");
      });
    });
    // it('支持 focus 事件',()=>{
    //     vm = new Constructor({}).$mount()
    //     const callback = sinon.fake();
    //     vm.$on('focus', callback)
    //     // 模拟触发 focus 事件
    //     const event = new Event('focus')
    //     const inputElement = vm.$el.querySelector('input')
    //     inputElement.dispatchEvent(event);
    //     expect(callback).to.have.been.calledWith(event)
    // })
    // it('支持 input 事件',()=>{
    //     vm = new Constructor({}).$mount()
    //     const callback = sinon.fake();
    //     vm.$on('input', callback)
    //     // 模拟触发 input 事件
    //     const event = new Event('input')
    //     const inputElement = vm.$el.querySelector('input')
    //     inputElement.dispatchEvent(event);
    //     expect(callback).to.have.been.calledWith(event)
    // })
    // it('支持 blur 事件',()=>{
    //     vm = new Constructor({}).$mount()
    //     const callback = sinon.fake();
    //     vm.$on('blur', callback)
    //     // 模拟触发 blur 事件
    //     const event = new Event('blur')
    //     const inputElement = vm.$el.querySelector('input')
    //     inputElement.dispatchEvent(event);
    //     expect(callback).to.have.been.calledWith(event)
    // })
  });
});
