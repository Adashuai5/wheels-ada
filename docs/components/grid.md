---
title: Grid 栅栏
---

# 栅栏

Grid - 栅栏，最多可分为 24 小格，可设置 gutter 和空白，默认支持响应式布局
:::tip
使用该组件推荐设置，示例已设置
:::

```CSS
* { box-sizing: border-box; }
```

## 基础方法

使用单一分栏创建基础的栅格布局

#### 浏览

#

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 代码

```html
<div style="color: #fff;">
  <w-row class="demoRow">
    <w-col span="8"><div class="demoCol">8</div></w-col>
    <w-col span="8"><div class="demoCol">8</div></w-col>
    <w-col span="8"><div class="demoCol">8</div></w-col>
  </w-row>
  <w-row class="demoRow">
    <w-col span="6"><div class="demoCol">6</div></w-col>
    <w-col span="6"><div class="demoCol">6</div></w-col>
    <w-col span="6"><div class="demoCol">6</div></w-col>
    <w-col span="6"><div class="demoCol">6</div></w-col>
  </w-row>
  <w-row class="demoRow">
    <w-col span="4"><div class="demoCol">4</div></w-col>
    <w-col span="4"><div class="demoCol">4</div></w-col>
    <w-col span="4"><div class="demoCol">4</div></w-col>
    <w-col span="4"><div class="demoCol">4</div></w-col>
    <w-col span="4"><div class="demoCol">4</div></w-col>
    <w-col span="4"><div class="demoCol">4</div></w-col>
  </w-row>
  <w-row class="demoRow">
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
    <w-col span="2"><div class="demoCol">2</div></w-col>
  </w-row>
</div>
```

## 分栏间隔

分栏之间存在固定间隔

#### 浏览

#

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 代码

```html
<div style="color: #fff;">
  <w-row class="demoRow" gutter="10">
    <w-col span="8">
      <div class="demoCol">8</div>
    </w-col>
    <w-col span="8">
      <div class="demoCol">8</div>
    </w-col>
    <w-col span="8">
      <div class="demoCol">8</div>
    </w-col>
  </w-row>
  <w-row class="demoRow" gutter="10">
    <w-col span="6">
      <div class="demoCol">6</div>
    </w-col>
    <w-col span="6">
      <div class="demoCol">6</div>
    </w-col>
    <w-col span="6">
      <div class="demoCol">6</div>
    </w-col>
    <w-col span="6">
      <div class="demoCol">6</div>
    </w-col>
  </w-row>
</div>
```

## 分栏偏移

支持偏移指定的栏数

#### 浏览

#

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 代码

```html
<div style="color: #fff;">
  <w-row class="demoRow" gutter="10">
    <w-col span="8">
      <div class="demoCol">8</div>
    </w-col>
    <w-col span="8" offset="8">
      <div class="demoCol">8</div>
    </w-col>
  </w-row>
  <w-row class="demoRow" gutter="10">
    <w-col span="6" offset="6">
      <div class="demoCol">6</div>
    </w-col>
    <w-col span="6" offset="6">
      <div class="demoCol">6</div>
    </w-col>
  </w-row>
  <w-row class="demoRow" gutter="10">
    <w-col span="4">
      <div class="demoCol">4</div>
    </w-col>
    <w-col span="4" offset="4">
      <div class="demoCol">4</div>
    </w-col>
    <w-col span="4" offset="8">
      <div class="demoCol">4</div>
    </w-col>
  </w-row>
  <w-row class="demoRow" gutter="10">
    <w-col span="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2" offset="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2" offset="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2" offset="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2">
      <div class="demoCol">2</div>
    </w-col>
    <w-col span="2" offset="2">
      <div class="demoCol">2</div>
    </w-col>
  </w-row>
</div>
```
