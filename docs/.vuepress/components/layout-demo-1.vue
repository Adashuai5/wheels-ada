<template>
  <div>
    <w-layout style="color: white;">
      <w-header style="height: 50px; background:lightskyblue;">header</w-header>
      <w-content style="height: 100px; background:deepskyblue;">content</w-content>
      <w-footer style="height: 50px; background:lightskyblue;">footer</w-footer>
    </w-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";

export default {
  components: {
    "w-layout": Layout,
    "w-header": Header,
    "w-footer": Footer,
    "w-content": Content
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>