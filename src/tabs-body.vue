<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "WheelsTabsBody",
        inject: ['eventBus'],
        created(){
        }
    }
</script>
<style scoped>
    .tabs-body {}
</style>