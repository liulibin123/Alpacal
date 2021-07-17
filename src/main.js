import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Select, Option, Input, Dropdown, Button, DropdownMenu, DropdownItem,Icon, Col,Row,Menu, MenuItem, MenuItemGroup,Submenu, Breadcrumb, BreadcrumbItem
, Autocomplete, Divider,Upload, Dialog, Switch} from 'element-ui';
import './assets/css/global.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(Button)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Icon)
Vue.use(Col)
Vue.use(Row)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Autocomplete)
Vue.use(Divider)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Switch)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
