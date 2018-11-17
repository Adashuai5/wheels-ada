<template>
    <div class="message" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readOnly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'

    export default {
        components: {Icon},
        name: 'WheelsInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readOnly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $input-height: 32px;
    $font-size: 14px;
    $border-color: #999;
    $border-color-hover: #666;
    $input-radius: 4px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .message {font-size: $font-size;display: inline-flex;align-items: center;
        > :not(:last-child) {margin-right: .5em;}
        > input {padding: 0 8px;height: $input-height;border: 1px solid $border-color;
            font-size: inherit;border-radius: $input-radius;
            &:hover {border-color: $border-color-hover;}
            &:focus {outline: none;box-shadow: inset 0 1px 3px $box-shadow-color;}
            &[disabled], &[readOnly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
            &[disabled]{background-color: #EBEBE4;}
        }
        &.error {
            > input {
                border: 1px solid $red;
                color: $red;
                &:focus {outline: none;box-shadow: inset 0 1px 3px $red;}
            }
        }
        .icon-error {
            fill: $red;
        }
        .error-message {
            color: $red;
            line-height: 1em;
        }
    }
</style>