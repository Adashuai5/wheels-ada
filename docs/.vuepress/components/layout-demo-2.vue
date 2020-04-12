<template>
  <div>
    <w-layout style="color: white; overflow:hidden;">
      <w-header style="height: 50px; background:lightskyblue;">header</w-header>
      <w-layout>
        <w-sider style="height: 100px; background: #409eff; width:200px; color: black;">sider</w-sider>
        <w-content style="height: 100px; background:deepskyblue;">content</w-content>
      </w-layout>
      <w-footer style="height: 50px; background:lightskyblue;">footer</w-footer>
    </w-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
import Sider from "../../../src/sider";

export default {
  components: {
    "w-layout": Layout,
    "w-header": Header,
    "w-footer": Footer,
    "w-content": Content,
    "w-sider": Sider
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>