import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login'
import Home from './views/Home'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;