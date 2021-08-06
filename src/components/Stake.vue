<template>
  <div class="stake">
    <div class="stake_body">
      <div class="stake_header">
        <h5>Your Rewards Summary</h5>
        <div>
          <div>
            <div>
              <div>ALPACA earned :</div>
              <div>0.00</div>
            </div>
            <div>
              <a href="https://rebrand.ly/imbhdlt"><img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/LaserHeadfront.svg" alt=""></a>
            </div>
          </div>
          <div>
            <div>
              <div><svg viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg></div>
              <div>
                <div>Your ALPACA</div>
                <div>Wallet Balance :</div>
              </div>
              <div>0.00</div>
              <div @click="addToken" class="stake_point">
                <div>+</div>
                <div><img src="../assets/images/AAVE.png" alt=""></div>
              </div>
            </div>
            <div class="stake_header_right">
              <div>
                <div>
                  <div><svg viewBox="64 64 896 896" focusable="false" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"></path></svg></div>
                  <div>
                    <div>Remaining</div>
                    <div>Locked Amount :</div>
                  </div>
                </div>
                <div>0.00</div>
                <div>Your locked rewards are linearly released over 7 days starting from block# 6,499,649 to block# 6,699,649</div>
              </div>
              <div>
                <div>
                  <div><img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/logo512.png" alt=""></div>
                  <div>
                    <div>Unlocked</div>
                    <div>Rewards :</div>
                  </div>
                </div>
                <div>0.00</div>
                <div>Claim</div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="stake_article">
        <h5>7 Available Staking Opportunities</h5>
        <div v-for="(data,index) in datalist" :key="data.name">
          <div @click="handleShow(index)" class="stake_point">
            <div>Stake <span style="margin: 0 5px">{{data.name}}</span> to earn ALPACA rewards</div>
            <div>
              <div>
                <img :src="data.img" alt="">
              </div>
              <div>ibALPACA</div>
              <div>
                <div>
                  <div>APY{{data.apy}}</div>
                  <div><svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></div>
                </div>
                <div>APR{{data.apr}}</div>
              </div>
              <div>
                <div><span>Staked Balance:</span><span class="stake_numGreen">0.00 ibALPACA (~0.00 ALPACA)</span></div>
                <div><span>ALPACA Earned:</span><span class="stake_numGreen">0.00</span></div>
              </div>
            <div><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
          <!-- hide -->
          <div class="graze_hide" v-if="current == index ? isShow:''">
            <div>
              <div>I want to stake</div>
              <div>Available ibALPACA Balance: 0.00</div>
              <div>
                <el-input-number v-model="num1" controls-position="right" @change="handleChange" :min="0" :max="100"></el-input-number>
                <div class="stake_point graze_hideMax1" @click="handleMax1">Max</div>
              </div>
              <div class="stake_point graze_approve2">Approve</div>
            </div>
            <div>
              <div>I want to unstake</div>
              <div>Staked ibALPACA Balance: 0.00</div>
              <div>
                <el-input-number v-model="num2" controls-position="right" @change="handleChange" :min="0" :max="100"></el-input-number>
                <div class="stake_point" @click="handleMax2">Max</div>
              </div>
              <div class="stake_point">Unstake</div>
            </div>
            <div>
              <div>Total ORBS Rewards:</div>
              <div>0.00</div>
              <div class="stake_point graze_claim1">Claim</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      isShow: false,
      current: 0,
      datalist: [
        {
          name: 'ibALPACA',
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/logo512.png',
          apy: '14.42%',
          apr: '13.47%'
        },
        {
          name: 'ibBNB',
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/ib-bnb.svg',
          apy: '5.32%',
          apr: '5.18%'
        },
        {
          name: 'ibUSDT',
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/ib-busd.svg',
          apy: '4.37%',
          apr: '4.27%'
        },
        {
          name: 'ibTUSD',
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/ib-tusd.svg',
          apy: '11.42%',
          apr: '10.82%'
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleShow(index) {
      this.current = index
      this.isShow = !this.isShow
    },
    handleMax1() {
      this.num1 = 100
    },
    handleMax2() {
      this.num2 = 100
    },
    async addToken() {
      // let amount =  new BigNumber(1*1e18)
      const tokenAddress = '0x7d3341D090250399F45C6B43996A88c42E5B47Fe';
      let tokenSymbol = "CAKE";
      const tokenDecimals = 18;
      let tokenImage = 'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png';
      try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
          },
          },
      });
      if (wasAdded) {
          console.log('Thanks for your interest!');
      } else {
          console.log('Your loss!');
      }
      } catch (error) {
      console.log(error);
      }
    }
  }
}
</script>
<style scoped>
.stake {
  background-color: #f4f4f4;
  height: 1600px;
  width: 100%
  }
.stake_body {
  position: absolute;
  top: 150px;
  left: 300px;
  right: 50px
}
.stake_body .stake_header,.stake_body .stake_article {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 5px 5px #ccc;
  margin-bottom: 20px;
}
.stake_body .stake_header {
  padding: 40px 30px;
}
.stake_body .stake_header h5 {
  font-size: 25px;
  text-shadow: 0.5px 0.5px 1px #999;
  font-weight: 700;
  margin-bottom: 20px;
}
.stake_body .stake_header>div {
  display: flex;
  align-items: center;
}
.stake_body .stake_header>div>div {
  flex: 1 0 50%;
}
.stake_body .stake_header>div>div:first-child {
  display: flex;
  align-items: center;
  background: linear-gradient(108.1deg,#2dea8f,#31c77f 48.54%,#1da765);
  border-radius: 15px;
  margin-right: 20px;
  color: #fff;
}
.stake_body .stake_header>div>div:first-child>div:first-child {
  margin-left: 30px;
  flex: 1 0 50%;
}
.stake_body .stake_header>div>div:first-child>div:first-child>div:last-child {
  font-weight: 700;
  font-size: 55px;
}
.stake_body .stake_header>div>div:first-child>div:first-child>div:first-child {
  font-weight: 600;
  font-size: 18px;
}
.stake_body .stake_header>div>div:last-child>div {
  margin-right: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.stake_body .stake_header>div>div:last-child>div:first-child {
  border: 1px solid #eee;
  height: 120px;
  border-radius: 15px;
}
.stake_body .stake_header>div>div:last-child>div:first-child>div:first-child {
  margin: 0 20px;
  font-size: 25px;
  color: #31c77f;
}
.stake_body .stake_header>div>div:last-child>div:first-child>div:nth-child(2){
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0.5px 0.5px 0.5px #aaa;
  margin-right: 20px;
}
.stake_body .stake_header>div>div:last-child>div:first-child>div:nth-child(3) {
  color: #31c77f;
  font-size: 60px;
  font-weight: 500;
  margin-right: 20px;
}
.stake_body .stake_header>div>div:last-child>div:first-child>div:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #31c77f;
  padding: 0 10px;
  height: 26px;
  border-radius: 13px;
}
.stake_body .stake_header>div>div:last-child>div:first-child>div:last-child img {
  width: 15px;
  height: 15px;
}
.stake_body .stake_header>div>div:last-child>div:first-child>div:last-child>div:first-child {
  font-size: 20px;
  color:#fff;
  font-weight: 700;
  margin-right: 5px;
}
.stake_body .stake_header_right {
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 20px 0;
}
.stake_body .stake_header_right>div:first-child {
  flex: 1 0 50%
}
.stake_body .stake_header_right>div:first-child>div:first-child {
  display: flex;
  align-items: center;
}
.stake_body .stake_header_right>div:first-child>div:first-child>div:first-child {
  font-size: 25px;
  color: #31c77f;
  margin: 0 20px;
}
.stake_body .stake_header_right>div:first-child>div:first-child>div:last-child {
  color: #666;
  font-size: 14px;
}
.stake_body .stake_header_right>div:first-child>div:nth-child(2) {
  color: #31c77f;
  font-size: 25px;
  margin-left: 70px;
  margin-bottom: 20px;
}
.stake_body .stake_header_right>div:first-child>div:nth-child(3) {
  font-size: 13px;
  color: #aaa;
  margin-left: 20px;
}
.stake_body .stake_header_right>div:last-child {
  flex: 1 0 50%;
  padding: 0 20px;
  border-left: 1px solid #eee;
}
.stake_body .stake_header_right>div:last-child img {
  width: 25px;
  height: 25px;
  margin-right: 20px;
}
.stake_body .stake_header_right>div:last-child>div:first-child {
  display: flex;
  align-items: center;
}
.stake_body .stake_header_right>div:last-child>div:first-child>div:last-child {
  color: #666;
  font-size: 14px;
}
.stake_body .stake_header_right>div:last-child>div:nth-child(2) {
  color: #31c77f;
  font-size: 25px;
  margin-left: 50px;
  margin-bottom: 20px;
}
.stake_body .stake_header_right>div:last-child>div:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #eee;
  color: #bbb;
  font-weight: 600;
}
.stake_body .stake_article {
  padding: 60px;
  margin-bottom: 50px;
}
.stake_body .stake_article h5 {
  font-size: 25px;
  text-shadow: 0.5px 0.5px 1px #999;
  font-weight: 700;
  margin-bottom: 40px;
}
.stake_body .stake_article>div {
  margin-bottom: 50PX;
}
.stake_body .stake_article>div>div:first-of-type>div:first-of-type {
  display: flex;
  align-items: center;
  font-size: 18px;
  text-shadow: 0.3px 0.3px 0.3px #aaa;
  margin-bottom: 10px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:first-child{
  flex: 1 0 100px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child img {
  width: 70px;
  height: 70px
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(2) {
  flex: 1 0 300px;
  font-weight: 700;
  font-size: 18px;
  text-shadow: 0.43px 0.3px 0.3px #aaa;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(3) {
  flex: 1 0 200px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(3)>div:first-child {
  display: flex;
  align-items: center;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(3)>div:first-child>div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #31c77f;
  padding: 7px 0;
  width: 200px;;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  margin-right: 10px;
  margin-bottom: 8px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(3)>div:first-child>div:last-child {
  font-size: 20px;
  color: #888
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(3)>div:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2dea8f;
  padding: 7px 0;
  width: 200px;;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(4) {
  flex: 1 0 400px;
}
.stake_body .stake_article>div>div:first-of-type>div:last-child>div:nth-child(4)>div {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  margin-top: 5px;
}
.stake_body .stake_article>div>div:first-of-type .stake_numGreen {
  color: #31c77f;
  margin-left: 10px;
}
.graze_hide {
  background-color: #f6f6f6;
  padding: 40px;
  display: flex;
  align-items: center;
}
.graze_hide>div {
  font-size: 15px;
}
.graze_hide .el-input-number {
  width: 80%;
}
.graze_hide>div:first-child{
  flex: 3 0 400px;
  margin-right: 30px;
}
.graze_hide>div:first-child>div:first-child {
  font-weight: 600;
  color:rgb(39, 38, 38)
}
.graze_hide>div:first-child>div:nth-child(2) {
  color: #555
}
.graze_hide>div:first-child>div:nth-child(3) {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
}
.graze_hide>div:first-child>div:nth-child(3) .graze_hideMax1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-weight: 600;
  color: #31c77f;
}
.graze_hide>div:first-child .graze_approve2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  color: #999;
  border: 3px solid #999;
}
.graze_hide>div:nth-child(2) {
  flex: 3 0 400px;
  margin-right: 30px;
}
.graze_hide>div:nth-child(2)>div:first-child {
  font-weight: 600;
  color:rgb(39, 38, 38)
}
.graze_hide>div:nth-child(2)>div:nth-child(2) {
  color: #555
}
.graze_hide>div:nth-child(2)>div:nth-child(3) {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
}
.graze_hide>div:nth-child(2)>div:nth-child(3)>div:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  color: #31c77f;
  font-weight: 600;
}
.graze_hide>div:nth-child(2)>div:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #31c77f;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  border: 3px solid #31c77f;
}
.graze_hide>div:last-child {
  flex: 2 0 200px;
  padding-left: 30px;
  text-align: center;
}
.graze_hide>div:last-child>div:first-child{
  font-size: 15px;
  color: #999
}
.graze_hide>div:last-child>div:nth-child(2){
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #31c77f;
  font-size: 32px;
  font-weight: 600;
  margin-left: 5px;
}
.graze_hide>div:last-child .graze_claim1{
  display: flex;
  align-items: center;
  justify-content: center;  
  border-radius: 10px;
  height: 40px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  border: 3px solid #31c77f;
  color: #31c77f;
}
.stake_point:hover {
  cursor: pointer;
}
</style>