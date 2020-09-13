<template>
  <div
    ref="list"
    class="list-container"
    @scroll="onScroll"
    @transitionend="onTransitionEnd"
  >
    <div
      ref="phantom"
      class="list-phantom"
      :style="{ height: originalListHeight + 'px' }"
    ></div>
    <div
      ref="content"
      class="list"
      :style="{ transform: 'translateY(' + getTransform + 'px)' }"
    >
      <transition-group :name="listName">
        <slot name="items" ref="items" :visibleData="visibleData"></slot>
      </transition-group>
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
      type: [Number, Array],
      default: 80,
    },
    /* 估计行高 */
    estimatedItemHeight: {
      type: Number,
      default: 0,
    },
    /* 上下预留项 */
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
      if (this.fixedHeight) {
        return this.originLength * this.itemHeight;
      }
      return this.positions[this.positions.length - 1].bottom;
    },
    /* 展示列表项 */
    visibleCount() {
      return Math.ceil(
        this.screenHeight /
          (this.fixedHeight ? this.itemHeight : this.estimatedItemHeight)
      );
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
      /* 是否固定高度项 */
      fixedHeight: true,
      /* 列表项高度: 非固定高度时使用 */
      positions: [],
    };
  },
  watch: {
    originalList(val) {
      if (val) {
        this.animation && (this.listName = "list");
        this.$emit("changed");
        if (val.length === this.originLength - 1) {
          this.$emit("removed");
        } else if (val.length > this.originLength) {
          this.$emit("added");
        }
        this.originLength = this.originalList.length;
      }
    },
  },
  created() {
    this.start = 0;
    this.originLength = this.originalList.length;
    this.estimatedItemHeight && (this.fixedHeight = false);
    this.estimatedItemHeight && this.initPositions();
    !this.estimatedItemHeight &&
      typeof this.itemHeight !== "number" &&
      console &&
      console.warn &&
      console.warn("只有在传入 estimatedItemHeight 时 itemHeight 才能是 array");
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.end = this.start + this.visibleCount + this.overscan;
  },
  updated() {
    this.$nextTick(function() {
      if (!this.$refs.items || !this.$refs.items.length || this.fixedHeight) {
        return;
      }
      // 获取真实元素大小，修改对应的尺寸缓存
      this.updateItemsSize();
      // 更新列表总高度
      let height = this.positions[this.positions.length - 1].bottom;
      this.$refs.phantom.style.height = height + "px";
      // 更新真实偏移量
      this.setStartOffset();
    });
  },
  methods: {
    initPositions() {
      this.positions = this.originalList.map((item, index) => {
        return {
          index,
          height: this.estimatedItemHeight,
          top: index * this.estimatedItemHeight,
          bottom: (index + 1) * this.estimatedItemHeight,
        };
      });
    },
    // 获取列表项的当前尺寸
    updateItemsSize() {
      let nodes = this.$refs.items;
      nodes.forEach((node) => {
        let rect = node.getBoundingClientRect();
        let height = rect.height;
        let index = +node.id.slice(1);
        let oldHeight = this.positions[index].height;
        let dValue = oldHeight - height;
        //存在差值
        if (dValue) {
          this.positions[index].bottom = this.positions[index].bottom - dValue;
          this.positions[index].height = height;

          for (let k = index + 1; k < this.positions.length; k++) {
            this.positions[k].top = this.positions[k - 1].bottom;
            this.positions[k].bottom = this.positions[k].bottom - dValue;
          }
        }
      });
    },
    //获取当前的偏移量
    setStartOffset() {
      let startOffset =
        this.start >= 1 ? this.positions[this.start - 1].bottom : 0;
      this.$refs.content.style.transform = `translateY(${startOffset}px)`;
    },
    //获取列表起始索引
    getStartIndex() {
      //二分法查找
      return this.binarySearch(this.positions, this.scrollTop);
    },
    //二分法查找
    binarySearch(list, value) {
      let start = 0;
      let end = list.length - 1;
      let tempIndex = null;
      while (start <= end) {
        let midIndex = parseInt((start + end) / 2);
        let midValue = list[midIndex].bottom;
        if (midValue === value) {
          return midIndex + 1;
        } else if (midValue < value) {
          start = midIndex + 1;
        } else if (midValue > value) {
          if (tempIndex === null || tempIndex > midIndex) {
            tempIndex = midIndex;
          }
          end = end - 1;
        }
      }
      return tempIndex;
    },
    onScroll() {
      this.scrollTop = this.$refs.list.scrollTop;
      this.start = this.fixedHeight
        ? Math.floor(this.scrollTop / this.itemHeight)
        : this.getStartIndex();
      this.end = this.start + this.visibleCount + this.overscan;
      this.end - this.overscan === this.originLength && this.$emit("scroll");
      !this.fixedHeight && this.setStartOffset();
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
