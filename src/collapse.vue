<template>
    <div class="w-collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "WheelsCollapse",
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:addselected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if(this.single){
                    selectedCopy = [name]
                }else{
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
            this.eventBus.$on('update:removeselected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = this.selected.indexOf(name)
                selectedCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ddd;
    $border-radius: 4px;
    .w-collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>