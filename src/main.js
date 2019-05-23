import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import App from './App.vue'

Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
