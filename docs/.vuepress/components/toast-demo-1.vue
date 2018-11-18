<template>
    <div>
        <w-button @click="$toast('点击弹出提示')">顶部弹出</w-button>
        <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
        <w-button @click="$toast('点击弹出提示', {position:'bottom'})">底部弹出</w-button>
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
        }
    }
</script>

