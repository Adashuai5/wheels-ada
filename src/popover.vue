<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
            xxx() {
                this.visible = !this.visible
                if (this.visible === true) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {top, left, right, bottom} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                        let x = () => {
                            this.visible = false
                            console.log('document 隐藏 popover');
                            document.removeEventListener('click', x)
                        }
                        document.addEventListener('click', x)
                    })
                } else {
                    console.log('vm 隐藏 popover');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        position: relative;
        vertical-align: top;
    }

    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid #ddd;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
    }
</style>