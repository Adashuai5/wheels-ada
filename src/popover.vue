<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "WheelsPopover",
        data() {
            return {visible: false}
        },
        methods: {
            positionConetent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {top, left, right, bottom} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.popover.contentWrapper(e.target))
                ) {
                    return
                }
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
        transform: translateY(-100%);
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-Shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: #fff;
        margin-top: -10px;
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
            left: 10px;
        }
        &::before { border-top: 10px solid $border-color;
            top: 100%;
        }
        &::after { border-top: 10px solid #fff;
            top: calc(100% - 1px);
        }
    }
</style>