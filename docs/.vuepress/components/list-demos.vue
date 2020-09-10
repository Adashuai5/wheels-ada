<template>
  <div style="width: 500px; height: 600px;">
    <w-list :originalList="originalList" />
  </div>
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
    };
  },
  created() {
    for (let i = 0; i < 99; i++) {
      this.originalList.push({ id: i, value: i });
    }
  },
};
</script>
