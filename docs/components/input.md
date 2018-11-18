---
title: Input 输入框
---
# 输入框

## 常用例子

#### 浏览
#
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

#### 代码

``` html
<w-input value="中文"></w-input>
<w-input value="中文" readonly></w-input>
<w-input value="中文" disabled></w-input>
<w-input value="中文" error="错误"></w-input>
```
## 支持双向绑定

#### 浏览
#
<ClientOnly>
<input-model-demos></input-model-demos>
</ClientOnly>

#### 代码
```
data:{
    value: '1'
}
```
``` html
<w-input v-model="value"></w-input>
<div>
    value: {{value}}
</div>
```