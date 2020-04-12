<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WheelsButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `w-button-group 的子元素应该均为 w-button ，而你的有 ${name}`
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.w-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .w-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -2px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>