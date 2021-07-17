<template>
  <div class="stake">
    <ul class="list-group hidden-md hidden-lg">
        <li
          class="list-group-item"
          v-for="data in datalist" :key="data.name">
          <div class="li-left">
            <p>1 ib{{data.name}} = 1.0026 {{data.name}}</p>
            <p>Lending APR:</p>
            <p>Staking APR:</p>
            <p v-if="data.ProtocolAPR">Protocol APR:</p>
            <p>Total APR:</p>
            <p class="text-green">Total APY</p>
            <p>Total Supply</p>
            <p>Total Borrowed</p>
            <p>Utilization</p>
            <p class="balance">Your Balance</p>
            <!-- deposit -->
            <router-link to="/deposit" tag="div" class="btn btn-success">Deposit</router-link>
          </div>
          <div class="li-right">
            <p>
              <img :src="data.icon" alt="icon" width="28" height="28">
              <span style="margin-left: 10px;">{{data.name}}</span>
            </p>
            <p>{{data.LendingAPR}}</p>
            <p>{{data.StakingAPR}}</p>
            <p v-if="data.ProtocolAPR">{{data.ProtocolAPR}}</p>
            <p>{{data.TotalAPR}}</p>
            <p class="text-green">{{data.TotalAPY}}</p>
            <p>{{data.TotalSupply}}</p>
            <p>{{data.TotalBorrowed}}</p>
            <p>{{data.Utilization}}</p>
            <p class="balance">
              <span>0.00 ib{{data.name}}</span>
              <span>0.00 {{data.name}}</span>
            </p>
            <!-- Withdraw -->
            <router-link to="/withdraw" tag="div" class="btn btn-success">Withdraw</router-link>
          </div>
        </li>
      </ul>
  </div>
</template>

<style>
.stake {
  background-color: #fff;
}
h1 {
  margin: 0;
}
</style>
