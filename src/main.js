import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Card } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Sticky } from 'vant';
import { Col, Row } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Icon } from 'vant';
import { Skeleton } from 'vant';


Vue.use(Skeleton);


Vue.use(Icon);

Vue.use(Sidebar);
Vue.use(SidebarItem);


Vue.use(Col);
Vue.use(Row);


Vue.use(Sticky);

Vue.use(Grid);
Vue.use(GridItem);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Card);

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(NavBar);

Vue.use(Button);

Vue.use(Field);

Vue.use(Form);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
