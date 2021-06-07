const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')



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
  

];


export default publicRoute;