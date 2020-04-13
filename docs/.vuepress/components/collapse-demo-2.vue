<template>
  <div style="height: 173px">
    <w-collapse :selected.sync="selectedTab" single>
      <w-collapse-item title="item-1" name="1">content-1</w-collapse-item>
      <w-collapse-item title="item-2" name="2">content-2</w-collapse-item>
      <w-collapse-item title="item-3" name="3">content-3</w-collapse-item>
    </w-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";

export default {
  components: {
    "w-collapse": Collapse,
    "w-collapse-item": CollapseItem
  },
  data() {
    return {
      selectedTab: ["1"]
    };
  }
};
</script>
<style>
</style>