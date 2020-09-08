import Vue from 'vue'
import App from './App.vue'
import * as VeeValidate from '../node_modules/vee-validate';  // Add this

Vue.config.productionTip = false

Vue.use(VeeValidate);  // Add this

new Vue({
  render: h => h(App),
}).$mount('#app')
