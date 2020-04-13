<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name" data-color="#66B1FF">
    <w-canvas :drawed="active"></w-canvas>
    <slot></slot>
  </div>
</template>
<script>
import Canvas from "./canvas";
export default {
  name: "WheelsTabsItem",
  inject: ["eventBus"],
  components: {
    "w-canvas": Canvas
  },
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    }
  }
};
</script>
<style scoped lang="scss">
$active-color: #409eff;
$font-family: PingFangSC-Regular;
$disabled-text-color: gray;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  font-family: $font-family;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &.active {
    color: $active-color;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: default;
  }
}
</style>