<template>
    <div class="sellitem">
        <div class="sellitem_header" style="cursor: pointer">
            <router-link to="/sell" tag="div" class="sellitem_header_icon"><i class="el-icon-arrow-left"></i></router-link>
            <div class="sellitem_header_img">
                <img :src="child.imges" alt="">
            </div>
            <div class="sellitem_header_name">
                <div>{{child.childname}}</div>
                <div>{{item.username}}</div>
            </div>
        </div> 
        <div class="sellitem_article">
            <div class="sellitem_article_left">
                <h5>Select your sell method</h5>
                <div class="sellitem_button">
                    <div :class="isShow ? 'sellitem_bt2':'sellitem_bt'" @click="handlePrice">
                        <h5>Set Price</h5>
                        <div>Sell at a fixed or declining price</div>
                    </div>
                    <div :class="!isShow ? 'sellitem_bt2':'sellitem_bt'" @click="handleBid">
                        <h5>Highest Bid</h5>
                        <div>Auction to the highest bidder</div>
                    </div>
                    <div class="sellitem_bt" style="margin-right: 0">
                        <div class="sellitem_bundle">
                            <h5>Bundle</h5>
                            <div class="sellitem_iconright">
                                <i class="el-icon-arrow-right"></i>
                            </div>
                        </div>
                        <div>Group this item with others to sell</div>
                    </div>
                </div>
                <el-divider></el-divider>
                <div v-if="isShow">
                    <div v-if="isSwitch">
                        <div class="sellitem_price">
                            <div>
                                <h5>Price</h5>
                                <div>Will be on sale until you transfer this item or cancel it.</div>
                            </div>
                            <div style="width: 21.5%"></div>
                            <div class="sellitem_select">
                                <el-input placeholder="Amount" v-model="input1">
                                    <template slot="prepend">
                                        <el-row>
                                            <el-col :span="12">
                                                <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                                                <el-dropdown trigger="click">
                                                    <span class="el-dropdown-link">
                                                        <i class="el-icon-arrow-down el-icon--right"></i>
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
                                    </template>
                                </el-input>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <div class="sellitem_switch">
                            <div>
                                <h5>Include ending price</h5>
                                <div>Adding an ending price will allow this listing to expire, or for the price to be reduced until a buyer is found.</div>
                            </div>
                            <div style="width: 9%"></div>
                            <div @click="handleSwitch"><el-switch
                                v-model="value1"
                                active-color="rgb(121, 119, 119)"
                                inactive-color="rgb(8, 10, 148)">
                                </el-switch>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <div>
                            <div class="sellitem_switch">
                                <div>
                                    <h5>Schedule for a future time</h5>
                                    <div>You can schedule this listing to only be buyable at a future date</div>
                                </div>
                                <div style="width: 43%"></div>
                                <div @click="handleSch"><el-switch
                                    v-model="value3"
                                    active-color="rgb(121, 119, 119)"
                                    inactive-color="rgb(8, 10, 148)">
                                    </el-switch>
                                </div>
                            </div>
                            <div v-show="schedule" style="overflow: hidden">
                                <div style="float: right">
                                    <el-select v-model="value5" value="in 3 days">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                        
                        <el-divider></el-divider>
                        <div>
                            <div class="sellitem_switch">
                                <div>
                                    <h5>Privacy</h5>
                                    <div>You can keep your listing public, or your can specify one address that's allowed to buy it.</div>
                                </div>
                                <div style="width: 23%"></div>
                                <div @click="handlePrivacy"><el-switch
                                    v-model="value4"
                                    active-color="rgb(121, 119, 119)"
                                    inactive-color="rgb(8, 10, 148)">
                                    </el-switch>
                                </div>
                            </div>
                        </div>
                        <div v-show="privacy">
                            <el-input v-model="input2" placeholder="Buyer address" style="margin-top: 20px"></el-input>
                        </div>
                        
                        
                    </div>
                    <div v-else>
                        <div class="sellitem_price">
                            <div>
                                <h5>Starting Price</h5>
                                <div>Set an initial price.</div>
                            </div>
                            <div style="width: 49.5%"></div>
                            <div class="sellitem_select">
                                <el-input placeholder="Amount" v-model="input1">
                                    <template slot="prepend">
                                        <el-row>
                                            <el-col :span="12">
                                                <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                                                <el-dropdown trigger="click">
                                                    <span class="el-dropdown-link">
                                                        <i class="el-icon-arrow-down el-icon--right"></i>
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
                                    </template>
                                </el-input>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <div class="sellitem_switch">
                            <div>
                                <h5>Include ending price</h5>
                            </div>
                            <div style="width: 73%"></div>
                            <div @click="handleSwitch"><el-switch
                                v-model="value1"
                                active-color="rgb(121, 119, 119)"
                                inactive-color="rgb(8, 10, 148)">
                                </el-switch>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <div class="sellitem_price">
                            <div style="width: 64%">
                                <h5>Ending price</h5>
                                <div>Must be less than or equal to the starting price. The price will progress linearly to this amount until the expiration date.</div>
                            </div>
                            <div class="sellitem_select">
                                <el-input placeholder="Amount" v-model="input1">
                                    <template slot="prepend">
                                        <el-row>
                                            <el-col :span="12">
                                                <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                                                <el-dropdown trigger="click">
                                                    <span class="el-dropdown-link">
                                                        <i class="el-icon-arrow-down el-icon--right"></i>
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
                                    </template>
                                </el-input>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <div class="sellitem_price">
                            <div>
                                <h5>Expiration Date</h5>
                                <div>Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!</div>
                            </div>
                            <div>
                                <el-select v-model="value2" value="in 3 days">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <div class="sellitem_switch">
                            <div>
                                <h5>Privacy</h5>
                                <div>You can keep your listing public, or your can specify one address that's allowed to buy it.</div>
                            </div>
                            <div style="width: 23%"></div>
                            <div><el-switch
                                v-model="value4"
                                active-color="rgb(121, 119, 119)"
                                inactive-color="rgb(8, 10, 148)">
                                </el-switch>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="sellitem_price">
                        <div>
                            <h5>Minimum Bid</h5>
                            <div style="display: flex"><span>Set your starting bid price.</span><span style="color:rgb(32, 129, 226)">Learn More</span></div>
                        </div>
                        <div style="width: 34%"></div>
                        <div class="sellitem_select">
                            <el-input placeholder="Amount" v-model="input1">
                                <template slot="prepend">
                                    <el-row>
                                        <el-col :span="12">
                                            <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                                            <el-dropdown trigger="click">
                                                <span class="el-dropdown-link">
                                                    <i class="el-icon-arrow-down el-icon--right"></i>
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
                                </template>
                            </el-input>
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <div class="sellitem_price">
                        <div>
                            <h5>Reserve price</h5>
                            <div style="display: flex"><span>Create a hidden limit by setting a reserve price.</span><span style="color:rgb(32, 129, 226)">Learn More</span></div>
                        </div>
                        <div style="width: 17.5%"></div>
                        <div class="sellitem_select">
                            <el-input placeholder="Amount" v-model="input1">
                                <template slot="prepend">
                                    <el-row>
                                        <el-col :span="12">
                                            <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                                            <el-dropdown trigger="click">
                                                <span class="el-dropdown-link">
                                                    <i class="el-icon-arrow-down el-icon--right"></i>
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
                                </template>
                            </el-input>
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <div class="sellitem_price">
                        <div>
                            <h5>Expiration Date</h5>
                            <div>Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!</div>
                        </div>
                        <div>
                            <el-select v-model="value2" value="in 3 days">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                    </div>
                </div>
                <el-divider></el-divider>
                <div @click="handleInstruct">
                    <div class="sellitem_instruct">
                        <div class="sellitem_icongrid">
                        <i class="el-icon-s-grid"></i>
                        <div>Instructions</div>
                        </div>
                        <div style="width: 85%"></div>
                        <i class="el-icon-arrow-down"></i>
                </div>
                <div v-show="instruct" class="sellitem_more">
                    <div>OpenSea is decentralized, so we never escrow your items. As a result, if this is your first time selling a crypto collectible, you need to complete 2 free (plus gas) transactions:</div>
                    <div style="margin-left: 20px">
                        <div>1. To initialize your account for making sell orders, which only needs to be done once for your account.</div>
                        <div>2. To allow OpenSea to access your item (or all items in the collection, if the collection supports it) when a sale occurs.</div>
                    </div>
                    
                    <div>After those, you'll see a signature request to finalize your listing. In the future, as long as the item was approved in step 2 above, you won't have any transactions at all, only a signature! This is how we can (almost) achieve gas-free listings.</div>
                    <div>Note that you can always decrease the price of your listing for free, without making a transaction or paying gas. You can view all your items here.</div>
                </div>
                </div>
                
            </div>
            <div class="sellitem_article_right">
                <div class="sellitem_summary">
                    <i class="el-icon-s-order"></i>
                    <h5>Summary</h5>
                </div>
                <el-divider></el-divider>
                <div class="sellitem_invalid">
                    <div v-if="input1" class="sellitem_invalid_input1">
                        <div>Price</div>
                        <div>
                            <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="">
                            <div>{{input1}}</div>
                            <div>(${{405.65*input1}})</div>
                        </div>
                        <div class="sellitem_invalid_button">
                            <button>Post your listing<i class="el-icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sellitem_invalid_price">Invalid start price.</div>
                        <div class="sellitem_invalid_button" style="opacity:.5">
                            <button>Post your listing<i class="el-icon-arrow-right"></i></button>
                        </div>
                    </div>    
                </div>
                <el-divider></el-divider>
                <div>
                    <div class="sellitem_bounties">
                        <h5>Bounties</h5>
                        <div style="width: 80%"></div>
                        <div class="sellitem_iconedit">edit<i class="el-icon-edit"></i></div>
                    </div>
                    <div>OpenSea rewards 1% to registered affiliates who refer your buyer.</div>
                </div>
                <el-divider></el-divider>
                <div>
                    <h5>Fees</h5>
                    <div id="sellitem_learn">Listing is free! At the time of the sale, the following fees will be deducted. <a href="">Learn more.</a></div>
                    <div class="sellitem_total">To OpenSea <span>2.5%</span></div>
                    <div class="sellitem_total">Total<span>2.5%</span></div>
                </div>
            </div>
        </div>
        <div class="sellitem_fotter">
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
        return{
            item: {},
            child: {},
            input1: '',
            input2: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            options: [
                {
                    value:'选项1',
                    label: 'in 3 days'
                },
                {
                    value:'选项2',
                    label: 'in 1 week'
                },
                {
                    value:'选项3',
                    label: 'in 1 month'
                },
                {
                    value:'选项4',
                    label: 'set a specific data'
                }

            ],
            isShow: true,
            border: '',
            instruct: false,
            isSwitch: true,
            schedule: false,
            privacy: false
        }
    },
    methods: {
        handlePrice(){
            this.isShow = true
        },
        handleBid(){
            this.isShow = false
        },
        handleInstruct(){
            this.instruct = !this.instruct
        },
        handleSwitch(){
            this.isSwitch = !this.isSwitch
        },
        handleSch(){
            this.schedule = !this.schedule
        },
        handlePrivacy(){
            this.privacy = !this.privacy
        }
    },
    mounted() {
        this.item = JSON.parse(localStorage.getItem("items"))
        this.child = JSON.parse(localStorage.getItem('child'))
    }
}
</script>
<style scoped>
.sellitem .sellitem_header {
    display: flex;
    align-items: center;
    padding-left: 300px;
    background-color: #eee;
    border-bottom: 1px solid #ddd;
    height: 80px;
}
.sellitem .sellitem_header_icon i{
    font-feature-settings: 18px;
    font-weight: 600;
    margin-right: 20px;
}.sellitem .sellitem_header_img {
    margin-right: 20px;
}
.sellitem .sellitem_header_name div:first-of-type{
    font-size: 12px;
    color:#777;
}
.sellitem .sellitem_header_name div:last-of-type {
    font-size: 16px;
    font-weight: 500;
}.sellitem .sellitem_article {
    display: flex;
    padding: 50px 300px;
    font-size: 13px;
    color: #777;
}
.sellitem .sellitem_article .sellitem_article_left {
    width: 60%;
    margin-right: 20px;
}
.sellitem .sellitem_article h5{
    color:#000;
    font-size: 16px;
    font-weight: 600;
}.sellitem .sellitem_button{
    margin-top: 20px;
    display: flex;
    align-items: center;
}
.sellitem .sellitem_button .sellitem_bt {
    width: 33.3%;
    margin-right: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 25px 15px;
    text-align: center;
}
.sellitem .sellitem_button .sellitem_bt:hover {
    cursor: pointer;
}
.sellitem .sellitem_button .sellitem_bt2 {
    width: 33.3%;
    margin-right: 10px;
    border: 4px solid rgb(32, 129, 226);
    border-radius: 5px;
    padding: 25px 15px;
    text-align: center;
}
.sellitem .sellitem_button .sellitem_bt2 :hover{
    cursor: pointer;
}.sellitem .sellitem_button .sellitem_bundle {
    display: flex;
    align-items: center;
    justify-content: center;
}
.sellitem .sellitem_button .sellitem_iconright i{
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
}.sellitem .sellitem_price {
    display: flex;
    align-items: center;
}.sellitem .sellitem_select img{
    width: 30px;
    height: 30px;
}
.sellitem .sellitem_select i{
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
}
.sellitem .sellitem_switch {
    display: flex;
    align-items: center;
}
.sellitem .sellitem_instruct {
    margin-top: 30px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 20px 20px;
}
.sellitem .sellitem_more{
    padding: 15px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: rgb(252, 250, 250);
}
.sellitem .sellitem_more>div{
    margin-bottom: 10px;
}
.sellitem .sellitem_icongrid {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color:#000;
}.sellitem .sellitem_instruct i {
    font-size: 18px;
    font-weight: 600;
}.sellitem .sellitem_summary {
    display: flex;
    align-items: center;
}
.sellitem .sellitem_summary i{
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-top: -8px;
    margin-right: 10px;
}.sellitem .sellitem_article_right {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
}.sellitem .sellitem_invalid_price{
    color: rgb(228, 42, 42);
    margin-bottom: 20px;
}
.sellitem .sellitem_invalid_input1>div:nth-of-type(2){
    display: flex;
    align-items: center;
    margin: 20px 0 30px 0;
}
.sellitem .sellitem_invalid_input1>div:nth-of-type(2) img{
    margin-right: 10px;
    width: 30px;
    height: 30px;
}
.sellitem .sellitem_invalid_input1>div:nth-of-type(2) img+div{
    margin-right: 10px;
    font-size: 25px;
    font-weight: 600;
    color: #000;
}
.sellitem .sellitem_invalid_button button {
    background-color: rgb(32, 129, 226);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid rgb(32, 129, 226);
    border-radius: 5px;
    padding: 15px;
}.sellitem .sellitem_invalid_button i {
    font-weight: 600;
    margin-left: 10px;
}.sellitem .sellitem_bounties {
    display: flex;
    align-items: center;
}.sellitem .sellitem_iconedit {
    display: flex;
    align-items: center;
    font-size: 16px;
    background-color: #eee;
    padding: 5px 10px;
    border-radius: 5px;
}.sellitem #sellitem_learn {
    margin: 15px 0 15px 0;
}
.sellitem #sellitem_learn a {
    color: rgb(32, 129, 226)
}.sellitem .sellitem_total span{
    float: right;
}
.sellitem .sellitem_fotter {
    width: 100%;
    margin-top: 20px;
    padding: 50px 200px;
    background-color: rgb(24, 104, 183);
    color: #fff;
    font-size: 15px;
    font-weight: 300;
}
.sellitem .sellitem_fotter .footer_herder {
    display: flex;
}
.sellitem .sellitem_fotter .footer_left {
    margin-right: 100px;
    width: 750px;
}
.sellitem .sellitem_fotter .footer_article_left img{
    width: 50px;
    height: 50px;
}
.sellitem .sellitem_fotter .footer_left input {
    height: 60px;
    width: 550px;
    border-radius: 5px;
    padding: 20px;
    border: hidden;
    margin: 20px 10px 0 0;
}
.sellitem .sellitem_fotter .footer_left button{
    background-color: rgb(32, 129, 226);
    width: 150px;
    height: 60px;
    border: rgb(32, 129, 226);
    border-radius: 5px;
    color:#fff;
    font-size: 18px;
    font-weight: 600;
}
.sellitem .sellitem_fotter .footer_right button{
    margin-right: 10px;
    width: 60px;
    height:60px;
    border-radius: 5px;
    background-color: rgb(32, 129, 226);
    border: hidden
}
.sellitem .sellitem_fotter .footer_article{
    padding-top: 50px;
    display: flex;
}
.sellitem .sellitem_fotter .footer_article_left {
    width: 400px;
}
.sellitem .sellitem_fotter .footer_article_left a{
    font-size: 20px;
    font-weight: 600;
}
.sellitem .sellitem_fotter .footer_article_left div {
    margin-top: 10px;
}
.sellitem .sellitem_fotter .footer_article_right{
    display: flex;
}
.sellitem .sellitem_fotter .footer_article_right ul{
    margin-left: 60px;
}
.sellitem .sellitem_fotter .footer_article_right li {
    margin-bottom: 15px;
}
.sellitem .sellitem_fotter .footer_article_right li:first-child{
    font-weight: 600;
}
.sellitem .sellitem_fotter .footer_footer {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
}
.sellitem .sellitem_fotter .footer_footer div:last-child{
    display: flex;
}
</style>