<template>
  <w-list
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
  >
    <template #items="{ visibleData }">
      <div
        class="item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
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
      itemHeight: 30,
    };
  },
  created() {
    for (let i = 0; i < 9999; i++) {
      this.originalList.push({ id: i, value: i });
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
