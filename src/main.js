// =========================================================
// * Vuetify Material Dashboard PRO - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
/* eslint-disable */
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/vue-world-map'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VTextField } from 'vuetify/lib'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')


Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

Vue.use(VueAxios, axios)

Vue.use(require('vue-moment'));

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCO7YUlqIF03aHwa3gBLRDSkICLcjRMWRU',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})