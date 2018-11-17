<template>
    <div>
        <w-tabs :selected="selected">
            <w-tabs-head>
                <w-tabs-item name="1">1</w-tabs-item>
                <w-tabs-item name="2">2</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-pane name="1">content 1</w-tabs-pane>
                <w-tabs-pane name="2">content 2</w-tabs-pane>
            </w-tabs-body>
        </w-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsHead from '../../../src/tabs-head'
    import TabsBody from '../../../src/tabs-body'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'

    export default {
        components: {
            'w-tabs': Tabs,
            'w-tabs-head': TabsHead,
            'w-tabs-body': TabsBody,
            'w-tabs-item': TabsItem,
            'w-tabs-pane': TabsPane
        },
        data() {
            return {
                selected: '1'
            }
        }
    }
</script>