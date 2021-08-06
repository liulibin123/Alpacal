<template>
    <div>
        <button @click="click">132</button>
    </div>
</template>

<script>
import  PubSub from 'pubsub-js'
import Web3 from 'web3'
export default {
    data() {
        return {
            address:'12'
        }
    },
    methods: {
        click() {
            let web3Provider;
            if (window.ethereum) {
                web3Provider = window.ethereum;
                try {
                // 请求用户授权
                window.ethereum.enable();
                } catch (error) {
                // 用户不授权时
                console.error("User denied account access")
                }
            }
            const web3js = new Web3(web3Provider);//web3js就是你需要的web3实例
            const that = this
            web3js.eth.getAccounts((error, result)=> {
                if (!error) {
                //授权成功后result能正常获取到账号了
                that.address = result[0]
                console.log('nnnn',that.address)
            PubSub.publish('address',that.address)
                }
            })
            console.log(this.address)
        }
    }
}
</script>