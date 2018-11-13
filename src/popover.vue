<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "WheelsPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {visible: false}
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        methods: {
            positionConetent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                const {top, left, width, height} = triggerWrapper.getBoundingClientRect()
                const {height: height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {top: top + window.scrollY, left: left + window.scrollX},
                    bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
                    left: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX},
                    right: {top: top + window.scrollY + (height - height2) / 2, left: left + width + window.scrollX}
                }
                contentWrapper.style.top = positions[this.position].top + 'px'
                contentWrapper.style.left = positions[this.position].left + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) {return}
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) {return}
                this.close()
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionConetent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        position: relative;
        vertical-align: top;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-Shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: #fff;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            border: 10px solid transparent;
            width: 0;
            height: 0;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after {
                left: 10px;
                border-bottom: none;
            }
            &::before { border-top: 10px solid $border-color;
                top: 100%;
            }
            &::after { border-top: 10px solid #fff;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
                border-top: none;
            }
            &::before { border-bottom: 10px solid $border-color;
                bottom: 100%;
            }
            &::after { border-bottom: 10px solid #fff;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
            }
            &::before { border-left: 10px solid $border-color;
                left: 100%;
            }
            &::after { border-left: 10px solid #fff;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
            }
            &::before { border-right: 10px solid $border-color;
                right: 100%;
            }
            &::after { border-right: 10px solid #fff;
                right: calc(100% - 1px);
            }
        }
    }
</style>