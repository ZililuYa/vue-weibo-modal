<p align="center">
<img src="https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67" alt="" width="100">
</p>
<h1 align="center">vue-weibo-modal</h1>

[![npm](https://img.shields.io/badge/npm-1.0.1-brightgreen.svg)](https://www.npmjs.com/package/forver)
[![version](https://img.shields.io/badge/IE-9+-green.svg)](https://www.npmjs.com/package/forver)

## 介绍

vue-weibo-modal是基于Vue2开发的对话框模块

## 安装
``` bash
npm install vue-weibo-modal --save
```

## 开始
``` js
import modal from 'vue-weibo-modal'
Vue.use(modal)
```

## 演示
<p align="center">
<img src="https://s1.ax1x.com/2018/09/06/i9z0Df.gif" alt="">
</p>

## 使用 1
``` js
this.$Modal('vue-weibo-modal')
```


## 使用 2
``` html
// modal = true
<weibo-model v-model="modal"></weibo-model>
```

## props
``` js
props: {
      swTitle: {
        /** 显示标题区域 */
        type: Boolean,
        default: true
      },
      swHtml: {
        /** 显示文本区域 */
        type: Boolean,
        default: true
      },
      swBtn: {
        /** 显示按钮区域 */
        type: Boolean,
        default: true
      },
      width: {
        type: String,
        default: '400px'
      },
      value: {
        /** 显示 所指  v-model */
        type: Boolean,
        default: false
      },
      title: {
        /** 标题 */
        type: String,
        default: '系统提示'
      },
      html: {
        /** 内容 */
        type: String,
        default: 'BUG反馈QQ：1029131145'
      },
      textOk: {
        /** 确认文本 */
        type: String,
        default: '确认'
      },
      textCancel: {
        /** 取消文本 */
        type: String,
        default: '取消'
      },
      eventClose: {
        /** 右上角关闭函数回调 */
        type: Function,
        default: () => {
        }
      },
      eventOk: {
        /** 确认函数回调 */
        type: Function,
        default: () => {
        }
      },
      eventCancel: {
        /** 取消函数回调 */
        type: Function,
        default: () => {
        }
      },
      swClose: {
        /** 右上角显示 */
        type: Boolean,
        default: true
      },
      swOk: {
        /** 确认显示 */
        type: Boolean,
        default: true
      },
      swCancel: {
        /** 取消显示 */
        type: Boolean,
        default: true
      }
```
