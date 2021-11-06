
require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faInfoCircle, faArrowCircleLeft, faCaretDown, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faInfoCircle, faArrowCircleLeft, faCaretDown, faClipboardList)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
