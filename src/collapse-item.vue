<template>
    <div class="w-collapse-item">
        <div class="w-title" @click="toggle">
            {{title}}
        </div>
        <div class="w-content" v-if="open">
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
            },
            name: {
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
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeselected', this.name)
                } else {
                    this.eventBus && this.eventBus.$emit('update:addselected', this.name)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ddd;
    $border-radius: 4px;
    .w-collapse-item {
        > .w-title {
            background: lightskyblue;
            border: 1px solid $border-color;
            margin: -1px;
            line-height: 32px;
            padding: 0 8px;
            display: flex;
            align-items: center;
        }
        &:first-child {
            .w-title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .w-title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .w-content {
            padding: 8px;
        }
    }
</style>