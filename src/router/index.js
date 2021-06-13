import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import ConfirmAttendance from '../views/AttendanceConfirm'
import Register from '../views/Register'
import ParentDashboard from '../views/Dashboard/ParentDashboard'
import Classroom from '../views/Classroom'
import TaskDetail from '../views/TaskDetail'
import Absence from '../views/Absence.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard/parent/confirm/attendance',
    name: 'confirm',
    component: ConfirmAttendance
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard/parent',
    name: 'Parent Dashboard',
    component: ParentDashboard
  },
  {
    path: '/dashboard/parent/classroom',
    name: 'classroom',
    component: Classroom
  },
  {
    path: '/dashboard/parent/task/detail',
    name: 'task detail',
    component: TaskDetail
  },
  {
    path: '/dashboard/parent/absence',
    name: 'Absence',
    component: Absence
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
