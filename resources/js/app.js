
require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faInfoCircle, faArrowCircleLeft, faPlusCircle, faMinusCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faInfoCircle, faArrowCircleLeft, faPlusCircle, faMinusCircle, faCheckCircle, faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
