<template>
  <div class="weibo-model" :class="classDisplay" v-if="display">
    <div class="weibo-background" @click="background"></div>
    <div class="weibo-main" :id="id">
      <div class="weibo-title">
        asdasd
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
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      background () {
        if (!this.classDisplay) return false
        // this.watchValue(false)
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
  @base: #fa7f40;
  @background: rgba(0, 0, 0, 0.3);
  .weibo-model {
    .weibo-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20180904;
      background-color: @background;
      transition: all 0.3s;
      opacity: 0;
    }
    .weibo-main {
      background-color: #fff;
      width: 510px;
      min-height: 200px;
      border-radius: 3px;
      border-top: 2px solid @base;
      left: 50%;
      top: 25%;
      margin-left: -255px;
      position: fixed;
      z-index: 20180905;
      transition: all 0.1s;
      transform: scale(0.1, 0.1);
      .weibo-title {
        width: 100%;
        
      }
    }
    &.open {
      .weibo-background {
        opacity: 1;
      }
      .weibo-main {
        transform: scale(1, 1)
      }
    }
  }
</style>
