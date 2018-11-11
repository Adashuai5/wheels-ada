<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
        <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        name: 'WheelsButton',
        // props: [ 'icon', 'iconPosition' ]
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }

    .w-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
        border-radius: var(--button-radius);border: 1px solid var(--border-color);background: var(--button-bg);
        display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        .content {line-height: 1em;}
        > .content {order: 2;}
        > .icon {order: 1;margin-right: .3em;}
        &.icon-right {
            > .icon {order: 2;margin-right: 0;margin-left: .3em;}
            > .content {order: 1;}
        }
        .loading {animation: spin 1.5s infinite linear;}
    }
</style>