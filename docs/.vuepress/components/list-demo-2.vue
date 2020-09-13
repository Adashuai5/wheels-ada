<template>
  <w-list
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
    @scroll="onScrollEnd"
  >
    <template #items="{ visibleData }">
      <div
        class="item"
        v-for="(item, index) in visibleData"
        :key="item + index"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        {{ item }}
      </div>
    </template>
  </w-list>
</template>

<script>
import List from "../../../src/list";

export default {
  components: {
    "w-list": List,
  },
  data() {
    return {
      originalList: [],
      itemHeight: 30,
    };
  },
  created() {
    for (let i = 0; i < 29; i++) {
      this.originalList.push(1);
    }
  },
  methods: {
    onScrollEnd() {
      for (let i = 0; i < 5; i++) {
        this.originalList.push(1);
      }
    },
  },
};
</script>
<style scoped>
.item {
  color: #409eff;
  box-sizing: border-box;
  border: 2px solid #409eff;
}
</style>
