import modal from './weibo-modal.vue'

const app = {
  install: function (Vue) {
    Vue.component(modal.name, modal)
  }
}

export default app
