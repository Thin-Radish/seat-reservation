const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')
const Interact = () => import('../views/interact/Interact')
const Message = () => import('views/message/Message')

const publicRoute = [

  {
    path: "",
    redirect: "login"
  },
  {
    path: "/login",
    component: Login,
    meta: {
      role: [0],
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      role: [0],
    }
  },
  {
    path: "/interact",
    component: Interact,
    name: "Interact",
    meta: {
      role: [0],
    }
  },
  {
    path: "/message",
    component: Message,
    meta: {
      role: [0],
    }
  },


];


export default publicRoute;