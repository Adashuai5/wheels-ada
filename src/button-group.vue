<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>

</script>
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            margin-left: -1px;
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