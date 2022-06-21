import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue"
import OriginList from "@/components/OriginList.vue"
import OriginsSensorList from "@/components/OriginsSensorList.vue"
import SensorDetail from "@/components/SensorDetail.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mainpoints',
      name: 'HomePage',
      component: HomePage
    },
    {
      path : "/mainpoints/allorigin",
      name : "allorigin", 
      component: OriginList
    },
    {
      path : "/origin/:id",
      name : "origin", 
      component : OriginsSensorList,
    },
    {
      path : "/sensor/:id",
      name : "sensor",
      component : SensorDetail
    },

  ]
})

export default router
