---
title: Tabs 标签页
---

# 标签页

分隔内容上有关联但属于不同类别的数据集合，同样支持了涟漪效果

## 使用方法

#### 浏览

#

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 代码

```js
data: {
  selected: "1";
}
```

```html
<w-tabs :selected="selected">
  <w-tabs-head>
    <w-tabs-item name="1">item-1</w-tabs-item>
    <w-tabs-item name="2">item-2</w-tabs-item>
    <w-tabs-item name="3">item-3</w-tabs-item>
    <w-tabs-item name="4">item-4</w-tabs-item>
    <w-tabs-item name="5" disabled>item-disabled</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="1">content-1</w-tabs-pane>
    <w-tabs-pane name="2">content-2</w-tabs-pane>
    <w-tabs-pane name="3">content-3</w-tabs-pane>
    <w-tabs-pane name="4">content-4</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

::: tip
w-tabs-item 与 w-tabs-pane 的 name 需对应；在 w-tabs-item 设置 disabled 可以让其为不可用状态。
:::
