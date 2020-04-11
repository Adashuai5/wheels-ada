<template>
  <div>
    <w-button-group>
      <w-button icon="left" icon-position="left" border>上一页</w-button>
      <w-button icon="right" icon-position="right" border>下一页</w-button>
    </w-button-group>
  </div>
</template>

<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/button-group";

export default {
  components: {
    "w-button": Button,
    "w-button-group": ButtonGroup
  }
};
</script>