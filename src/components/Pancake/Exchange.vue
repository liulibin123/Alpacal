<template>
    <div class="exchange">
        <div>
            <div class="pancake_swap">
                <div>Swap</div>
                <router-link tag="div" to="/pancake/liquidity">Liquidity</router-link>
            </div>
        </div>
        <div class="exchange_article">
            <div>
                <div class="exchange_svg">
                    <div>Exchange</div>
                    <div>Trade tokens in an instant</div>
                </div>
                <div>
                    <div><svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg></div>
                    <div><svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path></svg></div>
                </div>
            </div>
            <div class="exchange_from">
                <div class="exchange_to">
                    <div>
                        <div>From</div>
                        <div>Balance: 0</div>
                    </div>
                    <div>
                        <input type="text" placeholder="0.0" v-model="value1" @blur="handleInput">
                        <div class="exchange_select">
                            <div class="exchange_max">MAX</div>
                            <div @click="handleShow1">
                                <span><img :src="this.obj1.img" alt="" style="width: 25px; height: 25px;margin-right: 10px"></span>
                                <span style="font-weight: 600">{{this.obj1.name}}</span><i class="el-icon-arrow-down exchange_icon"></i><span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="exchange_icon_bottom"><i class="el-icon-bottom" style="font-weight: 600"></i></div>
                <div class="exchange_to">
                    <div>
                        <div>To</div>
                        <div>-</div>
                    </div>
                    <div class="exchange_select">
                        <input type="text" placeholder="0.0" v-model="value2" @blur="handleInput">
                        <div @click="handleShow2">
                            <span v-if="show" style="display: flex;align-items: center"><img :src="this.obj2.img" alt="" style="width: 25px; height: 25px;margin-right: 10px">
                                <span style="font-weight: 600">{{this.obj2.name}}</span>
                            </span>
                            <span v-else style="font-weight: 600">{{this.obj2.name}}</span><span><i class="el-icon-arrow-down exchange_icon"></i></span>
                        </div>
                    </div>
                </div>
                <div class="exchange_per" v-if="this.value1 && this.value2 && this.show">
                    <span>Price</span><span>0.0116961 {{this.obj1.name}} per {{this.obj2.name}}</span>
                </div>
                <div :class="show ? 'exchange_enter2':'exchange_enter'" @click="handleSwap">Enter an amount</div> 
            </div>
        </div>

        <div class="exchange_footer" v-if="this.value1 && this.value2 && this.show">
            <div>
                <div>
                    <div>Minimum received</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                </div>
                <div>{{this.value3}} {{this.obj2.name}}</div>
            </div>
            <div>
                <div>
                    <div>Price Impact</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                </div>
                <div style="color: rgb(49, 208, 170);font-weight: 600">0.11%</div>
            </div>
            <div>
                <div>
                    <div>Liquidity Provider Fee</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                </div>
                <div>0.0002 {{this.obj1.name}}</div>
            </div>
        </div>
        <!-- hide swap -->
        <div class="exchange_confirm" v-if="swap">
            <div></div>
            <div>
                <div class="exchange_swap">
                    <div>
                        <div>Confirm Swap</div>
                        <div @click="handleCancleSwap"><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ fxYfwL"><path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path></svg></div>
                    </div>
                    <div>
                        <div><img :src="this.obj1.img" alt=""></div>
                        <div>{{this.value1}}</div>
                        <div>{{this.obj1.name}}</div>
                    </div>
                    <div><i class="el-icon-bottom"></i></div>
                    <div>
                        <div><img :src="this.obj2.img" alt=""></div>
                        <div>{{this.value2}}</div>
                        <div>{{this.obj2.name}}</div>
                    </div>
                    <div class="exchange_five">
                        <i>Output is estimated. You will receive at least</i>
                        <i style="display: flex"><span style="margin-right: 5px">{{this.value2}}</span><span style="margin-right: 5px">{{this.obj2.name}}</span><span></span>or the transaction will revert.</i>
                    </div>
                    <div class="exchange_six">
                        <div>Price</div>
                        <div>
                            <span style="margin-right: 5px">{{this.value2}}</span><span style="margin-right: 5px">{{this.obj2.name}} /</span><span>{{this.obj1.name}}</span>
                        </div>
                    </div>
                    <div>
                        <div class="exchange_seven" style="display: flex">
                            <div>Minimum received</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                        </div>
                        <div>{{this.value3}} {{this.obj2.name}}</div>
                    </div>
                    <div>
                        <div class="exchange_eight" style="display: flex">
                            <div>Price Impact</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                        </div>
                        <div style="color: #1fc7d4">0.10%</div>
                    </div>
                    <div>
                        <div class="exchange_nine" style="display: flex">
                            <div>Liquidity Provider Fee</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                        </div>
                        <div>0.002 {{this.obj1.name}}</div>
                    </div>
                    <div @click="handleConfirmSwap">Confirm Swap</div>
                </div>
            </div>
        </div>
        <!-- hide -->
        <div v-if="hide">
            <div class="exchange_op"></div>
            <div class="exchange_opacity">
                <div>
                    <div class="opacity_header">
                        <div>Select a Token</div>
                        <div @click="handleCancle"><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path></svg></div>
                    </div>
                    <div class="opacity_input">
                        <input type="text" placeholder="Search name or paste address">
                    </div>
                    <div class="opacity_item" v-for="data in datalist" :key="data.img" @click.stop="handleItem(data)">
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
import swapExact from '../../assets/js/swapExactTokensForTokens'
import addLiquidityETH from '../../assets/js/addLiquidityETH'
export default {
    data() {
        return {
            datalist: [
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/bnb.png',
                    name: 'BNB',
                    addr: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0x8babbb98678facc7342735486c851abd7a0d17ca.png',
                    name: 'ETH',
                    addr: '0x8BaBbB98678facC7342735486C851ABD7A0d17Ca'
                },
                {
                    img: 'https://pancake.kiemtienonline360.com/images/coins/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684.png',
                    name: 'USDT',
                    addr: '0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684'
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
                    img: 'https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
                    name: 'BUSD',
                    addr: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'
                }
            ],
            obj: [],
            obj1: {
                name: "BNB",
                img: 'https://pancake.kiemtienonline360.com/images/coins/bnb.png',
                addr: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
            },
            obj2: {
                id: 12,
                name: 'Select a currency'
            },
            hide: false,
            show: false,
            swap: false,
            cancle: false,
            value1: '',
            value2: '',
            value3: '',
            userAddress: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',
            routerAddress: '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f'
        }
    },
    methods: {
        handleItem(ev) {
            this.obj.push(ev)
            if(this.obj[1]) {
                this.obj[1] = ev
                if(this.obj[0].id && (this.obj2.id == this.obj[0].id)) {
                    this.obj[0].name = this.obj[1].name
                    this.obj[0].img = this.obj[1].img
                    this.obj[0].addr = this.obj[1].addr
                    this.show = true
                }
                else {
                    this.obj[0].name = this.obj[1].name
                    this.obj[0].img = this.obj[1].img
                    this.obj[0].addr = this.obj[1].addr
                    this.hide1 = false
                }
                this.hide = false
            }
        },
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
        handleCancleSwap() {
            this.swap = false
        },
        handleConfirmSwap() {
            let amount = (new BigNumber(this.value1).multipliedBy(1e18)).toString()
            swapExact().then(result=>{
                result.methods.swapExactTokensForTokens(
                    amount,
                    amount,
                    [this.obj1.addr,this.obj2.addr],
                    this.userAddress,
                    Math.floor(((new Date).getTime()/1000)+1200)
                ).send({from: this.userAddress, gas: 1000000}).then(result=>{
                    console.log(result)
                })
            })
        },
        handleSwap() {
            if(this.value1 && this.value2 && this.obj2.name) this.swap = true
        },
        handleInput() {
            let amount1 = (new BigNumber(this.value1).multipliedBy(1e18)).toString()
            let amount2 = (new BigNumber(this.value2).multipliedBy(1e18)).toString()
            
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
            getPair().then(result1 => {
                result1.methods.getPair(this.obj1.addr, this.obj2.addr).call().then((result2)=>{
                    if(result2 === '0x0000000000000000000000000000000000000000'){
                        if(this.obj1.addr === '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd') {
                            addLiquidityETH().then(result=>{
                                result.methods.addLiquidityETH(this.obj1.addr, amount1, 0, 0, this.userAddress, Math.floor(((new Date).getTime()/1000)+1200))
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
                    getReserves(result2).then(result3=>{
                        result3.methods.getReserves().call().then(result4=>{
                            getAmountOut().then(result5=>{
                                result5.methods.getAmountOut(amount1,result4._reserve1,result4._reserve0).call().then(result6=>{
                                    this.value3 = (result6/1e18).toFixed(5)
                                })
                            })
                            if( !isNaN(amount1) ) {
                                getAmountIn().then(result5=>{
                                    result5.methods.getAmountIn(amount1,result4._reserve1,result4._reserve0).call().then(result7=> {
                                        this.value2 = (result7/1e18).toFixed(5)
                                    })
                                })
                            }else {
                                getAmountIn().then(result5=>{
                                    result5.methods.getAmountIn(amount2,result4._reserve0,result4._reserve1).call().then(result7=> {
                                        this.value1 = (result7/1e18).toFixed(5)
                                    })
                                })
                            }
                        })
                    })
                })
            })  
        }
    }
}
</script>
<style lang="less" scoped>
.exchange {
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
    .pancake_swap div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(122, 110, 170);
        color: #fff;
        width: 80px;
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
    }
    .pancake_swap div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        cursor: pointer;
    }
    .exchange_article {
        background-color: #fff;
        border-radius: 30px;
        margin-top: 40px;
        .exchange_svg {
            flex: 1;
        }
        .exchange_svg>div:first-child{
            color: rgb(40, 13, 95);
            font-weight: 700;
            font-size: 20px;
        }
        .exchange_svg>div:last-child {
            color: rgb(122, 110, 170);
            font-size: 13px;
            font-weight: 600;
        }
        .exchange_svg+div {
            display: flex;
            align-items: center;
        }
        .exchange_svg+div svg {
            fill: rgb(31, 199, 212);
            margin-left: 10px;
            cursor: pointer;
        }
        .exchange_from {
            border-top: 1px solid #eee;
            padding: 20px;
            .exchange_to {
                background-color: rgb(238, 234, 244);
                border-radius: 15px;
                color: rgb(40, 13, 95);
                font-weight: 400;
                line-height: 1.5;
                font-size: 14px;
                padding: 20px;
            }
            .exchange_to>div {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            .exchange_to>div:first-child>div:first-child {
                flex: 1;
            }
            .exchange_to>div>input {
                flex: 1;
                border: 0px;
                height: 30px;
                outline: 0px;
                background-color: rgb(238, 234, 244)
            }
            .exchange_icon_bottom {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px 0;
            }
            .exchange_select {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .exchange_select>div:last-child {
                display: flex;
                align-items: center;
            }
            .exchange_max {
                color: rgb(31, 199, 212);
                font-weight: 700;
                margin-right: 30px;
                cursor: pointer;
            }
            .exchange_icon {
                font-weight: 700;
                font-size: 14px;
                margin-left: 10px;
            }
        }
    }
    .exchange_article>div:first-child {
        display: flex;
        align-items: center;
        height: 100px;
        padding: 0 20px;
    }
    .exchange_enter {
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
    .exchange_enter2 {
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
    .exchange_per {
        display: flex;
        align-content: center;
        color: rgb(69, 42, 122);
        font-weight: 600;
        line-height: 1.5;
        font-size: 13px;
        margin: 20px 30px -10px 30px;
    }
    .exchange_per>span:first-child {
        flex: 1
    }
    .exchange_footer {
        background-color: rgb(255, 255, 255);
        width: 80%;
        border-radius: 32px;
        box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
        color: rgb(69, 42, 122);
        overflow: hidden;
        margin: 20px auto;
        font-size: 13px;
        padding: 30px 20px;
    }
    .exchange_footer svg {
        color: rgb(143, 128, 186);
        margin-left: 10px;
    }
    .exchange_footer>div {
        margin: 5px 0;
    }
    .exchange_footer>div,.exchange_footer>div>div {
        display: flex;
        align-content: center;
    }
    .exchange_footer>div>div:first-child {
        flex: 1;
    }
    .exchange_confirm {
        color: rgb(69, 42, 122);
        font-weight: 500;
        line-height: 1.5;
        font-size: 14px;
        margin: 0 auto;
    }
    .exchange_confirm svg {
        color: rgb(143, 128, 186)
    }
    .exchange_confirm img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    .exchange_confirm>div:first-child {
        position: fixed;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: rgb(113, 88, 158);
        transition: opacity 0.5s ease 0s;
        opacity: 0.8;
        z-index: 10;
    }
    .exchange_confirm>div:nth-child(2) {
        border-radius: 20px;
        border: 1px solid rgb(255, 255, 255);
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(25 19 38 / 5%) 0px 4px 8px 0px;
        align-items: center;
        position: absolute;
        top: 20%;
        transition: opacity 0.5s ease 0s;
        z-index: 100;
        color: rgb(40, 13, 95);
        font-size: 14px;
        font-weight: 700;
        padding: 30px 20px;
        width: 400px;
    }
    .exchange_swap>div {
        display: flex;
        align-items: center;
    }
    .exchange_swap>div:first-child>div:first-child {
        font-size: 18px;
        flex: 1;
    }
    .exchange_swap>div:first-child>div:last-child {
        fill: rgb(31, 199, 212);;
        cursor: pointer;
    }
    .exchange_swap>div:nth-child(2) {
        margin: 40px 0 20px 0;
    }
    .exchange_swap>div:nth-child(2)>div:nth-child(2),.exchange_swap>div:nth-child(4)>div:nth-child(2) {
        font-size: 20px;
        flex: 1;
    }
    .exchange_swap>div:nth-child(2)>div:last-child,.exchange_swap>div:nth-child(4)>div:last-child {
        font-size: 20px;
    }
    .exchange_swap>div:nth-child(3) {
        font-size: 18px;
        margin: 0 0 20px 4px;
        color: rgb(143, 128, 186);
    }
    .exchange_swap .exchange_five {
        display: block;
        font-weight: 600;
        margin: 30px 0;
        i:last-child>span {
            color: rgb(31, 199, 212);
            font-weight: 600;
        }
    }
    .exchange_swap>div:nth-child(7),.exchange_swap>div:nth-child(8),.exchange_swap>div:nth-child(9) {
        font-weight: 500;
    }
    .exchange_swap .exchange_six,.exchange_swap .exchange_seven,.exchange_swap .exchange_eight,.exchange_swap .exchange_nine {
        font-size: 13px;
    }
    .exchange_swap .exchange_seven,.exchange_swap .exchange_eight,.exchange_swap .exchange_nine {
        flex: 1
    }
    .exchange_swap .exchange_seven svg,.exchange_swap .exchange_eight svg,.exchange_swap .exchange_nine svg {
        margin-left: 10px;
    }
    .exchange_swap .exchange_six>div:first-child {
        flex: 1;
    }.exchange_swap .exchange_six>div:last-child {
        display: flex;
    }
    .exchange_swap>div:last-child {
        align-items: center;
        border: 0px;
        border-radius: 16px;
        box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        -webkit-box-pack: center;
        justify-content: center;
        letter-spacing: 0.03em;
        line-height: 1;
        opacity: 1;
        outline: 0px;
        transition: background-color 0.2s ease 0s;
        height: 48px;
        padding: 0px 24px;
        background-color: rgb(31, 199, 212);
        color: white;
        width: 100%;
        margin-top: 20px;
    }
    .exchange_op {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(113, 88, 158);
        transition: opacity 0.5s ease 0s;
        opacity: 0.8;
        z-index: 10;
    }
    .exchange_opacity {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s ease 0s;
        z-index: 100;
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
            width: 30px;
            height: 30px;
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
    }
    .exchange_opacity>div {
        background-color: #fff;
        width: 30%;
        border-radius: 32px;
        box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px, rgb(0 0 0 / 5%) 0px 1px 1px;
        border: 1px solid rgb(231, 227, 235)
    }
}
</style>