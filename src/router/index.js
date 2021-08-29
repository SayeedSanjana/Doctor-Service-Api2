import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DoctorList from '../views/DoctorList.vue'
import AccountSettings from '../views/AccountSettings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/doctorList',
    name: 'DoctorList',
    component: DoctorList
  },
  {
    path: '/accountSettings',
    name: 'AccountSettings',
    component: AccountSettings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
