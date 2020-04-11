<template>
  <div>
    <div class="demoRow">
      <w-button icon="settings">设置</w-button>
      <w-button icon="thumbs-up">点赞</w-button>
      <w-button icon="download" icon-position="right">下载</w-button>
      <w-button :loading="true">登录中</w-button>
    </div>
    <div class="demoRow">
      <w-button icon="settings" border>设置</w-button>
      <w-button icon="thumbs-up" border>点赞</w-button>
      <w-button icon="download" icon-position="right" border>下载</w-button>
      <w-button :loading="true" border>登录中</w-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/button";

export default {
  components: {
    "w-button": Button
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
</style>
