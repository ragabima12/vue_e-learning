import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Confirm from '../views/Confirm-Attendance'
import Register from '../views/Register.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
