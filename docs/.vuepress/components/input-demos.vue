<template>
    <div>
        <w-input>默认按钮</w-input>
        <w-input icon="settings">默认按钮</w-input>
        <w-input :loading="true">默认按钮</w-input>
        <w-input disabled>默认按钮</w-input>
    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'w-input': Input
        }
    }
</script>

