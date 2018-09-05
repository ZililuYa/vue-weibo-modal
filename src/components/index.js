import Modal from './WeiboModal.vue'
import $Modal from './Modal.js'

const app = {
  install: function (Vue, opts = {}) {
    Vue.prototype.$Modal = $Modal
    Vue.component(Modal.name, Modal)
  }
}

export default app
