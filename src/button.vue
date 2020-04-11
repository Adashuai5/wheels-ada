<template>
  <button
    class="w-button material-design"
    :class="{[`icon-${iconPosition}`]: true,[`color-${type}`]: !border,[`border-${type}`]: border,'btn-round': round}"
    @click="$emit('click')"
    :data-color="dataSetColor[type]"
  >
    <w-icon
      class="icon"
      v-if="icon && !loading"
      :name="icon"
      :fill="type"
      :border="border"
    ></w-icon>
    <w-icon
      class="loading icon"
      v-if="loading"
      name="loading"
      :fill="type"
      :border="border"
    ></w-icon>
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
      insideCanvas: {
        centerX: 0,
        centerY: 0,
        color: "",
        context: "",
        radius: 0,
        element: ""
      }
    };
  },
  methods: {
    press(event) {
      this.insideCanvas.color = event.toElement.parentElement.dataset.color;
      this.insideCanvas.element = event.toElement;
      this.insideCanvas.context = this.insideCanvas.element.getContext("2d");
      this.insideCanvas.radius = 0;
      this.insideCanvas.centerX = event.offsetX;
      this.insideCanvas.centerY = event.offsetY;
      this.insideCanvas.context.clearRect(
        0,
        0,
        this.insideCanvas.element.width,
        this.insideCanvas.element.height
      );
      this.draw();
    },
    draw() {
      this.insideCanvas.context.beginPath();
      this.insideCanvas.context.arc(
        this.insideCanvas.centerX,
        this.insideCanvas.centerY,
        this.insideCanvas.radius,
        0,
        2 * Math.PI,
        false
      );
      this.insideCanvas.context.fillStyle = this.insideCanvas.color;
      this.insideCanvas.context.fill();
      this.insideCanvas.radius += 2;
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
      if (this.insideCanvas.radius < this.insideCanvas.element.width) {
        requestAnimFrame(this.draw);
      }
    }
  },
  mounted() {
    let canvas = {};
    let containers = document.getElementsByClassName("material-design");
    containers = Array.prototype.slice.call(containers);
    for (var i = 0; i < containers.length; i += 1) {
      canvas = document.createElement("canvas");
      canvas.addEventListener("click", this.press, false);
      containers[i].appendChild(canvas);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
  }
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
.btn-round {
  border-radius: 10em;
}
.material-design {
  position: relative;

  canvas {
    opacity: 0.25;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>