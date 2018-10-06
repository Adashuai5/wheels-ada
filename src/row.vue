<template :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'WheelsRow',
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>