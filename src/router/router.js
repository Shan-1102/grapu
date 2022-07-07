import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloVue from '../components/HelloVue.vue'
const routes =[
    {
        path:"./HelloVue",
        component:HelloVue
    }
    
]
const router = new VueRouter({
    routes
})
export default router