import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* eslint-disable vue/no-unused-components */
import * as VeeValidate from '../node_modules/vee-validate'; // Add this
Vue.use(VeeValidate); // Add this

Vue.config.productionTip = false


new Vue({
  router,
    render: h => h(App),
}).$mount('#app')