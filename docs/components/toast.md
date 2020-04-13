---
title: Toast 吐司弹出
---

# Toast

常用于主动操作后的反馈提示，

:::tip
若点击按钮无显示，需要设置
:::

```CSS
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
  <w-button @click="$toast('点击弹出提示')" border>顶部弹出</w-button>
  <w-button @click="$toast('点击弹出提示', {position:'middle'})" border
    >中间弹出</w-button
  >
  <w-button @click="$toast('点击弹出提示', {position:'bottom'})" border
    >底部弹出</w-button
  >
</div>
```

## 自动或手动关闭

#### 浏览

#

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码

```js{4}
methods: {
    onClickButton () {
        this.$toast('我会在 3 秒后自动关闭', {
            autoClose: 3,
        })
    }
}
```

```html
<div>
  <w-button @click="onClickButton" border>顶部弹出</w-button>
</div>
```

:::tip
autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭，默认为 5）
:::

## 设置关闭按钮

#### 浏览

#

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 代码

```js
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
  <w-button @click="onClickButton" border>顶部弹出</w-button>
</div>
```

## 支持 HTML

toast 支持传入 HTML 片段

#### 浏览

#

<ClientOnly>
<toast-demo-4></toast-demo-4>
</ClientOnly>

#### 代码

```js
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
  <w-button @click="onClickButton" border>顶部弹出</w-button>
</div>
```

::: danger
虽然 toast 支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在使用时，请确保 toast 的内容是可信的，永远不要将用户提交的内容赋值给 toast 属性
:::
