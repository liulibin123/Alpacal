<template>
    <div class="deposit">
        <div class="deposit_back">
            <div class="deposit_article">
                <div class="deposit_img">
                    <h5>Withdrawing ibALPACA</h5>
                    <img src="https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/alpaca.svg" alt="">
                </div>
                <div class="deposit_avail">Available Balance: 0.00 ALPACA</div>
                <div class="deposit_input">
                    <div class="demo-input">
                        <input type="text" placeholder="Withdraw Amount">
                    </div>
                    <div style="width: 73%"></div>
                    <div>Max</div>
                </div>
                
                <div>You will receive: <span>~{{data}} ibALPACA</span></div>
                <div class="deposit_back_icon">
                    <router-link to="/lend" tag="div"><i class="el-icon-arrow-left"></i><div>Back</div></router-link>
                    <div style="width: 80%"></div>
                    <div @click="handleConfirm">Confirm</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import getProvider from '../../assets/js/getProvider'
import approve from '../../assets/js/approve'
import BigNumber from 'bignumber.js'
export default {
    data() {
        return {
            input1: '',
            data: '2'
        }
    },
    methods: {
        handleConfirm() {
            let web3js = getProvider();//web3实例
            approve();
            let amount =  new BigNumber(1*1e18);
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
            myContract.methods.withdraw(amount.toString()).send({from: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7'},function(err,result){
                console.log(result)
            })
        }
    }
}
</script>
<style scoped>
.deposit {
    background-color: #f4f4f4;
    width: 100%;
    height: 600px;
}
.deposit .deposit_back {
    width: 60%;
    height: 500px;
    position: absolute;
    top: 250px;
    right: 50px;
    left: 500px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 5px 5px #ccc;
}.deposit .deposit_article {
    padding: 80px 50px;
}.deposit .deposit_img {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}
.deposit .deposit_img h5 {
    font-size: 22px;
    font-weight: 700;
}
.deposit .deposit_img img{
    margin-top: -10px;
    margin-left: 10px;
}.deposit .deposit_avail {
    font-size: 14px;
    color: #888;
    font-weight: 500;
}
.deposit .demo-input input{
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    border-right: hidden;
    border-left: hidden;
    width: 100%;
    height: 50px;
    padding-left: 20px;
}
.deposit .deposit_input {
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 30px;
}
.deposit .deposit_input>div:last-child{
    color:#31c77f;
    font-weight: 600;
    border-left: 1px solid #aaa;
    padding-left: 20px;
}
.deposit .deposit_input+div {
    font-size: 14px;
    color: #666;
    font-weight: 500;
    display: flex;
    align-items: center;
}
.deposit .deposit_input+div>span {
    margin-left: 10px;
    color: #31c77f;
    font-weight: 600;
}
.deposit .deposit_back_icon {
    margin-top: 100px;
    display: flex;
}
.deposit .deposit_back_icon>div:first-child {
    color:#aaa;
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.deposit .deposit_back_icon>div:first-child:hover {
    cursor: pointer;
    background-color: rgb(250, 250, 250);
    border-radius: 10px;
}
.deposit .deposit_back_icon>div:first-child>i {
    font-weight: 600;
}
.deposit .deposit_back_icon>div:last-child {
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 40px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa
}
</style>