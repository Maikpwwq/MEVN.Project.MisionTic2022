import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'

Vue.config.productionTip = false

const base = axios.create({
  // baseURL: 'https://glacial-everglades-74306.herokuapp.com'
  //  http://localhost:3000/api/auth/signin
  baseURL: 'localhost:3000'
});

Vue.prototype.$http = base;

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount('#app')
