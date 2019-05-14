import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router/index'
import * as VueGoogleMaps from 'vue2-google-maps';
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBAoiVduLkgMW9ewCpH4PTpd8vaFxLW-v4',
    libraries: 'places'
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
