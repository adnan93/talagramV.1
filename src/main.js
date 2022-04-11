import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import router from './router'

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://95.217.131.10/'


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(xhttp.responseText);
//   } else {
//     console.log("error")
//   }
// };
// xhttp.open("GET", "http://95.217.131.10:8080/", true);
// xhttp.send();

// Vue.http.options.emulateJSON = true

// Vue.http.interceptors.push(function (request, next) {

  //some api's dont like the X-CSFR-token or Pusher token.. remove it..
//   const removeAuthHeaders = request.url.includes("openiban.com");

//   request.headers['Access-Control-Allow-Origin'] = '*';

//   if (removeAuthHeaders){
//       request.headers.delete('Access-Control-Request-Headers')
//       request.headers.delete('X-Socket-ID');

//   }
//   // else {
//   //     request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
//   // }
//   next();
// })

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  rtl: true,
  render: h => h(App)
}).$mount('#app')

Vue.use(vuetify, {
  rtl: true
})
