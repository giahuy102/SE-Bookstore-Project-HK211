require('./bootstrap');   // xai axios

// window.Vue = require('vue');


// Vue.component('example-component', require('./App.vue').default);


// const app = new Vue({
//     el: '#app',
// });


import Vue from 'vue'
import App from './components/Warehouse.vue'
import router from './router/index'
import excel from 'vue-excel-export'

Vue.config.productionTip = false



//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//font-awesome-icone
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faInfoCircle, faArrowCircleLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faInfoCircle, faArrowCircleLeft, faCaretDown)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(excel)



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('example-component', require('./components/Warehouse.vue').default);  // register component

new Vue({   // create vue instance
  router,
  render: h => h(App),

}).$mount('#app')
