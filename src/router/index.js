import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)



const Login = () => import('views/login/Login')
const Index = () => import('views/Index')
const Find = () => import('views/find/Find')
const Message = () => import('views/message/Message')
const Indent = () => import('views/indent/Indent')
const Profile = () => import('views/profile/Profile')
const Shop = () => import('views/shop/Shop')

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




const routes = [
  {
    path: "",
    redirect: "login"
  },
  {
    path: "/login",
    component: Login,
    meta:{
      role:[0],
    }
  },
  {  
    path: "/index",
    component: Index,
    meta:{
      role:[1],
    },
    children: [
      {
        // 重定向
        path: "",
        redirect: "/find",
      },

      {
        path: "/find",
        component: Find,
        meta:{
          role:[1],
        }
      },
      {
        path: "/message",
        component: Message,
        meta:{
          role:[1],
        }
      },
      {
        path: "/indent",
        component: Indent,
        meta:{
          role:[1],
        }
      },
      {
        path: "/profile",
        component: Profile,
        meta:{
          role:[1],
        }
      },
    ]
  },

  {
    path:"/merchant",
    component: Merchant,
    meta:{
      role:[2],
    },
    children: [
      {
        // 重定向
        path: "",
        redirect: "menu",
        meta:{
          role:[2],
        }
      },

      {
        path: "menu",
        component: ManMenu,
        meta:{
          role:[2],
        }
      },
      {
        path: "message",
        component: ManMessage,
        meta:{
          role:[2],
        }
      },
      {
        path: "indent",
        component: ManIndent,
        meta:{
          role:[2],
        }
      },
      {
        path: "shop",
        component: ManShop,
        meta:{
          role:[2],
        }
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
        component: Order,
        meta:{
          role:[1],
        }
      },
      {
        path: "ratings",
        component: Ratings,
        meta:{
          role:[1],
        }
      },
      {
        path: "seller",
        component: Seller,
        meta:{
          role:[1],
        }
      },
    ]
  },

  {
    path: "/seat",
    component: Seat,
    meta:{
      role:[1],
    }
  },
  {
    path: "/comfirm",
    component: Comfirm,
    meta:{
      role:[1],
    }
  },

  {
    path: "/category/:type",
    component: Category,
    meta:{
      role:[1],
    }
  },


  {
    path: "/modhabit",
    component: ModHabit,
    meta:{
      role:[1],
    }
  },
  {
    path: "/modname",
    component: ModName,
    meta:{
      role:[1],
    }
  },
  {
    path: "/modpwd",
    component: ModPassword,
    meta:{
      role:[1],
    }
  },
  {
    path: "/modtel",
    component: ModTel,
    meta:{
      role:[1],
    }
  },
  {
    path: "/interact",
    component: Interact,
    name: "Interact",
    meta:{
      role:[1],
    }
  },

  {
    path: "/collect",
    component: Collect,
    name: "Collect",
    meta:{
      role:[1],
    }
  },

  {
    path: "/footprint",
    component: Footprint,
    name: "Footprint",
    meta:{
      role:[1],
    }
  },

  {
    path: "/addfood",
    component: AddFood,
    name: "AddFood",
    meta:{
      role:[2],
    }
  },
  {
    path: "/indentinfo",
    component: IndentInfo,
    name: "IndentInfo",
    meta:{
      role:[2],
    }
  },

  {
    path: "/seatmap",
    component: SeatMap,
    name: "SeatMap",
    meta:{
      role:[2],
    }
  },

  {
    path: "/setinfo",
    component: SetShopInfo,
    name: "SetShopInfo",
    meta:{
      role:[2],
    }
  }

]

const router = new VueRouter({
  routes,
  mode: "history"
})


// router.beforeEach((to,from,next)=>{
//   let role = store.state.role;
//   let locRole = parseInt(sessionStorage.getItem("role"))

//   if(to.meta.role.includes(locRole)||to.meta.role.includes(role) ){
//     next();
//   }
//   else{
//     router.replace('/login')
//   }
// })


export default router
