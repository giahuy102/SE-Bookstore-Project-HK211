import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/Dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        component: dashboard,
        children: [
        {
            path: '',
            component: () => import(/* webpackChunkName: "Overview" */ '../components/Home.vue')
        },
        {
            path: 'additems',
            component: () => import(/* webpackChunkName: "Messages" */ '../components/AddItems.vue')
        },
        {
            path: 'managebooks',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/ManageBooks.vue'),
        },
        {
            path: 'updatebook/:bookID',
            name: 'updateBook',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/UpdateBook.vue')
        },
        {
            path: 'bookInfo/:bookID',
            name: 'bookInfo',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/BookInfo.vue')
        },
        // {
        //     path: 'changePassword',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/ChangePassword.vue')
        // },
        // {
        //     path: 'editProfile',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/EditProfile.vue')
        // },
        {
            path: 'changePassword/:userID',
            name: 'changePassword',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/ChangePassword.vue')
        },
        {
            path: 'editProfile/:userID',
            name:  'editProfile',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/EditProfile.vue')
        }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
