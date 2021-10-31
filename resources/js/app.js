
require('./bootstrap');

window.Vue = require('vue');


Vue.component('order-management', require('./components/Ordermanagement.vue').default);

const app = new Vue({
    el: '#app',
});
