<template>
    <div class="toast"></div>
</template>
<script>
    import Vue from 'vue'
    Vue.prototype.$toast = function () {
        console.log('toast')
    }
    export default {
        name: 'WheelsToast'
    }
</script>
<style scoped lang="scss">
    .toast {}
</style>