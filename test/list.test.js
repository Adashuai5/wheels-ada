const expect = chai.expect;
import Vue from "vue";
import List from "../src/list.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("w-list", List);

describe("List", () => {
  it("存在.", () => {
    expect(List).to.exist;
  });

  describe("props", () => {
    const Constructor = Vue.extend(List);
    it("接受 originalList 和 itemHeight", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
        <w-list
          style="width: 500px; height: 600px;"
        >
          <template #items="{ visibleData }">
            <div
              class="item"
              v-for="item in visibleData"
              :key="item.id"
              :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
            >
              {{ item.value }}
            </div>
          </template>
        </w-list>
      `;
      let vm = new Constructor({
        propsData: {
          originalList: [1, 2, 3],
          itemHeight: 10,
        },
      }).$mount(div);
      vm.$nextTick(() => {
        const phantom = vm.$el.querySelector(".list-phantom");
        expect(getComputedStyle(phantom).height).to.eq("30px");
        div.remove();
        vm.$destroy();
      });
    });
    it("可以设置 estimatedItemHeight", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
        <w-list
          style="width: 500px; height: 600px;"
        >
          <template #items="{ visibleData }">
            <div
              class="item"
              v-for="item in visibleData"
              :key="item.id"
              :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
            >
              {{ item.value }}
            </div>
          </template>
        </w-list>
      `;
      let vm = new Constructor({
        propsData: {
          originalList: [1, 2, 3],
          estimatedItemHeight: 50,
        },
      }).$mount(div);
      vm.$nextTick(() => {
        expect(vm.fixedHeight).to.be.false;
        div.remove();
        vm.$destroy();
      });
    });
  });
});
