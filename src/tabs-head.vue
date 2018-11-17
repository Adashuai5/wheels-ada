<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "WheelsTabsHead",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                this.updateLinePosition(vm)
            })
        },
        methods: {
            updateLinePosition (selectedVm) {
                let {width, left} = selectedVm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            }
        }
    }
</script>
<style scoped lang="scss">
    $tabs-height: 40px;
    $color: #4A90E2;
    $border-color: #ddd;
    * {margin: 0;padding: 0;box-sizing: border-box}
    .tabs-head {
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid $color;
            transition: all 300ms;
        }
        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }
</style>