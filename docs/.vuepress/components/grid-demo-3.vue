<template>
  <div style="color: #fff;">
    <w-row class="demoRow" gutter="10">
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
      <w-col span="8" offset="8">
        <div class="demoCol">8</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="6" offset="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6" offset="6">
        <div class="demoCol">6</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="4">
        <div class="demoCol">4</div>
      </w-col>
      <w-col span="4" offset="4">
        <div class="demoCol">4</div>
      </w-col>
      <w-col span="4" offset="8">
        <div class="demoCol">4</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
import Col from "../../../src/col";
import Row from "../../../src/row";

export default {
  components: {
    "w-col": Col,
    "w-row": Row
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ebeef5;
  background: #409eff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>