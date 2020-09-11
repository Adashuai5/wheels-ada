<template>
  <div ref="list" class="list-container" @scroll="onScroll">
    <div
      class="list-phantom"
      :style="{ height: originalListHeight + 'px' }"
    ></div>
    <div
      class="list"
      :style="{ transform: 'translateY(' + getTransform + 'px)' }"
    >
      <div
        ref="items"
        class="list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        @click="onRemove($event, item.id)"
        @transitionend="onRemoveTransitionEnd"
      >
        {{ item.value }}
      </div>
    </div>
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
  },
  computed: {
    /* 列表总高度 */
    originalListHeight() {
      return this.originalList.length * this.itemHeight;
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
        Math.min(this.end, this.originalList.length)
      );
    },
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount + this.overscan;
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
    };
  },
  methods: {
    onRemove(e, id) {
      const { target: item } = e;
      this.index = this.visibleData.findIndex((item) => id === item.id);
      item.innerText = "";
      item.style.backgroundColor = "#d3d3d3";
      item.classList.add("remove-animate");
    },
    onRemoveTransitionEnd() {
      this.originalList.splice(this.index + this.start, 1);
    },
    onScroll() {
      this.scrollTop = this.$refs.list.scrollTop;
      this.start = Math.floor(this.scrollTop / this.itemHeight);
      this.end = this.start + this.visibleCount + this.overscan;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "var";

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
    text-align: center;

    .list-item {
      color: $color-primary;
      box-sizing: border-box;
      border: 2px solid $color-primary;
    }

    .remove-animate {
      padding: 0 !important;
      border: 0 !important;
      height: 0 !important;
      line-height: 0 !important;
      transition: height 0.5s ease;
    }
  }
}
</style>
