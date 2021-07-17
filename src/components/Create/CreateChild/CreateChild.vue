<template>
    <div class="child">
        <div class="child_create_new">
            <h1>Create new item</h1>
            <h4>Image, Video, Audio, or 3D Model</h4>
            <div>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB</div>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <h4>Name *</h4>
            <el-input v-model="input" placeholder="Item Name"></el-input>
            <h4>External Link</h4>
            <div>OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</div>
            <el-input v-model="inputa" placeholder="Https://yoursite.io/item/123"></el-input>
            <h4>Description</h4>
            <div>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</div>
            <el-input
            type="textarea"
            :rows="2"
            placeholder="Provide a detailed description of your item"
            v-model="textarea">
            </el-input>
            <h4>Collection *</h4>
            <div>This is the collection where your item will appear.</div>
            <el-row class="demo-autocomplete" style="width: 100%">
                <el-col :span="12">
                    <el-autocomplete
                    class="inline-input"
                    v-model="state1"
                    :fetch-suggestions="querySearch"
                    placeholder="Select connection"
                    @select="handleSelect"
                    ><i class="el-icon-arrow-down" slot="suffix"></i></el-autocomplete>
                </el-col>
            </el-row>
            <div class="child_flex">
                <div>
                    <div class="child_size"><i class="el-icon-s-fold child_icon"></i>Properties</div>
                    <div class="child_middle">Textual traits that show up as rectangles</div>
                </div>
                <div class="child_border" style="margin-left: 435px"><i class="el-icon-plus"></i></div>
            </div>
            <el-divider></el-divider>
            <div class="child_flex">
                <div>
                    <div class="child_size"><i class="el-icon-star-on child_icon"></i>Levels</div>
                    <div class="child_middle">Numerical traits that show as a progress bar</div>
                </div>
                <div class="child_border" style="margin-left:408px"><i class="el-icon-plus"></i></div>
            </div>
            <el-divider></el-divider>
            <div class="child_flex">
                <div>
                    <div class="child_size"><i class="el-icon-s-data child_icon"></i>Stats</div>
                    <div class="child_middle">Numerical traits that just show as numbers</div>
                </div>
                <div class="child_border" style="margin-left: 415px"><i class="el-icon-plus"></i></div>
            </div>
            <el-divider></el-divider>
            <div class="child_flex">
                <div>
                    <div class="child_size"><i class="el-icon-s-help child_icon"></i>Unlockable Content</div>
                    <div class="child_middle">Include unlockable content that can only be revealed by the owner of the item.</div>
                </div>
                <div style="margin-top: 35px; margin-left: 165px">
                    <el-switch
                    v-model="value1"
                    active-color="rgb(103, 106, 110)"
                    inactive-color="rgb(5, 99, 206)">
                    </el-switch>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="child_flex">
                <div>
                    <div class="child_size"><i class="el-icon-warning child_icon"></i>Explicit & Sensitive Content</div>
                    <div class="child_middle">Set this item as explicit and sensitive content</div>
                </div>
                <div style="margin-top: 35px; margin-left: 410px">
                    <el-switch
                    v-model="value2"
                    active-color="rgb(103, 106, 110)"
                    inactive-color="rgb(5, 99, 206)">
                    </el-switch>
                </div>
            </div>
            <el-divider></el-divider>
            <h4>Supply</h4>
            <div>The number of copies that can be minted. No gas cost to you! Quantities above one coming soon. </div>
            <el-input v-model="input" placeholder="1" :disabled="true"></el-input>
            <h4>Blockchain</h4>
            <el-input v-model="input" placeholder="请输入内容" :disabled="true"><i class="el-icon-arrow-down" slot="suffix"></i></el-input>
            <h4>Freeze metadata</h4>
            <div>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</div>
            <el-input v-model="input" placeholder="To freeze your metadata, you must create your item first." :disabled="true"></el-input>
            <el-divider></el-divider>
            <div @click="handleChild">
                 <router-link to="/childitem"><el-button type="primary">Create</el-button></router-link>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        input: '',
        inputa: '',
        textarea: '',
        state1: '',
        value1: true,
        value2: true,
        itemchild: {}
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
       handleSelect(item) {
        console.log(item);
      },
      handleAvatarSuccess(res, file) {
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" }]},
      handleChild(){
        this.dialogImageUrl = {imges:this.dialogImageUrl, childname:this.input};
        localStorage.setItem('child',JSON.stringify(this.itemchild));
        console.log(this.itemchild)
      }
    }
  }
</script>

<style scoped>
.child .child_create_new {
    padding: 20px 550px;
}
.child .child_create_new h1{
    font-size: 26px;
}
.child .child_create_new h4{
    font-size: 14px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 10px;
}
.child .child_create_new div{
    font-size: 15px;
    margin-bottom: 15px;
}
.child .el-col-12 {
    width: 100%;
}
.child .el-autocomplete {
    width: 100%;
}
.child .el-icon-arrow-down{
    margin-top: 10px;
    font-size: 18px;
}.child .child_icon {
    margin-right: 10px;
    font-size: 18px;
}
.child .child_size {
    font-weight:600;
}.child .child_middle{
    margin-left: 28px;
}
.child .child_flex{
    display: flex;
}
.child .child_border{
    width: 50px;
    height: 50px;
    border:2px solid rgb(28, 123, 233);
    border-radius: 5px;
    font-size: 24px;
    color: rgb(28, 123, 233);
    text-align: center;
    padding-top: 15px;
    font-weight: 700;
    margin-top: 20px;
}
.child button{
    margin-top: 30px;
    width: 150px;
    height: 50px;
    background-color: rgb(43, 133, 236);
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
}
.child .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
   .child .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }.child .avatar-uploader-icon{
  display: flex;
  justify-content: center;
}

</style>