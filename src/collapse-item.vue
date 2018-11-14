<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelsCollapseItem",
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (vm) => {
                if (vm !== this) {
                    this.open = false
                }
            })
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.open = false
                } else {
                    this.open = true
                    this.eventBus && this.eventBus.$emit('update:selected', this)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ddd;
    $border-radius: 4px;
    .collapse-item {
        > .title {
            border: 1px solid $border-color;
            margin: -1px;
            line-height: 32px;
            padding: 0 8px;
            display: flex;
            align-items: center;
        }
        &:first-child {
            .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content {
            padding: 8px;
        }
    }
</style>