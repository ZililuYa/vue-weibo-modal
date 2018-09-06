<template>
  <div class="weibo-model" :class="classDisplay" v-if="display">
    <div class="weibo-background" @click="back"></div>
    <div class="weibo-main" ref="main">
      <div class="weibo-title" ref="title" v-show="swTitle">
        <template v-if="!$slots.title">{{title}}</template>
        <slot name="title"></slot>
        <a href="javascript:" @click="close" class="weibo-close" v-if="swClose">X</a>
      </div>
      <div class="weibo-content" v-if="!$slots.html" v-html="html" v-show="swHtml">
      </div>
      <div class="weibo-content" v-if="$slots.html" v-show="swHtml">
        <slot name="html"></slot>
      </div>
      <div class="weibo-btn" v-if="swBtn">
        <button class="cancel" @click="cancel" v-if="swCancel">
          <template v-if="!$slots['btn-cancel']">{{textCancel}}</template>
          <slot name="btn-cancel"></slot>
        </button>
        <button class="ok" @click="ok" v-if="swOk">
          <template v-if="!$slots['btn-ok']">{{textOk}}</template>
          <slot name="btn-ok"></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'weibo-model',
    data () {
      return {
        display: false,
        classDisplay: '',
        el: {
          width: 0,
          height: 0
        },
        window: {
          width: 0,
          height: 0
        }
      }
    },
    watch: {
      value (value, old) {
        this.watchValue(value)
      }
    },
    mounted () {
//      this.style()
      this.watchValue(this.value)
    },
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
    },
    methods: {
//      initStyle () {},
      back () {
        if (!this.swTitle) {
          this.watchValue(false)
        }
      },
      setStyle () {
        /**
         * 计算距离
         * 设置样式
         * */
        let ww = window.innerWidth
        let wh = window.innerHeight
        this.window.width = ww
        this.window.height = wh
        let modal = this.$refs.main
        if (!modal) {
          return
        }
        modal.style.width = this.width
        let width = modal.offsetWidth
        let height = modal.offsetHeight
        this.el.width = width
        this.el.height = height
        modal.style.left = ((ww - width) / 2) + 'px'
        modal.style.top = ((wh - height) / 2 - 100) + 'px'
        this.setDrag()
      },
      setDrag () {
        /**
         * 拖动函数
         * */
        let padding = 5
        let title = this.$refs.title
        let main = this.$refs.main
        let width = this.window.width - this.el.width - padding
        let height = this.window.height - this.el.height - padding
        title.onmousedown = function (ev) {
          var oevent = ev || event

          var distanceX = oevent.clientX - main.offsetLeft
          var distanceY = oevent.clientY - main.offsetTop

          document.onmousemove = function (ev) {
            var oevent = ev || event
            let left = oevent.clientX - distanceX
            let top = oevent.clientY - distanceY
            if (left < padding) left = padding
            if (top < padding) top = padding
            if (left > width) left = width
            if (top > height) top = height
            main.style.left = left + 'px'
            main.style.top = top + 'px'
          }
          document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      },
      close () {
        /**
         * 关闭函数
         * */
        this.watchValue(false)
        this.$emit('close')
        this.eventClose(this)
      },
      ok () {
        /**
         * 确认函数
         * */
        this.watchValue(false)
        this.$emit('ok')
        this.eventOk(this)
      },
      cancel () {
        /**
         * 取消函数
         * */
        this.watchValue(false)
        this.$emit('cancel')
        this.eventCancel(this)
      },
      watchValue (value) {
        /**
         * 统一操作显示
         * */
        if (value) {
          this.display = value
//          this.style()
          setTimeout(() => {
            this.setStyle()
            this.classDisplay = 'display'
          }, 10)
        } else {
          this.classDisplay = ''
          setTimeout(() => {
            this.display = value
            this.$emit('input', value)
          }, 300)
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/model.less";
</style>
