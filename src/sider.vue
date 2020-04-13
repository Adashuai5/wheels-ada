<template>
  <transition name="side">
    <div class="sider" v-if="visible">
      <slot></slot>
      <w-button @click="visible=false" border>close</w-button>
    </div>
  </transition>
</template>
<script>
import Button from "../src/button";

export default {
  name: "WheelsSider",
  data() {
    return {
      visible: true
    };
  },
  components: {
    "w-button": Button
  }
};
</script>
<style scoped lang="scss">
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.side-enter-active,
.side-leave-active {
  transition: all 0.5s;
}

.side-enter,
.side-leave-to {
  margin-left: -200px;
}
</style>