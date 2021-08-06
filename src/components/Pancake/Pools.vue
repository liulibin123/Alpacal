<template>
    <div class="pools">
        <div class="pools_head">
            <div>
                <div>Syrup Pools</div>
                <div>
                    <div>Just stake some tokens to earn.</div>
                    <div>High APR, low risk.</div>
                </div>
            </div>
            <div>
                <div class="pools_help">
                    <div>Help</div>
                    <svg viewBox="0 0 24 24" color="backgroundAlt" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM bHZZoR"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
                </div>
                <div class="pools_auto">
                    <div>
                        <div>Auto CAKE Bounty</div>
                        <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM cSawQi"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
                    </div>
                    <div class="pools_cliam">
                        <div>
                            <div>0.006</div>
                            <div>~0.10 USD</div>
                        </div>
                        <div>Claim</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pools_search">
            <div>
                <div @click="handleIcon1"><i class="el-icon-menu" :class="icon ? 'pools_icon1':'pools_icon2'"></i></div>
                <div @click="handleIcon2"><i class="el-icon-s-grid" :class="!icon ? 'pools_icon1':'pools_icon2'"></i></div>
                <div><el-switch
                    v-model="value"
                    active-color="#ddd"
                    inactive-color="rgb(49, 208, 170)">
                    </el-switch>
                </div>
                <div>Staked only</div>
                <div class="pools_live">
                    <div :class="color ? 'pools_color1':'pools_color2'" @click="handleColor1">Live</div>
                    <div :class="!color ? 'pools_color1':'pools_color2'" @click="handleColor2">Finished</div>
                </div>
            </div>
            <div>
                <div class="pools_hot">
                    <div>SORT BY</div>
                    <div>
                        <div :class="hide ? 'pools_hot1':'pools_hot2'" @click="handleHide">
                            <div>Hot</div>
                            <div><svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM kDWlca"><path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path></svg></div>
                        </div>
                        <transition name="fade">
                            <div v-if="hide" class="pools_hide">
                                <div>fff</div>
                                <div>aaa</div>
                                <div>fff</div>
                                <div>aaa</div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="pools_text">
                    <div>SEARCH</div>
                    <input type="text" placeholder="Search pools">
                </div>
            </div>
        </div>
        <div>
            <div class="pool_body" v-for="(data,index) in datalist" :key="data.apr">
                <div class="pool_header">
                    <div>
                        <img :src="data.url" alt="">
                        <div>
                            <h4>{{data.name}}</h4>
                            <div>{{data.nameSmall}}</div>
                        </div>
                    </div>
                    <div>
                        <div>{{data.priceName}}</div>
                        <h4>0.0</h4>
                        <div>0 USD</div>
                    </div>
                    <div>
                        <div>APY</div>
                        <div>
                            <div>{{data.apr}}</div>
                            <div>
                                <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM cSawQi"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Total staked</div>
                        <div>{{data.total}} CAKE</div>
                    </div>
                    <div>
                        <div>Ends in</div>
                        <div>-</div>
                    </div>
                    <div @click="handleChange(index)">
                        <div>{{current === index && isShow ? 'Hide':'Details'}}</div>
                        <i :class="current === index && isShow ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                    </div>
                </div>
                <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
                    <div class="pool_article" v-if="current === index && isShow">
                        <div>
                            <div>
                                <div>See Token Info</div>
                                <div>
                                    <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <div>View Project Site</div>
                                <div><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg></div>
                            </div>
                            <div>
                                <div>View Contract</div>
                                <div><svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM iXahuZ"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg></div>
                            </div>
                            <div>
                                <div>Add to Metamask</div>
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
                    url:'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
                    name:'Auto CAKE',
                    nameSmall: 'Automatic restaking',
                    priceName: 'Recent CAKE profit',
                    apr: '97.49%',
                    total: '92,444,150',
                },
                {
                    url:'https://pancakeswap.finance/images/tokens/0x833f307ac507d47309fd8cdd1f835bef8d702a93.svg',
                    name:'Earn REVV',
                    nameSmall: 'Stake CAKE',
                    priceName: 'REVV Earned',
                    apr: '89.94%',
                    total: '192,700',
                },
                {
                    url:'https://pancakeswap.finance/images/tokens/0x8595F9dA7b868b1822194fAEd312235E43007b49.svg',
                    name:'Earn BTT',
                    nameSmall: 'Stake CAKE',
                    priceName: 'BTT Earned',
                    apr: '78.39%',
                    total: '649,886',
                },
                {
                    url:'https://pancakeswap.finance/images/tokens/0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab.svg',
                    name:'Earn SKILL',
                    nameSmall: 'Stake CAKE',
                    priceName: 'SKILL Earned',
                    apr: '54.78%',
                    total: '139,980',
                },
                {
                    url:'https://pancakeswap.finance/images/tokens/0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99.svg',
                    name:'Earn WIN',
                    nameSmall: 'Stake CAKE',
                    priceName: 'WIN Earned',
                    apr: '77.26%',
                    total: '530,145',
                },
                {
                    url:'https://pancakeswap.finance/images/tokens/0xB0e1fc65C1a741b4662B813eB787d369b8614Af1.svg',
                    name:'Earn IF',
                    nameSmall: 'Stake CAKE',
                    priceName: 'IF Earned',
                    apr: '79.03%',
                    total: '99,853',
                }
            ],
            current: 0,
            value: true,
            hide: false,
            color: true,
            icon: true,
            isShow: false,
            name: 'Details'
        }
    },
    methods: {
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
        },
        handleChange(index) {
            this.current = index
            this.isShow = !this.isShow
        },
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
.pools {
    .pools_head {
        display: flex;
        align-items:center;
        background: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
        height: 240px;
        padding: 30px 250px;
    }
    .pools_head>div:first-child {
        flex: 1;
    }
    .pools_head>div:first-child>div:first-child{
        font-size: 64px;
        font-weight: 700;
        color: rgb(118, 69, 217)
    }
    .pools_head>div:first-child>div:nth-child(2) {
        font-size: 20px;
        font-weight: 700;
        color: rgb(40, 13, 95);
    }
    .pools_head>div:last-child,.pools_auto>div:first-child,.pools_cliam {
        display: flex;
        align-items: center;
    }
    .pools_help {
        display: flex;
        align-content: center;
        justify-content: center;
        transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
        padding: 10px 14px;
        background-color: rgb(122, 110, 170);
        color: rgb(255, 255, 255);
        border: 0px;
        border-radius: 16px;
        box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
        cursor: pointer;
        font-weight: 600;
        margin-right: 20px;
    }
    .pools_help>svg {
        fill: #fff;
        margin-left: 10px;
    }
    .pools_auto {
        background-color: #fff;
        border-radius: 20px;
        padding: 20px;
    }
    .pools_auto>div:first-child>div {
        color: rgb(122, 110, 170);
        font-weight: 600;
        line-height: 1.5;
        margin-right: 4px;
        font-size: 16px
    }
    .pools_auto>div:first-child>svg {
        fill: rgb(122, 110, 170);
    }
    .pools_cliam {
        margin-top: 20px;
    }
    .pools_cliam>div:first-child {
        flex: 1;
    }
    .pools_cliam>div:first-child>div:first-child {
        color: rgb(40, 13, 95);
        font-weight: 600;
        line-height: 1.5;
        font-size: 20px;
    }
    .pools_cliam>div:first-child>div:last-child {
        color: rgb(122, 110, 170);
        font-weight: 400;
        line-height: 1.5;
        font-size: 12px;
    } 
    .pools_cliam>div:last-child {
        align-items: center;
        border: 0px;
        border-radius: 16px;
        box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
        cursor: pointer;
        display: inline-flex;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        line-height: 1;
        height: 32px;
        padding: 0px 16px;
        background-color: rgb(31, 199, 212);
        color: white;
    }
    .pools_search,.pools_search>div,.pools_live,.pools_hot>div:last-child>div:first-child {
        display: flex;
        align-self: center;
    }
   .pools_search {
       margin: 70px 250px 50px 250px;
       padding:0 100px 0 50px;
       color: rgb(40, 13, 95);
       font-size: 16px;
       font-weight: 600;
       .pools_icon1 {
            color: rgb(189, 194, 196);
            cursor: pointer;
       }
       .pools_icon2 {
            color: rgb(31, 199, 212);
            cursor: pointer;
       }
       .pools_live {
            background-color: rgb(238, 234, 244);
            border-radius: 18px;
            border: 1px solid rgb(215, 202, 236);
            cursor: pointer;
       }
       .pools_live .pools_color1 {
           display: flex;
           justify-content: center;
           align-content: center;
           padding: 5px 15px;
           border-radius: 18px;
           color: #fff;
           background-color: rgb(122, 110, 170);
       }.pools_live .pools_color2 {
           display: flex;
           justify-content: center;
           align-content: center;
           color: rgb(122, 110, 170);
           padding: 5px 15px;
           border-radius: 18px;
       }
       .pools_hot>div:first-child,.pools_text>div {
           font-size: 11px;
           font-weight: 500;
       }
       .pools_hot>div:last-child>div {
            background-color: rgb(238, 234, 244);
            padding: 7px 20px;
            width: 170px;
            box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
            border: 1px solid rgb(215, 202, 236);
            margin-right: 20px;
            cursor: pointer;
       }
       .pools_hot>div:last-child .pools_hot1 {
            border-radius: 16px 16px 0 0;
       }
       .pools_hot>div:last-child .pools_hot2 {
           border-radius: 16px
       }
       .pools_hot>div:last-child .pools_hide {
           position: absolute;
           z-index: 100;
           border-radius: 0 0 16px 16px;
           border-top: 0;
           padding: 0;
       }
       .pools_hot .pools_hide>div {
           width: 100%;
           padding: 7px 20px;
       }
       .pools_hot .pools_hide>div:hover {
           background-color: rgb(215, 202, 236);
       }
       .pools_hot>div:last-child>div:first-child>div:first-child {
            flex: 1;
       }
       .pools_hot .pools_hide>div:last-child {
           border-radius: 0 0 16px 16px;
       }
        .pools_text input {
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
   .pools_search>div:first-child {
       flex: 1;
   }
   .pools_search>div:first-child>div {
       display: flex;
       align-self: center;
       margin-right: 15px;
   }
   .pool_body {
        filter: drop-shadow(rgba(25, 19, 38, 0.15) 0px 1px 4px);
        width: 70%;
        background-color: #fff;
        margin: 0 250px;
        // border-radius: 20px 20px 0 0;
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
        color:rgb(122, 110, 170);
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
        cursor: pointer;
    }
    .pool_header>div:last-child i {
        font-weight: 700;
        margin-top: 5px;
        margin-left: 10px;
    }
    .pool_article {
        background-color: #faf9fa;
        padding: 30px 40px;
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
        font-size: 14px;
        margin-top: 20px;
        color:rgb(40, 13, 95);
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
    background-color: #f8f8f8;
    position: absolute;
    width: 86vw;
    height: 100%;
}
</style>