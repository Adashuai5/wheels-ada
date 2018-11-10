<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>
<script>
    export default {
        name: "WheelsTabsHead",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                    let {width, height, left, top} = vm.$el.getBoundingClientRect()
                    this.$refs.line.style.width = `${width}px`
                    this.$refs.line.style.left = `${left}px`
                }
            )
        }
    }
</script>
<style scoped lang="scss">
    $tabs-height: 40px;
    $color: #4A90E2;
    $border-color: #ddd;
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