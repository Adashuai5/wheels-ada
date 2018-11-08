<template>
    <div class="toast" ref="toast" :class="toastClasses">
        <div class="wrapper">
            <slot v-if="!enableHTML"></slot>
            <div v-if="enableHTML" v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name: "WheelsToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHTML: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log() {
                console.log('测试')
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === "function")
                    this.closeButton.callback(this)
            }
        }
    };
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $toast-min-height: 40px;
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8rem;
        background: $toast-bg;
        color: #fff;
        position: fixed;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        left: 50%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        .wrapper {
            margin: 6px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        .line {
            border-left: 1px solid #d4d4d4;
            height: 100%;
            margin-left: 16px;
        }
        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%);
        }
    }
</style>