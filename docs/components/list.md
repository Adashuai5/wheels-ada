---
title: List 列表
---

# List

一个高性能的 List 列表组件，支持无限滚动渲染，添加删除和重排动画 hook 等

## 无限滚动

#### 浏览

#

<ClientOnly>
<list-demos />
</ClientOnly>

#### 代码

```js
data() {
  return {
    originalList: []
  }
},
created() {
  for (let i = 0; i < 9999; i++) {
    this.originalList.push({ id: i, value: i });
  }
}
```

```html
<div style="width: 500px; height: 600px;">
  <w-list :originalList="originalList" />
</div>
```
