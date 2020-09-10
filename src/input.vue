<template>
  <div class="message" :class="{error}">
    <input
      type="text"
      :value="value"
      :title="title"
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
    title: {
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
@import "var";

.message {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5rem;
  }
  > input {
    padding: 0 8px;
    height: $input-height;
    border: 2px solid $color-primary;
    font-size: inherit;
    &:hover {
      border-color: $border-hover-color;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $color-primary;
    }
    &[disabled],
    &[readOnly] {
      border-color: $color-info;
      color: $color-info;
      cursor: not-allowed;
    }
    &[readOnly]:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $color-info;
    }
    &[disabled] {
      opacity: 0.5;
    }
  }
  &.error {
    > input {
      border: 2px solid $color-danger;
      color: $color-danger;
      &:hover {
        border-color: $red-hover-color;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $color-danger;
      }
    }
  }
  .error-message {
    color: $color-danger;
    line-height: 1rem;
  }
}
</style>