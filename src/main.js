import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'; // 导入mint ui 组件 js文件
import moment from 'moment' // 导入时间格式化插件


import './plugins/mintui.js'
Vue.prototype.$http = axios.create({
  baseURL:'http://api.cms.liulongbin.top/api/'  //全局配置请求地址
});
Vue.config.productionTip = false;


/*  
    dataStr : 传入的时间字符串, 
    pattern : 表示转换后的时间格式
*/
Vue.filter('dataFormat' , function(dataStr,pattern) {
  return moment(dataStr).format(pattern);
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
