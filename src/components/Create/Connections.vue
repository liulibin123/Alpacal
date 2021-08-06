<template>
    <div class="connection">
        <article>
            <h2>My Connections</h2>
            <div style="color: #555">Create, curate, and manage collections of unique NFTs to share and sell.</div>
            <button class="create" @click="handleCreate">Create a connection</button>
            <button class="point">
                <div style="width: 5px;height: 5px;background: #888;border-radius: 50%;"></div>
                <div style="width: 5px;height: 5px;background: #888;border-radius: 50%;"></div>
                <div style="width: 5px;height: 5px;background: #888;border-radius: 50%;"></div>
            </button>
            <div v-for="(item,index) in datalist" :key="index">
              <div class="content">
                <div class="content_top">
                  <el-row class="block-col-2" style="float: right">
                    <el-col :span="12">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
                            <el-submenu index="1">
                                <template slot="title">
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
                </el-row></div>
                <div class="content_bottom">
                  <h5>{{item.username}}</h5>
                  <div class="content_name">Explore the <span style="margin: 0 5px">fds</span>collection</div>
                  <div class="content_item" style="margin-top: 20px"><span style="margin: 0 5px">2</span>items</div>
                </div>
                <img :src="imageUrl" alt="">
              </div>
            </div>
              
        </article>

        <!-- 遮罩 -->
        <div :class="{hide: isShow,hide1: !isShow}">
            <div class="create-connection">
                <div v-show="not">
                    <div class="create_header">
                        <div class="null" style="width: 1px"></div>
                        <div class="create_header_left"><h5>Create your connection</h5></div>
                        <div class="create_header_right" @click="handleCreate"><i class="el-icon-close" style="font-weight: 600;cursor:pointer;"></i></div>
                    </div>
                    <div class="create_article">
                        <div class="create_article_logo">
                        <label for="images">Logo *</label>
                        <div>(350 x 350 recommended)</div>
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        </div>
                        <div class="create_article_name">
                        <label for="name">Name *</label><br/>
                        <input type="text" id="name" placeholder="Example: Treasures of the Sea" required spellcheck="false" ref="ipt1" v-model="itemname">
                        </div>
                        <div class="create_article_desc">
                        <label for="desc">Description</label>
                        <div style="margin-bottom: 5px">0 of 1000 characters used</div>
                        <textarea name="desc" id="desc" rows="10" placeholder="Provide a description for your store. Markdown syntax is supported." maxlength="1000"></textarea>
                        </div>
                        <div class="create_article_rinkeby">
                        <label for="rinkeby">Blockchain</label>
                        <div>Select the blockchain where you'd like new items from this collection to be added by default.</div>
                        <div class="rinkrby_div">
                            
                            <el-row class="block-col-2">
                            <el-col :span="12">
                                <el-dropdown trigger="click" placement="top-end" style="text-aline: center">
                                <span class="el-dropdown-link">
                                    <img src="../../assets/images/ethereum.png" alt="" style="border-radius: 50%">Rinkeby
                                </span>
                                <i class="el-icon-arrow-down el-icon-arrow-down" style="margin-right: 0"></i>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-plus"></el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                            </el-row>
                        </div>
                        </div>
                        <button class="create_input" @click="createChild">Create</button>  
                    </div>
                </div>
                <div v-show="!not" class="create_connection_child">
                    <div class="create_header">
                        <div class="null" style="width: 1px"></div>
                        <div class="create_header_left"><h5><span>{{itemname}}</span> has been created</h5></div>
                        <div class="create_header_right" @click="handleCreate"><i class="el-icon-close" style="font-weight: 600"></i></div>
                    </div>
                    <div class="localimg">
                        <div style="width:200px; height:200px">
                          <img :src="imageUrl" alt="">
                        </div>
                    </div>
                    <router-link to="/items"><button class="create_input" @click="handleCun">Add Items</button></router-link>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return{
      isShow: false,
      not: true,
      point: false,
      name: 'liuliubin',//假定的名称
      imageUrl: '',
      datalist: [],
      itemname: '',
      data: {}
    }
  },
  methods: {
    handleCreate(){
      this.isShow = !this.isShow
      this.not = true
    },
    createChild(){
        this.not = false;
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }, handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleCun(){
        this.data = {img:this.imageUrl,username:this.itemname};
        this.datalist.push(this.data)
        localStorage.setItem('items',JSON.stringify(this.datalist));
      }
  },
}
</script>

<style>
.connection article{
    padding-top: 100px;
    padding-left: 300px;
  }
  .connection article h2{
    margin: 20px 0 30px 0;
  }
  .connection article button{
    width: 210px;
    height: 50px;
    margin: 30px 20px 30px 0;
    border-radius: 5px;
    border: 1px solid #aaa;
  }
  .connection article .create{
    background-color: rgb(19, 130, 204);
    color: #fff;
    font-weight: 700;
  }
  .connection article .point{
    background-color: #fff;
    width: 50px;
    padding-left: 22px;
    line-height: 50px;
  }
  .connection article .content{
    overflow: hidden;
    width: 400px;
    height: 450px;
    background-color: #aaa;
  }
  .connection article .point_child {
      float: right;
      width: 30px;
      height: 30px;
      padding-left: 13px;
  }
 .connection .content_top{
   background-color: rgb(235, 233, 233);
   width: 100%;
   height: 50%
 }
 .connection .content_bottom {
   background-color: #fff;
   width: 100%;
   height: 50%;
   border: 1px solid #eee;
   margin-right: 20px;
 }
  .connection .content_bottom h5{
    margin: 60px 0 50px 180px;

  } .connection .content_bottom .content_name, .connection .content_bottom .content_item{
    display: flex;
    justify-content: center;
  }
 .connection .content{
position: absolute;
 }
 .connection .content img{
   width: 50px;
   height: 50px;
   position: relative;
   background-color: #aaa;
 }
  .connection .hide {
     width: 100%;
     height: 100%;
     display: block;
     background: #aaa;
     position: absolute;
     top: 0;
    left: 0;
  }
  .connection .hide1 {
    display: none;
  }
  .connection .hide .create-connection {
    width: 600px;
    margin: 50px auto;
    border-radius:10px;
    background: #fff;
    padding: 10px 15px;
  }
  .connection .hide .create_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
  .connection .hide .create_article{
    margin-top: 30px;
  }
  .connection .hide .create_article label{
    font-weight: 600;
  }
  .connection .hide .create_article .file{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: 3px dashed #666;
    border-radius: 50%;
    background-color: #ccc;
  }
   .connection .hide .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
   .connection .hide .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
   .connection .hide .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
   .connection .hide .avatar {
    width: 178px;
    height: 178px;
    display: block;
  } 
  .connection .hide .create_article_name {
    margin-top: 20px;
  }
  .connection .hide .create_article_name input{
    width: 100%;
    height: 50px;
    border-radius: 5px;
  }
  .connection .hide .create_article_desc{
    margin-top: 20px;
  }
  .connection .hide .create_article_desc textarea {
    width: 100%;
    height: 120px;
    border-radius: 5px;
  }
  .connection .hide .create_article_rinkeby{
    margin-top: 20px;
  }
  .connection .hide .create_article_rinkeby .rinkrby_div{
    width: 100%;
    height: 50px;
    border: 1px solid #666;
    border-radius: 5px;
  }
  .connection .create_input{
    width: 100px;
    height: 50px;
    background-color: rgb(46, 92, 219);
    border-radius: 5px;
    text-align: center;
    margin-left: 250px;
    margin-top: 30px;
    color: #fff
  }
  .connection .create_connection_child {
    width:100%;
    height:100%;
    background:#fff;
  }
  .content .el-col-12 {
    width: 100%;
}
.content .el-submenu__title {
    padding-left: 30px !important
}.connection .hide .avatar-uploader-icon{
  display: flex;
  justify-content: center;
}
.connection .hide .localimg img{
  /* background-color: #aaa; */
  width: 200px;
  height: 200px;
  margin-left: 200px;
}
</style>