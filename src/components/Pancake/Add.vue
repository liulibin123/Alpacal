<template>
    <div class="add">
        <div>
            <div class="pancake_swap">
                <router-link tag="div" to="/pancake/exchange">Swap</router-link>
                <div>Liquidity</div>
            </div>
        </div>
        <div class="add_article">
            <div>
                <div class="add_svg">
                    <router-link tag="div" to="/pancake/liquidity"><i class="el-icon-back"></i></router-link>
                    <div>
                        <div>Add Liquidity</div>
                        <div>Add liquidity to receive LP tokens</div>
                    </div>
                </div>
                <div>
                    <div><svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg></div>
                    <div><svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path></svg></div>
                </div>
            </div>
            <div class="add_from">
                <div class="add_to">
                    <div>
                        <div style="font-weight: 600">Input</div>
                        <div>Balance: 0</div>
                    </div>
                    <div>
                        <input type="text" placeholder="0.0" v-model="value1">
                        <div class="add_select">
                            <div v-if="!hide1" @click="handleShow1">
                                <div style="font-weight: 600">Select a currency</div>
                                <div><i class="el-icon-arrow-down add_icon"></i></div>
                            </div>
                            <div v-else>
                                <div class="add_max">MAX</div>
                                <div @click="handleShow1">
                                    <span><img :src="this.obj1.img" alt="" style="width: 25px;height: 25px;margin-right: 10px"></span>
                                    <span style="font-weight: 600">{{this.obj1.name}}</span><i class="el-icon-arrow-down add_icon"></i><span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add_icon_bottom"><i class="el-icon-bottom" style="font-weight: 600"></i></div>
                <div class="add_to">
                    <div>
                        <div style="font-weight: 600">Input</div>
                        <div>Balance: 0</div>
                    </div>
                    <div>
                        <input type="text" placeholder="0.0" v-model="value2">
                        <div class="add_select">
                            <div v-if="!show" @click="handleShow2">
                                <div style="font-weight: 600">Select a currency</div>
                                <div><i class="el-icon-arrow-down add_icon"></i></div>
                            </div>
                            <div v-else>
                                <div class="add_max">MAX</div>
                                <div @click="handleShow2">
                                    <span><img :src="this.obj2.img" alt="" style="width: 25px;height: 25px;margin-right: 10px"></span>
                                    <span style="font-weight: 600">{{this.obj2.name}}</span><i class="el-icon-arrow-down add_icon"></i><span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add_share" v-if="this.show && this.hide1 && this.value1 &&this.value2">
                    <div>PRICES AND POOL SHARE</div>
                    <div class="add_per">
                        <div>
                            <div>
                                <div class="add_num">{{this.num1}}</div>
                                <div>{{this.obj2.name}} per {{this.obj1.name}}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div class="add_num">{{this.num2}}</div>
                                <div>{{this.obj1.name}} per {{this.obj2.name}}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div class="add_num">1.60%</div>
                                <div>Share of Pool</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="hide1 && show ? 'add_valid2':'add_valid'" @click="handleInva">Invalid pair</div> 
            </div>  
        </div>
        <div class="add_wallet" v-if="this.obj1.name && this.obj2.name">
            <div>
                <div>LP TOKENS IN YOUR WALLET</div>
                <div>
                    <div class="add_w_img">
                        <div style="margin-right: 10px">
                            <img :src="this.obj2.img" alt="">
                            <img :src="this.obj1.img" alt="">
                        </div>
                        <div>{{this.obj2.name}}/{{this.obj1.name}}</div>
                    </div>
                    <div class="add_wet">0</div>
                </div>
                <div>
                    <div style="flex:1">{{this.obj2.name}}:</div>
                    <div class="add_wet">0</div>
                </div>
                <div>
                    <div style="flex:1">{{this.obj1.name}}</div>
                    <div class="add_wet">0</div>
                </div>
            </div>
        </div>
        <div v-show="hide">
            <div class="add_op"></div>
            <div class="add_opacity">
                <div>
                    <div class="opacity_header">
                        <div>Select a Token</div>
                        <div @click="handleCancle"><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path></svg></div>
                    </div>
                    <div class="opacity_input">
                        <input type="text" placeholder="Search name or paste address">
                    </div>
                    <div class="opacity_common">
                        <div>Common bases</div>
                        <div>
                            <div v-for="data in datalist2" :key="data.img">
                                <div><img :src="data.img" alt=""></div>
                                <div>{{data.name}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="opacity_item" v-for="data in datalist1" :key="data.img" @click.stop="handleItem(data)">
                        <div>
                            <div><img :src="data.img" alt=""></div>
                            <div class="opacity_coin">
                                <div>{{data.name}}</div>
                                <div>{{data.name}}</div> 
                            </div>
                        </div>
                        <div>0</div>
                    </div>
                    <div class="opacity_footer">
                        Manage Tokens
                    </div>
                </div>
            </div>
        </div>
        <div class="add_supply" v-if="sup">
            <div class="add_op"></div>
            <div class="add_o_su">
                <div>
                    <div>
                        <div style="flex: 1">You will receive</div>
                        <div @click="handleSup"><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ fxYfwL"><path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path></svg></div>
                    </div>
                    <div>
                        <div>0.0985465</div>
                        <div>
                            <img :src="this.obj1.img" alt="" width="31px" height="31px" style="margin-left: 10px">
                            <img :src="this.obj2.img" alt="" width="31px" height="31px">
                        </div>
                    </div>
                    <div>{{this.obj1.name}}/{{this.obj2.name}} Pool Tokens</div>
                    <div><i>Output is estimated. If the price changes by more than 1% your transaction will revert.</i></div>
                    <div>
                        <div style="flex: 1">{{this.obj1.name}} Deposited</div>
                        <div style="display: flex; align-items: center">
                            <div><img :src="this.obj1.img" alt="" width="25px" height="25px" style="margin-right: 10px"></div>
                            <div>{{this.value1}}</div>
                        </div>
                    </div>
                    <div style="margin: 10px 0">
                        <div style="flex: 1">{{this.obj2.name}} Deposited</div>
                        <div style="display: flex; align-items: center">
                            <div><img :src="this.obj2.img" alt="" width="25px" height="25px" style="margin-right: 10px"></div>
                            <div>{{this.num2}}</div>
                        </div>
                    </div>
                    <div>
                        <div style="flex: 1">Rates</div>
                        <div>1 {{this.obj1.name}} = {{this.num3}} {{this.obj2.name}}</div>
                    </div>
                    <div style="margin: 10px 0">1 {{this.obj2.name}} = {{this.num4}} {{this.obj1.name}}</div>
                    <div>
                        <div style="flex: 1">Share of Pool:</div>
                        <div>0.00000001971%</div>
                    </div>
                    <div @click="handleAddLi">Confirm Supply</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import approve from '../../assets/js/approve'
import allowance from '../../assets/js/allowance'
import getAmountOut from '../../assets/js/getAmountOut'
import getAmountIn from '../../assets/js/getAmountIn'
import getPair from '../../assets/js/getPair'
import getReserves from '../../assets/js/getReserves'
import BigNumber from 'bignumber.js'
import addLiquidity from '../../assets/js/addLiquidity'
import getAmountsIn from '../../assets/js/getAmountsIn'
import addLiquidityETH from '../../assets/js/addLiquidityETH'
import getAmountsOut from '../../assets/js/getAmountsOut'
export default {
    data() {
        return {
            datalist1: [
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/bnb.png',
                    name: 'BNB',
                    addr: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
                },
                {
                    img :'https://pancake.kiemtienonline360.com/images//coins/0x8a9424745056eb399fd19a0ec26a14316684e274.png',
                    name: 'DAT',
                    addr: '0x8a9424745056Eb399FD19a0EC26A14316684e274'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e.png',
                    name: 'CAKE',
                    addr: '0xF9f93cF501BFaDB6494589Cb4b4C15dE49E85D0e'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0x8babbb98678facc7342735486c851abd7a0d17ca.png',
                    name: 'ETH',
                    addr: '0x8BaBbB98678facC7342735486C851ABD7A0d17Ca'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
                    name: 'BUSD',
                    addr: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684.png',
                    name: 'USDT',
                    addr: '0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684'
                }
            ],
            datalist2: [
                {
                    img: 'https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
                    name: 'BNB',
                    addr: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
                    name: 'BUSD',
                    addr: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684.png',
                    name: 'USDT',
                    addr: '0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e.png',
                    name: 'CAKE',
                    addr: '0xF9f93cF501BFaDB6494589Cb4b4C15dE49E85D0e'
                },
            ],
            hide: false,
            hide1: false,
            show: false,
            sup: false,
            value1: '',
            value2: '',
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            userAddress: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',
            routerAddress: '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f',
            obj: [],
            obj1: {
                id: 11,
                name: 'BNB',
                img: 'https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
                addr: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
            },
            obj2: {}
        }
    },
    methods: {
        handleCancle() {
            this.hide = false
        },
        handleShow1() {
            this.hide = true
            this.obj = []
            this.handleItem(this.obj1)
        },
        handleShow2() {
            this.hide = true
            this.obj = []
            this.handleItem(this.obj2)
        },
        handleItem(ev) {
            this.obj.push(ev)
            if(this.obj[1]) {
                this.obj[1] = ev
                if(this.obj[0].id && (this.obj[0].id == this.obj1.id)) {
                    this.obj[0].name = this.obj[1].name
                    this.obj[0].img = this.obj[1].img
                    this.obj[0].addr = this.obj[1].addr
                    this.hide1 = true
                }else {
                    this.obj[0].name = this.obj[1].name
                    this.obj[0].img = this.obj[1].img
                    this.obj[0].addr = this.obj[1].addr
                    this.show = true
                }
                this.hide = false
            }
        },
        handleSup() {
            this.sup = false
        },
        handleInva() {
            if(this.obj1.name && this.obj2.name) this.sup = true
        },
        handleAddLi() {
            let amount1 = (new BigNumber(this.value1).multipliedBy(1e18)).toString()
            // let amount2 = (new BigNumber(this.value2).multipliedBy(1e18)).toString()
            allowance(this.obj1.addr, this.userAddress, this.routerAddress).then(result=>{
                if(result < this.value1 || result == undefined){
                    approve(this.obj1.addr,this.routerAddress)
                }
            })
            allowance(this.obj2.addr, this.userAddress, this.routerAddress).then(result=>{
                if(result < this.value1 || result == undefined) {
                    approve(this.obj2.addr,this.routerAddress)
                }
            })
            // let amount2 = this.value2
            if(this.obj1.addr === '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd' || this.obj2.addr === '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd') {
                addLiquidityETH().then(result=>{
                    result.methods.addLiquidityETH(this.obj2.addr, amount1, 0, 0, this.userAddress, Math.floor(((new Date).getTime()/1000)+1200))
                    .send({from: this.userAddress, gas: 10000000}).then(result=>{
                        console.log(result)
                    }).catch(console.error())
                })
            }else {
                addLiquidity().then(result=>{
                    result.methods.addLiquidity(this.obj1.addr, this.obj2.addr, amount1, amount1, 0, 0, this.userAddress, Math.floor(((new Date).getTime()/1000)+1200))
                    .send({from: this.userAddress, gas: 10000000}).then(result=>{
                        console.log(result)
                    }).catch(console.error())
                })
            }
        }
    },
    mounted() {
        if(this.$store.state.item.coinName1) {
            this.hide1 = true
            this.show = true
            this.obj1.name = this.$store.state.item.coinName1
            this.obj1.img = this.$store.state.item.coinImg1
            this.obj1.addr = this.$store.state.item.coinAddr1
            this.obj2.name = this.$store.state.item.coinName2
            this.obj2.img = this.$store.state.item.coinImg2
            this.obj2.addr = this.$store.state.item.coinAddr2
        }
    },
    watch: {
        'value1': function() {
            let amount = (new BigNumber(this.value1).multipliedBy(1e18)).toString()
            getAmountsIn().then(result5=> {
                result5.methods.getAmountsIn(amount, [this.obj1.addr, this.obj2.addr]).call().then(result=>{
                    this.value2 = (result[0]/1e18).toFixed(5)
                })
            })
            getPair().then(result1 => {
                result1.methods.getPair(this.obj1.addr, this.obj2.addr).call().then(result2 => {
                    getReserves(result2).then(result3=>{
                        result3.methods.getReserves().call().then(result4=>{
                            getAmountOut().then(result5=>{
                                result5.methods.getAmountOut((new BigNumber(1).multipliedBy(1e18)).toString(),result4._reserve1,result4._reserve0).call().then(result6=>{
                                    this.num3 = (result6/1e18).toFixed(5)
                                })
                            })
                            getAmountOut().then(result5=>{
                                result5.methods.getAmountOut((new BigNumber(1).multipliedBy(1e18)).toString(),result4._reserve0,result4._reserve1).call().then(result6=>{
                                    this.num4 = (result6/1e18).toFixed(5)
                                })
                            })
                            getAmountIn().then(result5=>{
                                result5.methods.getAmountIn((new BigNumber(1).multipliedBy(1e18)).toString(),result4._reserve0,result4._reserve1).call().then(result7=> {
                                    this.num1 = (result7/1e18).toFixed(5)
                                    console.log((result7/1e18).toFixed(5))
                                })
                            })
                            getAmountIn().then(result5=>{
                                result5.methods.getAmountIn((new BigNumber(1).multipliedBy(1e18)).toString(),result4._reserve1,result4._reserve0).call().then(result7=> {
                                    console.log((result7/1e18).toFixed(5))
                                    this.num2 = (result7/1e18).toFixed(5)
                                })
                            })
                               
                        })
                    })
                })
            })
        },
        'value2': function() {
            let amount = (new BigNumber(this.value2).multipliedBy(1e18)).toString()
            getAmountsOut().then(result5=> {
                console.log(result5)
                result5.methods.getAmountsOut(amount, [this.obj1.addr, this.obj2.addr]).call().then(result=>{
                    this.value1 = (result[1]/1e18).toFixed(5)
                })
            }) 
        }
    }
}
</script>
<style lang="less" scoped>
.add {
    width: 35%;
    margin: 40px auto;
    .pancake_swap {
        display: flex;
        align-items: center;
        width: 200px;
        margin: 0 auto;
        color: rgb(122, 110, 170);
        font-weight: 700;
        border: 1px solid rgb(215, 202, 236);
        background-color: rgb(238, 234, 244);
        border-radius: 15px;
    }
    .pancake_swap div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(122, 110, 170);
        color: #fff;
        width: 120px;
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
    }
    .pancake_swap div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        cursor: pointer;
    }.add_article>div:first-child {
        display: flex;
        align-items: center;
        height: 100px;
        padding: 0 20px;
    }
    .add_article {
        background-color: #fff;
        border-radius: 30px;
        margin-top: 40px;
        .add_svg {
            display: flex;
            align-items: center;
            flex: 1;
            color: rgb(40, 13, 95);
        }
        .add_svg>div:first-child>i {
            font-weight: 700;
            font-size: 24px;
            margin-right: 20px;
            cursor: pointer;
        }
        .add_svg>div:last-child>div:first-child{
            font-weight: 700;
            font-size: 20px;
        }
        .add_svg>div:last-child>div:last-child {
            color: rgb(122, 110, 170);
            font-size: 13px;
            font-weight: 600;
        }
        .add_svg+div {
            display: flex;
            align-items: center;
        }
        .add_svg+div svg {
            fill: rgb(31, 199, 212);
            margin-left: 10px;
            cursor: pointer;
        }
        .add_from {
            border-top: 1px solid #eee;
            padding: 20px;
            .add_to {
                background-color: rgb(238, 234, 244);
                border-radius: 15px;
                color: rgb(40, 13, 95);
                font-weight: 400;
                line-height: 1.5;
                font-size: 14px;
                padding: 20px;
            }
            .add_to>div {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            .add_to>div:first-child>div:first-child {
                flex: 1;
            }
            .add_to>div>input {
                flex: 1;
                border: 0px;
                height: 30px;
                outline: 0px;
                background-color: rgb(238, 234, 244)
            }
            .add_icon_bottom {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px 0;
            }
            .add_select>div:last-child {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .add_select>div:last-child>div:last-child {
                display: flex;
                align-items: center;
            }
            .add_max {
                color: rgb(31, 199, 212);
                font-weight: 700;
                margin-right: 30px;
                cursor: pointer;
            }
            .add_icon {
                font-weight: 700;
                font-size: 14px;
                margin-left: 10px;
            }
        }
    }
    .add_share {
        color: rgb(143, 128, 186);
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 2px;
        font-size: 12px;
        margin-top: 30px;
    }
    .add_per {
        border: 3px solid rgb(233, 234, 235);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        align-content: center;
        .add_num {
            font-size: 16px;
            color: rgb(69, 42, 122);
        }
    }
    .add_per>div {
        display: flex;
        justify-content: center;
        align-content: center;
        flex: 1;
    }
    .add_detail {
        margin-top: 30px;
        color: rgb(143, 128, 186);
    }
    .add_detail>div:first-child {
        font-size: 12px;
        font-weight: 700;
    }
    .add_pool {
        display: flex;
        padding: 20px 0;
        border: 3px solid rgb(233, 234, 235);
        border-radius: 16px;
    }
    .add_pool>div {
        display: flex;
        width: 33.3%;
        justify-content: center;
        align-items: center;
    }
    .add_pool>div>div>div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(69, 42, 122);
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .add_pool>div>div>div:last-child {
        font-size: 14px;
    }
    .add_valid {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #eee;
        border-radius: 20px;
        height: 50px;
        margin-top: 40px;
        font-weight: 600;
        font-size: 15px;
        color: #aaa;
        cursor: pointer;
    }
    .add_valid2 {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1fc7d4;
        border-radius: 20px;
        height: 50px;
        margin-top: 40px;
        font-weight: 600;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
    }
    .add_wallet {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        color: rgb(69, 42, 122);
        font-size: 13px;
    }
    .add_wallet>div {
        background-color: #fff;
        width: 70%;
        border-radius: 30px;
        margin-top: 20px;
        padding: 30px 20px;
    }
    .add_wallet>div>div {
        display: flex;
        align-items: center;
    }
    .add_wallet>div>div:first-child {
        color: rgb(143, 128, 186);
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
    }.add_wallet>div>div:nth-child(3) {
        margin: 10px 0;
    }
    .add_w_img {
        flex: 1;
        display: flex;
        align-items: center;
    }
    .add_wet {
        font-weight: 700;
    }
    .add_w_img img {
        width: 20px;
        height: 20px;
    }
    .add_op {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(126, 105, 167);
        transition: opacity 0.4s ease 0s;
        opacity: 0.8;
        z-index: 10;
    }
    .add_opacity {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.4s ease 0s;
        z-index: 10;
        color: rgb(40, 13, 95);
        font-size: 17px;
        font-weight: 700;
        .opacity_header,.opacity_item,.opacity_item>div:first-child {
            display: flex;
            align-items: center;
        }
        .opacity_header {
            padding: 30px 20px;
            border-bottom: 1px solid #ddd;
        }
        .opacity_header>div:first-child {
            flex: 1;
        }
        .opacity_header>div:last-child svg {
            fill: rgb(31, 199, 212);
            margin-right: 20px;
            cursor: pointer;
        }
        .opacity_input {
            padding: 20px;
        }
        .opacity_input input{
            background-color: rgb(238, 234, 244);
            border: 0px;
            border-radius: 16px;
            box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
            color: rgb(40, 13, 95);
            display: block;
            font-size: 16px;
            height: 48px;
            outline: 0px;
            padding: 0px 16px;
            width: 100%;
        }
        .opacity_item {
            padding:10px 20px;
            cursor: pointer;
        }
        .opacity_item:hover {
            background-color: #e5e5e5;
        }
        .opacity_item>div:first-child {
            flex: 1;
        }.opacity_item img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
        .opacity_item .opacity_coin>div:first-child {
            font-size: 16px;
        }
        .opacity_item .opacity_coin>div:last-child {
            font-size: 14px;
            font-weight: 500;
            color: rgb(122, 110, 170);
            margin-top: 5px;
        }
        .opacity_footer {
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(31, 199, 212);
            margin: 20px;
            font-size: 14px;
            cursor: pointer;
        }
        .opacity_common {
            margin-bottom: 10px;
            padding: 0 20px;
        }
        .opacity_common img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }
        .opacity_common>div:first-child {
            font-size: 13px;
            font-weight: 500;
        }
        .opacity_common>div:last-child {
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 16px;
        }
        .opacity_common>div:last-child>div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            margin-top: 20px;
            border: 1px solid #eee;
            height: 30px;
            border-radius: 10px;
            margin-right: 8px;
            cursor: pointer;
        }
        .opacity_common>div:last-child>div:hover {
            background-color: #e6e6e6;
        }
    }
    .add_opacity>div,.add_o_su>div {
        background-color: #fff;
        width: 30%;
        border-radius: 32px;
        box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px, rgb(0 0 0 / 5%) 0px 1px 1px;
        border: 1px solid rgb(231, 227, 235)
    }
    
    .add_supply{
        .add_o_su {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            transition: opacity 0.4s ease 0s;
            z-index: 10;
            color: rgb(40, 13, 95);
            font-weight: 500;
        }
        .add_o_su>div {
            padding: 30px 20px;        
        }
        .add_o_su>div>div {
            display: flex;
            align-items: center;
        }
        .add_o_su>div>div:first-child {
            font-size: 18px;
            font-weight: 600;
        }
        .add_o_su>div>div:first-child>div:last-child {
            fill: rgb(31, 199, 212);
            cursor: pointer;
        }
        .add_o_su>div>div:nth-child(2) {
            font-size: 40px;
        }
        .add_o_su>div>div:nth-child(3) {
            font-size: 20px;
            margin: 20px 0 30px 0;
        }
        .add_o_su>div>div:nth-child(4) {
            font-size: 13px;
            margin-bottom: 30px;
        }
        .add_o_su>div>div:nth-child(8) {
            display: flex;
            justify-content: flex-end;
        }
        .add_o_su>div>div:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            transition: background-color 0.2s ease 0s;
            height: 48px;
            padding: 0px 24px;
            background-color: rgb(31, 199, 212);
            color: white;
            border: 0px;
            border-radius: 16px;
            box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
            cursor: pointer;
            font-weight: 600;
        }
    }
}
</style>