<template>
    <div class="child_item">
        <h2 style="font-size: 24px">Create new item</h2>
        <div class="child_aside">
            <div class="child_span"><span style="font-weight: 600;margin-right: 10px">{{cname.childname}}</span><span>has been created</span></div>
            <div class="child_img"><img :src="cname.imges" alt=""></div>
            <div style="display: flex;margin-left:15px">
                <router-link to="/cell"><el-button type="primary" class="child_first_button">Visit</el-button></router-link>
                <router-link to="/edit"><el-button type="primary" class="child_second_button">Edit</el-button></router-link>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            cname: {}
        }
    },
    mounted() {
        this.cname = JSON.parse(localStorage.getItem('child'))
    }
}
</script>
<style scoped>
.child_item {
    padding: 20px 600px
}
.child_item .child_aside {
    margin: 40px 200px;
}
.child_item .child_span {
    display: flex;
    justify-content: center;
}
.child_item .child_aside span {
    font-size: 20px;
}
.child_item .child_img {
    margin-top: 20px;
    width: 350px;
    height: 350px;
    /* background-color: #aaa; */
    border: 1px solid #999;
    box-shadow: 5px 5px 5px #aaa;
    text-align: center;
}
.child_item .child_img img {
    width: 350px;
    height: 350px
}
.child_item button{
    margin-top: 30px;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    font-weight: 600;
}
.child_item .child_first_button {
    background-color: rgb(43, 133, 236);
    color: #fff;
    margin-right: 20px;
}
.child_item .child_second_button {
    background-color:#fff;
    color:rgb(43, 133, 236);
    border: 2px solid rgb(43, 133, 236);
}
</style>