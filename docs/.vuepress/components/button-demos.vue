<template>
  <div>
    <div class="demoRow">
      <w-button>默认按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button type="info">信息按钮</w-button>
      <w-button type="warning">警告按钮</w-button>
      <w-button type="danger">危险按钮</w-button>
    </div>
    <div class="demoRow">
      <w-button border>默认按钮</w-button>
      <w-button type="success" border>成功按钮</w-button>
      <w-button type="info" border>信息按钮</w-button>
      <w-button type="warning" border>警告按钮</w-button>
      <w-button type="danger" border>危险按钮</w-button>
    </div>
    <div class="demoRow">
      <w-button round>默认按钮</w-button>
      <w-button type="success" round>成功按钮</w-button>
      <w-button type="info" round>信息按钮</w-button>
      <w-button type="warning" round>警告按钮</w-button>
      <w-button type="danger" round>危险按钮</w-button>
    </div>
    <div class="demoRow">
      <w-button round border>默认按钮</w-button>
      <w-button type="success" round border>成功按钮</w-button>
      <w-button type="info" round border>信息按钮</w-button>
      <w-button type="warning" round border>警告按钮</w-button>
      <w-button type="danger" round border>危险按钮</w-button>
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
