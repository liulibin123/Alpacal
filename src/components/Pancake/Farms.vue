<template>
    <div class="farms">
        <div class="farms_head">
            <div>Farms</div>
            <div>Stake LP tokens to earn.</div>
            <div><a href=""><span>Communit Auctions</span><i class="el-icon-right"></i></a></div>
        </div>
        <div class="farms_search">
            <div>
                <div @click="handleIcon1"><i class="el-icon-menu" :class="icon ? 'farms_icon1':'farms_icon2'"></i></div>
                <div @click="handleIcon2"><i class="el-icon-s-grid" :class="!icon ? 'farms_icon1':'farms_icon2'"></i></div>
                <div><el-switch
                    v-model="value"
                    active-color="#ddd"
                    inactive-color="rgb(49, 208, 170)">
                    </el-switch>
                </div>
                <div>Staked only</div>
                <div class="farms_live">
                    <div :class="color ? 'farms_color1':'farms_color2'" @click="handleColor1">Live</div>
                    <div :class="!color ? 'farms_color1':'farms_color2'" @click="handleColor2">Finished</div>
                </div>
            </div>
            <div>
                <div class="farms_hot">
                    <div>SORT BY</div>
                    <div>
                        <div :class="hide ? 'farms_hot1':'farms_hot2'" @click="handleHide">
                            <div>Hot</div>
                            <div><svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM kDWlca"><path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path></svg></div>
                        </div>
                        <transition name="fade">
                            <div v-if="hide" class="farms_hide">
                                <div>fff</div>
                                <div>aaa</div>
                                <div>fff</div>
                                <div>aaa</div>
                            </div> 
                        </transition>
                    </div>
                </div>
                <div class="farms_text">
                    <div>SEARCH</div>
                    <input type="text" placeholder="Search Farms">
                </div>
            </div>
        </div>
        <div style="margin-top: 50px">
            <div class="pool_body" v-for="(data,index) in datalist" :key="index">
                <div class="pool_header">
                    <div>
                        <img :src="data.img" alt="">
                        <div>
                            <h4>{{data.name}}-BNB</h4>
                        </div>
                    </div>
                    <div>
                        <div>Earned</div>
                        <h4>0.0</h4>
                    </div>
                    <div>
                        <div>APR</div>
                        <div>
                            <div>{{data.apr}}%</div>
                            <div>
                                <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM cSawQi"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Liquidity</div>
                        <div>${{data.liquidity}}</div>
                    </div>
                    <div>
                        <div>Multiplier</div>
                        <div>{{data.multiplier}}x</div>
                    </div>
                    <div @click="handleChange(index)">
                        <div>{{current === index && isShow == true ? 'Hide':'Details'}}</div>
                        <i :class="current === index && isShow == true ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                    </div>
                </div>
                <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
                    <div class="pool_article" v-if="current === index && isShow == true ">
                        <div>
                            <div>
                                <div>Get CAKE-BNB LP</div>
                                <div>
                                    <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <div>View Contract</div>
                                <div><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg></div>
                            </div>
                            <div>
                                <div>See Pair Info</div>
                                <div><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg></div>
                            </div>
                            <div>
                                <div>
                                    <div><svg viewBox="0 0 24 24" width="18px" color="secondary" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM dKlBvL"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg></div>
                                    <div>Core</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>CAKE EARNED</div>
                                <div>
                                    <div>0</div>
                                </div>
                            </div>
                            <div>
                                <div>Harvest</div>
                            </div>
                        </div>
                        <div>
                            <div>ENABLE FARM</div>
                            <div>Enable</div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datalist: [
                {
                    img: 'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
                    name: 'CAKE',
                    apr: 53.71,
                    liquidity: 659617051,
                    multiplier: 40,
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.svg',
                    name: 'BUSD',
                    apr: 25.98,
                    liquidity: 485104452,
                    multiplier: 8,
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c.svg',
                    name: 'BABYCAKE',
                    apr: 535.76,
                    liquidity: 61573702,
                    multiplier: 1,
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0x08ba0619b1e7A582E0BCe5BBE9843322C954C340.svg',
                    name: 'BMON',
                    apr: 619.92,
                    liquidity: 1360303,
                    multiplier: 1,
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13.svg',
                    name: 'CAKE',
                    apr: 418.21,
                    liquidity: 2015932,
                    multiplier: 1,
                },
                {
                    img: 'https://pancakeswap.finance/images/tokens/0xA58950F05FeA2277d2608748412bf9F802eA4901.svg',
                    name: 'WSG',
                    apr: 618.53,
                    liquidity: 1363692,
                    multiplier: 1,
                }
            ],
            isShow: false,
            current: -1,
            value: true,
            hide: false,
            color: true,
            icon: true
        }
    },
    methods: {
        handleChange(index) {
            this.isShow = !this.isShow
            this.current = index
        },
        handleHide() {
            this.hide = !this.hide
        },
        handleColor1() {
            this.color = true
        },
        handleColor2() {
            this.color = false
        },
        handleIcon1() {
            this.icon = false
        },
        handleIcon2() {
            this.icon = true
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active {
    animation: aaa 1s
}
.fade-leave-active {
    animation: aaa 0.5s reverse
}
@keyframes aaa {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.farms {
    .farms_head {
        background: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
        height: 240px;
        padding: 30px 250px;
    }
    .farms_head>div:first-child{
        font-size: 64px;
        font-weight: 700;
        color: rgb(118, 69, 217)
    }
    .farms_head>div:nth-child(2) {
        font-size: 24px;
        font-weight: 700;
        color: rgb(40, 13, 95);
    }
    .farms_head>div:last-child>a {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .farms_head>div:last-child>a>span {
        font-size: 16px;
        font-weight: 600;
        color: rgb(31, 199, 212);
        margin-right: 10px;
    }
    .farms_head>div:last-child>a>i {
        font-size: 20px;
        color: rgb(31, 199, 212);
        font-weight: 600;
    }
    background-color: #f8f8f8;
    position: absolute;
    width: 86vw;
    height: 100%;
    .farms_search,.farms_search>div,.farms_live,.farms_hot>div:last-child>div:first-child {
        display: flex;
        align-self: center;
    }
   .farms_search {
       margin: 70px 250px 0 250px;
       padding:0 100px 0 50px;
       color: rgb(40, 13, 95);
       font-size: 16px;
       font-weight: 600;
       .farms_icon1 {
            color: rgb(189, 194, 196);
            cursor: pointer;
       }
       .farms_icon2 {
            color: rgb(31, 199, 212);
            cursor: pointer;
       }
       .farms_live {
            background-color: rgb(238, 234, 244);
            border-radius: 18px;
            border: 1px solid rgb(215, 202, 236);
            cursor: pointer;
       }
       .farms_live .farms_color1 {
           display: flex;
           justify-content: center;
           align-content: center;
           padding: 5px 15px;
           border-radius: 18px;
           color: #fff;
           background-color: rgb(122, 110, 170);
       }.farms_live .farms_color2 {
           display: flex;
           justify-content: center;
           align-content: center;
           color: rgb(122, 110, 170);
           padding: 5px 15px;
           border-radius: 18px;
       }
       .farms_hot>div:first-child,.farms_text>div {
           font-size: 11px;
           font-weight: 500;
       }
       .farms_hot>div:last-child>div {
            background-color: rgb(238, 234, 244);
            padding: 7px 20px;
            width: 170px;
            box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
            border: 1px solid rgb(215, 202, 236);
            margin-right: 20px;
            cursor: pointer;
       }
       .farms_hot>div:last-child .farms_hot1 {
            border-radius: 16px 16px 0 0;
       }
       .farms_hot>div:last-child .farms_hot2 {
           border-radius: 16px
       }
       .farms_hot>div:last-child .farms_hide {
           position: absolute;
           z-index: 100;
           border-radius: 0 0 16px 16px;
           border-top: 0;
           padding: 0;
       }
       .farms_hot .farms_hide>div {
           width: 100%;
           padding: 7px 20px;
       }
       .farms_hot .farms_hide>div:hover {
           background-color: rgb(215, 202, 236);
       }
       .farms_hot>div:last-child>div:first-child>div:first-child {
            flex: 1;
       }
       .farms_hot .farms_hide>div:last-child {
           border-radius: 0 0 16px 16px;
       }
        .farms_text input {
            background-color: rgb(238, 234, 244);
            border-radius: 16px;
            box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
            color: rgb(40, 13, 95);
            display: block;
            font-size: 16px;
            height: 40px;
            outline: 0px;
            padding: 0px 16px;
            width: 100%;
            border: 1px solid rgb(215, 202, 236)
        }
   }
   .farms_search>div:first-child {
       flex: 1;
   }
   .farms_search>div:first-child>div {
       display: flex;
       align-self: center;
       margin-right: 15px;
   }
    .pool_body {
        filter: drop-shadow(rgba(25, 19, 38, 0.15) 0px 1px 4px);
        width: 70%;
        background-color: #fff;
        margin: 0 250px;
    }
    .pool_body:first-child {
        border-radius: 20px 20px 0 0;
    }
    .pool_header {
        padding: 0 40px;
        border-bottom: 3px solid rgb(231, 227, 235);
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
        font-size: 16px;
        font-weight: 600;
    }
    .pool_header>div:last-child {
        display: flex;
        flex: 0 0 120px;
        color: rgb(31, 199, 212);
        font-size: 16px;
        font-weight: 600;
        width: 20%;
        cursor: pointer;
    }
    .pool_header>div:last-child i {
        font-weight: 700;
        margin-top: 5px;
        margin-left: 10px;
    }
    .pool_article {
        background-color: rgb(250, 249, 250);
        padding: 20px;
        color: rgb(31, 199, 212);
        font-size: 16px;
        font-weight: 600;
        display: flex;
    }
    .pool_article>div:first-child {
        flex: 2 0 200px
    }
    .pool_article>div:first-child>div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .pool_article>div:first-child>div>div {
        cursor: pointer;
    }
    .pool_article>div:first-child>div>div:nth-child(2) {
        margin-left: 10px;
        fill: rgb(31, 199, 212);
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
        color: rgb(118, 69, 217);
        width: 80px;
        border: 3px solid rgb(118, 69, 217);
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
    }
    .pool_article>div:first-child>div:last-child>div:first-child svg {
        fill: rgb(118, 69, 217)
    }
    .pool_article>:nth-child(2) {
        display: flex;
        margin: 20px 0;
        flex: 3 0 200px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px 0 20px 20px;
    }
    .pool_article>:nth-child(2)>div:first-child {
        color: rgb(118, 69, 217);
        font-weight: 600;
        line-height: 1.5;
        text-transform: uppercase;
        font-size: 14px;
        width: 100%;
    }
    .pool_article>:nth-child(2)>div:first-child>div:last-child {
        margin-top: 20px;
        color: rgb(189, 194, 196)
    }
    .pool_article>:nth-child(2)>div:first-child>div:last-child>div:first-child {
        font-size: 20px;
        font-weight: 700;
    }
    .pool_article>:nth-child(2)>div:last-child {
        display: flex;
        justify-content: center;
        align-self: center;
        font-size: 16px;
        font-weight: 700;
        margin-top: 20px;
        color:rgb(189, 194, 196);
        margin-right: 20px;
        padding: 10px 20px;
        background-color: rgb(233, 234, 235);
        border-radius: 15px;
        cursor: pointer;
    }
    .pool_article>:nth-child(3) {
        flex: 3 0 200px;
        margin: 20px 0 20px 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px
    }
    .pool_article>:nth-child(3)>div:first-child {
        font-size: 14px;
        color: rgb(40, 13, 95)
    }
    .pool_article>:nth-child(3)>div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-radius: 10px;
        border: 3px solid rgb(31, 199, 212);
        cursor: pointer;
    }
}

</style>