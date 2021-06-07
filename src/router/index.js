import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import publicRoute from './publicRoute'
import userRoute from './userRoute'
import shopRoute from './shopRoute'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history"
})

publicRoute.forEach(item => {
  router.addRoute(item);
});
userRoute.forEach(item => {
  router.addRoute(item);
});
shopRoute.forEach(item => {
  router.addRoute(item);
});
// router.addRoute(publicRoute);
// router.addRoutes(userRoute);
// router.addRoutes(shopRoute);


// router.beforeEach((to,from,next)=>{
//   let role = store.state.role;

//   // let locRole = parseInt(sessionStorage.getItem("role"))

//   if(to.meta.role.includes(role) ){
//     next();
//   }
//   else{
//     router.replace('/login')
//   }

  
// })





export default router;
