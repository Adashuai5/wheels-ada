<template>
  <button
    class="w-button"
    :class="{[`icon-${iconPosition}`]: true,[`color-${type}`]: !border,[`border-${type}`]: border,'is-round': round}"
    @click="$emit('click')"
    :data-color="dataSetColor[type]"
  >
    <w-canvas></w-canvas>
    <w-icon class="icon" v-if="icon && !loading" :name="icon" :fill="type" :border="border"></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading" :fill="type" :border="border"></w-icon>
    <div class="w-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
import Canvas from "./canvas";
export default {
  name: "WheelsButton",
  components: {
    "w-icon": Icon,
    "w-canvas": Canvas
  },
  props: {
    icon: {},
    type: {
      type: String,
      default: "primary",
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
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  },
  data() {
    return {
      dataSetColor: {
        primary: "#66B1FF",
        info: "#C0C4CC",
        success: "#5ab446",
        warning: "#f6774f",
        danger: "#e94043"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$color: #fff;
$color-primary: #409eff;
$color-info: #909399;
$color-success: #67c23a;
$color-warning: #f34711;
$color-danger: #d2181c;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.w-button {
  box-sizing: border-box;
  white-space: nowrap;
  outline: none;
  color: $color;
  font-size: $font-size;
  line-height: 1;
  padding: 0.5rem 1.2rem;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .w-button-content {
    line-height: 1rem;
  }
  > .w-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3rem;
  }
  &.icon-right {
    > .w-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3rem;
    }
  }
  .loading {
    animation: spin 1.5s infinite linear;
  }
}
.color-primary {
  background-color: $color-primary;
  border: 2px solid $color-primary;
}
.color-info {
  background-color: $color-info;
  border: 2px solid $color-info;
}
.color-success {
  background-color: $color-success;
  border: 2px solid $color-success;
}
.color-warning {
  background-color: $color-warning;
  border: 2px solid $color-warning;
}
.color-danger {
  background-color: $color-danger;
  border: 2px solid $color-danger;
}

.border-primary {
  background-color: $color;
  border: 2px solid $color-primary;
  color: $color-primary;
}

.border-info {
  background-color: $color;
  border: 2px solid $color-info;
  color: $color-info;
}

.border-success {
  background-color: $color;
  border: 2px solid $color-success;
  color: $color-success;
}

.border-warning {
  background-color: $color;
  border: 2px solid $color-warning;
  color: $color-warning;
}

.border-danger {
  background-color: $color;
  border: 2px solid $color-danger;
  color: $color-danger;
}
.is-round {
  border-radius: 10em;
}
</style>