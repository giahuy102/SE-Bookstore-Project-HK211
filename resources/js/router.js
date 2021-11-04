
import Vue from 'vue';
import VueRouter from 'vue-router';

import OrderDetail from './components/OrderDetail.vue';
import OrderManagement from './components/OrderManagement.vue'
import CustomerDetail from './components/CustomerDetail.vue'
import Cart from './components/Cart.vue'
import Purchase from './components/Purchase.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/ordermanagement',
            name: 'ordermanagement',
            component: OrderManagement
        },
        {
            path: '/order/:orderID',
            name: 'orderDetail',
            component: OrderDetail
        },
        {
            path: '/customer',
            name: 'customerDetail',
            component: CustomerDetail
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/purchase',
            name: 'purchase',
            component: Purchase
        }
    ]
});

export default router;