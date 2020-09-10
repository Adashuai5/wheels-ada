<template>
  <div>
    <w-input value="中文" title="中文"></w-input>
    <w-input value="中文" readonly></w-input>
    <w-input value="中文" disabled></w-input>
    <w-input value="中文" error="错误"></w-input>
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  components: {
    "w-input": Input
  }
};
</script>

