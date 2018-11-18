---
title: Toast
---
# Toast
:::tip
若点击按钮无显示，需要设置
:::
``` CSS
.w-toast {
    z-index: 30;
}
```
## 设置弹出位置

#### 浏览
#
<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 代码

```html
<div>
    <w-button @click="$toast('点击弹出提示')">顶部弹出</w-button>
    <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
    <w-button @click="$toast('点击弹出提示', {position:'bottom'})">底部弹出</w-button>
</div>
```
## 自动或手动关闭

#### 浏览
#
<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码

``` js{4}
methods: {
    onClickButton () {
        this.$toast('我不会自动关闭', {
            autoClose: false
        })
    }
}
```
```html
<div>
    <w-button @click="onClickButton">顶部弹出</w-button>
</div>
```
:::tip
autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭，默认为5）
:::
## 设置关闭按钮

#### 浏览
#
<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 代码

``` js
methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
```
```html
<div>
    <w-button @click="onClickButton">顶部弹出</w-button>
</div>
```
## 支持 HTML

#### 浏览
#
<ClientOnly>
<toast-demo-4></toast-demo-4>
</ClientOnly>

#### 代码

``` js
methods: {
    onClickButton() {
        this.$toast('<span style="color:red">我会是红色的</span>', {
            enableHTML: true
        })
    }
}
```
```html
<div>
    <w-button @click="onClickButton">顶部弹出</w-button>
</div>
```