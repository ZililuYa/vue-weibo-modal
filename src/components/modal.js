import Modal from './WeiboModal.vue'
import Vue from 'vue'

export default function (pro) {
  if (typeof pro !== 'object') {
    pro = {
      html: pro.toString()
    }
  }
  pro.value = true
  const Instance = new Vue({
    render (h) {
      return h(Modal, {
        props: pro
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  this.info = function () {
    console.log('info')
  }
}
