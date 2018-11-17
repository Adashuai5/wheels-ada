<template>
    <div class="w-button-group">
        <slot></slot>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'WheelsButtonGroup',
        components:{
            'w-icon':Icon
        },
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase();
                if (name !== 'button') {
                    console.warn(`w-button-group 的子元素应该均为 w-button ，而你的有 ${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $button-radius: 4px;
    .w-button-group {display: inline-flex;vertical-align: middle;
        > .w-button { border-radius: 0;
            &:not(:first-child) {margin-left: -1px;}
            &:hover {position: relative;z-index: 1;}
            &:first-child {border-top-left-radius: $button-radius;border-bottom-left-radius: $button-radius;}
            &:last-child {border-top-right-radius: $button-radius;border-bottom-right-radius: $button-radius;}
        }
    }
</style>