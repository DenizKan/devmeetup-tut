// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-DJaSNMGBAL7XL7rFc-RTUkvZ0X55174',
      authDomain: 'devmeetup-2081f.firebaseapp.com',
      databaseURL: 'https://devmeetup-2081f.firebaseio.com',
      projectId: 'devmeetup-2081f',
      storageBucket: 'devmeetup-2081f.appspot.com'
    })
  }
})
