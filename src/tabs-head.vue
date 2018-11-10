<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "WheelsTabsHead",
        inject: ['eventBus'],
        created() {
        }
    }
</script>
<style scoped lang="scss">
    $tabs-height: 40px;
    .tabs-head {
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid red;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>