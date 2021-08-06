<template>
  <div class="graze">
    <div class="graze_body">
      <div class="graze_header">
        <h5>Grazing Range</h5>
        <div>The Grazing Range is where the herd can come to graze on rare crops.</div>
        <div>Stake your ibALPACA to earn rewards of your choice.</div>
        <div>No risks. High APYs. Happy Alpacas.</div>
      </div>
      <div class="graze_article">
        <div class="graze_botton">
          <div class="graze_point" :class="isHide ? 'graze_com':'graze_live'" @click="handleLive">Live</div>
          <div class="graze_point" :class="isHide ? 'graze_live':'graze_com'" @click="handleCom">Completed</div>
          <div>
            <el-switch
              class="graze_point"
              v-model="value1"
              active-color="#31c77f"
              inactive-color="#bbb">
            </el-switch>
            <div>Staked only</div>
          </div>
        </div>
        <div v-for="(data,index) in datalist" :key="data.name">
          <div class="graze_section graze_point" @click="handleHideorShow(index)">
            <div>
              <img :src="data.img" alt="">
            </div>
            <div>
              <div>
                <div class="graze_orbs">{{data.name}}</div>
                <div>
                  <span>+</span>
                  <img src="../assets/images/AAVE.png" alt="">
                </div>
              </div>
              <div>View project site</div>
            </div>
            <div>
              <div>
                <div :class="isHide ? 'graze_botton3':'graze_botton1'">APY  {{data.apy}}</div>
                <div><svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></div>
              </div>
              <div :class="isHide ? 'graze_botton4':'graze_botton2'">APR  {{data.apr}}</div>
            </div>
            <div>
              <div>
                <div>Your ibALPACA staked :</div>
                <div>0.00</div>
              </div>
              <div>
                <div>% share of pool :</div>
                <div>0.00%</div>
              </div>
              <div>
                <div>TVL (USD) :</div>
                <div>{{data.tvl}}</div>
              </div>
              <div>
                <div class="graze_rew">
                  <div>Rewards end in</div>
                  <div><svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg> :</div>
                </div>
                <div>
                  <div :class="isHide ? 'graze_day1':'graze_day'">
                    <div>12</div>
                    <div>days</div>
                  </div>
                  <div :class="isHide ? 'graze_day1':'graze_day'">
                    <div>12</div>
                    <div>hrs</div>
                  </div>
                  <div :class="isHide ? 'graze_day1':'graze_day'">
                    <div>12</div>
                    <div>mins</div>
                  </div>
                  <div :class="isHide ? 'graze_day1':'graze_day'">
                    <div>12</div>
                    <div>secs</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>ORBS Earned :</div>
              <div :class="isHide ? 'graze_number2':'graze_number1'">0.00</div>
            </div>
          </div>
          <!-- hide -->
          <div class="graze_hide" v-if="current == index ? isShow:''">
            <div>
              <div>I want to stake</div>
              <div>Available ibALPACA Balance: 0.00</div>
              <div>
                <el-input-number v-model="num1" controls-position="right" @change="handleChange" :min="0" :max="100"></el-input-number>
                <div @click="handleMax1" class="graze_point" :class="isHide ? 'graze_hideMax2':'graze_hideMax1'">Max</div>
              </div>
              <div class="graze_point" :class="isHide ? 'graze_approve2':'graze_approve1'">Approve</div>
            </div>
            <div>
              <div>I want to unstake</div>
              <div>Staked ibALPACA Balance: 0.00</div>
              <div>
                <el-input-number v-model="num2" controls-position="right" @change="handleChange" :min="0" :max="100"></el-input-number>
                <div @click="handleMax2" class="graze_point">Max</div>
              </div>
              <div class="graze_point">Unstake</div>
            </div>
            <div>
              <div>Total ORBS Rewards:</div>
              <div>
                <img :src="data.img" alt="">
                <span>0.00</span>
              </div>
              <div class="graze_point" :class="isHide ? 'graze_claim2':'graze_claim1'">Claim</div>
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
      value1: '',
      num1: 0,
      num2: 0,
      isShow: false,
      current: 0,
      isHide: false,
      datalist: [
        {
          img: 'https://alpaca-app-asset.s3.ap-southeast-1.amazonaws.com/icons/coins/orbs.svg',
          name: 'ORBC',
          apy: '15.01%',
          apr: '13.99%',
          tvl: '7.86M',
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/wex.svg',
          name: 'WEX',
          apy: '14.57%',
          apr: '13.6%',
          tvl: '6.09M',
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/grayscale-alpaca.svg',
          name: 'proj',
          apy: '???%',
          apr: '???%',
          tvl: '???',
        }
      ],
      datalist1: [
        {
          img: 'https://alpaca-app-asset.s3.ap-southeast-1.amazonaws.com/icons/coins/orbs.svg',
          name: 'ORBC',
          apy: '15.01%',
          apr: '13.99%',
          tvl: '7.86M',
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/wex.svg',
          name: 'WEX',
          apy: '14.57%',
          apr: '13.6%',
          tvl: '6.09M',
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/grayscale-alpaca.svg',
          name: 'proj',
          apy: '???%',
          apr: '???%',
          tvl: '???',
        }
      ],
      datalist2: [
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/bMXX.svg',
          name: 'bMXX',
          apy: '0.00%',
          apr: '0.00%',
          tvl: '167.62K',
        },
        {
          img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/belt.svg',
          name: 'BELT',
          apy: '0.00%',
          apr: '0.00%',
          tvl: '25.4K',
        },
        {
          img: 'https://assets.coingecko.com/coins/images/12917/small/bor_logo.png?1603607502',
          name: 'BOR',
          apy: '0.00%',
          apr: '0.00%',
          tvl: '18.82K',
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleLive() {
      this.isHide = false
      this.datalist = this.datalist1
    },
    handleCom() {
      this.isHide = true
      this.datalist = this.datalist2
    },
    handleHideorShow(index) {
      this.current = index
      this.isShow = !this.isShow
    },
    handleMax1() {
      this.num1 = 100;
    },
    handleMax2() {
      this.num2 = 100
    }
  }
}
</script>
<style scoped>
.graze{
  background-color: #f4f4f4;
  height: 1000px;
  width: 100%;
}
.graze .graze_body{
  position: absolute;
  top: 150px;
  left: 300px;
  right: 100px;
  background-color: #fff !important;
  border-radius: 20px;
  box-shadow: 3px 5px 5px #ccc;
  background: url('../assets/images/graze-range.svg') no-repeat;
  background-position: 90% 80px;
  padding: 80px 60px;
}
.graze_header h5{
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 20px;
}
.graze_header>div{
  font-size: 17px;
  color: rgb(94, 92, 92)
}
.graze_article {
  z-index: 100;
  margin-top: 60px;
  margin-bottom: 60px;
}
.graze_article .graze_botton {
  display: flex;
  align-items: center;
}
.graze_article .graze_botton>div:last-child {
  display: flex;
  align-items: center;
  border-left: 1px solid #aaa;
  padding: 0 20px;
}
.graze_article .graze_botton>div:last-child>div {
  color: rgb(94, 92, 92);
  margin-left: 10px;
}
.graze_article .graze_live {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 30px;
  border-radius: 20px;
  background-color: #31c77f;
  font-size: 16px;
  font-weight: 700;
  color: #fff
}
.graze_article .graze_com {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 40px;
  color: #aaa;
  font-weight: 600;
  margin-right: 20px;
}
.graze .graze_section {
  overflow: hidden;
  border: 1px solid #bbb;
  padding:15px 0;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.graze .graze_section>div:first-child {
  flex: 1 0 70px;
  margin-left: 30px;

}
.graze .graze_section>div:first-child img{
  width: 60px;
  height: 60px
}
.graze .graze_section>div:nth-child(2) {
  flex: 2 0 180px
}
.graze .graze_section>div:nth-child(2)>div:first-child {
  display: flex;
  align-items: center;
}
.graze .graze_section>div:nth-child(2) .graze_orbs {
  font-size: 16px;
  font-weight: 700;
  text-shadow: 0.5px 0.5px 1px #aaa;
  margin-right: 10px;
}
.graze .graze_section>div:nth-child(2) .graze_orbs+div{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #31c77f;
  padding: 0 10px;
  border-radius: 13px;
  height: 26px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.graze .graze_section>div:nth-child(2) .graze_orbs+div>img{
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
.graze .graze_section>div:nth-child(2)>div:last-child {
  color: #31c77f;
  font-weight: 500;
  text-shadow: 0.5px 0.5px 1px;
}
.graze .graze_section>div:nth-child(3) {
  flex: 3 0 200px
}
.graze .graze_section>div:nth-child(3)>div:first-child{
  display: flex;
  align-items: center;
}
.graze .graze_section>div:nth-child(3) .graze_botton1,.graze .graze_section>div:nth-child(3) .graze_botton3{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 180px;

  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
}
.graze .graze_section>div:nth-child(3) .graze_botton1 {
  background-color: #31c77f;
}
.graze .graze_section>div:nth-child(3) .graze_botton3 {
  background-color: #aaa;
}
.graze .graze_section>div:nth-child(3)>div:first-child>div:last-child {
  margin-top: -5px;
  margin-left: 10px;
  font-size: 20px;
  color: #888;
}
.graze .graze_section>div:nth-child(3)>.graze_botton2,.graze .graze_section>div:nth-child(3)>.graze_botton4{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;

  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  margin-top: 10px;
}
.graze .graze_section>div:nth-child(3)>.graze_botton2 {
  background-color: #2dea8f;
}
.graze .graze_section>div:nth-child(3)>.graze_botton4 {
  background-color: #ccc;
}
.graze .graze_section>div:nth-child(4) {
  margin: 10px 0;
  padding-left: 10px;
  border-left: 1px solid #ccc;
  flex: 4 0 400px;
  font-size: 12px;
  color: #777;
}
.graze .graze_section>div:nth-child(4)>div {
  display: flex;
  align-items: center;
}
.graze .graze_section>div:nth-child(4)>div>div:first-child{
  flex: 2 0 300px;
}
.graze .graze_section>div:nth-child(4)>div>div:last-child {
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1 0 200px
}
.graze .graze_section>div:nth-child(4) .graze_day,.graze .graze_section>div:nth-child(4) .graze_day1 {
  background-color: #eee;
  border-radius: 5px;
  width: 35px;
  height: 50px;
  text-align: center;
  margin-left: 2px;
}
.graze .graze_section>div:nth-child(4) .graze_day {
  color: #31c77f;
}
.graze .graze_section>div:nth-child(4) .graze_day1 {
  color: #aaa
}
.graze .graze_section>div:nth-child(4) .graze_day>div:first-child,.graze .graze_section>div:nth-child(4) .graze_day1>div:first-child {
  font-size: 16px;
  font-weight: 600;
}
.graze .graze_section>div:nth-child(4) .graze_day>div:last-child,.graze .graze_section>div:nth-child(4) .graze_day1>div:last-child {
  font-size: 13px;
  font-weight: 600;
}.graze .graze_section>div:nth-child(4) .graze_rew {
  display: flex;
  align-items: center;
}
.graze .graze_section>div:nth-child(4) .graze_rew svg {
  margin-left: 5px;
  margin-top: -3px;
}
.graze .graze_section>div:last-child {
  flex: 2 0 200px;
  text-align: center;
}
.graze .graze_section>div:last-child>div:first-child {
  font-weight: 600;
  color: #000;
  text-shadow: 0.5px 0.5px 0.5px;
}
.graze .graze_section>div:last-child .graze_number1{
  font-weight: 700;
  font-size: 18px;
  color: #31c77f;
}
.graze .graze_section>div:last-child .graze_number2 {
  font-weight: 700;
  font-size: 18px;
  color: #aaa;
}
.graze_point:hover {
  cursor: pointer;
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
.graze_hide>div:first-child>div:nth-child(3) .graze_hideMax1,.graze_hide>div:first-child>div:nth-child(3) .graze_hideMax2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-weight: 600;
}
.graze_hide>div:first-child>div:nth-child(3) .graze_hideMax1 {
  color: #31c77f;
}
.graze_hide>div:first-child>div:nth-child(3) .graze_hideMax2 {
  color: #999
}
.graze_hide>div:first-child .graze_approve1,.graze_hide>div:first-child .graze_approve2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  height: 40px;
  width: 100%;
}
.graze_hide>div:first-child .graze_approve1 {
  color: #31c77f;
  border: 3px solid #31c77f;
}
.graze_hide>div:first-child .graze_approve2 {
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
  color: #555
}
.graze_hide>div:last-child>div:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.graze_hide>div:last-child>div:nth-child(2) span {
  color: #31c77f;
  font-size: 32px;
  font-weight: 600;
  margin-left: 5px;
}
.graze_hide>div:last-child .graze_claim1,.graze_hide>div:last-child .graze_claim2 {
  display: flex;
  align-items: center;
  justify-content: center;  
  border-radius: 10px;
  height: 40px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
}
.graze_hide>div:last-child .graze_claim1 {
  border: 3px solid #31c77f;
  color: #31c77f;
}
.graze_hide>div:last-child .graze_claim2 {
  border: 3px solid #999;
  color: #999;
}
</style>