---
title: Layout 布局
---

# 布局

用于布局的容器组件，方便快速搭建页面的基本结构

## 简单布局

#### 浏览

#

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 代码

```html
<w-layout style="color: white;">
  <w-header style="height: 50px; background:lightskyblue;">
    header
  </w-header>
  <w-content style="height: 100px; background:deepskyblue;">
    content
  </w-content>
  <w-footer style="height: 50px; background:lightskyblue;">
    footer
  </w-footer>
</w-layout>
```

## 内侧边栏

侧边栏可关闭哦

#### 浏览

#

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 代码

```html
<w-layout style="color: white; overflow:hidden;">
  <w-header style="height: 50px; background:lightskyblue;">
    header
  </w-header>
  <w-layout>
    <w-sider
      style="height: 100px; background: #7cb8ff; width:200px; color: black;"
    >
      sider
    </w-sider>
    <w-content style="height: 100px; background:deepskyblue;">
      content
    </w-content>
  </w-layout>
  <w-footer style="height: 50px; background:lightskyblue;">
    footer
  </w-footer>
</w-layout>
```

## 外侧边栏

#### 浏览

#

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 代码

```html
<w-layout style="color: white; overflow:hidden;">
  <w-sider style=" background: #7cb8ff; width:200px; color: black;">
    sider
  </w-sider>
  <w-layout>
    <w-header style="height: 50px; background:lightskyblue;">
      header
    </w-header>
    <w-content style="height: 100px; background:deepskyblue;">
      content
    </w-content>
    <w-footer style="height: 50px; background:lightskyblue;">
      footer
    </w-footer>
  </w-layout>
</w-layout>
```
