<template>
  <div>
    <div class="demoRow">
      <w-button disabled>默认按钮</w-button>
      <w-button type="success" disabled>成功按钮</w-button>
      <w-button type="info" disabled>信息按钮</w-button>
      <w-button type="warning" disabled>警告按钮</w-button>
      <w-button type="danger" disabled>危险按钮</w-button>
    </div>
    <div class="demoRow">
      <w-button border disabled>默认按钮</w-button>
      <w-button type="success" border disabled>成功按钮</w-button>
      <w-button type="info" border disabled>信息按钮</w-button>
      <w-button type="warning" border disabled>警告按钮</w-button>
      <w-button type="danger" border disabled>危险按钮</w-button>
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
