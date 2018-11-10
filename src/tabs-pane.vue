<template>
    <div class="tabs-item" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "WheelsTabsPane",
        inject: ['eventBus'],
        props:{
            name: {
                type: String | Number,
                required: true
            }
        },
        data(){
            return{
                active: true
            }
        },
        computed:{
            classes(){
                return {
                    active: this.active
                }
            }
        },
        created(){
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        }
    }
</script>
<style scoped lang="scss">
    $color: #4A90E2;
    .tabs-item {
        &.active{
            background: $color;
        }
    }
</style>