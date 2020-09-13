const expect = chai.expect;
import Vue from "vue";
import List from "../src/List";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("w-List", List);

describe("List", () => {
  it("存在.", () => {
    expect(List).to.exist;
  });
});
