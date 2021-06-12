import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Confirm from '../views/Confirm-Attendance'
import Register from '../views/Register.vue'
import Homepage from '../views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
