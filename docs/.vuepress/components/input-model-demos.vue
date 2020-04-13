<template>
  <div>
    <w-input v-model="value"></w-input>
    <div>value: {{value}}</div>
  </div>
</template>
<script>
import Input from "../../../src/input";

export default {
  components: {
    "w-input": Input
  },
  data() {
    return {
      value: "1"
    };
  }
};
</script>