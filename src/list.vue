<template>
  <div
    ref="list"
    class="list-container"
    @scroll="onScroll"
    @transitionend="onTransitionEnd"
  >
    <div
      class="list-phantom"
      :style="{ height: originalListHeight + 'px' }"
    ></div>
    <transition-group
      :name="listName"
      class="list"
      :style="{ transform: 'translateY(' + getTransform + 'px)' }"
    >
      <slot name="items" :visibleData="visibleData"></slot>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "WheelsList",
  props: {
    /* 列表数据 */
    originalList: {
      type: Array,
      default: () => [],
    },
    /* 行高 */
    itemHeight: {
      type: Number,
      default: 80,
    },
    /* 上下预留高度 */
    overscan: {
      type: Number,
      default: 5,
    },
    /* 是否开启动画 */
    animation: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /* 列表总高度 */
    originalListHeight() {
      return this.originLength * this.itemHeight;
    },
    /* 展示列表项 */
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemHeight);
    },
    /* 偏移量对应的style */
    getTransform() {
      return this.scrollTop - (this.scrollTop % this.itemHeight);
    },
    /* 获取真实显示列表数据 */
    visibleData() {
      return this.originalList.slice(
        Math.max(this.start, 0),
        Math.min(this.end, this.originLength)
      );
    },
  },
  data() {
    return {
      /* 可视区域高度 */
      screenHeight: 0,
      /* 列表偏移量 */
      scrollTop: 0,
      /* 是否向下滚动 */
      isScrollDown: true,
      /* 展示列起始索引 */
      start: 0,
      /* 展示列结束索引 */
      end: 0,
      /* 列表名称（用于动画） */
      listName: "",
      /* 列表长度 */
      originLength: 0,
    };
  },
  watch: {
    originalList(val) {
      if (val) {
        this.animation && (this.listName = "list");
        this.$emit("change");
        if (val.length === this.originLength - 1) {
          this.$emit("remove");
        } else if (val.length > this.originLength) {
          this.$emit("add");
        }
        this.originLength = this.originalList.length;
      }
    },
  },
  created() {
    this.start = 0;
    this.originLength = this.originalList.length;
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.end = this.start + this.visibleCount + this.overscan;
  },
  methods: {
    onScroll() {
      this.scrollTop = this.$refs.list.scrollTop;
      this.start = Math.floor(this.scrollTop / this.itemHeight);
      this.end = this.start + this.visibleCount + this.overscan;
      this.end - this.overscan === this.originLength && this.$emit("scroll");
    },
    onTransitionEnd() {
      this.listName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  height: 100%;
  overflow: auto;
  position: relative;

  .list-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .list {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }
}
</style>
<style>
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>
