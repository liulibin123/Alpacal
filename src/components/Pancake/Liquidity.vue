<template>
    <div class="liquidity">
        <div>
            <div class="pancake_swap">
                <router-link tag="div" to="/pancake/exchange">Swap</router-link>
                <div>Liquidity</div>
            </div>
        </div>
        <div class="liquidity_article">
            <div class="liquidity_connected">
                <div>
                    <div class="liquidity_svg">
                        <div>Your Liquidity</div>
                        <div>Remove liquidity to receive tokens back</div>
                    </div>
                    <div>
                        <div><svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg></div>
                        <div><svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn"><path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path></svg></div>
                    </div>
                </div>

                <div class="liquidity_find">
                    <div v-if="hide">
                        <div class="liquidity_your">Your Liquidity</div>
                        <div class="liquidity_unconnecte" v-if="lpToken">Connect to a wallet to view your liquidity.</div>
                        <div v-else style="padding: 0 20px" v-for="data in datalist" :key="data.id">
                            <div class="liquidity_parent" style="width: 100%">
                                <div>
                                    <div class="liquidity_detail">
                                        <div style="display: flex">
                                            <div><img :src="data.img1" alt=""></div>
                                            <div><img :src="data.img2" alt=""></div>
                                        </div>
                                        <div>{{data.name1}}/{{data.name2}}</div>
                                    </div>
                                    <div @click="handlePool(data)"><i :class="pool ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i></div>
                                </div>
                                <div class="liquidity_pool" v-if="pool">
                                    <div>
                                        <div>Pooled {{data.name1}}:</div>
                                        <div>
                                            <div>35.794</div>
                                            <div style="margin-left: 10px"><img :src="data.img1" alt=""></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>Pooled {{data.name2}}:</div>
                                        <div>
                                            <div>0.0993691</div>
                                            <div style="margin-left: 10px"><img :src="data.img2" alt=""></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>Your pool tokens:</div>
                                        <div>1.84</div>
                                    </div>
                                    <div>
                                        <div>Your pool share:</div>
                                        <div>0.01%</div>
                                    </div>
                                    <div id="liquidity_remove">
                                        <router-link tag="div" to="/pancake/add">Add</router-link>
                                        <router-link tag="div" to="/pancake/remove">Remove</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>No liquidity found.</div>
                        <div>Don't see a pool you joined?</div>
                        <div><router-link to="/pancake/find" tag="div" class="liquidity_router">Find other LP tokens</router-link></div>
                    </div>
                    
                </div>
                <div class="liquidity_add">
                    <div>
                        <i class="el-icon-plus"></i>
                        <router-link tag="div" to="/pancake/add"><div @click="handleNull">Add liquidity</div></router-link>
                    </div>     
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    data() {
        return {
            datalist: [
                {
                    id: '1',
                    name1: 'BUSD',
                    img1: 'https://pancake.kiemtienonline360.com/images/coins/bnb.png',
                    addr1: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
                    name2: 'USDT',
                    img2: 'https://pancake.kiemtienonline360.com/images/coins/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684.png',
                    addr2: '0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684'
                }
            ],
            hide: true,
            address: '',
            lpToken: false,
            pool: false
        }
    },
    methods: {
        handlePool(data) {
            this.pool = !this.pool
            this.$store.commit('changeName',data)
        },
        handleNull() {
            this.$store.commit('changeNull',{})
        }
    },
    mounted() {
        PubSub.subscribe('address',(msg, data)=>{
            this.address = data
            if(data) this.hide = false
        })
    }
}
</script>
<style lang="less" scoped>
.liquidity {
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
    }
    .liquidity_connected {
        padding-bottom: 30px;
    }
    .liquidity_connected>div:first-child {
        display: flex;
        align-items: center;
        height: 100px;
        padding: 0 20px;
    }.liquidity_article {
        background-color: #fff;
        border-radius: 30px;
        margin-top: 40px;
        .liquidity_svg {
            flex: 1;
        }
        .liquidity_svg>div:first-child{
            color: rgb(40, 13, 95);
            font-weight: 700;
            font-size: 20px;
        }
        .liquidity_svg>div:last-child {
            color: rgb(122, 110, 170);
            font-size: 13px;
            font-weight: 600;
        }
        .liquidity_svg+div {
            display: flex;
            align-items: center;
        }
        .liquidity_svg+div svg {
            fill: rgb(31, 199, 212);
            margin-left: 10px;
            cursor: pointer;
        }
        .liquidity_find {
            background-color: rgb(238, 238, 238);
            text-align: center;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            color: rgb(122, 110, 170);
            font-size: 14px;
            font-weight: 600;
        }
        .liquidity_parent {
            border: 2px solid transparent
        }
         .liquidity_parent>div:first-child {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 20px;
         }
         .liquidity_parent:hover {
             border: 2px solid #ddd;
             border-radius: 20px;
         }
         .liquidity_parent img {
             width: 25px;
             height: 25px
         }
         .liquidity_parent i {
             cursor: pointer;
             font-size: 18px;
             font-weight: 700;
             color: rgb(69, 42, 122);
         }
        .liquidity_your {
            display: flex;
            margin-left: 20px;
        }
        .liquidity_unconnecte {
            margin: 30px 0;
            color: #bbb;
        }
        .liquidity_detail {
            display: flex;
            align-items: center;
            flex: 1;
        }.liquidity_pool>div>div:first-child {
            display: flex;
            flex: 1;
            justify-content: start;
        }
        .liquidity_pool>div {
            padding: 5px 20px;
            display: flex;
            align-items: center;
        }
        .liquidity_pool>div>div:last-child {
            display: flex;
            align-items: center;
        }
        .liquidity_pool #liquidity_remove {
            color: #fff;
            font-weight: 700;
            margin: 10px 0;
        }
        .liquidity_pool #liquidity_remove>div {
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 48px;
            background-color: rgb(31, 199, 212);
            box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
            cursor: pointer;
            border-radius: 16px;
        }
        .liquidity_pool #liquidity_remove>div:hover {
            opacity: 0.6;
        }
        .liquidity_pool #liquidity_remove>div:first-child {
            margin-right: 15px;
        }
        .liquidity_detail>div:first-child {
            margin-right: 20px;
        }
        .liquidity_find>div>div:first-child {
            margin-top: 20px;
        }
        .liquidity_find>div>div:nth-child(2) {
            margin: 30px 0 10px 0;
        }
        .liquidity_find>div>div:last-child {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
        .liquidity_find .liquidity_router {
            border: 3px solid rgb(31, 199, 212);
            border-radius: 20px;
            padding: 4px 10px;
            color: rgb(31, 199, 212);
            font-weight: 700;
            cursor: pointer;
        }
        .liquidity_add {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
        }
        .liquidity_add>div{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            padding: 0 100px;
            color: #fff;
            border-radius: 20px;
            font-weight: 700;
            background-color: rgb(31, 199, 212);
            cursor: pointer;
        }
        .liquidity_add>div>div {
            margin-left: 10px;
        }
    }
}
</style>