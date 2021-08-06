<template>
    <div class="payouts">
        <div class="item_breadrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/connections' }">My Connections</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/items'}">{{item.username}}</el-breadcrumb-item>
                <el-breadcrumb-item>Royalty Payouts</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="payouts_article">
            <h3>
                Royalty Payouts
            </h3>
            <div class="payouts_after">After you configure a fee on your collection, pending and completed payouts to you will appear here. Payouts occur in bulk every month. On any given payout round, you'll only receive a payout if you've accumulated more than ~$60.00 worth of fees.</div>
            <div class="payouts_table">
                <div class="payouts_icon">
                    <i class="el-icon-circle-plus"></i>
                    <div style="margin-left:10px;font-weight:600">Royalty Payouts</div>
                </div>
                <div class="payout_item">
                    <div style="width: 400px">Item</div>
                    <div class="payouts_unit">
                        <span>Unit Price</span>
                        <span>Quantity</span>
                        <span>Fee Earned</span>
                        <span>Payout</span>
                    </div>
                </div>
                <div>
                    <div class="payuots_img">
                        <img src="../../assets/images/no-history.svg" alt="">
                    </div>
                    <div style="margin-left: 370px">No trading history yet</div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item:{}
        }
    },
    mounted(){
        this.item = JSON.parse(localStorage.getItem('items'))
    }
}
</script>
<style scoped>
.payouts .item_breadrumb {
    padding: 40px 30px;
    width: 100%;
    background-color: #eee;
}
.payouts .payouts_article{
    padding: 20px 500px
}
.payouts .payouts_after {
    margin: 15px 0;
    font-weight: 300;
}.payouts .payouts_table{
    border: 1px solid #eee;
    border-radius: 5px;
    height: 700px;
    width: 100%;
}
.payouts .payouts_table .payouts_icon{
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
}
.payouts .payouts_table .payout_item {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0 20px;
}
.payouts .payouts_table .payouts_unit {
    display: flex;
    align-items: center;
}
.payouts .payouts_table .payouts_unit span{
    margin-right: 40px;
}
.payouts .payouts_table .payuots_img {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
</style>