<p align="center">
  <a href="https://adashuai5.github.io/wheels-ada/">
    <img width="200" src="https://adashuai5.github.io/wheels-ada/ada.png">
  </a>
</p>

<h1 align="center">
  <a href="https://adashuai5.github.io/wheels-ada/" target="_blank">Wheels-ada</a>
</h1>

<div align="center">

An easy UI components based on Vue.

[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)
[![npm package](https://img.shields.io/npm/v/wheels-ada.svg?style=flat-square)](https://www.npmjs.com/package/wheels-ada)
![](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
    
</div>

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

2. 安装 wheels-ada

    ```
    npm install wheels-ada
    ```
    或者
    ```
    yarn add wheels-ada
    ```
3. 引入 wheels-ada
    ```
    import { Button } from 'wheels-ada'
    import 'wheels-ada/dist/index.css'

    export default {
        name: 'app',
        components: {
            'w-button': Button
        }
    }

## 文档

[官方文档](https://adashuai5.github.io/wheels-ada/)

## 提问

[Issues](https://github.com/Adashuai5/wheels-ada/issues)

## 联系方式

邮箱：ad873606339@gmail.com

## 贡献代码

[Pull request](https://github.com/Adashuai5/wheels-ada/pulls)



