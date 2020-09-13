import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Sider from "./sider";
import Footer from "./footer";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import List from "./list";

Vue.component("w-button", Button);
Vue.component("w-icon", Icon);
Vue.component("w-button-group", ButtonGroup);
Vue.component("w-input", Input);
Vue.component("w-row", Row);
Vue.component("w-col", Col);
Vue.component("w-layout", Layout);
Vue.component("w-header", Header);
Vue.component("w-content", Content);
Vue.component("w-sider", Sider);
Vue.component("w-footer", Footer);
Vue.component("w-toast", Toast);
Vue.use(plugin);
Vue.component("w-tabs", Tabs);
Vue.component("w-tabs-head", TabsHead);
Vue.component("w-tabs-body", TabsBody);
Vue.component("w-tabs-item", TabsItem);
Vue.component("w-tabs-pane", TabsPane);
Vue.component("w-popover", Popover);
Vue.component("w-collapse", Collapse);
Vue.component("w-collapse-item", CollapseItem);
Vue.component("w-list", List);

new Vue({
  el: "#app",
  data: {
    selectedTab: ["2", "1"],
    value: "1",
    selected: "1",
  },
  created() {},
  methods: {
    showToast1() {
      this.showToast("middle");
    },
    showToast2() {
      this.showToast("top");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast() {
      this.$toast(`更新成功,第${parseInt(Math.random() * 100)}号按钮`, {
        enableHTML: false,
        autoClose: false,
      });
    },
  },
});
