//import { createApp } from 'vue'
//import App from '../App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import EmployeeAppraisals from './components/Employee-Appraisals.vue'

const routes = [
  {
    path: '/',
    name: 'employee-appraisals',
    component: EmployeeAppraisals
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
