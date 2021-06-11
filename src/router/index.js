import Vue from "vue";
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const cart = () => import('../views/cart/cart')
const category = () => import('../views/category/category')
const login = () => import('../views/login/login')
const user = () => import('../views/user/user')

const routes = [
    {
        path:'',
        redirect:'/user'
    },
    {
        path:'/user',
        component:user
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/cart',
        component:cart
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})
export default router