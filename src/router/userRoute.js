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
const ModAvatar = () => import('views/modify/ModAvatar')


const Collect = () => import('views/collect/Collect')
const Footprint = () => import('views/footprint/Footprint')

const Interact = () => import('views/interact/Interact')


const userRoute = [
  {
    path: "/index",
    component: Index,
    meta: {
      role: [1],
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
        meta: {
          role: [1],
        }
      },
      {
        path: "/message",
        component: Message,
        meta: {
          role: [0],
        }
      },
      
      {
        path: "/indent",
        component: Indent,
        meta: {
          role: [1],
        }
      },
      {
        path: "/profile",
        component: Profile,
        meta: {
          role: [1],
        }
      },
    ]
  },

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
        meta: {
          role: [1],
        }
      },
      {
        path: "ratings",
        component: Ratings,
        meta: {
          role: [1],
        }
      },
      {
        path: "seller",
        component: Seller,
        meta: {
          role: [1],
        }
      },
    ]
  },

  {
    path: "/seat",
    component: Seat,
    meta: {
      role: [1],
    }
  },
  {
    path: "/comfirm",
    component: Comfirm,
    meta: {
      role: [1],
    }
  },

  {
    path: "/category/:type",
    component: Category,
    meta: {
      role: [1],
    }
  },


  {
    path: "/modhabit",
    component: ModHabit,
    meta: {
      role: [1],
    }
  },
  {
    path: "/modname",
    component: ModName,
    meta: {
      role: [1],
    }
  },
  {
    path: "/modpwd",
    component: ModPassword,
    meta: {
      role: [1],
    }
  },
  {
    path: "/modtel",
    component: ModTel,
    meta: {
      role: [1],
    }
  },
  {
    path: "/modavatar",
    component: ModAvatar,
    meta: {
      role: [1],
    }
  },

  {
    path: "/collect",
    component: Collect,
    name: "Collect",
    meta: {
      role: [1],
    }
  },

  {
    path: "/footprint",
    component: Footprint,
    name: "Footprint",
    meta: {
      role: [1],
    }
  },
  {
    path: "/interact",
    component: Interact,
    name: "Interact",
    meta: {
      role: [1],
    }
  },



];

export default userRoute;