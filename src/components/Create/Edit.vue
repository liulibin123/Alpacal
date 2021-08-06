<template>
    <div class="edit">
        <div class="item_breadrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/connections' }">My Connections</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/items' }">{{item.username}}</el-breadcrumb-item>
                <el-breadcrumb-item>Edit your collection</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="edit_article">
            <h3>Edit your collection</h3>
            <h5>Logo image *</h5>
            <div>This image will also be used for navigation. 350 x 350 recommended.</div>
            <el-upload
            class="avatar-uploader edit_input"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="item.img?item.img:imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" style="border-radius:50%"></i>
            </el-upload>
            <h5>Featured image</h5>
            <div>(optional) This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of OpenSea. 600 x 400 recommended.</div>
            <el-upload
            class="avatar-uploader edit_input"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="item.img?item.img:imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <h5>Banner image</h5>
            <div>(optional) This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended.</div>
            <el-upload
            class="avatar-uploader edit_input"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="item.img?item.img:imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <h5>Name *</h5>
            <el-input v-model="input1" :placeholder="item.username"></el-input>
            <h5>URL</h5>
            <div>Customize your URL on OpenSea. Must only contain lowercase letters, numbers, and hyphens.</div>
            <el-input v-model="input2" :placeholder="'https://opensea.io/assets/'+item.username" class="edit_input"></el-input>
            <h5>Description</h5>
            <div>Adding a category will help make your item discoverable on OpenSea.</div>
            <el-input
            type="textarea"
            :rows="5"
            v-model="textarea" class="edit_input">
            </el-input>
            <h5>Category</h5>
            <div>Adding a category will help make your item discoverable on OpenSea.</div>
            <el-row>
                <el-button class="edit_add">Add category</el-button>
            </el-row>
            <h5>Links</h5>
            <div class="edit_el_input">
                <div class="edit_svg">
                    <div><svg class="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 20 16"><path d="M17.569.5H2.43C1.39.5.548 1.344.548 2.375l-.01 11.25A1.89 1.89 0 002.43 15.5H17.57a1.89 1.89 0 001.892-1.875V2.375A1.89 1.89 0 0017.57.5zm-4.73 13.125H2.43v-3.75h10.408v3.75zm0-4.688H2.43v-3.75h10.408v3.75zm4.73 4.688h-3.785V5.187h3.785v8.438z"></path></svg></div>
                    <el-input v-model="input3" placeholder="请输入内容"></el-input>
                </div>
                <div class="edit_svg">
                    <div><svg class="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 22 16"><path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"></path></svg></div>
                    <el-input v-model="input4" placeholder="请输入内容" class="edti_svg_input"></el-input>
                </div>
                <div class="edit_svg">
                    <div><svg class="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 18 16"><path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path></svg></div>
                    <el-input v-model="input5" placeholder="请输入内容"></el-input>
                </div>
                <div class="edit_svg">
                    <div><svg class="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 24 24"><path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"></path><path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"></path><path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"></path></svg></div>
                    
                    <el-input v-model="input6" placeholder="请输入内容"></el-input>
                </div>
                <div class="edit_svg">
                    <div><svg class="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 18 15"><path d="M17.83 14.847h-7.003c.088-.186.129-.34.225-.444.37-.388.781-.744 1.143-1.131.113-.122.218-.324.218-.485.016-2.56.008-5.113.008-7.674 0-.04-.008-.073-.032-.21-.089.218-.153.355-.21.493-1.191 3.029-2.39 6.066-3.582 9.095-.072.178-.096.372-.386.372-.282.008-.362-.153-.45-.355a4583.69 4583.69 0 01-4.163-9.112c-.072-.154-.144-.307-.281-.445v.3c0 2.124-.016 4.248.008 6.38 0 .243.12.526.273.728.532.694 1.103 1.357 1.65 2.036.09.113.137.258.234.444H.122c.088-.186.136-.348.233-.46.523-.647 1.046-1.293 1.585-1.931.234-.283.338-.582.338-.954-.016-2.544 0-5.089-.024-7.633 0-.267-.129-.574-.29-.792-.426-.582-.91-1.107-1.352-1.664C.507 1.268.452 1.098.33.872h2.182c.87 0 1.747.008 2.616-.008.282-.008.418.089.531.347 1.192 2.658 2.407 5.3 3.614 7.949.049.105.105.21.186.371.563-1.405 1.11-2.754 1.65-4.103.571-1.422 1.127-2.844 1.706-4.257.049-.121.193-.291.29-.291C14.667.864 16.22.872 17.878.872c-.112.194-.16.34-.257.444-.37.372-.773.711-1.12 1.099-.144.161-.265.412-.265.622-.016 3.215-.016 6.43 0 9.653 0 .21.121.46.266.622.338.388.724.719 1.079 1.09.08.106.136.251.25.445z"></path></svg></div>
                    <el-input v-model="input7" placeholder="请输入内容"></el-input>
                </div>
                <div class="edit_svg">
                    <div><svg class="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 24 16"><path clip-rule="evenodd" d="M18.28 15.456c.317.168.725.21 1.09.107.363-.104.631-.337.712-.62.854-3.013 2.928-10.64 3.706-13.38.06-.207-.04-.421-.256-.56A1 1 0 0022.748.9C18.625 2.045 5.921 5.62.729 7.06c-.329.092-.543.33-.532.59.012.262.246.488.583.564 2.329.522 5.385 1.25 5.385 1.25s1.428 3.234 2.173 4.88c.093.206.309.369.593.425.283.055.586-.003.798-.153l3.046-2.157s3.513 1.933 5.506 2.997zM7.45 9.054L9.1 13.14l.367-2.587 10.02-6.778c.106-.072.12-.193.032-.278-.088-.085-.249-.104-.37-.047L7.45 9.054z" fill-rule="evenodd"></path></svg></div>
                    <el-input v-model="input8" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <h5>Royalties</h5>
            <div>Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing.</div>
            <a href="" style="color: rgb(32, 129, 226)">Learn more</a>
            <div style="margin-top:10px;margin-bottom: 5px">Percentage fee</div>
            <el-input value="0.00"></el-input>
            <h5>Blockchain</h5>
            <div style="margin:10px 0">Select the blockchain where you'd like new items from this collection to be added by default.</div>
            <div class="edit_eth">
                <div class="edit_rinkby">
                    <img src="../../assets/images/ethereum.png" alt="">
                    <div>Rinkeby</div>
                </div>
                <div style="width: 80%"></div>
                <div class="edit_arrow"><i class="el-icon-arrow-down" style="font-size: 18px"></i></div>
            </div>
            <h5>Payment tokens</h5>
            <div>These tokens can be used to buy and sell your items.</div>
            <div style="display: flex">
                <div class="edit_img_svg">
                    <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                    <div>
                        <div style="font-weight:600">ETH</div>
                        <div class="edit_font">Rinkeby</div>
                    </div>
                </div>
                <div class="edit_img_svg">
                    <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="">
                    <div>
                        <div style="font-weight:600">WETH</div>
                        <div class="edit_font">Rinkeby</div>
                    </div>
                </div>
                <div class="edit_img_svg edit_font">Rinkeby</div>
                <div class="edit_img_svg edit_font">Rinkeby</div>
                <div class="edit_img_svg edit_font"></div>
            </div>
            <div class="edit_click">
                <el-row class="block-col-2">
                    <el-col :span="12">
                        <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            Add Token
                            <span style="width: 86%"></span>
                            <i class="el-icon-arrow-down el-icon--right" style="font-size: 18px"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </div>
            
            <h5>Display theme</h5>
            <div>Change how your items are shown.</div>
            <div style="display: flex;">
                <div class="edit_padded">
                    <img src="../../assets/images/card-display-padded.svg" alt="">
                    <div>Padded</div>
                    <div>Recommended for assets with transparent background</div>
                </div>
                <div class="edit_padded">
                    <img src="../../assets/images/card-display-contain.svg" alt="">
                    <div>Contained</div>
                    <div>Recommended for assets that are not a 1:1 ratio</div>
                </div>
                <div class="edit_padded" style="margin: 0">
                    <img src="../../assets/images/card-display-cover.svg" alt="">
                    <div>Covered</div>
                    <div>Recommended for assets that can extend to the edge</div>
                </div>
            </div>
            <h5>Explicit & sensitive content</h5>
            <div class="edit_switch">
                <div>Set this collection as explicit and sensitive content</div>
                <div style="width: 55%"></div>
                <el-switch
                    v-model="value"
                    active-color="rgb(156, 153, 153)"
                    inactive-color="rgb(16, 37, 155)">
                </el-switch>
            </div>
            
            <h5>Collaborators</h5>
            <div>Collaborators can modify collection settings, receive payments for items they created, change the collection's royalty payout address, and create new items.</div>
            <div class="edit_flex">
                <a href="" class="edit_tooltip">
                    <el-tooltip class="item" effect="dark" content="You" placement="top">
                        <el-button class="edit_tooltip_button">
                            
                            <span>
                                <img src="https://storage.googleapis.com/opensea-static/opensea-profile/24.png" alt="">
                                <span style="color:rgb(32, 129, 226)">you</span>
                            </span>
                        </el-button>
                    </el-tooltip>
                </a>
                <button class="edit_collabor">Add collaborator</button>
            </div>
            
            <div class="edit_submit">
                <button>Submit Chanages</button>
                <div style="width:58%"></div>
                <button>Delete Collection</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: {},
            imageUrl: '',
             input1: '',
             input2: '',
             input3: '',
             input4: '',
             input5: '',
             input6: '',
             input7: '',
             input8: '',
             input9: '',
             input10: '',
             textarea: '',
             value: ''
        }
    },
    mounted() {
        this.item = JSON.parse(localStorage.getItem('items'))
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    }
}
</script>
<style scoped>
.edit .item_breadrumb {
    display: flex;
    padding: 40px 30px;
    width: 100%;
    background-color: #eee;
}
.edit{
    font-size: 14px;
}

  .edit .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .edit .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .edit .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .edit .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.edit .avatar-uploader-icon{
    display: flex;
    justify-content: center;
    border: 2px dashed #aaa;
}
.edit .edit_input {
    border-radius: 50%;
}
.edit .edit_article {
    padding: 20px 550px;
    font-weight: 300;
}
.edit .edit_article h1{
    font-size: 18px;
}
.edit .edit_article h5 {
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
}
.edit .edit_input{
    margin-top: 10px;
}
.edit .edit_add
{
    margin-top: 10px;
    border-radius: 5px;
    width: 150px;
    height: 60px;
}
.edit .edit_el_input {
    border: 1px solid #ddd;
    border-radius: 5px;
}
.edit .edit_svg{
    width:100%;
    border-bottom: 1px solid #ddd;
    display: flex;
}
.edit .edit_svg .el-input {
    border: hidden;
    width: 80%
}.edit .edit_svg .el-input__inner {
    width: 100%;
}
.edit .edit_svg div{
    width: 50px;
    height: 50px;
    border-right: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}
.edit .edit_svg svg{

    width: 30px;
    height: 30px;
}
.edit .edti_svg_input{
    border: hidden;
}
.edit .edit_eth {
    background-color: #eee;
    display: flex;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.edit .edit_rinkby {
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.edit .edit_rinkby img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;

}
.edit .edit_arrow {
    display: flex;
    align-items: center;
}
.edit .edit_img_svg {
    margin: 10px 0;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 20px;
    margin-right: 10px;
}
.edit .edit_img_svg img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.edit .edit_font {
    font-size: 12px;
    color: #555;
}
.edit .edit_click .el-col-12 {
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 0 20px;
}
.edit .edit_click .el-dropdown {
    width: 100%;
}
.edit .edit_click .el-dropdown-link {
    display: flex;
    align-items: center;
    width: 100%;
}
.edit .edit_padded {
    width: 33.3%;
    margin-right: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    padding: 10px 10px;
}
.edit .edit_padded div:first-of-type{
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
}
.edit .edit_padded div:last-of-type {
    font-feature-settings: 13px;
    color: #555
}
.edit .edit_switch {
    display: flex;
    align-items: center;
}
.edit .edit_tooltip_button span{
    display: flex;
    align-items: center;
}
.edit .edit_tooltip_button img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
}
.edit .edit_flex {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 50px;
}
.edit .edit_collabor {
    margin-left: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #555;
    font-size: 18px;
    font-weight: 600
}
.edit .edit_submit {
    display: flex;
    align-items: center;
}
.edit .edit_submit button:first-of-type{
    background-color: rgb(32, 129, 226);
    border-radius: 5px;
    border: 1px solid rgb(32, 129, 226);
    padding: 10px 20px;
    color:#fff;
    font-weight: 600;
}
.edit .edit_submit button:last-of-type {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px 20px;
    color: #555;
    font-weight: 600;
}
</style>