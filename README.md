# wheels-ada: 用 Vue 写一个 UI 组件库

[![Build Status](https://travis-ci.org/Adashuai5/wheels.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

Wheels-ada UI 是一个好用的 UI 框架，提供了一些常用组件，适合 PC 端和移动端使用。

组件：按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴

## 介绍

Wheels 就是轮子，这是我在学习 Vue 的过程中尝试写的一个 UI 框架（造的轮子），希望对你有用。

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *，*::before,*::after{ box-sizing: border-box }
    ```
    IE 8 及以上浏览器支持此样式。

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --button-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器支持此样式。

2. 安装 wheels

    ```
    npm i --save adashuai5
    ```
3. 引入 wheels
    ```
    import { Button, ButtonGroup, Icon } from 'wheels-ada'
    import 'wheels-ada/dist/index.css'

    export defalut {
        name: 'app',
        component: {
            'w-button': Button,
            'w-icon': Icon
        }
    }

## 文档

[官方文档](https://adashuai5.github.io/wheels/)

## 提问

[Issues](https://github.com/Adashuai5/wheels/issues)

## 联系方式

邮箱：ad873606339@gmail.com

## 贡献代码

[Pull request](https://github.com/Adashuai5/wheels/pulls)



