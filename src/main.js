import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入mint ui 组件 js文件

import './plugins/mintui.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
