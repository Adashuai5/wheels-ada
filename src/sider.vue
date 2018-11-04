<template>
    <transition name="side">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">close</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'WheelsSider',
        data() {
            return {
                visible: true
            }
        }
    }
</script>
<style scoped lang="scss">
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .side-enter-active, .side-leave-active {
        transition: all .5s;
    }

    .side-enter, .side-leave-to {
        margin-left: -200px;
    }
</style>