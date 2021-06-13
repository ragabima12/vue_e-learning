import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Confirm from '../views/Confirm-Attendance'
import Register from '../views/Register.vue'
import ParentDashboard from '../views/Dashboard/ParentDashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
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
    path: '/dashboard/parent',
    name: 'Parent Dashboard',
    component: ParentDashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
