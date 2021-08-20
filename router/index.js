import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../views/App.vue'
import Lend from '../components/Lend.vue'
import Graze from '../components/Graze.vue'
import Farm from '../components/Farm.vue'
import Stake from '../components/Stake.vue'
import Deposit from '../components/Lend/Deposit.vue'
import Withdraw from '../components/Lend/Withdraw.vue'
import Farmchild from '../components/Farm/Farmchild.vue'
import Claim from '../components/Farm/Claim.vue'
import Create from '../views/Create.vue'
import Connections from '../components/Create/Connections.vue'
import Visit from '../components/Create/Visit.vue'
import Edit from '../components/Create/Edit.vue'
import Payouts from '../components/Create/Payouts.vue'
import Items from '../components/Create/Items.vue'
import ChildIndex from '../components/Create/CreateChild/ChildIndex.vue'
import ChildItem from '../components/Create/CreateChild/ChildItem.vue'
import CreateChild from '../components/Create/CreateChild/CreateChild.vue'
import Sell from '../components/Create/Sell/Sell.vue'
import SellItem from '../components/Create/Sell/SellItem.vue'
import Pancake from '../components/Pancake.vue'
import Exchange from '../components/Pancake/Exchange.vue'
import Liquidity from '../components/Pancake/Liquidity.vue'
import LpMigration from '../components/Pancake/LpMigration.vue'
import Find from '../components/Pancake/Find.vue'
import Add from '../components/Pancake/Add.vue'
import Pools from '../components/Pancake/Pools.vue'
import Farms from '../components/Pancake/Farms.vue'
import Remove from '../components/Pancake/Remove.vue'
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
      { path: '/lend/deposit',component: Deposit},
      { path: '/lend/withdraw',component: Withdraw },
      { path: '/grazing-range', component: Graze },
      { path: '/farm', component: Farm , },
      { path: '/farm/claim', component: Claim },
      { path: '/farm/farmchild', component: Farmchild },
      { path: '/stake', component: Stake },
      { path: '/', redirect: '/lend' },
    ]
  },
  {
    path: '/pancake',
    name: 'Pancake',
    component: Pancake,
    children: [
      { path: '/pancake/exchange', component: Exchange },
      { path: '/pancake/liquidity', component: Liquidity },
      { path: '/pancake/lpmigration', component: LpMigration },
      { path: '/pancake/find', component: Find },
      { path: '/pancake/add', component: Add },
      { path: '/pancake/pools', component: Pools },
      { path: '/pancake/farms', component: Farms },
      { path: '/pancake/remove', component: Remove },
      { path: '/pancake/', redirect: '/pancake/exchange' }
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
      { path: '/sell', component: Sell },
      { path: '/sellitem',component: SellItem }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
