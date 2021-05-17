import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const Login = () => import('views/login/Login')
const Index = () => import('views/Index')
const Find = () => import('views/find/Find')
const Message = () => import('views/message/Message')
const Indent = () => import('views/indent/Indent')
const Profile = () => import('views/profile/Profile')
const Shop = () => import('views/shop/Shop')
const Detial = () => import('views/detial/Detial')

const Order = () => import('views/shop/childComps/order/Order')
const Ratings = () => import('views/shop/childComps/ratings/Ratings')
const Seller = () => import('views/shop/childComps/seller/Seller')

const Seat = () => import('views/seat/Seat')
const Comfirm = () => import('views/confirm/Confirm')

const Category = () => import('views/category/Category')

const ModHabit = () => import('views/modify/ModHabit')
const ModName = () => import('views/modify/ModName')
const ModPassword = () => import('views/modify/ModPassword')
const ModTel = () => import('views/modify/ModTel')

const Interact = () => import('../views/interact/Interact')

const Collect = () => import('views/collect/Collect')
const Footprint = () => import('views/footprint/Footprint')


const Merchant = () => import('views/merchant/Merchant')

const ManMenu = () => import('views/merchant/manMenu/ManMenu')
const ManMessage = () => import('views/merchant/manMessage/ManMessage')
const ManIndent = () => import('views/merchant/manIndent/ManIndent')
const ManShop = () => import('views/merchant/manShop/ManShop')

const AddFood = () => import('views/merchant/manMenu/childComps/AddFood')
const IndentInfo = () => import('views/merchant/manIndent/childComps/IndentInfo')
const SeatMap = () => import('views/merchant/manShop/childComps/seatMap/SeatMap')
const SetShopInfo = () => import('views/merchant/manShop/childComps/setShopInfo/SetShopInfo')

// Merchant


const routes = [
  {
    path: "",
    redirect: "login"
  },
  {
    path: "/login",
    component: Login
  },
  {  
    path: "/index",
    component: Index,
    children: [
      {
        // 重定向
        path: "",
        redirect: "/find",
      },

      {
        path: "/find",
        component: Find,
      },
      {
        path: "/message",
        component: Message,
      },
      {
        path: "/indent",
        component: Indent
      },
      {
        path: "/profile",
        component: Profile
      },
    ]
  },

  {
    path:"/merchant",
    component: Merchant,
    children: [
      {
        // 重定向
        path: "",
        redirect: "menu",
      },

      {
        path: "menu",
        component: ManMenu,
      },
      {
        path: "message",
        component: ManMessage,
      },
      {
        path: "indent",
        component: ManIndent
      },
      {
        path: "shop",
        component: ManShop
      },


    ]
  },

  //店铺路由
  {
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "",
        redirect: "order"
      },
      {
        path: "order",
        component: Order
      },
      {
        path: "ratings",
        component: Ratings
      },
      {
        path: "seller",
        component: Seller
      },
    ]
  },

  {
    path: "/seat",
    component: Seat
  },
  {
    path: "/comfirm",
    component: Comfirm
  },

  {
    path: "/category/:type",
    component: Category
  },


  {
    path: "/modhabit",
    component: ModHabit
  },
  {
    path: "/modname",
    component: ModName
  },
  {
    path: "/modpwd",
    component: ModPassword
  },
  {
    path: "/modtel",
    component: ModTel
  },
  {
    path: "/interact",
    component: Interact,
    name: "Interact"
  },

  {
    path: "/collect",
    component: Collect,
    name: "Collect"
  },

  {
    path: "/footprint",
    component: Footprint,
    name: "Footprint"
  },

  {
    path: "/addfood",
    component: AddFood,
    name: "AddFood"
  },
  {
    path: "/indentinfo",
    component: IndentInfo,
    name: "IndentInfo"
  },

  {
    path: "/seatmap",
    component: SeatMap,
    name: "SeatMap"
  },

  {
    path: "/setinfo",
    component: SetShopInfo,
    name: "SetShopInfo"
  }





]

const router = new VueRouter({
  routes,
  mode: "history"
})

// router.afterEach(() => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// })

export default router
