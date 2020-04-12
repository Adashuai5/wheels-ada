<template>
  <canvas ref="wCanvas" @click="press" class="w-canvas"></canvas>
</template>
<script>
export default {
  name: "WheelsCanvas",
  props: {
    drawed: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    drawed: {
      handler(val) {
        if (val) {
          const canvas = this.$refs.wCanvas;
          if (canvas && canvas.getContext("2d")) {
            const context = canvas.getContext("2d");
            context.fillStyle = canvas.parentElement.dataset.color;
            context.beginPath();
            context.arc(0, 0, 300, 0, 2 * Math.PI, false);
            context.fill();
          }
        }
      },
      immediate: true
    }
  },
  data() {
    return {
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
      const canvass = document.getElementsByClassName("w-canvas");
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
  }
};
</script>
<style lang="scss" scoped>
.w-canvas {
  cursor: pointer;
  opacity: 0.25;
  position: absolute;
  top: 0;
  left: 0;
}
</style>