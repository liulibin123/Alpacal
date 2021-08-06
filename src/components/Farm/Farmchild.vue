<template>
<div class="farmchild">
    <div class="farmchild_body">
        <div>Syrup Pools</div>
        <el-divider></el-divider>
        <div class="farmchild_img">
            <div>
                <span>Just stake some tokens to earn.</span><span>APR, low risk.</span>
            </div>
            <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/FarmerAlpaca.svg" alt="">
        </div>
        <div class="pool">
            <div class="pool_body">
                <div class="pool_header">
                    <div>
                        <img :src="imgsrc" alt="">
                        <div>
                            <h4 style="display:flex"><span style="margin-right: 5px">Auto</span><span>{{this.tokenname}}</span></h4>
                            <div>Automatic restaking</div>
                        </div>
                    </div>
                    <div>
                        <div>Recent CAKE profit</div>
                        <h4>0.0</h4>
                        <div>0 USD</div>
                    </div>
                    <div>
                        <div>APY</div>
                        <div>
                            <div>{{apy}}%</div>
                            <div>
                                <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM cSawQi"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Total staked</div>
                        <div>{{total}} CAKE</div>
                    </div>
                    <div>
                        <div>Ends in</div>
                        <div>-</div>
                    </div>
                    <div @click="handleShoworHide">
                        <div>{{name}}</div>
                        <i :class="isShow ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                    </div>
                </div>
                <div class="pool_article" v-if="isShow">
                    <div>
                        <div class="pool_point">
                            <div><a id="pool_href" :href="'https://pancakeswap.info/token/'+this.address">See Token Info</a></div>
                            <div>
                                <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                            </div>
                        </div>
                        <div class="pool_point">
                            <div>View Project Site</div>
                            <div><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg></div>
                        </div>
                        <div class="pool_point">
                            <div><a id="pool_href" :href="'https://bscscan.com/address/'+this.address">View Contract</a></div>
                            <div><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg></div>
                        </div>
                        <div class="pool_point">
                            <div @click="addToken">Add to Metamask</div>
                            <img src="../../assets/images/AAVE.png" alt="">
                        </div>
                        <div>
                            <div>
                                <div><svg viewBox="0 0 24 24" width="18px" color="secondary" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM dKlBvL"><path d="M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"></path></svg></div>
                                <div>Auto</div>
                            </div>
                            <div><svg viewBox="0 0 24 24" width="20px" height="20px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM wHVBz"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>RECENT CAKE PROFIT</div>
                            <div>
                                <div>0</div>
                                <div>0 USD</div>
                            </div>
                        </div>
                        <div>
                            <div>0.1% unstaking fee if withdrawn within 72h performance fee 2%</div>
                        </div>
                    </div>
                    <div>
                        <div>ENABLE POOL</div>
                        <div class="pool_point">Enable</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="farmchild_button">
            <div>
                <div>deposit coins</div>
                <div>
                    <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="0" :max="100" @click="handleDeposit"></el-input-number>
                    <div @click="handleMax1">max</div>
                </div>
                <div @click="handleDeposit">Deposit</div>
            </div>
            <div>
                <div>withdraw coins</div>
                <div>
                    <el-input-number v-model="num1" controls-position="right" @change="handleChange" :min="0" :max="100" @click="handleWithdraw"></el-input-number>
                    <div @click="handleMax2">max</div>
                </div>
                <div @click="handleWithdraw">Withdraw</div>
            </div>
            <div>
                <div>claim coins</div>
                <div>{{this.claimableRewardNum}}</div>
                <div @click="handleCliam">Claim</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import getProvider from '../../assets/js/getProvider'
import stableTotal from '../../assets/js/stable-total'
import stableUser from '../../assets/js/stable-user'
import claimableReward from '../../assets/js/claimableReward'
import allowance from '../../assets/js/allowance'
import approve from '../../assets/js/approve'
import BigNumber from 'bignumber.js'
import getReserve from '../../assets/js/getReserve'
export default {
    data() {
        return {
            num: 0,
            num1: 0,
            coins: 0,
            address: '',
            isShow: false,
            name: 'Details',
            total: '123',
            timer: {},
            tokenname: 'CAKE',
            imgsrc: '/img/token.58dc6f0d.svg',
            apy: 0,
            claimableRewardNum: 111
        }
    },
    methods: {
        handleShoworHide() {
            this.isShow = !this.isShow
            this.address = JSON.parse(localStorage.getItem('address'))
        },
        handleMax1() {
            this.num = 100
        },
        handleMax2() {
            this.num1 = 100
        },
        handleChange(value) {
            console.log(value);
        },
        handleDeposit() {
            let web3js = getProvider();//web3实例
            //判断是否approve
            allowance().then((result)=>{
                console.log(result)
                if(result < this.num || result == undefined){
                    approve('0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819','0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA');
                }
                else {
                    // approve('0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819','0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA');
                    let amount =  new BigNumber(this.num*1e18);  
                    const depositABI = [{
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                            }
                        ],
                        "name": "deposit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        }
                    ]
                    const myContract1 = new web3js.eth.Contract(depositABI, '0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA')
                    myContract1.methods.deposit(amount.toString()).send({from: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',gas: 10000000}).then(result=>{
                        console.log(result)
                    })
                }
            })         
        },
        handleWithdraw() {
            let web3js = getProvider();//web3实例
            allowance().then(result=>{
                if(result < this.num1 || result == undefined){
                    approve('0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819','0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA');
                }
                else {
                    let amount =  new BigNumber(this.num1*1e18);
                    const widthdrawABI = [{
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                            }
                        ],
                        "name": "withdraw",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        }
                    ]
                    const myContract = new web3js.eth.Contract(widthdrawABI, '0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA')
                    myContract.methods.withdraw(amount.toString()).send({from: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',gas: 10000000}).then(result=>{
                        console.log(result)
                    })
                }
            })
        },
        handleCliam() {
            let web3js = getProvider();//web3实例
            allowance().then(result=>{
                if(result < this.num || result == undefined){
                    approve('0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819','0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA');
                }else {
                    const claimABI = [{
                    "inputs": [],
                    "name": "claim",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                    }]
                    const myContract = new web3js.eth.Contract(claimABI, '0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA')
                    myContract.methods.claim().send({from: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',gas: 10000000}).then(result=>{
                        console.log(result)
                    })
                }
            })      
        },
        async addToken() {
            // let amount =  new BigNumber(1*1e18)
            const tokenAddress = '0x7d3341D090250399F45C6B43996A88c42E5B47Fe';
            let tokenSymbol = this.tokenname;
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
        },
        
    },
    mounted() {
        //claimableReward
        allowance().then((result)=>{
            if(result < this.num || result == undefined){
                approve('0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819','0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA');
            }else {
                claimableReward().then(result => {
                    this.claimableRewardNum = result.toFixed(4)
                })
            }
        })
        

        //total
        allowance().then((result)=>{
            if(result < this.num || result == undefined){
                approve('0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819','0x7d3341D090250399F45C6B43996A88c42E5B47Fe')
            }else {
                // allowance()
                stableTotal().then((result=>{
                    this.total = result.toFixed(2)
                }))
                stableUser().then((value)=>{
                    console.log(value)
                })
            }
        })

        
        //apy
        getReserve(this.claimableRewardNum).then((result)=>{
            this.apy = result
        })


        //开启循环
        this.timer = setInterval(()=>{
            stableTotal().then((result)=>{
                this.total = result.toFixed(2)
            })
            claimableReward().then(result=>{
                this.claimableRewardNum = result.toFixed(4)
            })
            getReserve(this.claimableRewardNum).then((result)=>{
            this.apy = result
        })
        },6e4)



        
        
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>
<style scoped>
.farmchild {
    background-color: #f4f4f4;
    height: 700px;
    width: 100%;
}
.farmchild .farmchild_body {
    position: absolute;
    top: 200px;
    left: 500px;
    background-color: #fff;
    padding: 30px;
    width: 60%;
    box-shadow: 3px 5px 5px #ccc;
    border-radius: 20px;
}
.farmchild .farmchild_body>div:first-child {
    font-size: 30px;
    font-weight: 700;
    color: #444;
    margin-left: 200px;
}
.farmchild .farmchild_img {
    display: flex;
    align-items: center;
}
.farmchild .farmchild_img img {
    width: 150px;
    height: 150px;
}
.farmchild .farmchild_img>div {
    font-size: 20px;
    font-weight: 600;
    background-color: rgb(49, 47, 47);
    color: #fff;
    border-radius: 10px;
    height: 100px;
    line-height: 50px;
    padding: 0 30px;
    margin-left: 20px;
}
.pool_header {
    padding: 0 40px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    height: 100px;
    font-size: 12px;
    color:rgb(122, 110, 170)
}
.pool_header>div:first-child{
    display: flex;
    flex: 1 0 150px;
    align-items: center;
}
.pool_header img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.pool_header>div:first-child h4 {
    font-size: 17px;
    font-weight: 600;
    color: rgb(40, 13, 95)
}
.pool_header>div:first-child>div>div {
    font-weight: 400;
    color: rgb(122, 110, 170);
}
.pool_header>div:nth-child(2) {
    font-size: 12px;
    flex: 1 0 120px;
    margin: 0 100px 0 50px;
}
.pool_header>div:nth-child(2)>div:first-child {
    color: rgb(122, 110, 170);
}
.pool_header>div:nth-child(2)>h4 {
    font-size: 13px;
    font-weight: 600;
    color: rgb(189, 194, 196);
    margin-bottom: -1px;
}
.pool_header>div:nth-child(2)>div:last-child {
    color: rgb(189, 194, 196);
}
.pool_header>div:nth-child(3) {
    flex: 0 0 120px;
}
.pool_header>div:nth-child(3)>div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(40, 13, 95)
}
.pool_header>div:nth-child(3)>div:nth-child(2) svg {
    fill: rgb(122, 110, 170);
    margin-left: 50px;
}
.pool_header>div:nth-child(4) {
    margin: 0 100px 0 20px;
    flex: 2 0 100px;
}
.pool_header>div:nth-child(4)>div:nth-child(2) {
    font-size: 14px;
    font-weight: 600;
    color: rgb(40, 13, 95)
}
.pool_header>div:nth-child(5) {
    flex: 2 0 100px;
}
.pool_header>div:nth-child(5)>div:nth-child(2) {
    font-size: 18px;
    font-weight: 700;
}
.pool_header>div:last-child {
    display: flex;
    flex: 0 0 120px;
    color: rgb(31, 199, 212);
    font-size: 16px;
    font-weight: 600;
    width: 20%;
}
.pool_header>div:last-child:hover {
    cursor: pointer;
}
.pool_header>div:last-child i {
    font-weight: 700;
    margin-top: 5px;
    margin-left: 10px;
}
.pool_article {
    background-color: rgb(231, 227, 235);
    padding: 30px 40px;
    color: rgb(31, 199, 212);
    font-size: 16px;
    font-weight: 600;
    display: flex;
}
.pool_article .pool_point {
    cursor: pointer;
}
.pool_article>div:first-child {
    flex: 2 0 200px
}
.pool_article>div:first-child>div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.pool_article>div:first-child>div>div:nth-child(2) {
    margin-left: 10px;
    fill: rgb(31, 199, 212);
}
.pool_article>div:first-child #pool_href{
    color: rgb(31, 199, 212)
}
.pool_article>div:first-child img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}
.pool_article>div:first-child>div:last-child>div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    border: 3px solid rgb(49, 208, 170);
    height: 30px;
    border-radius: 15px;
}
.pool_article>div:first-child>div:last-child>div:first-child svg {
    fill: rgb(49, 208, 170)
}
.pool_article>div:first-child>div:last-child>div:last-child>svg {
    fill: rgb(122, 110, 170)
}
.pool_article>div:nth-child(2) {
    display: flex;
    margin: 20px 0;
    flex: 3 0 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px 0 20px 20px;
}
.pool_article>div:nth-child(2)>div:first-child {
    color: rgb(118, 69, 217);
    font-weight: 600;
    line-height: 1.5;
    text-transform: uppercase;
    font-size: 14px;
    width: 100%;
}
.pool_article>div:nth-child(2)>div:first-child>div:last-child {
    margin-top: 20px;
    color: rgb(189, 194, 196)
}
.pool_article>div:nth-child(2)>div:first-child>div:last-child>div:first-child {
    font-size: 20px;
    font-weight: 700;
}
.pool_article>div:nth-child(2)>div:last-child {
    font-size: 14px;
    margin-top: 20px;
    color:rgb(40, 13, 95);
}
.pool_article>div:nth-child(3) {
    flex: 3 0 200px;
    margin: 20px 0 20px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px
}
.pool_article>div:nth-child(3)>div:first-child {
    font-size: 14px;
    color: rgb(40, 13, 95)
}
.pool_article>div:nth-child(3)>div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 10px;
    border: 3px solid rgb(31, 199, 212);
}
.farmchild .farmchild_button {
    display: flex;
    align-items: center;
    margin-top: 50px;
}
.farmchild .farmchild_button>div {
    margin-right: 20px;
    width: 33.3%;
    border-radius: 20px;
}
.farmchild .farmchild_button>div>div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    background-color: #ddd;
    border-radius: 20px 20px 0 0;
}
.farmchild .farmchild_button>div>div:nth-child(2){
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.farmchild .farmchild_button>div>div:nth-child(2) .el-input-number {
    width: 300px;
}
.farmchild .farmchild_button>div>div:nth-child(2)>div:nth-child(2) {
    background-color: #31c77f;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width:20%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
}
.farmchild .farmchild_button>div>div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #31c77f;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}
.farmchild .farmchild_button>div>div:last-child,.farmchild .farmchild_button>div>div:nth-child(2)>div:nth-child(2):hover {
    cursor: pointer;
}
.farmchild .farmchild_button>div:last-child>div:nth-child(2){
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: #31c77f;
    padding: 0 20px;
}
</style>