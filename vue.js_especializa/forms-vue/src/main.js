import Vue from 'vue'
import App from './App.vue'
import VeeValidation from 'vee-validate'

Vue.use(VeeValidation);

new Vue({
  el: '#app',
  render: h => h(App)
})
