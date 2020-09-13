<template>
  <w-list
    :originalList="originalList"
    :itemHeight="itemHeight"
    :estimatedItemHeight="60"
    style="width: 500px; height: 600px;"
  >
    <template #items="{ visibleData }">
      <div
        class="item"
        v-for="(item, index) in visibleData"
        :key="item.id"
        :style="{
          height: itemHeight[index] + 'px',
          lineHeight: itemHeight[index] + 'px',
        }"
      >
        {{ item.value }}
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
      itemHeight: [],
    };
  },
  created() {
    for (let i = 0; i < 9999; i++) {
      this.originalList.push({ id: i, value: i });
      this.itemHeight.push(Math.floor(Math.random() * 100) + 10);
    }
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
