<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="">
      <button @click="modal=!modal">default</button>
      <button @click="open">$Modal</button>
      <button @click="openOpt">$Modal opt</button>
    </div>
    <weibo-model v-model="modal"></weibo-model>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        modal: false
      }
    },
    mounted () {
    },
    methods: {
      open () {
        this.$Modal('直接输入传参字符串的话就会直接显示')
      },
      openOpt () {
        this.$Modal({
          title: '自定义标题',
          okText: '自定义确认按钮',
          html: '<hr>自定义内容 <p style="color: red">ppppppppppppp</p><hr>'
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
