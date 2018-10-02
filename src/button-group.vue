<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted(){
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase();
                if( name !== 'button'){
                    console.warn(`g-button-group 的子元素应该均为 g-button ，而你的有 ${name}`)
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            &:not(:first-child){
                margin-left: -1px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
            border-radius: 0;
            &:first-child {
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }
            &:last-child {
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }
        }
    }
</style>