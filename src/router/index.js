import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import LoginView from '@/views/LoginView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: "/:notFound(.*)", redirect: "/home"},
        {path: '/home', component: HomeView},
        {path: '/cart', component: CartView},
        {path: '/login', component: LoginView},
        {path: '/shop', component: ShopView},
        {path: '/product/:id', name: 'product', component: ProductView},
        {path: '/checkout', component: CheckoutView},
        {path: '/confirmation', component: ConfirmationView}

    ]
})

export default router