<template>
    <div class="item">
        <div class="item_breadrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/connections' }">My Connections</el-breadcrumb-item>
                <el-breadcrumb-item>{{userdata[0].username}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <el-divider></el-divider>
        <div class="item_img">
            <img :src="userdata[0].img" alt="">
        </div>
        <div class="itam_name">
            <h1>{{userdata[0].username}}</h1>
        </div>
        <div class="item_router">
            <div><router-link to="/edit"><el-button type="primary" icon="el-icon-edit">Edit</el-button></router-link></div>
            <div><router-link to="/visit"><el-button type="primary" icon="el-icon-s-release">Visit</el-button></router-link></div>
            <div><router-link to="/payouts"><el-button type="primary" icon="el-icon-s-fold">Royalties</el-button></router-link></div>
        </div>
        
        <div class="item_router-icon"><i class="el-icon-s-fold"></i><b style="font-size: 16px;margin-top: -4px;margin-left:10px">ITEMS</b></div>
        <el-divider class="item_line"></el-divider>
        <div class="item_child">
            <router-link to="/createchild"><el-button type="primary" class="item_primary">Add Items</el-button></router-link>
        </div>
        
        <div class="item_search">
            <div class="item_serch_icon"><i class="el-icon-search"></i></div>
            <el-input v-model="input" placeholder="Search" class="item_input"></el-input>
            <el-row class="tac item_select">
                <el-col :span="12">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                                <template slot="title">
                                    <span>comingsoon</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="/visit"><i class="el-icon-s-release"></i>Visit</el-menu-item>
                                <el-menu-item index="/edit"><i class="el-icon-edit"></i>Edit</el-menu-item>
                                <el-menu-item index="items"><i class="el-icon-s-grid"></i>Items</el-menu-item>
                                <el-menu-item index="payouts"><i class="el-icon-s-fold"></i>Royalties</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
                    
        </div>
        <div class="item_show">
            <div>
                <i class="el-icon-ice-cream-round"></i><span>0</span>
            </div>
            <img src="" alt="">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
 export default {
  data() {
    return {
      input: '',
      userdata: [],
      child: {}
    }
  },
  methods:{
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {
      this.userdata = JSON.parse(localStorage.getItem('items'))
      this.child = JSON.parse(localStorage.getItem('child'))
  }
}
</script>

<style scoped>
.item {
    position: absolute;
    width: 100%;
}
.item .item_breadrumb {
    padding: 40px 30px;
    width: 100%;
    background-color: #eee;
}
.item .el-divider--horizontal {
    margin: 0
}
.item .item_img {
    float: left;
    width: 180px;
    height: 180px;
    position: relative;
    top: 50px;
    left: 200px;
    border-radius: 50%;
    /* background-color: #aaa; */
}
.item .item_img img{
    width: 180px;
    height: 180px;
}
.item .itam_name {
    margin: 40px 0 80px 500px;
    font-size: 26px;
}
.item .item_router {
    margin-left: 500px;
    display: flex
}
.item .item_router div{
    border: 1px solid #eee;
    border-radius: 8px;
    margin-right: 20px;
    width: 70px;
    height: 70px;
    font-size: 10px;
    text-align: center;
}
.item .item_primary {
    width: 60px;
    height: 60px;
    font-size: 15px;
    background-color: rgb(35, 141, 240);
    color: #fff;
    font-weight: 600
}
.item .el-button--primary span {
    font-size: 12px;
}
.item .item_router-icon {
    margin: 30px 0 10px 300px;
    display: flex;
}
.item .item_line {
    width: 66%;
    margin-left: 15.8%;
}.item .item_child {
    margin-left: 300px;
    background-color: rgb(35, 141, 240);
    border-radius: 5px;
    width: 120px;
    margin-top: 10px;
    color: #fff;
}
.item .item_search {
    margin-top: 20px;
    display: flex;
}
.item .item_search .el-col-12 {
    width: 100%;
}
.item .item_serch_icon{
    margin-left: 300px;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
}
.item .item_select {
    margin-left: 30px;
    border: 1px solid #aaa;
    width: 400px;
    margin-right: 350px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px#eee;
} .item .item_show {
    margin-left: 300px;
    width: 300px;
    height: 400px;
    background-color: #aaa;
    margin-top: 20px;
    border-radius: 10px;
    margin-right: 350px;
}
</style>