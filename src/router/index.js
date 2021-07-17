import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../views/App.vue'
import Lend from '../components/Lend.vue'
import Graze from '../components/Graze.vue'
import Farm from '../components/Farm.vue'
import Stake from '../components/Stake.vue'
import Deposit from '../components/Lend/Deposit.vue'
import Create from '../views/Create.vue'
import Connections from '../components/Create/Connections.vue'
import Visit from '../components/Create/Visit.vue'
import Edit from '../components/Create/Edit.vue'
import Payouts from '../components/Create/Payouts.vue'
import Items from '../components/Create/Items.vue'
import ChildIndex from '../components/Create/CreateChild/ChildIndex.vue'
import ChildItem from '../components/Create/CreateChild/ChildItem.vue'
import CreateChild from '../components/Create/CreateChild/CreateChild.vue'
import Cell from '../components/Create/Cell.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app',
    name: 'App',
    component: App,
    children: [
      { path: '/lend', component: Lend },
      { path: '/grazing-range', component: Graze },
      { path: '/farm', component: Farm },
      { path: '/stake', component: Stake },
      { path: '/', redirect: '/lend' },
      { path: 'deposit',component: Deposit}
    ]
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    children: [
      { path: '/connections', component: Connections },
      // { path: '/', redirect: '/connections' }
      { path: '/visit', component: Visit },
      { path: '/items', component: Items},
      { path: '/edit', component: Edit},
      { path: '/payouts', component: Payouts},
      { 
        path: '/childindex',
        name: 'Childindex',
        component: ChildIndex,
        children: [
          { path: '/createchild', component: CreateChild},
          { path: '/childitem', component: ChildItem}
        ]
      },
      { path: '/cell', component: Cell}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
