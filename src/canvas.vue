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
    },
    globalListen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clickedEvent: "",
      clickedParentElement: "",
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
        context.arc(
          0,
          0,
          this.getTheBevel(
            canvas.parentElement.offsetWidth,
            canvas.parentElement.offsetHeight
          ),
          0,
          2 * Math.PI,
          false
        );
        context.fill();
      }
    });
  },
  destroyed() {
    if (this.$refs.wCanvas && this.globalListen) {
      document.removeEventListener("click", this.onClickDocument);
    }
  },
  methods: {
    getTheBevel(x, y) {
      return Math.sqrt(x * x + y * y);
    },
    onClickDocument(e) {
      if (
        this.$refs.wCanvas &&
        (this.$refs.wCanvas === e.target ||
          this.$refs.wCanvas.contains(e.target))
      ) {
        return;
      }
      this.clearRect();
      document.removeEventListener("click", this.onClickDocument);
    },
    press(event) {
      this.insideRadius = 0;
      this.clickedEvent = event;
      this.clickedParentElement = event.target.parentElement;
      this.draw();
      if (this.globalListen) {
        this.$nextTick(() => {
          document.addEventListener("click", this.onClickDocument);
        });
      }
    },
    clearRect() {
      const canvass = document.getElementsByClassName("w-canvas");
      for (let i = 0; i < canvass.length; i++) {
        const context = canvass[i].getContext("2d");
        if (context.fillStyle !== "#000000") {
          context.fillStyle = "#000000";
          context.clearRect(0, 0, canvass[i].width, canvass[i].height);
        }
      }
    },
    draw() {
      this.clearRect();
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
      context.fillStyle = this.clickedParentElement.dataset.color;
      context.fill();
      this.insideRadius += 5;
      if (
        this.insideRadius <
        this.getTheBevel(
          this.clickedParentElement.offsetWidth,
          this.clickedParentElement.offsetHeight
        )
      ) {
        window.requestAnimationFrame(this.draw);
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