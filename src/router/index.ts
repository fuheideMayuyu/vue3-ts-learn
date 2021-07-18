import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../view/home.vue'
const ChartDemo = () => import("../components/ChartDemo.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: []
  },
  {
    path: '/chart',
    component: ChartDemo,
    children: []
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router