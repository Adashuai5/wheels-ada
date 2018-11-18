---
title: Button 按钮
---

# 按钮

提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标位置等。。。

## 单个按钮 

#### 浏览
#
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 代码

``` html
<w-button>默认按钮</w-button>
<w-button icon="settings">设置</w-button>
<w-button icon="thumbs-up">点赞</w-button>
<w-button icon="download" icon-position="right">下载</w-button>
<w-button :loading="true">登录中</w-button>
```
## 按钮组合

#### 浏览
#
<ClientOnly>
<buttonGroup-demos></buttonGroup-demos>
</ClientOnly>

#### 代码

``` html
<w-button-group>
    <w-button icon="left" icon-position="left">上一页</w-button>
    <w-button icon="right" icon-position="right">下一页</w-button>
</w-button-group>
```