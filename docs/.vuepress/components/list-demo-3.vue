<template>
  <div>
    <w-button @click="addList" style="margin-bottom: 10px;">add</w-button>
    <w-button @click="shuffleList" style="margin-bottom: 10px;"
      >shuffle</w-button
    >
    <w-list
      animation
      :originalList="originalList"
      :itemHeight="itemHeight"
      style="width: 500px; height: 600px;"
      @added="onAdd"
      @removed="onRemove"
      @changed="onChange"
    >
      <template #items="{ visibleData }">
        <div
          class="item"
          v-for="item in visibleData"
          :key="item.id"
          :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        >
          {{ item.value }}
          <w-button type="danger" @click="removeItem(item.id)">remove</w-button>
        </div>
      </template>
    </w-list>
  </div>
</template>
<style>
.w-toast {
  z-index: 30 !important;
}
</style>
<script>
import Vue from "vue";
import List from "../../../src/list";
import Button from "../../../src/button";
import Toast from "../../../src/toast";
import plugin from "../../../src/plugin";

Vue.use(plugin);

export default {
  components: {
    "w-list": List,
    "w-toast": Toast,
    "w-button": Button,
  },
  data() {
    return {
      originalList: [],
      itemHeight: 60,
      i: 0,
    };
  },
  created() {
    for (let i = 0; i < 29; i++) {
      this.originalList.push({ id: i, value: i });
      this.i = i;
    }
  },
  methods: {
    addList() {
      this.i++;
      this.originalList.unshift({ id: this.i, value: this.i });
    },
    removeItem(id) {
      this.originalList.splice(
        this.originalList.findIndex((item) => id === item.id),
        1
      );
    },
    shuffleList() {
      const shuffled = [];
      while (this.originalList.length > 0) {
        const index = this.random(this.originalList.length - 1);
        shuffled.push(this.originalList[index]);
        this.originalList.splice(index, 1);
      }
      this.originalList = shuffled;
    },
    random(max) {
      return Math.floor(Math.random() * (max + 1));
    },
    onAdd() {
      this.$toast("Add item successfully", {
        autoClose: 3,
      });
    },
    onRemove() {
      this.$toast("Remove item successfully", {
        autoClose: 3,
      });
    },
    onChange() {
      this.$toast("List rearrangement successfully", {
        autoClose: 3,
      });
    },
  },
};
</script>
<style scoped>
.item {
  color: #409eff;
  box-sizing: border-box;
  border: 2px solid #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
