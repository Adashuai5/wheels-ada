<template>
  <button
    class="w-button"
    :class="{[`icon-${iconPosition}`]: true,[`color-${type}`]: !border,[`border-${type}`]: border,'is-round': round}"
    @click="$emit('click')"
    :data-color="dataSetColor[type]"
  >
    <canvas @click="press" class="w-button-canvas"></canvas>
    <w-icon class="icon" v-if="icon && !loading" :name="icon" :fill="type" :border="border"></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading" :fill="type" :border="border"></w-icon>
    <div class="w-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "WheelsButton",
  components: {
    "w-icon": Icon
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
        primary: "#426FC5",
        info: "#606266",
        success: "#159957",
        warning: "#f34711",
        danger: "#d2181c"
      },
      clickedEvent: {},
      clickedElement: {},
      insideRadius: 0
    };
  },
  methods: {
    press(event) {
      this.clickedEvent = event;
      this.clickedElement = event.toElement;
      this.insideRadius = 0;
      this.draw();
    },
    clearRect() {
      const canvass = document.getElementsByClassName("w-button-canvas");
      for (let i = 0; i < canvass.length; i++) {
        const context = canvass[i].getContext("2d");
        if (context.fillStyle !== "#000000") {
          context.clearRect(
            0,
            0,
            this.clickedElement.width,
            this.clickedElement.height
          );
        }
      }
    },
    draw() {
      this.clearRect();
      const context = this.clickedElement.getContext("2d");
      context.beginPath();
      context.arc(
        this.clickedEvent.offsetX,
        this.clickedEvent.offsetY,
        this.insideRadius,
        0,
        2 * Math.PI,
        false
      );
      context.fillStyle = this.clickedElement.parentElement.dataset.color;
      context.fill();
      this.insideRadius += 3;
      const requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();
      if (this.insideRadius < this.clickedElement.width) {
        requestAnimFrame(this.draw);
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
$button-width: 120px;
$button-height: 32px;
$font-size: 14px;
$color: #fff;

$color-primary: #409eff;
$color-info: #909399;
$color-success: #67c23a;
$color-warning: #f6774f;
$color-danger: #e94043;

$data-primary: #2f5398;
$data-info: #606266;
$data-success: #159957;
$data-warning: #f34711;
$data-danger: #d2181c;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.w-button {
  outline: none;
  border: none;
  color: $color;
  overflow: hidden;
  font-size: $font-size;
  height: $button-height;
  width: $button-width;
  padding: 0 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
  canvas {
    opacity: 0.25;
    position: absolute;
    top: 0;
    left: 0;
  }
  .w-button-content {
    line-height: 1em;
  }
  > .w-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .w-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 1.5s infinite linear;
  }
}
.color-primary {
  background-color: $color-primary;
}
.color-info {
  background-color: $color-info;
}
.color-success {
  background-color: $color-success;
}
.color-warning {
  background-color: $color-warning;
}
.color-danger {
  background-color: $color-danger;
}

.border-primary {
  background-color: transparent;
  border: 2px solid $color-primary;
  color: $color-primary;
}

.border-info {
  background-color: transparent;
  border: 2px solid $color-info;
  color: $color-info;
}

.border-success {
  background-color: transparent;
  border: 2px solid $color-success;
  color: $color-success;
}

.border-warning {
  background-color: transparent;
  border: 2px solid $color-warning;
  color: $color-warning;
}

.border-danger {
  background-color: transparent;
  border: 2px solid $color-danger;
  color: $color-danger;
}
.is-round {
  border-radius: 10em;
}
</style>