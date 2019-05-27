import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router/index'
import store from './store/store'
import * as VueGoogleMaps from 'vue2-google-maps';
import BootstrapVue from "bootstrap-vue";
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue);
Vue.prototype.$http = axios;

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBemcbepduZI6iQdT3a42UyLX8U8jHWphQ',
    libraries: 'places'
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
