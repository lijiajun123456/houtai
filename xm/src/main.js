// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入css
import './assets/css/reset.css'
// 引入全局公共组件
import Ccomponents from './components/index'
for (let i in Ccomponents) {
  Vue.component(i, Ccomponents[i])
}
// 引入全局过滤器
import Ffilters from './filters/index'
for (let i in Ffilters) {
  Vue.component(i, Ffilters[i])
}
Vue.use(ElementUI)
// 引入store
import store from './store'

// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
