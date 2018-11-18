<template>
    <div>
        <w-popover>
            <w-button>上方弹出</w-button>
            <template slot="content"> 弹出内容</template>
        </w-popover>
        <w-popover position="bottom">
            <w-button>下方弹出</w-button>
            <template slot="content"> 弹出内容</template>
        </w-popover>
        <w-popover position="left">
            <w-button>左边弹出</w-button>
            <template slot="content"> 弹出内容</template>
        </w-popover>
        <w-popover position="right">
            <w-button>右边弹出</w-button>
            <template slot="content"> 弹出内容</template>
        </w-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'

    export default {
        components: {
            'w-popover': Popover,
            'w-button': Button
        }
    }
</script>