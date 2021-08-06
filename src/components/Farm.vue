<template>
  <div class="farm">
    <div class="farm_body">
      <div class="farm_img">
        <div  class="farm_take">
          <div>Take your yield to new heights</div>
          <div  class="farm_3x">
            <span>3X</span>
            <span>6X</span>
          </div>
        </div>
        <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/FarmerAlpaca.svg" alt="">
      </div>
      <div class="farm_header">
        <div class="farm_header_claim">
          <div class="farm_position">
            <div class="farm_active">
              <div>Your Positions</div>
              <div>
                <div :class="isShow ? 'farmShow':'farmHide'" @click="handleClick">Active Positions</div>
                <div :class="!isShow ? 'farmShow':'farmHide'" @click="handleHide">
                  <span>Liquidated Positions</span>
                  <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/emoji-ghost.svg" alt="">
                </div>
              </div>
            </div>
            <div style="width: 53%"></div>
            <div class="farm_earn">
              <div>
                <div>ALPACA earned:</div>
                <div>0.00</div>
              </div>
              <router-link to="/farm/claim" tag="div">claim</router-link>
            </div>
          </div>
          <div>
            <div v-show="active" class="farm_svg">
              <div>
                <div><svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></div>
                <div>Notice</div>
                <div style="width: 92%"></div>
                <div @click="handleCancel"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></div>
              </div>
              <div>
                Liquidated positions might take some time to show up in your Liquidated Position due to a BSC-wide delay in Graph Node's syncing.
              </div>
            </div>
            <div class="farm_header_footer">
              No active positions
            </div>
          </div>
          
        </div>
      </div>
      <div class="farm_article">
        <div class="article_header">
          <h1>Active Pools (48)</h1>
          <div style="width:52%"></div>
          <div class="farm_paginat">
            <div>1-10 of 48 pools</div>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
          </div>
        </div>
        <el-divider class="farm_first_el"></el-divider>
        <div class="farm_button">
          <div class="farm_farm">
            <div>Farm :</div>
            <div class="farm_all">
              <div>All</div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/iconswap/pancakeswap.svg?v=2" alt="">
                <div>PancakeSwap</div>
              </div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/iconswap/waultswap.svg" alt="">
                <div>WaultSwap</div>
              </div>
            </div>
            <div class="farm_sort">Sort by :</div>
            <el-select v-model="value" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
              </el-option>
            </el-select>
          </div>
          <div class="farm_farm farm_paired">
            <div>Paired assets :</div>
            <div class="farm_all">
              <div>All</div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/alpaca.svg" alt="">
                <div>Alpaca</div>
              </div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/bnb.svg" alt="">
                <div>BNB</div></div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/busd.svg" alt="">
                <div>BUSD</div></div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/usdt.svg" alt="">
                <div>USDT</div></div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3.ap-southeast-1.amazonaws.com/icons/coins/tusd.svg" alt="">
                <div>TUSD</div></div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/btcb.svg" alt="">
                <div>BTCB</div>
              </div>
              <div class="farm_img">
                <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/eth.svg" alt="">
                <div>ETH</div></div>
            </div>
            <div style="width: 11.5%"></div>
            <div class="demo-input-suffix">
              <el-input
                placeholder="Search"
                prefix-icon="el-icon-search"
                v-model="input1">
              </el-input>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <table class="table table-hover">
          <thead>
            <tr style="border-style: hidden">
              <th></th>
              <th>Pool</th>
              <th>APY</th>
              <th>Yield (APR)</th>
              <th>Leverage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datalist" :key="data.name">
              <td>
                <img :src="data.img" alt="icon" width="40" height="40">
              </td>
              <td class="data-title">
                <div>
                  <h4>{{data.name}}</h4>
                  <div>{{data.nameless}}</div>
                  <div class="farm_tvl">TVL ${{data.num}}</div>
                </div>
                
              </td>
              <td>
                <div class="farm_APR">
                  <div>{{data.history}}</div>
                  <div>{{data.current}}</div>
                  <div></div>
                </div>
              </td>
              <td style="display: flex">
                <div class="farm_yield">
                  <div>Yield Farming :</div>
                  <div>Trading Fees :</div>
                  <div>ALPACA Rewards :</div>
                  <div>Borrowing Interest :</div>
                  <div>Total APR :</div>
                  <div>Daily APR :</div>
                </div>
                <div style="width: 40%"></div>
                <div class="farm_yield">
                  <div>{{data.yeild}}</div>
                  <div>{{data.tradding}}</div>
                  <div>{{data.alpaca}}</div>
                  <div class="farm_select">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div>{{data.total}}</div>
                  <div>{{data.daily}}</div>
                </div>
              </td>
              <td>
                <div><el-input-number v-model="num" controls-position="right" @change="handleChange" :min="data.min" :max="data.max" :step="0.25"></el-input-number></div>
              </td>
              <td class="operate-btn">
                <router-link to="/farm/farmchild" tag="div" class="btn btn-success" style="margin-top: 10px; border-color: #31c77f; background-color: #31c77f">Farm</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'

export default {
  data() {
    return {
      isShow: true,
      active: false,
      datalist:[
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/alpaca.svg',
          name: 'ALPACA-BNB',
          nameless: 'WaultSwap',
          num: '3.89M',
          history: '119.56%',
          current: '44.04%',
          yeild: '43.68%',
          tradding: '29.33%',
          alpaca: '11.39%',
          total: '78.73%',
          daily: '0.215%',
          min: 1,
          max: 2,
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/usdt.svg',
          name: 'ALPACA-USDT',
          nameless: 'WaultSwap',
          num: '5.82M',
          history: '173.78%',
          current: '56.05%',
          yeild: '74.36%',
          tradding: '36.96%',
          alpaca: '7.55%',
          total: '100.85%',
          daily: '0.276%',
          min: 1,
          max: 2.5,
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/bnb.svg',
          name: 'ALPACA-BUSD',
          nameless: 'PancakeSwap',
          num: '18M',
          history: '145.75%',
          current: '49.33%',
          yeild: '76.02%',
          tradding: '24.26%',
          alpaca: '11.56%',
          total: '90.03%',
          daily: '0.246%',
          min: 1,
          max: 2.5,
        }
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input1: '',
      num: 1,

    }
  },
  methods: {
    handleClick() {
      this.isShow = true;
      this.active = false
    },
    handleHide() {
      this.isShow = false;
      this.active = true
    },
    handleCancel() {
      this.active = false
    },
    handleChange(value) {
        console.log(value);
      },
    handleFarm() {
      function getProvider() {
          let web3Provide;
          async function getpro() {
              if (window.ethereum) {
                  web3Provide = window.ethereum;
                  try {
                      await window.ethereum.enable();
                  } catch (error) {
                      alert("User denied account access")
                  }
              } else {
                  // set the provider you want from Web3.providers
                  web3Provide = new Web3.providers.HttpProvider("http://localhost:8545");
              }
          }
          getpro();
          const web3 = new Web3(web3Provide)
          return web3;
        }
        let web3js = getProvider();//web3实例
        const claimABI = [
              {"stateMutability": "view", "type": "function", "name": "allowance", "inputs": [{"name": "arg0", "type": "address"}, {"name": "arg1", "type": "address"}], "outputs": [{"name": "", "type": "uint256"}], "gas": 1878}
        ]
        const myContract = new web3js.eth.Contract(claimABI, '0x7a199FD711A1723e941Ac49d8C9fF6AB80c70Df8')
        myContract.methods.allowance('0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7','0x7a199FD711A1723e941Ac49d8C9fF6AB80c70Df8').call().then((result)=>{
          console.log(result)
        })
          
    }

  }
}
</script>

<style>
.farm {
  background-color: #f4f4f4;
  width: 100%;
  height: 1200px
}
.farm_body{
  position: absolute;
  top: 150px;
  right: 50px;
  left: 300px;
  /* bottom: 50px; */
}
.farm h1 {
  font-size: 22px;
  font-weight: 600;
}
.farm .farm_img {
  display: flex;
  align-items: center;
}
.farm .farm_take {
  display: flex;
  align-items: center;
  padding: 0 50px;
  background-color: rgb(32, 32, 32);
  color: #fff;
  /* width: 80px; */
  height: 100px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 400px;
  border-radius: 10px;
}.farm .farm_3x {
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 0 20px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
}
.farm .farm_3x>span:first-child {
  color: #000;
  font-size: 24px;
  font-weight: 500;
  text-decoration: line-through;
  margin-right: 10px;
}
.farm .farm_3x>span:last-child {
  color: rgb(49, 199, 127);
  font-size: 24px;
  font-weight: 700;
}
.farm .farm_img img {
  width: 100px;
  height: 100px;
}
.farm .farm_article, .farm_header {
  margin-top: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 3px 5px 5px #ccc;
}
 .farm .farm_header {
   margin-top: 0;
   padding: 40px 30px;
 }
  .farm .farm_header .farm_position {
    display: flex;
    align-items: center;
  }.farm .farm_header .farm_active>div:first-child {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .farm .farm_header .farm_active>div:nth-child(2){
    display: flex;
    align-items: center;
  }
.farm .farm_header .farm_active .farmShow {
  background-color: rgb(49, 199, 127);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}
.farm .farm_header .farm_active .farmHide {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color:#999;
  font-size: 15px;
}
.farm .farm_header .farm_active .farmShow,.farmHide:hover {
  cursor: pointer;
}
.farm .article_header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100px;
}
.farm .farm_earn {
  display: flex;
  align-items: center;
  height: 100px;
  background-color: rgb(238, 236, 236);
  border-radius: 10px;
  box-shadow: 3px 3px 10px #ddd;
  padding: 0 30px;
}
.farm .farm_earn>div:first-child {
  margin-right: 20px;
}
.farm .farm_earn>div:first-child>div:nth-child(2) {
  color:rgb(49, 199, 127);
  font-size: 24px;
  font-weight: 700;
}
.farm .farm_earn>div:last-child {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  background-color: rgb(49, 199, 127);
  color: #fff;
  border-radius: 20px;
  font-weight: 600;
  }
.farm .farm_earn>div:last-child:hover {
  cursor: pointer;;;
}
  .farm .farm_header_footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    color: #999;
    font-size: 25px;
    font-weight: 600;
  }
  .farm .farm_svg {
    margin-top: 20px;
    background-color: #f0fff5;
    border-radius: 10px;
    padding-bottom: 10px;
  }
 .farm .farm_svg div:first-child {
   display: flex;
   align-items: center;
   margin: 10px 10px;
 }
 .farm .farm_svg div:first-child>svg {
   color: rgb(49, 199, 127);
   font-size: 20px;
 }
 .farm .farm_svg>div:nth-child(2){
   color: #999;
   font-size: 14px;
   margin: 10px 50px;
 }
.farm .farm_paginat {
  display: flex;
  align-items: center;
}
.farm .farm_first_el {
  margin-top: 0;
}
.farm .farm_farm, .farm_img, .farm_all{
  display: flex;
  align-items: center;
}
.farm .farm_img img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}.farm .farm_button {
  padding: 0px 20px;
}.farm .farm_all>div:first-child{
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgb(49, 199, 127);
  font-weight: 600;
}
.farm .farm_farm>div:first-child {
  margin-right: 10px;
  color:#666;
  font-size: 14px;
  font-weight: 600;
}
.farm .farm_all>div{
  border-radius: 10px;
  height: 40px;
  padding: 0 30px;
  background-color: #ddd;
  margin-right: 10px;
  color: #555;
  font-size: 13px;
  font-weight: 500;
}
.farm .farm_all>div:hover {
  cursor: pointer;
}
.farm .farm_sort {
  margin-left: 25px;
  padding-left: 30px;
  border-left: 1px solid #aaa;
  color: #999;
  font-size: 13px;
  font-weight: 600;
  margin-right: 10px;
}
.farm .farm_paired{
  margin-top: 20px;
}
.farm table {
  margin: 40px 20px;
}
.farm table thead tr{
  color: #888;
  font-size: 14px;
}
.farm table tbody td {
  vertical-align: middle;
}
.farm .data-title h4{
  font-size: 16px;
  font-weight: 700;
  color:rgb(49, 199, 127)
}
.farm .data-title h4+div{
  font-size: 14px;
  color:#888;
  margin-bottom: 10px;
}
.farm .farm_tvl {
  font-size: 15px;
}
.farm .farm_APR>div:first-child{
  color:rgb(49, 199, 127);
  font-size: 18px;
  font-weight: 600;
}
.farm .farm_APR>div:nth-child(2) {
  color:#000;
  font-size: 18px;
  font-weight: 600;
}
.farm .farm_APR>div:last-child {
  width: 70px;
  border-top: 3px solid rgb(49, 199, 127);
  margin-top: -15px;
  margin-bottom: 20px;
}
.farm .farm_yield {
  font-size: 14px;
  color: #666;
}.farm .farm_select {
  /* height: 10px; */
}
</style>
