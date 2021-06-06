const Merchant = () => import('views/merchant/Merchant')

const ManMenu = () => import('views/merchant/manMenu/ManMenu')
const ManMessage = () => import('views/merchant/manMessage/ManMessage')
const ManIndent = () => import('views/merchant/manIndent/ManIndent')
const ManShop = () => import('views/merchant/manShop/ManShop')

const AddFood = () => import('views/merchant/manMenu/childComps/AddFood')
const IndentInfo = () => import('views/indent/childComps/IndentInfo')
const SeatMap = () => import('views/merchant/manShop/childComps/seatMap/SeatMap')
const SetShopInfo = () => import('views/merchant/manShop/childComps/setShopInfo/SetShopInfo')

const shopRoute = [

  {
    path: "/merchant",
    component: Merchant,
    meta: {
      role: [2],
    },
    children: [
      {
        // 重定向
        path: "",
        redirect: "menu",
        meta: {
          role: [2],
        }
      },

      {
        path: "menu",
        component: ManMenu,
        meta: {
          role: [2],
        }
      },
      {
        path: "message",
        component: ManMessage,
        meta: {
          role: [2],
        }
      },
      {
        path: "indent",
        component: ManIndent,
        meta: {
          role: [2],
        }
      },
      {
        path: "shop",
        component: ManShop,
        meta: {
          role: [2],
        }
      },


    ]
  },
  {
    path: "/addfood",
    component: AddFood,
    name: "AddFood",
    meta: {
      role: [2],
    }
  },
  {
    path: "/indentinfo",
    component: IndentInfo,
    name: "IndentInfo",
    meta: {
      role: [2],
    }
  },

  {
    path: "/seatmap",
    component: SeatMap,
    name: "SeatMap",
    meta: {
      role: [2],
    }
  },

  {
    path: "/setinfo",
    component: SetShopInfo,
    name: "SetShopInfo",
    meta: {
      role: [2],
    }
  }


]

export default shopRoute;