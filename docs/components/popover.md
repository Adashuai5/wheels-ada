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
  <w-button border>上方弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
<w-popover position="bottom">
  <w-button border>下方弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
<w-popover position="left">
  <w-button border>左边弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
<w-popover position="right">
  <w-button border>右边弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
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
  <w-button border>上方弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
<w-popover position="bottom" trigger="hover">
  <w-button border>下方弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
<w-popover position="left" trigger="hover">
  <w-button border>左边弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
<w-popover position="right" trigger="hover">
  <w-button border>右边弹出</w-button>
  <template slot="content">
    弹出内容</template
  >
</w-popover>
```

### 嵌套操作

你可以嵌套操作，在弹出层作进一步交互

#### 浏览

#

<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

#### 代码

```html
<w-popover>
  <template slot="content" slot-scope="{close}">
    弹出内容 
    <w-button @click="close" round>关闭</w-button>
  </template>
  <w-button border>内部关闭</w-button>
</w-popover>
```
