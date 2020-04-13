<template>
  <div class="message" :class="{error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" fill="danger" border></icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";

export default {
  components: { Icon },
  name: "WheelsInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$input-height: 32px;
$font-size: 14px;
$border-color: #409eff;
$border-hover-color: #66b1ff;
$red-color: #d2181c;
$red-hover-color: #e94043;
.message {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    padding: 0 8px;
    height: $input-height;
    border: 2px solid $border-color;
    font-size: inherit;
    &:hover {
      border-color: $border-hover-color;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $border-color;
    }
    &[disabled],
    &[readOnly] {
      border-color: #909399;
      color: #909399;
      cursor: not-allowed;
    }
    &[readOnly]:focus {
      outline: none;
      box-shadow: inset 0 1px 3px #909399;
    }
    &[disabled] {
      background-color: #dcdfe6;
    }
  }
  &.error {
    > input {
      border: 2px solid $red-color;
      color: $red-color;
      &:hover {
        border-color: $red-hover-color;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $red-color;
      }
    }
  }
  .error-message {
    color: $red-color;
    line-height: 1em;
  }
}
</style>