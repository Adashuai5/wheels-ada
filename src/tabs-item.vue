<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "WheelsTabsItem",
        inject: ['eventBus'],
        data() {
            return {
                active: true
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            onClick() {
                if(this.disabled){ return }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>
<style scoped lang="scss">
    $active-color: #4A90E2;
    $font-family: PingFangSC-Regular;
    $disabled-text-color: gray;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        font-family: $font-family;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.active {
            color: $active-color;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: default;
        }
    }
</style>