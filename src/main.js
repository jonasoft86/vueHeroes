import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

//Base API
axios.defaults.baseURL = 'http://157.245.138.232:9091/api/v1/test';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
