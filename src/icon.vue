<template>
  <svg class="w-icon">
    <use :xlink:href="`#i-${name}`" :class="{'color-default':!border,[`color-${fill}`]: border}" />
  </svg>
</template>
<script>
import "./svg";

export default {
  name: "WheelsIcon",
  props: {
    name: String,
    fill: {
      type: String,
      default: "default",
      validator(value) {
        return (
          value === "primary" ||
          value === "info" ||
          value === "success" ||
          value === "warning" ||
          value === "danger"
        );
      }
    },
    border: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
$color-default: #ffffff;
$color-primary: #409eff;
$color-info: #909399;
$color-success: #67c23a;
$color-warning: #f34711;
$color-danger: #e94043;
.w-icon {
  width: 1em;
  height: 1em;
}
.color-default {
  fill: $color-default;
}
.color-primary {
  fill: $color-primary;
}
.color-info {
  fill: $color-info;
}
.color-success {
  fill: $color-success;
}
.color-warning {
  fill: $color-warning;
}
.color-danger {
  fill: $color-danger;
}
</style>