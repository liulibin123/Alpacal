<template>
    <div class="sell">
        <div class="sell_header">
            <div>
                <router-link to="createchild"><button class="button_left">Edit</button></router-link>
            <router-link to="sellitem"><button class="button_right">Sell</button></router-link>
            </div>
        </div>
        <div class="sell_article">
            <div class="sell_content">
                <div class="sell_left">
                    <div class="sell_left_img">
                        <img :src="child.imges" alt="">
                        <div>
                            <i class="el-icon-ice-cream-round"></i>
                            <span>2</span>
                        </div>
                    </div>
                    <div class="sell_left_select">
                        <div class="sell_left_des"><i class="el-icon-s-fold" style="margin-right: 10px"></i><span>Description</span></div>
                        <div class="sell_left_createby">
                            <div style="display: flex;align-items: center;">
                                <img src="https://storage.googleapis.com/opensea-static/opensea-profile/24.png" alt="" style="margin-right: 10px">
                            </div>
                            <span>Create by </span><span style="margin-left: 6px;color: rgb(51, 132, 238);font-weight:400">you</span>
                        </div>
                            <el-row class="block-col-2 sell_left_des">
                                <el-col :span="12">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link" style="display: flex">
                                            <i style="margin-top:5px;margin-right: 10px" class="el-icon-s-ticket"></i>
                                            About <span style="margin-left:5px">{{this.item.username}}</span><i class="el-icon-arrow-down el-icon--right" style="margin-left: -18px"></i>
                                        </span>
                                    </el-dropdown>
                                </el-col>
                            </el-row>
                        <el-row class="block-col-2 sell_left_des">
                            <el-col :span="12">
                                <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                        <i style="margin-top:5px;margin-right: 10px" class="el-icon-s-opportunity"></i>
                                        Details<i class="el-icon-arrow-down el-icon--right" style="margin-left:20px"></i>
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
                </div>
                <div class="sell_right">
                    <div class="sell_icon">
                        <div style="font-size:15px;font-weight:400;color:rgb(51, 132, 238)">{{this.item.username}}</div>

                        <div class="top box">
                            <el-tooltip class="item" effect="dark" content="Refresh metadata" placement="top">
                                <el-button><i class="el-icon-refresh-right"></i></el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="Transfer" placement="top">
                                <el-button><i class="el-icon-s-goods"></i></el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="Share" placement="top">
                                <el-button><i class="el-icon-share"></i></el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="More" placement="top">
                                <el-button><i class="el-icon-more"></i></el-button>
                            </el-tooltip>
                        </div>
                    </div>
                    <div style="font-size:22px;font-weight:600">{{this.child.childname}}</div>
                    <div class="sell_right_div">
                        <div>
                            <img class="sell_right_img" src="https://storage.googleapis.com/opensea-static/opensea-profile/24.png" alt="">
                        </div>
                        <div style="display: flex;margin-left: 10px">Owned by <span style="color:rgb(51, 132, 238);margin-left: 5px">you</span></div>
                        <div class="sell_iconview">
                            <i class="el-icon-view"></i>
                            <span style="margin-left: 5px">1 view</span>
                        </div>
                    </div>
                    <el-row class="block-col-2">
                        <el-col :span="12">
                            <el-dropdown trigger="click" class="sell_discount">
                                
                                <span class="el-dropdown-link">
                                    <i class="el-icon-position"></i>
                                    Price History<i class="el-icon-arrow-down el-icon--right" style="margin-left: 160px"></i>
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
                    <el-row class="block-col-2">
                        <el-col :span="12">
                            <el-dropdown trigger="click" class="sell_discount">
                                
                                <span class="el-dropdown-link">
                                    <i class="el-icon-discount"></i>
                                    Listings<i class="el-icon-arrow-down el-icon--right" style="margin-left: 200px"></i>
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
                    <el-row class="block-col-2">
                        <el-col :span="12">
                            <el-dropdown trigger="click" class="sell_discount">
                                
                                <span class="el-dropdown-link">
                                    <i class="el-icon-s-unfold"></i>
                                    Offers<i class="el-icon-arrow-down el-icon--right" style="margin-left: 210px"></i>
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
            </div>
            <div class="sell_other">
                <el-row class="block-col-2">
                    <el-col :span="12">
                        <el-dropdown trigger="click">
                            
                            <span class="el-dropdown-link">
                                <i class="el-icon-s-open"></i>
                                Trading History<i class="el-icon-arrow-down el-icon--right" style="margin-left: 640px"></i>
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
                <el-row class="block-col-2">
                    <el-col :span="12">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                <i class="el-icon-s-grid"></i>
                                More from this collection<i class="el-icon-arrow-down el-icon--right" style="margin-left: 560px"></i>
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
        </div>
        <div class="sell_fotter">
            <div class="footer_herder">
                <div class="footer_left">
                    <h5>Stay in the loop</h5>
                    <div>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</div>
                    <div>
                        <input type="text" placeholder="Your email address">
                        <button>Sign up</button>
                    </div>
                </div>
                <div class="footer_right">
                    <h5>Join the community</h5>
                    <div style="display: flex">
                        <button><div class="Blockreact__Block-sc-18q9hu0-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 dFhPys jYqxGr eeUNRj"><svg class="" fill="#FFFFFF" viewBox="0 0 18 16" style="width: 30px;"><path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path></svg></div></button>
                        <button><div class="Blockreact__Block-sc-18q9hu0-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 dFhPys jYqxGr eeUNRj"><svg class="" fill="#FFFFFF" viewBox="0 0 24 24" style="width: 30px;"><path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"></path><path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"></path><path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"></path></svg></div></button>
                        <button><div class="Blockreact__Block-sc-18q9hu0-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 dFhPys jYqxGr eeUNRj"><svg class="" fill="#FFFFFF" viewBox="0 0 22 16" style="width: 30px;"><path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"></path></svg></div></button>
                        <button><div class="Blockreact__Block-sc-18q9hu0-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 dFhPys jYqxGr eeUNRj"><svg class="" fill="#FFFFFF" viewBox="0 0 24 24" style="width: 30px;"><path d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"></path></svg></div></button>
                        <button><div class="Blockreact__Block-sc-18q9hu0-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 dFhPys jYqxGr eeUNRj"><svg class="" fill="#FFFFFF" viewBox="0 0 24 16" style="width: 30px;"><path clip-rule="evenodd" d="M18.28 15.456c.317.168.725.21 1.09.107.363-.104.631-.337.712-.62.854-3.013 2.928-10.64 3.706-13.38.06-.207-.04-.421-.256-.56A1 1 0 0022.748.9C18.625 2.045 5.921 5.62.729 7.06c-.329.092-.543.33-.532.59.012.262.246.488.583.564 2.329.522 5.385 1.25 5.385 1.25s1.428 3.234 2.173 4.88c.093.206.309.369.593.425.283.055.586-.003.798-.153l3.046-2.157s3.513 1.933 5.506 2.997zM7.45 9.054L9.1 13.14l.367-2.587 10.02-6.778c.106-.072.12-.193.032-.278-.088-.085-.249-.104-.37-.047L7.45 9.054z" fill-rule="evenodd"></path></svg></div></button>
                        <button><i class="el-icon-message" style="font-size: 28px;color:#fff"></i></button>
                    </div>
                    
                </div>
            </div>
            <el-divider></el-divider>
            <div class="footer_article">
                <div class="footer_article_left">
                    <img src="../../../assets/images/opensea.svg" alt="">
                    <a href="https://opensea.io/" style="color: #fff">OpenSea</a>
                   
                    <div>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</div>
                </div>
                <div class="footer_article_right">
                    <ul>
                        <li><a href=""></a>Marketplace</li>
                        <li><a href=""></a>All NFTs</li>
                        <li><a href=""></a>New</li>
                        <li><a href=""></a>Art</li>
                        <li><a href=""></a>Music</li>
                        <li><a href=""></a>Domain Names</li>
                        <li><a href=""></a>Virtual Worlds</li>
                    </ul>
                    <ul>
                        <li><a href=""></a>My Account</li>
                        <li><a href=""></a>My Profile</li>
                        <li><a href=""></a>My Collections</li>
                        <li><a href=""></a>My Favorites</li>
                        <li><a href=""></a>My Account Settings</li>
                    </ul>
                    <ul>
                        <li><a href=""></a>Resources</li>
                        <li><a href=""></a>Help Center</li>
                        <li><a href=""></a>Partners</li>
                        <li><a href=""></a>Suggestions</li>
                        <li><a href=""></a>Discord Community</li>
                        <li><a href=""></a>Blog</li>
                        <li><a href=""></a>Docs</li>
                    </ul>
                    <ul>
                        <li><a href=""></a>Company</li>
                        <li><a href=""></a>About</li>
                        <li><a href=""></a>Careers</li>
                    </ul>
                    <ul>
                        <li><a href=""></a>Stats</li>
                        <li><a href=""></a>Rankings</li>
                        <li><a href=""></a>Activity</li>
                    </ul>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="footer_footer">
                <div>© 2018 - 2021 Ozone Networks, Inc</div>
                <div>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: {},
            child: {}
        }
    },
    mounted() {
        this.item = JSON.parse(localStorage.getItem('items'))
        this.child = JSON.parse(localStorage.getItem('child'))
    },
    methods: {

    }
}
</script>

<style>
.sell_header{
    background-color: #eee;
    border-bottom: 2px solid #aaa;
    width: 100%;
    height:80px
}
.sell_header div{
    display: flex;
    float: right;
    padding-right: 300px;
    padding-top: 15px;
}
.sell_header button {
    width: 140px;
    height: 50px;
    border-radius: 5px;
}
.sell_header .button_left {
    background-color: #fff;
    border: 2px solid rgb(51, 132, 238);
    margin-right: 10px;
    color: rgb(51, 132, 238);
    font-weight: 600;
}
.sell_header .button_right {
    background-color: rgb(51, 132, 238);
    border: 2px solid #fff;
    color: #fff;
    font-weight: 600;
}
.sell_article .sell_content{
    display: flex;
}
.sell_article .sell_left_img{
    width: 500px;
    height: 600px;
    /* background-color: #aaa; */
    border-radius: 5px;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.sell_article .sell_left_img div{
    display: flex;
    margin-left: 30px;
}
.sell_article .sell_left_img img{
    width: 500px;
    height: 600px;
    margin-left: 40px;
}
.sell_article .sell_left_select {
    width: 500px;
    border-radius: 5px;
    border: 1px solid #eee;
    font: 20px;
    font-weight: 600;
}
.sell_article .sell_left_select .sell_left_des{
    display: flex;
    padding-left: 30px;
    height: 70px;
    align-items: center;
    border-bottom: 1px solid #eee
}
.sell_article .sell_left_select .sell_left_createby{
    height: 90px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.sell_article .sell_left_select .sell_left_createby img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 10px;
}
.sell .sell_article {
    padding: 20px 400px;
}

.sell .sell_right .box {
    width: 400px;
    margin-left: 320px;
}
.sell .sell_right .top{
    text-align: center;
}
.sell .sell_right {
    margin-left: 20px;
}
.sell .sell_right .sell_icon {
    display: flex;
    align-items: center;
}
.sell .sell_right .sell_right_div{
    display: flex;
    align-items: center;
    margin-top: 20px;
    height: 80px;
    line-height: 80px;
    color: rgb(126, 123, 123)
}
.sell .sell_right .sell_right_img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.sell .sell_right .sell_iconview {
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.sell .sell_right .sell_iconview i{
    font-size: 20px
}
.sell .sell_right .el-col-12 {
    width: 90%;
    margin-bottom: 20px;
}
.sell .sell_right .sell_discount {
    display: flex;
    align-items: center;
    height: 70px;
    border: 1px solid #eee;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
}
.sell .sell_right .sell_discount i {
    margin-right: 10px;
}
.sell .sell_other {
    margin-top: 20px;
    width: 107%;
}
.sell .sell_other .el-col-12 {
    width: 100%;
}
.sell .sell_other .block-col-2 {
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-top: 20px;
    padding-left: 30px;
}
.sell .sell_fotter {
    width: 100%;
    margin-top: 20px;
    padding: 50px 200px;
    background-color: rgb(24, 104, 183);
    color: #fff;
    font-size: 15px;
    font-weight: 300;
}
.sell .sell_fotter .footer_herder {
    display: flex;
}
.sell .sell_fotter .footer_left {
    margin-right: 100px;
    width: 750px;
}
.sell .sell_fotter .footer_left input {
    height: 60px;
    width: 550px;
    border-radius: 5px;
    padding: 20px;
    border: hidden;
    margin: 20px 10px 0 0;
}
.sell .sell_fotter .footer_left button{
    background-color: rgb(32, 129, 226);
    width: 150px;
    height: 60px;
    border: rgb(32, 129, 226);
    border-radius: 5px;
    color:#fff;
    font-size: 18px;
    font-weight: 600;
}
.sell .sell_fotter .footer_right button{
    margin-right: 10px;
    width: 60px;
    height:60px;
    border-radius: 5px;
    background-color: rgb(32, 129, 226);
    border: hidden
}
.sell .sell_fotter .footer_article{
    padding-top: 50px;
    display: flex;
}
.sell .sell_fotter .footer_article_left {
    width: 400px;
}
.sell .sell_fotter .footer_article_left img{
    width: 50px;
    height: 50px;
}
.sell .sell_fotter .footer_article_left a{
    font-size: 20px;
    font-weight: 600;
}
.sell .sell_fotter .footer_article_left div {
    margin-top: 10px;
}
.sell .sell_fotter .footer_article_right{
    display: flex;
}
.sell .sell_fotter .footer_article_right ul{
    margin-left: 60px;
}
.sell .sell_fotter .footer_article_right li {
    margin-bottom: 15px;
}
.sell .sell_fotter .footer_article_right li:first-child{
    font-weight: 600;
}
.sell .sell_fotter .footer_footer {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
}
.sell .sell_fotter .footer_footer div:last-child{
    display: flex;
}
.sell .el-dropdown-link {
    cursor: pointer;
    font-size: 16px;
    color: black;
  }
  .sell .el-icon--right{
      position: relative;
      right: -320px;
  }
  .sell .el-icon-arrow-down {
    font-size: 12px;
  }
  .sell .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>