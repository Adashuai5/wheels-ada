<template>
  <div>
    <w-popover>
      <template slot="content" slot-scope="{close}">
        弹出内容
        <w-button @click="close" round>关闭</w-button>
      </template>
      <w-button border>内部关闭</w-button>
    </w-popover>
  </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
  components: {
    "w-popover": Popover,
    "w-button": Button
  }
};
</script>