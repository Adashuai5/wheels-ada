<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name" data-color="#66B1FF">
    <w-canvas :drawed="active" v-if="!disabled"></w-canvas>
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
      active: false,
      isOverflowHidden: false
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
        disabled: this.disabled,
        "is-overflow-hidden": this.isOverflowHidden
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
  mounted() {
    const explorer = window.navigator.userAgent;
    // 替换不支持 clip-path 浏览器为 overflow: hidden
    if (
      explorer.indexOf("Trident") >= 0 ||
      explorer.indexOf("Edge") >= 0 ||
      explorer.indexOf("Opera") >= 0
    ) {
      this.isOverflowHidden = true;
    } else {
      this.isOverflowHidden = false;
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
@import "var";

.tabs-item {
  flex-shrink: 0;
  padding: 0 2rem;
  height: 100%;
  font-family: $font-family;
  display: flex;
  align-items: center;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  position: relative;
  cursor: pointer;
  &.active {
    color: $color-primary;
  }
  &.disabled {
    color: $color-info;
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.is-overflow-hidden {
  overflow: hidden;
}
</style>