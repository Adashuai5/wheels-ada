<template>
    <div>
        <w-button>默认按钮</w-button>
        <w-button icon="settings">默认按钮</w-button>
        <w-button :loading="true">默认按钮</w-button>
        <w-button disabled>默认按钮</w-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'w-button': Button
        }
    }
</script>
