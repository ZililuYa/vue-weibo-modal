import weiboModal from './modal.js'

const components = [
  weiboModal
]

const app = {
  install: function (Vue) {
    components.map(component => {
      Vue.use(component)
    })
  }
}

export default app
