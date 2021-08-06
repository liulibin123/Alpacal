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
                                <div class="add_num">0.222557</div>
                                <div>{{this.obj2.name}} per {{this.obj1.name}}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div class="add_num">4.49322</div>
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
                <div :class="hide1 && show ? 'add_valid2':'add_valid'">Invalid pair</div> 
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            datalist1: [
                {
                    img: 'https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
                    name: 'BNB'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png',
                    name: 'ALPACA'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png',
                    name: 'BELT'
                },
                {
                    img :'https://pancakeswap.finance/images/tokens/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
                    name: 'BTCB'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
                    name: 'BUNNY'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
                    name: 'BUSD'
                }
            ],
            datalist2: [
                {
                    img: 'https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
                     name: 'BNB',
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
                    name: 'BUSD'
                },
                {
                    img :'https://pancakeswap.finance/images/tokens/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
                    name: 'BTCB'
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
                    name: 'BUNNY'
                },
            ],
            hide: false,
            hide1: false,
            show: false,
            value1: '',
            value2: '',
            obj: [],
            obj1: {
                id: 11,
                name: 'BNB',
                img: 'https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png'
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
                    this.hide1 = true
                }else {
                    this.obj[0].name = this.obj[1].name
                    this.obj[0].img = this.obj[1].img
                    this.show = true
                }
                this.hide = false
            }
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
    .add_opacity>div {
        background-color: #fff;
        width: 30%;
        border-radius: 32px;
        box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px, rgb(0 0 0 / 5%) 0px 1px 1px;
        border: 1px solid rgb(231, 227, 235)
    }
}
</style>