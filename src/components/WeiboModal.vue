<template>
  <div class="weibo-model" :class="classDisplay" v-if="display">
    <div class="weibo-background"></div>
    <div class="weibo-main" :id="id">
      <div class="weibo-title">
        {{title}}
        <a href="javascript:;" @click="close" class="weibo-close">X</a>
      </div>
      <div class="weibo-content" v-html="html">
      </div>
      <div class="weibo-btn">
        <button @click="ok">{{okText}}</button>
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
        id: 'modal' + parseInt(Math.random() * 999999)
      }
    },
    watch: {
      value (value, old) {
        this.watchValue(value)
      }
    },
    mounted () {
      this.watchValue(this.value)
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '标题'
      },
      html: {
        type: String,
        default: '内容'
      },
      okText: {
        type: String,
        default: '确认'
      }
    },
    methods: {
      close () {
        /**
         * 关闭函数
         * */
        this.watchValue(false)
        this.$emit('close')
      },
      ok () {
        /**
         * 关闭函数
         * */
        this.watchValue(false)
        this.$emit('ok')
      },
      watchValue (value) {
        if (value) {
          this.display = value
          setTimeout(() => {
            this.classDisplay = 'open'
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
