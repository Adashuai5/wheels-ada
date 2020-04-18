---
title: Button 按钮
---

# 按钮

- 点击按钮出现涟漪效果
- 提供多种按钮状态
- 提供多种按钮形态
- 可使用单个按钮和组合形式的按钮
- 按钮可以添加图标，设置图标位置

## 单个按钮

#### 浏览

#

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 代码

```html
<div>
  <w-button>默认按钮</w-button>
  <w-button type="success">成功按钮</w-button>
  <w-button type="info">信息按钮</w-button>
  <w-button type="warning">警告按钮</w-button>
  <w-button type="danger">危险按钮</w-button>
</div>
<div>
  <w-button border>默认按钮</w-button>
  <w-button type="success" border>成功按钮</w-button>
  <w-button type="info" border>信息按钮</w-button>
  <w-button type="warning" border>警告按钮</w-button>
  <w-button type="danger" border>危险按钮</w-button>
</div>
<div>
  <w-button round>默认按钮</w-button>
  <w-button type="success" round>成功按钮</w-button>
  <w-button type="info" round>信息按钮</w-button>
  <w-button type="warning" round>警告按钮</w-button>
  <w-button type="danger" round>危险按钮</w-button>
</div>
<div>
  <w-button round border>默认按钮</w-button>
  <w-button type="success" round border>成功按钮</w-button>
  <w-button type="info" round border>信息按钮</w-button>
  <w-button type="warning" round border>警告按钮</w-button>
  <w-button type="danger" round border>危险按钮</w-button>
</div>
```

## 禁用状态

#### 浏览

#

<ClientOnly>
  <button-disabled></button-disabled>
</ClientOnly>

#### 代码

```html
<div>
  <div class="demoRow">
    <w-button disabled>默认按钮</w-button>
    <w-button type="success" disabled>成功按钮</w-button>
    <w-button type="info" disabled>信息按钮</w-button>
    <w-button type="warning" disabled>警告按钮</w-button>
    <w-button type="danger" disabled>危险按钮</w-button>
  </div>
  <div class="demoRow">
    <w-button border disabled>默认按钮</w-button>
    <w-button type="success" border disabled>成功按钮</w-button>
    <w-button type="info" border disabled>信息按钮</w-button>
    <w-button type="warning" border disabled>警告按钮</w-button>
    <w-button type="danger" border disabled>危险按钮</w-button>
  </div>
</div>
```

## 添加图标

#### 浏览

#

<ClientOnly>
  <button-icon></button-icon>
</ClientOnly>

#### 代码

```html
<div>
  <w-button icon="settings">设置</w-button>
  <w-button icon="thumbs-up">点赞</w-button>
  <w-button icon="download" icon-position="right">下载</w-button
  ><w-button :loading="true">登录中</w-button>
</div>
<div class="demoRow">
  <w-button icon="settings" border>设置</w-button>
  <w-button icon="thumbs-up" border>点赞</w-button>
  <w-button icon="download" icon-position="right" border>下载</w-button>
  <w-button :loading="true" border>登录中</w-button>
</div>
```

## 按钮组合

#### 浏览

#

<ClientOnly>
  <buttonGroup-demos></buttonGroup-demos>
</ClientOnly>

#### 代码

```html
<w-button-group>
  <w-button icon="left" icon-position="left" border>上一页</w-button>
  <w-button icon="right" icon-position="right" border>下一页</w-button>
</w-button-group>
```
