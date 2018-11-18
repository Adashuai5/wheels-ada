---
title: Tabs 标签页
---
# 标签页

## 使用方法

#### 浏览
#
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 代码

``` js
data:{
  selected: '1'
}
```

``` html
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
```
