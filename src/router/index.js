import {createRouter, createWebHistory} from 'vue-router'
import Home from '../view/Home/Home.vue'
import Login from '../view/Login/Login.vue'


const routes = [
    {
        name:"Home",
        component:Home,
    },
    {
        name:"LoginPage",
        component:Login
    }
]

const router ={
    history:createWebHistory(),
    routes
}

export default router
 