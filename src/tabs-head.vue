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
        created() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                console.log(item);
                // console.log(vm.getBoundingClientRect());
            })
        }
    }
</script>
<style scoped lang="scss">
    $tabs-height: 40px;
    $color:#4A90E2;
    .tabs-head {
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        border-bottom: 1px solid red;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            width: 50px;
            border-bottom: 2px solid $color;
        }
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>