---
title: 快速上手
---

# 快速上手

## 安装

参考 [安装](/install/) 章节

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```CSS
*，*::before,*::after{ box-sizing: border-box }
```

IE 8 及以上浏览器支持此样式。

## 引入 wheels-ada

```js
import { Button } from "wheels-ada";
import "wheels-ada/dist/index.css";

export default {
  name: "app",
  components: {
    "w-button": Button
  }
};
```
