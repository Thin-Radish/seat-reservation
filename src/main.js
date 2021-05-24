import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Sticky } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Icon } from 'vant';
import { Skeleton } from 'vant';
import { Search } from 'vant';
import { DatetimePicker } from 'vant';
import { Cell } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Tab, Tabs } from 'vant';
import { SwipeCell } from 'vant';
import { Uploader } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Uploader);


Vue.use(SwipeCell);

Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Picker);

Vue.use(Popup);

Vue.use(Cell);

Vue.use(DatetimePicker);

Vue.use(Search);


Vue.use(Skeleton);


Vue.use(Icon);

Vue.use(Sidebar);
Vue.use(SidebarItem);


Vue.use(Sticky);

Vue.use(Grid);
Vue.use(GridItem);

Vue.use(Swipe);
Vue.use(SwipeItem);


Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(NavBar);

Vue.use(Button);

Vue.use(Field);

Vue.use(Form);



import Directives  from './common/directives'
Vue.use(Directives);

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
