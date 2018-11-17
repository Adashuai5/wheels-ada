<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
        <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
        <div class="w-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'WheelsButton',
        components: {
          'w-icon':Icon
        },
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
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $button-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }

    .w-button {font-size: $font-size;height: $button-height;padding: 0 1em;
        border-radius: $button-radius;border: 1px solid $border-color;background: $button-bg;
        display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;
        &:hover {border-color: $border-color-hover;}
        &:active {background-color: $button-active-bg;}
        &:focus {outline: none;}
        .w-button-content {line-height: 1em;}
        > .w-button-content {order: 2;}
        > .icon {order: 1;margin-right: .3em;}
        &.icon-right {
            > .w-button-content {order: 1;}
            > .icon {order: 2;margin-right: 0;margin-left: .3em;}
        }
        .loading {animation: spin 1.5s infinite linear;}
    }
</style>