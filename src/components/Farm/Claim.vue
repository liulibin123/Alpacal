<template>
    <div class="claim">
        <div class="claim_body">
            <div class="claim_header">
                <div>Available Leveraged Yield Farming Rewards</div>
                <div>
                    <div :class="isShow ? 'claim_show':'claim_hide'" @click="handleChange">ALPACA Rewards</div>
                    <div :class="!isShow ? 'claim_show':'claim_hide'" @click="handleClick">Featured Pool Rewards</div>
                </div>
            </div>
            <div v-if="hide" class="claim_article">
                <div v-for="data in datalist" :key="data.img">
                    <div>
                        <img :src="data.img" alt="">
                    </div>
                    <div>
                        <div>Rewards from positions on</div>
                        <div>{{data.name}} pairs</div>
                    </div>
                    <div style="width: 23%"></div>
                    <div>
                        <div>ALPACA Earned :</div>
                        <div>0.00</div>
                    </div>
                    <div style="width: 15%"></div>
                    <div>Claim</div>
                </div>
            </div>
            <div v-else class="claim_else">
                <div>
                    <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/itam.svg" alt="">
                    <div>Campaign Completed</div>
                </div>
                <div class="claim_flex">
                    <div>1st week rewards (15/04 - 22/04):</div>
                    <div>0.00</div>
                    <div>claim</div>
                </div>
                <div class="claim_flex">
                    <div>1st week rewards (15/04 - 22/04):</div>
                    <div>0.00</div>
                    <div>claim</div>
                </div>
                <div class="claim_flex">
                    <div>1st week rewards (15/04 - 22/04):</div>
                    <div>0.00</div>
                    <div>claim</div>
                </div>
                <div class="claim_flex">
                    <div>1st week rewards (15/04 - 22/04):</div>
                    <div>0.00</div>
                    <div>claim</div>
                </div>
            </div>
            <div class="claim_footer">
                <div>
                    <i class="el-icon-arrow-left"></i>
                    <router-link to="/farm" id="claim_back">Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: true,
            hide: true,
            datalist: [
                {
                    img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/alpaca.svg',
                    name: 'ALPACA'
                },
                {
                    img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/bnb.svg',
                    name: 'BNB'
                },{
                    img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/busd.svg',
                    name: 'BUSD'
                },{
                    img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/eth.svg',
                    name: 'ETH'
                },{
                    img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/usdt.svg',
                    name: 'USDT'
                },{
                    img: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/tusd.svg',
                    name: 'TUSD'
                },
            ]
        }
    },
    methods: {
        handleChange() {
            this.isShow = true
            this.hide = true
        },
        handleClick() {
            this.isShow = false
            this.hide = false
        }
    }
}
</script>
<style scoped>
.claim {
    background-color: #f4f4f4;
    height: 1000px;
    width: 100%;
}
.claim .claim_body {
    position: absolute;
    top: 200px;
    left: 500px;
    background-color: #fff;
    padding: 30px;
    width: 55%;
    box-shadow: 3px 5px 5px #ccc;
    border-radius: 20px;
}.claim .claim_header>div:first-child {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 40px;
}
.claim .claim_header>div:last-child {
    display: flex;
    align-items: center;
}
.claim .claim_header>div:last-child>div:hover {
    cursor: pointer;
}
.claim .claim_header .claim_show {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px;
    background-color: #31c77f;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
}
.claim .claim_header .claim_hide {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color:#999;
    font-size: 15px;
}
.claim .claim_article {
    margin-top: 30px;
}
.claim .claim_article>div {
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    height: 120px;
    padding: 0 30px;
    margin-bottom: 10px;
}
.claim .claim_article>div img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
}
.claim .claim_article>div>div:nth-child(2){
    font-size: 18px;
    color:rgb(75, 77, 77)
}
.claim .claim_article>div>div:nth-child(4){
    text-align: center;
    font-size: 18px;
    color:rgb(75, 77, 77)
}
.claim .claim_article>div>div:nth-child(4)>div:nth-child(2){
    color:#31c77f;
    font-weight: 700;
    text-shadow: 1px 1px 1px rgb(68, 201, 128);
}
.claim .claim_article>div>div:last-child {
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #eee;
    color: #aaa;
    font-size: 18px;
}
.claim .claim_article>div>div:last-child:hover {
    cursor: pointer;
}
.claim .claim_footer {
    margin-top: 50px;
    margin-left: 20px;
}
.claim .claim_footer>div {
    display: flex;
    align-items: center;
}
.claim #claim_back{
    color: #777
}.claim .claim_else {
    margin-top: 30px;
    border: 1px solid #eee;
    padding: 40px 30px;
}
.claim .claim_else>div:first-child {
    display: flex;
    align-items: center;
}
.claim .claim_else>div:first-child>div {
    margin-left: 20px;
    font-size: 18px;
    text-shadow: 0.5px 0.5px 1px #bbb;
    color:#444;
}
.claim .claim_flex {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 18px;
    text-shadow: 0.5px 0.5px 1px #bbb;
    color:#444;
}
.claim .claim_flex>div:first-child {
    width: 60%;
}
.claim .claim_flex>div:nth-child(2){
    width: 25%;
}
.claim .claim_flex>div:last-child {
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #eee;
    color: #aaa;
    font-size: 18px;
}
</style>