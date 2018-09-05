import Modal from './WeiboModal.vue'
import Vue from 'vue'

export default function (_props) {
  if (typeof _props !== 'object') {
    _props = {
      html: _props.toString()
    }
  }
  // console.log(Vue)
  _props.value = true
  console.log(_props)
  const Instance = new Vue({
    render (h) {
      return h(Modal, {
        props: _props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
}
