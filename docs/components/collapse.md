---
title: Collapse 折叠面板
---

# 折叠面板

通过折叠面板收纳内容区域

## 设置默认开启

可同时展开多个面板，面板之间不影响

#### 浏览

#

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

#

#### 代码

```js
data() {
    return {
        selectedTab: ['1', '2', '3']
    }
}
```

```html
<w-collapse :selected.sync="selectedTab">
  <w-collapse-item title="item-1" name="1">content-1</w-collapse-item>
  <w-collapse-item title="item-2" name="2">content-2</w-collapse-item>
  <w-collapse-item title="item-3" name="3">content-3</w-collapse-item>
</w-collapse>
```

## 手风琴效果

每次只能展开一个面板，就像手风琴一样

#### 浏览

#

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

#### 代码

```js
data() {
    return {
        selectedTab: ['1']
    }
}
```

```html
<w-collapse :selected.sync="selectedTab" single>
  <w-collapse-item title="item-1" name="1">content-1</w-collapse-item>
  <w-collapse-item title="item-2" name="2">content-2</w-collapse-item>
  <w-collapse-item title="item-3" name="3">content-3</w-collapse-item>
</w-collapse>
```

::: tip
设定 single 同时建议 selectedTab 也为单个
:::
