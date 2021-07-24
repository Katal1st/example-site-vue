import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'
import './stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1
  }
})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyAL5YQ2kw7l3dV-J5l8w3BXh5hJXWWHzEU",
      authDomain: "vueads-a7d9c.firebaseapp.com",
      projectId: "vueads-a7d9c",
      storageBucket: "vueads-a7d9c.appspot.com",
      messagingSenderId: "906716484685",
      appId: "1:906716484685:web:b9c119976a12edbe6e3804",
      measurementId: "G-TH6VZ5YMM2"
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
