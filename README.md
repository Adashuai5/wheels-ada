# wheels: 用 Vue 写一个 UI 组件

[![Build Status](https://travis-ci.org/Adashuai5/wheels.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

## 介绍

这是我在学习 Vue 的过程中尝试写的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *，*::before,*::after{box-sizing:border-box}
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
    import {Button, ButtonGroup, Icon} from 'adashuai5'
    import 'adashuai5/dist/index.css'

    export defalut {
        name: 'app',
        component: {
            'g-button': Button,
            'g-icon': Icon
        }
    }

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码




