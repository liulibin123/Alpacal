<template>
    <div class="remove">
        <div style="width: 30%">
            <div class="remove_article">
                <div class="remove_flex">
                    <router-link to="/pancake/liquidity" tag="div" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-hYZPRl TdDnj"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></router-link>
                    <div class="remove_flex">Remove Liquidity</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                </div>
                <div class="remove_amount">
                    <div class="remove_flex">
                        <div style="flex:1">Amount</div>
                        <div @click="handleDetail">{{this.detail ? 'Simple':'Detail'}}</div>
                    </div>
                    <div>{{this.value1}}%</div>
                    <div class="block" v-if="!detail">
                        <el-slider v-model="value1" :show-tooltip="false"></el-slider>
                    </div>
                    <div class="remove_flex remove_slider" v-if="!detail" @click="handleNumbel">
                        <span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                    </div>
                </div>
                <div class="remove_change" v-if="detail">
                    <div class="remove_c">
                        <div class="remove_input remove_flex">
                            <div>Input</div>
                            <div>Balance: 1.84068</div>
                        </div>
                        <div class="remove_flex remove_img">
                            <div><input type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0"></div>
                            <div class="remove_flex">
                                <div>
                                    <img :src="this.data.img1" alt="">
                                    <img :src="this.data.img2" alt="">
                                </div>
                                <div>{{this.data.name1}}:{{this.data.name2}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="remove_icon"><i class="el-icon-bottom"></i></div>
                    <div class="remove_output remove_c">
                        <div>
                            <div>Output</div>
                            <div><i class="el-icon-minus"></i></div>
                        </div>
                        <div>
                            <div><input type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0"></div>
                            <div class="remove_flex">
                                <div><img :src="this.data.img2" alt=""></div>
                                <div class="remove_flex">
                                    <span>{{this.data.name1}}</span>
                                    <span class="el-icon-arrow-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="remove_icon"><i class="el-icon-plus"></i></div>
                    <div class="remove_output remove_c">
                        <div>
                            <div>Output</div>
                            <div><i class="el-icon-minus"></i></div>
                        </div>
                        <div>
                            <div><input type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0"></div>
                            <div class="remove_flex">
                                <div><img :src="this.data.img1" alt=""></div>
                                <div class="remove_flex">
                                    <span>{{this.data.name2}}</span>
                                    <span class="el-icon-arrow-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="remove_hide" v-else>
                    <div class="remove_flex"><i class="el-icon-bottom"></i></div>
                    <div>
                        <div class="remove_flex">
                            <div style="flex: 1">11.0961</div>
                            <div class="remove_flex">
                                <div><img :src="this.data.img1" alt="" width="25px" height="25px" style="margin-right: 10px"></div>
                                <div>{{this.data.name1}}</div>
                            </div>
                        </div>
                        <div class="remove_flex" style="margin-top: 15px">
                            <div style="flex: 1">0.0308044</div>
                            <div class="remove_flex">
                                <div><img :src="this.data.img2" alt="" width="25px" height="25px" style="margin-right: 10px"></div>
                                <div>{{this.data.name2}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="remove_price">
                    <div class="remove_flex">
                        <div>Price:</div>
                        <div>1 {{this.data.name1}} = 0.00277613 {{this.data.name2}}</div>
                    </div>
                    <div>1 {{this.data.name2}} = 360.213 {{this.data.name1}}</div>
                </div>
                <div class="remove_re remove_flex">
                    <div>
                        <div>Approve</div>
                    </div>
                    <div>Remove</div>
                </div>
            </div>
            <div class="remove_wallet">
                <div>
                    <div>LP TOKENS IN YOUR WALLET</div>
                    <div>
                        <div class="remove_w_img">
                            <div style="margin-right: 10px">
                                <img :src="this.data.img1" alt="">
                                <img :src="this.data.img2" alt="">
                            </div>
                            <div>{{this.data.name1}}/{{this.data.name2}}</div>
                        </div>
                        <div class="remove_wet">0</div>
                    </div>
                    <div>
                        <div style="flex:1">{{this.data.name2}}:</div>
                        <div class="remove_wet">0</div>
                    </div>
                    <div>
                        <div style="flex:1">{{this.data.name1}}</div>
                        <div class="remove_wet">0</div>
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
            data: {},
            value1: 30,
            detail: false
        }
    },
    methods: {
        handleDetail() {
            this.detail = !this.detail
        },
        handleNumbel(e) {
            this.value1 = parseInt(e.target.innerHTML.split('%')[0])
        }
    },
    mounted() {
        if(this.$store.state.item.coinName1) {
            this.data.name1 = this.$store.state.item.coinName1
            this.data.img1 = this.$store.state.item.coinImg1
            this.data.name2 = this.$store.state.item.coinName2
            this.data.img2 = this.$store.state.item.coinImg2
            console.log(this.data)
        }
    }
}
</script>
<style lang="less" scoped>
.remove {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(69, 42, 122);
    font-weight: 700;
    .remove_article {
        margin-top: 30px;
        background-color: #fff;
        border-radius: 30px;
        padding: 20px;
    }
    .remove_article .remove_flex {
        display: flex;
        align-items: center;
    }
    .remove_article>div:first-child>div:nth-child(2) {
        flex: 1;
        justify-content: center;
        font-size: 20px;
    }
    .remove_article>div:first-child>div:last-child {
        color: rgb(143, 128, 186)
    }
    .remove_change input {
        outline: none;
        border: none;
        background-color: transparent;
        color: rgb(69, 42, 122);
        font-weight: 700;
    }
    .remove_amount {
        border: 1px solid rgb(233, 234, 235);
        border-radius: 16px;
        padding: 24px;
        margin: 20px 0 10px 0;
    }
    .remove_amount>div:first-child {
        font-size: 14px;
    }
    .remove_amount>div:first-child>div:last-child {
        color: rgb(31, 199, 212);
        cursor: pointer;
    }
    .remove_amount>div:nth-child(2) {
        font-size: 65px;
    }
    .block {
        width: 90%;
        margin-left: 20px;
    }
    .remove_slider {
        justify-content: center;
    }
    .remove_slider>span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 14px 0 14px;
        padding: 0px 16px;
        background-color: rgb(239, 244, 245);
        box-shadow: none;
        color: rgb(31, 199, 212);
        height: 32px;
        border-radius: 16px;
        cursor: pointer;
    }
    .remove_c {
        border-radius: 16px;
        background-color: rgb(238, 234, 244);
        box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
        padding: 20px;
    }
    .remove_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0;
        stroke: rgb(143, 128, 186);
    }
    .remove_input {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    .remove_input>div:first-child {
        flex: 1;
    }
    .remove_img img {
        width: 20px;
        height: 20px;
    }
    .remove_img>div:first-child {
        flex: 1;
    }
    .remove_img>div:last-child>div:last-child {
        margin-left: 10px;
    }
    .remove_output>div {
        display: flex;
        align-items: center;
    }
    .remove_output img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    .remove_output i,.remove_output span {
        font-weight: 700;
    }
    .remove_output span {
        margin-left: 5px;
    }
    .remove_output>div:first-child {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .remove_output>div:first-child>div:first-child {
        flex: 1;
    }
    .remove_output>div:nth-child(2)>div:first-child {
        flex: 1;
    }
    .remove_hide>div:first-child {
        justify-content: center;
        margin-bottom: 10px;
    }
    .remove_hide>div:nth-child(2) {
        border: 1px solid rgb(233, 234, 235);
        border-radius: 16px;
        padding: 24px
    }
    .remove_price {
        margin: 20px 0;
        font-size: 14px;
    }
    .remove_price>div:first-child>div:first-child {
        flex: 1;
    }
    .remove_price>div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .remove_re>div:first-child {
        flex: 1;
    }
    .remove_re>div:last-child,.remove_re>div:first-child>div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(31, 199, 212);
        border-radius: 16px;
        width: 140px;
        padding: 10px 0;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
    }
    .remove_re>div:last-child:hover,.remove_re>div:first-child>div:hover {
        opacity: .6;
    }
    .remove_wallet {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        color: rgb(69, 42, 122);
        font-size: 13px;
    }
    .remove_wallet>div {
        background-color: #fff;
        width: 80%;
        border-radius: 30px;
        margin-top: 20px;
        padding: 30px 20px;
    }
    .remove_wallet>div>div {
        display: flex;
        align-items: center;
    }
    .remove_wallet>div>div:first-child {
        color: rgb(143, 128, 186);
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
    }.remove_wallet>div>div:nth-child(3) {
        margin: 10px 0;
    }
    .remove_w_img {
        flex: 1;
        display: flex;
        align-items: center;
    }
    .remove_wet {
        font-weight: 700;
    }
    .remove_w_img img {
        width: 20px;
        height: 20px;
    }
}
</style>