<template>
  <div class="farm">
    <h1>farm</h1>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import Web3 from 'web3'
export default {
  methods: {
    handleClick(){
    // const Web3 = require("web3");
    // const BigNumber = require('bignumber.js');
    // const Ether = new BigNumber(10e+17);
    // let web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    // web3.eth.getBalance('0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7').then(v => {
    // let ret = new BigNumber(v);
    // console.log(parseFloat(ret.dividedBy(Ether)).toFixed(2));
// })
let web3Provider;
      if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
          // 请求用户授权
          window.ethereum.enable();
        } catch (error) {
          // 用户不授权时
          console.error("User denied account access")
        }
      }
      const web3js = new Web3(web3Provider);//web3js就是你需要的web3实例
  
      const that = this
      web3js.eth.getAccounts(function (error, result) {
        if (!error) {
          //授权成功后result能正常获取到账号了
          that.publicAddress = result[0];
          console.log(that.publicAddress)
        }
      })
    }
  }
}
</script>

<style>
.farm {
  background-color: #fff;
}
h1 {
  margin: 0;
}
</style>
