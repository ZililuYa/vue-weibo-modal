<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="">
      <button @click="modal=!modal">open webbo modal</button>
      <hr>
      {{modal}}
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
    components: {}
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
