<template>
    <div>
        <w-button @click="onClickButton">顶部弹出</w-button>
    </div>
</template>
<style>
    .w-toast {
        z-index: 30 !important;
    }
</style>
<script>
    import Vue from 'vue'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'

    Vue.use(plugin)

    export default {
        components: {
            'w-toast': Toast,
            'w-button': Button
        },
        methods: {
            onClickButton() {
                this.$toast('我不会自动关闭', {
                    autoClose: false
                })
            }
        }
    }
</script>

