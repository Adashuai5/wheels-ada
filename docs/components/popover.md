---
title: Popover 弹出层
---
# 弹出层
:::tip
popover 弹出层内容支持 html
:::
## 点击

#### 浏览
#
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码

```html
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
```
## hover

#### 浏览
#
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码

```html
<w-popover trigger="hover">
    <w-button>上方弹出</w-button>
    <template slot="content"> 弹出内容</template>
</w-popover>
<w-popover position="bottom" trigger="hover">
    <w-button>下方弹出</w-button>
    <template slot="content"> 弹出内容</template>
</w-popover>
<w-popover position="left" trigger="hover">
    <w-button>左边弹出</w-button>
    <template slot="content"> 弹出内容</template>
</w-popover>
<w-popover position="right" trigger="hover">
    <w-button>右边弹出</w-button>
    <template slot="content"> 弹出内容</template>
</w-popover>
```
### 内部关闭

#### 浏览
#
<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

#### 代码

```html
<w-popover>
    <template slot="content" slot-scope="{close}"> 弹出内容
        <w-button @click="close">关闭</w-button>
    </template>
    <w-button>内部关闭</w-button>
</w-popover>
```