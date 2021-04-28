import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)



const Login = () => import('views/login/Login')
const Index = () => import('views/Index')
const Find = () => import('views/find/Find')
const Collect = () => import('views/collect/Collect')
const Indent = () => import('../views/indent/Indent')
const Profile = () => import('views/profile/Profile')
const Hotel = () => import('views/hotel/Hotel')
const Detial = () => import('views/detial/Detial')

const Order = () =>import('views/hotel/childComps/Order')
const Ratings = () => import('views/hotel/childComps/ratings/Ratings')
const Seller = () => import('views/hotel/childComps/Seller')

const routes = [
  {
    path:"",
    redirect:"login"
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/index",
    component:Index,
    children:[
      {
        path:"",
        redirect:"find"
      },
      {
        path:"find",
        component:Find
      },
      {
        path:"collect",
        component:Collect,
      },
      {
        path:"indent",
        component:Indent
      },
      {
        path:"profile",
        component:Profile
      },
    ]
  },
  {
    path:"/hotel",
    component:Hotel,
    children:[
      {
        path:"",
        redirect:"order"
      },
      {
        path:"order",
        component:Order
      },
      {
        path:"ratings",
        component:Ratings
      },
      {
        path:"seller",
        component:Seller
      },
    ]
  },
  {
    path:"/detial",
    component:Detial
  }



]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
