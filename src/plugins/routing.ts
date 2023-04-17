import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/home.vue'
import Login from '../components/pages/login.vue'
import Quesion from '../components/pages/quesion.vue'
import Results from '../components/pages/results.vue'
import NotFound from '../components/pages/notFound.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/quesion/:id', name:  'Quesion', component: Quesion},
    {path: '/results', name: 'Results', component: Results},
    {path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router