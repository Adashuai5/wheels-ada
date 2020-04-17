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
  data() {
    return {
      clickedEvent: "",
      insideRadius: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.drawed && this.$refs.wCanvas) {
        const canvas = this.$refs.wCanvas;
        const context = canvas.getContext("2d");
        context.fillStyle = canvas.parentElement.dataset.color;
        context.beginPath();
        context.arc(0, 0, 300, 0, 2 * Math.PI, false);
        context.fill();
      }
    });
  },
  methods: {
    press(event) {
      this.clickedEvent = event;
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
            this.$refs.wCanvas.width,
            this.$refs.wCanvas.height
          );
          context.fillStyle = "#000000";
        }
      }
    },
    draw() {
      if (this.insideRadius === 0) {
        this.clearRect();
      }
      const context = this.clickedEvent.target.getContext("2d");
      context.beginPath();
      context.arc(
        this.clickedEvent.layerX || this.clickedEvent.offsetX,
        this.clickedEvent.layerY || this.clickedEvent.offsetY,
        this.insideRadius,
        0,
        2 * Math.PI,
        false
      );
      context.fillStyle = this.clickedEvent.target.parentElement.dataset.color;
      context.fill();
      this.insideRadius += 4;
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
      if (
        this.insideRadius <
        this.clickedEvent.target.parentElement.offsetWidth +
          this.clickedEvent.target.parentElement.offsetHeight
      ) {
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