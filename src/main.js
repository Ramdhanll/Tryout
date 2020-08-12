import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import Swal from 'sweetalert2'
import VueCountdownTimer from 'vuejs-countdown-timer'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCountdownTimer)
Vue.use(ViewUI)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Vue.prototype.$Toast = Toast;
Vue.prototype.$Swal = Swal;
Vue.prototype.$Fire = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
