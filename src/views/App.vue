
<template>
  <div :class="{myapp: !isShow, myapp1: isShow}">
    <!-- header -->
    <header class="app-header">
      <!-- logo -->
      <span class="logo">
        <img src="../assets/images/logo.png" style="width: 320px; height: 60px " class="hidden-xs">
      </span>
      <!-- btn -->
      <span class="btn-box">
        <!-- connect-btn pc -->
        <div class="btn btn-default connect-btn hidden-xs" @click="handleConnect">
          Connect to a wallet
        </div>
        <!-- Settings -->
        <button class="set-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M29.56,19.36a1,1,0,0,0-1.21.07A10.49,10.49,0,0,1,21.51,22,10.17,10.17,0,0,1,11.2,12a9.94,9.94,0,0,1,4.28-8.1,1,1,0,0,0,.36-1.17,1,1,0,0,0-1-.64A14.1,14.1,0,0,0,2,16,14.21,14.21,0,0,0,16.37,30a14.34,14.34,0,0,0,13.57-9.44A1,1,0,0,0,29.56,19.36ZM16.37,28A12.2,12.2,0,0,1,4,16,12,12,0,0,1,11.57,4.89,11.82,11.82,0,0,0,9.2,12,12.17,12.17,0,0,0,21.51,24a12.49,12.49,0,0,0,4.89-1A12.5,12.5,0,0,1,16.37,28Z" data-name="Layer 46"></path></svg>
        </button>
        <!-- list-btn mobile -->
        <button class="set-btn">
          <span role="img" aria-label="setting" tabindex="-1" class="anticon anticon-setting" style="color: rgb(49, 199, 127);"><svg viewBox="64 64 896 896" focusable="false" data-icon="setting" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"></path></svg></span>
        </button>
      </span>
      <!-- routers -->
      <ul class="routers" ref="routers">
        <router-link to="/lend" tag="li" class="active">Lend</router-link>
        <router-link to="/grazing-range" tag="li">Graze</router-link>
        <router-link to="/farm" tag="li">Farm</router-link>
        <router-link to="/stake" tag="li">Stake</router-link>
      </ul>
    </header>
    <!--nav与content -->
    <article>
      <!-- nav -->
      <nav class="app-nav">
        <div class="other-nav">
          <div>
            <!-- myappPrice -->
            <div class="myappPrice">
              <div class="price">
                <div>
                  <img src="../assets/images/alpaca-alt.svg">
                </div>
                <div>$0.575</div>
                <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F" target="blank">
                  <div class="btn btn-success" style="color: #31c77f; border-color: #31c77f;border-radius: 10px; background-color: #fff">Buy</div>
                </a>
              </div>
              <div class="balance">
                <div>
                  <svg style="color: 31c77f; font-size: 18px;" viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg>
                </div>
                <div>Balance:</div>
                <div class="myBalance">0.00</div>
              </div>
            </div>
            <!-- Where the Chatter -->
            <div class="chatter">
              <h5>Where the Alpacas Chatter</h5>
              <a href="https://t.me/alpacafinance" target="blank">
                <svg width="1em" height="1em" viewBox="0 0 17 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M1.78977 5.84144C6.16258 3.93628 9.07847 2.68028 10.5374 2.07345C14.7031 0.340808 15.5687 0.0398296 16.1329 0.0298911C16.257 0.0277053 16.5344 0.0584573 16.7141 0.204286C16.8659 0.327421 16.9076 0.493759 16.9276 0.610504C16.9476 0.72725 16.9725 0.993199 16.9527 1.201C16.7269 3.57286 15.7502 9.32872 15.2533 11.9852C15.043 13.1093 14.629 13.4862 14.2281 13.5231C13.3571 13.6032 12.6956 12.9474 11.8519 12.3944C10.5317 11.529 9.7859 10.9902 8.50442 10.1458C7.02346 9.16984 7.98351 8.63345 8.82751 7.75683C9.04838 7.52742 12.8864 4.03648 12.9607 3.71979C12.9699 3.68019 12.9786 3.53255 12.8909 3.45459C12.8032 3.37664 12.6737 3.4033 12.5803 3.4245C12.4479 3.45455 10.3389 4.84854 6.25321 7.60646C5.65457 8.01754 5.11234 8.21782 4.62652 8.20733C4.09094 8.19576 3.0607 7.9045 2.29483 7.65555C1.35545 7.35019 0.608856 7.18875 0.673868 6.67017C0.70773 6.40006 1.0797 6.12381 1.78977 5.84144Z" fill="#0F1228"></path></svg>
                Telegram
              </a>
              <a href="https://twitter.com/AlpacaFinance" target="blank">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>
                Twitter
              </a>
              <a href="https://discord.com/invite/2UvgmqcVDQ" target="blank">
                <svg width="1em" height="1em" viewBox="0 0 20 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path d="M17.4247 0H2.68469C1.44169 0 0.429688 1.012 0.429688 2.266V17.138C0.429688 18.392 1.44169 19.404 2.68469 19.404H15.1587L14.5757 17.369L15.9837 18.678L17.3147 19.91L19.6797 22V2.266C19.6797 1.012 18.6677 0 17.4247 0ZM13.1787 14.366C13.1787 14.366 12.7827 13.893 12.4527 13.475C13.8937 13.068 14.4437 12.166 14.4437 12.166C13.9927 12.463 13.5637 12.672 13.1787 12.815C12.6287 13.046 12.1007 13.2 11.5837 13.288C10.5277 13.486 9.55969 13.431 8.73469 13.277C8.10769 13.156 7.56869 12.98 7.11769 12.804C6.86469 12.705 6.58969 12.584 6.31469 12.43C6.28169 12.408 6.24869 12.397 6.21569 12.375C6.19369 12.364 6.18269 12.353 6.17169 12.342C5.97369 12.232 5.86369 12.155 5.86369 12.155C5.86369 12.155 6.39169 13.035 7.78869 13.453C7.45869 13.871 7.05169 14.366 7.05169 14.366C4.62069 14.289 3.69669 12.694 3.69669 12.694C3.69669 9.152 5.28069 6.281 5.28069 6.281C6.86469 5.093 8.37169 5.126 8.37169 5.126L8.48169 5.258C6.50169 5.83 5.58869 6.699 5.58869 6.699C5.58869 6.699 5.83069 6.567 6.23769 6.38C7.41469 5.863 8.34969 5.72 8.73469 5.687C8.80069 5.676 8.85569 5.665 8.92169 5.665C9.59269 5.577 10.3517 5.555 11.1437 5.643C12.1887 5.764 13.3107 6.072 14.4547 6.699C14.4547 6.699 13.5857 5.874 11.7157 5.302L11.8697 5.126C11.8697 5.126 13.3767 5.093 14.9607 6.281C14.9607 6.281 16.5447 9.152 16.5447 12.694C16.5447 12.694 15.6097 14.289 13.1787 14.366Z" fill="#0F1228"></path></svg>
                Discord
              </a>
              <a href="https://medium.com/alpaca-finance" target="blank">
                <svg width="1em" height="1em" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" class=""><rect width="29" height="29" fill="url(#pattern0)"></rect><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="translate(-0.166667) scale(0.00260417)"></use></pattern><image id="image0" width="512" height="384" xlink:href="data:image/png;base64,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QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsOUC/x9nJhmaEBw1vwAAAABJRU5ErkJggg=="></image></defs></svg>
                Medium
              </a>
              <router-link to="/docs">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="file" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z"></path></svg>
                Docs
              </router-link>
              <a href="https://coinmarketcap.com/currencies/alpaca-finance/" target="blank">
                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path d="M17.3915 11.9506C17.2332 12.058 17.0484 12.1214 16.8566 12.1341C16.6648 12.1468 16.4731 12.1083 16.3016 12.0227C15.8991 11.7986 15.6822 11.2733 15.6822 10.5575V8.36359C15.6822 7.31042 15.2588 6.56109 14.5504 6.35767C13.3534 6.01262 12.4595 7.45719 12.1145 8.00051L9.99739 11.3763V7.25634C9.97386 6.30617 9.66022 5.73709 9.06691 5.56714C8.67486 5.45384 8.08677 5.50019 7.51438 6.36024L2.78097 13.8458C2.15117 12.6587 1.82462 11.3382 1.82959 9.99871C1.82959 5.48732 5.48876 1.81795 9.99739 1.81795C14.506 1.81795 18.1783 5.48732 18.1783 9.99871V10.0219C18.1783 10.0219 18.1783 10.0373 18.1783 10.0451C18.2227 10.918 17.9352 11.6132 17.3941 11.9506H17.3915ZM20.0052 10.0013V9.95751C19.9686 4.45989 15.494 0 9.99739 0C4.50078 0 0 4.48565 0 9.99871C0 15.5118 4.4851 20 9.99739 20C12.5256 19.9999 14.9575 19.0452 16.793 17.3323C16.9712 17.1669 17.076 16.9391 17.0848 16.6981C17.0936 16.4571 17.0057 16.2224 16.84 16.0448C16.7608 15.9584 16.665 15.8884 16.5581 15.8386C16.4513 15.7888 16.3355 15.7604 16.2174 15.7549C16.0994 15.7494 15.9814 15.7669 15.8702 15.8065C15.7591 15.8461 15.657 15.907 15.5698 15.9856C14.7796 16.7241 13.846 17.2976 12.8252 17.6718C11.8044 18.046 10.7173 18.2131 9.62933 18.1631C8.54133 18.113 7.47481 17.8469 6.49379 17.3807C5.51278 16.9145 4.63752 16.2578 3.92054 15.45L8.18087 8.70349V11.8167C8.18087 13.3127 8.76895 13.7968 9.26294 13.9385C9.75693 14.0801 10.5123 13.9822 11.3042 12.7153L13.6566 8.96356C13.7297 8.84254 13.8003 8.73954 13.863 8.64942V10.5575C13.863 11.9557 14.4328 13.0733 15.4313 13.6243C15.8853 13.8658 16.3968 13.9824 16.9124 13.962C17.4279 13.9416 17.9283 13.785 18.3612 13.5084C19.459 12.8055 20.0575 11.5334 19.9948 10.0013H20.0052Z" fill="#0F1228"></path></svg>
                Coinmarketcap
              </a>
              <a href="https://www.coingecko.com/en/coins/alpaca-finance" target="blank">
                <svg width="1em" height="1em" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path d="M21.9999 10.9515C22.0095 13.127 21.3737 15.2566 20.173 17.0708C18.9723 18.8851 17.2606 20.3026 15.2544 21.144C13.2481 21.9854 11.0373 22.213 8.90169 21.798C6.76606 21.383 4.80144 20.344 3.25629 18.8125C1.71113 17.2809 0.654831 15.3256 0.220963 13.1937C-0.212905 11.0618 -0.0048563 8.84914 0.818801 6.83549C1.64246 4.82185 3.04473 3.09767 4.8483 1.88098C6.65186 0.664294 8.77571 0.00974582 10.9513 0.000107948C12.3958 -0.00629147 13.8275 0.271899 15.1645 0.818797C16.5015 1.36569 17.7178 2.17059 18.7437 3.18752C19.7697 4.20445 20.5853 5.41351 21.144 6.74565C21.7027 8.07779 21.9935 9.50694 21.9999 10.9515Z" fill="#0F1228"></path><path d="M21.1748 10.9553C21.1847 12.9676 20.5977 14.9375 19.4879 16.6161C18.3781 18.2947 16.7955 19.6065 14.9401 20.3855C13.0848 21.1645 11.0401 21.3759 9.06459 20.9927C7.08913 20.6096 5.27166 19.6493 3.84204 18.2331C2.41242 16.817 1.43487 15.0087 1.03304 13.037C0.631201 11.0652 0.823125 9.01863 1.58454 7.15597C2.34595 5.29332 3.64264 3.6983 5.31062 2.57266C6.9786 1.44701 8.94293 0.841299 10.9552 0.83213C13.6525 0.820262 16.2442 1.87992 18.1606 3.77819C20.0769 5.67646 21.1611 8.25798 21.1748 10.9553Z" fill="#E0E0E0"></path><path d="M11.1873 1.48746C11.834 1.37267 12.4959 1.37267 13.1426 1.48746C13.7955 1.59098 14.4267 1.80244 15.0102 2.11318C15.5905 2.43202 16.0919 2.86485 16.5909 3.27057C17.0899 3.6763 17.5864 4.09159 18.0591 4.54594C18.5417 4.99317 18.9628 5.50244 19.3114 6.06043C19.6702 6.61404 19.9644 7.20697 20.1882 7.8276C20.613 9.07586 20.7605 10.4206 20.5485 11.7031H20.4855C20.2727 10.4317 19.9841 9.22014 19.529 8.06753C19.3153 7.48816 19.064 6.92341 18.7765 6.37688C18.4767 5.82731 18.1462 5.29506 17.7865 4.78268C17.4209 4.26654 16.9728 3.81412 16.4601 3.44355C15.9436 3.07528 15.3498 2.83695 14.7751 2.61057C14.2004 2.3842 13.6304 2.15224 13.031 1.98007C12.4316 1.80789 11.8226 1.67876 11.1865 1.55362L11.1873 1.48746Z" fill="white"></path><path d="M16.1607 7.36459C15.4226 7.15096 14.6574 6.84806 13.8826 6.54198C13.8379 6.34748 13.6658 6.10517 13.3174 5.80944C12.8113 5.37024 11.8603 5.3814 11.0385 5.57589C10.1314 5.36227 9.23547 5.28654 8.3754 5.49618C1.34098 7.43393 5.32968 12.1615 2.74707 16.9139C3.11453 17.6934 7.07533 22.2417 12.8065 21.0213C12.8065 21.0213 10.8464 16.3113 15.2695 14.0507C18.8573 12.2102 21.4495 8.80495 16.1607 7.36459Z" fill="#0F1228"></path><path d="M17.0296 10.4582C17.0301 10.5426 17.0056 10.6252 16.9591 10.6956C16.9126 10.7659 16.8463 10.821 16.7686 10.8537C16.6909 10.8864 16.6052 10.8953 16.5224 10.8793C16.4395 10.8633 16.3633 10.8232 16.3034 10.7639C16.2434 10.7046 16.2023 10.6288 16.1854 10.5462C16.1685 10.4635 16.1765 10.3777 16.2083 10.2996C16.2401 10.2215 16.2944 10.1546 16.3643 10.1074C16.4342 10.0601 16.5165 10.0347 16.6008 10.0342C16.7138 10.0338 16.8224 10.0781 16.9028 10.1576C16.9832 10.2371 17.0288 10.3452 17.0296 10.4582Z" fill="white"></path><path d="M11.0381 5.57241C11.5506 5.60908 13.4039 6.21009 13.8821 6.5385C13.4836 5.3827 12.1421 5.22886 11.0381 5.57241Z" fill="#D1D1D1"></path><path d="M11.5263 8.49575C11.5264 8.88483 11.4112 9.26522 11.1952 9.58882C10.9792 9.91242 10.672 10.1647 10.3126 10.3137C9.95321 10.4628 9.55767 10.5019 9.17604 10.4261C8.7944 10.3504 8.44379 10.1632 8.16855 9.88816C7.89332 9.61315 7.70581 9.26269 7.62975 8.88111C7.55369 8.49954 7.59249 8.10397 7.74124 7.74445C7.88999 7.38492 8.14201 7.07757 8.46544 6.86128C8.78886 6.64499 9.16916 6.52945 9.55825 6.5293C10.0797 6.5293 10.5799 6.73634 10.9487 7.10493C11.3176 7.47351 11.5251 7.97348 11.5255 8.49495L11.5263 8.49575Z" fill="#D1D1D1"></path><path d="M10.9423 8.51316C10.9423 8.78685 10.8612 9.05438 10.7091 9.28194C10.5571 9.5095 10.341 9.68686 10.0881 9.7916C9.83527 9.89633 9.55704 9.92373 9.28861 9.87034C9.02019 9.81695 8.77362 9.68516 8.5801 9.49163C8.38658 9.29811 8.25479 9.05155 8.20139 8.78312C8.148 8.5147 8.1754 8.23647 8.28014 7.98362C8.38487 7.73077 8.56223 7.51465 8.78979 7.3626C9.01735 7.21055 9.28489 7.12939 9.55857 7.12939C9.92557 7.12939 10.2775 7.27518 10.537 7.53469C10.7966 7.7942 10.9423 8.14616 10.9423 8.51316Z" fill="#58595B"></path><path d="M18.6221 11.3253C17.0279 12.4484 15.2153 13.3005 12.6439 13.3005C11.4402 13.3005 11.1963 12.0252 10.4008 12.6485C9.99032 12.9721 8.54278 13.6959 7.39416 13.6409C6.24553 13.5859 4.38351 12.9131 3.86459 10.4604C3.65894 12.9131 3.55372 14.7186 2.62988 16.7886C4.46322 19.7244 8.83452 21.9889 12.8025 21.0133C12.3792 18.0361 14.985 15.1203 16.4468 13.6305C17.0048 13.0654 18.065 12.1431 18.6221 11.3261V11.3253Z" fill="#0F1228"></path><path d="M18.5599 11.3987C18.0649 11.8499 17.4759 12.1839 16.8764 12.4788C16.2696 12.7666 15.6371 12.9969 14.9873 13.1667C14.3369 13.3349 13.6585 13.4616 12.9714 13.3995C12.2843 13.3373 11.5821 13.1037 11.127 12.5888L11.1485 12.5641C11.7064 12.926 12.3505 13.0535 12.9914 13.0718C13.641 13.0918 14.2907 13.0383 14.9283 12.9124C15.5724 12.7774 16.2024 12.5826 16.8103 12.3305C17.4185 12.0795 18.0203 11.7885 18.5384 11.374L18.5599 11.3987Z" fill="#D1D1D1"></path></svg>
                CoinGecko
              </a>
              <a href="mailto: contact@alpacafinance.org">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z"></path></svg>
                contact@alpacafinance.org
              </a>
            </div>
          </div>
        </div>
      </nav>
      <!-- content -->
      
    </article>
    <router-view></router-view>
    <!-- connect to a wallet -->
    <div :class="{showorhide: isShow,showorhide1: !isShow}">
      <div class="antContent">
        <button type="button" aria-label="Close" class="ant-modal-close" @click="handleCancle">
          <span class="ant-modal-close-x">
            <span role="img" aria-label="close" class="anticon anticon-close ant-modal-close-icon">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </span>
          </span>
        </button>
        <div class="ant-modal-header">
          <div class="ant-modal-title" id="rcDialogTitle1">
            <span class="text-xl">
              <span role="img" aria-label="wallet" class="anticon anticon-wallet title__icon mr-1">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                </svg>
              </span> Select a wallet
            </span>
          </div>
        </div>
        <div class="ant-modal-body">
          <div>
            <button type="button" class="ant-btn ant-btn-default ant-btn-block WalletBtn mb-2" ant-click-animating-without-extra-node="false" @click="handleCollect">
              <div class="ant-row ant-row-center ant-row-middle" style="row-gap: 0px;">
                <div class="ant-col" style="flex: 0 0 auto;">MetaMask</div>
                <div class="ant-col" style="flex: 1 1 auto;"></div>
                <div class="ant-col" style="flex: 0 0 auto;">
                  <div class="ant-image">
                    <img class="ant-image-img w-10 h-10" src="../assets/images/oddz.svg">
                  </div>
                </div>
              </div>
            </button>
            <button type="button" class="ant-btn ant-btn-default ant-btn-block WalletBtn mb-2">
              <div class="ant-row ant-row-center ant-row-middle" style="row-gap: 0px;">
                <div class="ant-col" style="flex: 0 0 auto;">WalletConnect</div>
                <div class="ant-col" style="flex: 1 1 auto;"></div>
                <div class="ant-col" style="flex: 0 0 auto;">
                  <div class="ant-image">
                    <img class="ant-image-img w-10 h-10" src="../assets/images/wallet-connect.svg">
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>  
    </div>
      
  </div>
</template>

<script>
import Web3 from 'web3'
export default {
  data() {
    return{
      isShow: false,
      address: ''
    }
  },
  methods: {
    handleConnect(){
      this.isShow = true;
    },
    handleCancle(){
      this.isShow = false;
    },
    handleCollect() {
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
      web3js.eth.getAccounts(function (error, result) {
        if (!error) {
          //授权成功后result能正常获取到账号了
          that.address = result[0]
          localStorage.setItem('address',JSON.stringify(that.address));
          console.log(that.address)
        }
      })
      this.isShow = false
    }
  }
}
</script>

<style>
.myapp1{
  background-color: #555555;
}
.myapp {
  background-color: #f4f4f4;
}
.myapp .app-header {
  min-height: 150px;
  padding: 32px 48px;
}
/* header 中的 btn-box */
.app-header .btn-box {
  position: absolute;
  top: 50px;
  right: 50px;
}
.app-header .btn-default {
  padding: 6px 20px;
  color: #31c77f;
  outline: none;
  border: 2px solid #31c77f;
  border-radius: 10px;
}
.app-header .btn-default:hover {
  color: #f4f4f4;
  background-color: #31c77f;
}
.app-header .btn-box .set-btn {
  width: 40px;
  height: 40px;
  padding: 11px;
  vertical-align: -5px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
}
.app-header .btn-box .set-btn:hover {
  background-color: #ddd;
}
.set-btn svg {
  width: 18px;
  height: 18px;
  color: #31c77f;
}
@media screen and (max-width: 768px) {
  .myapp .app-header {
    padding: 12px 18px;
  }
  .app-header .btn-box {
    top: 10px;
    right: 10px;
  }
}
.center-h {
  position: absolute;
  top: 80px;
  left: 50%;
  margin-left: -80px;
}
/* app-nav */
.app-nav {
  float: left;
  width: 250px;
  background-color: #f4f4f4;
}
.app-nav ul {
  margin-left: 50px;
}
.app-nav li {
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
}
.app-nav .router-link-exact-active {
  color: #31c77f;
}
.routers {
  margin: 80px 0 0 -20px;
  background-color: #f4f4f4;
  width: 120px;
}
.routers li {
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
}
.routers .router-link-exact-active {
  color: #31c77f;
}
/* other-nav */
.other-nav {
  padding: 0 30px 0 40px;
  width: 250px;
}
.myappPrice {
  padding-bottom: 20px;
}
.myappPrice .price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.price div:nth-of-type(2) {
  flex: 1;
  padding-left: 5px;
}
.price div.btn {
  width: 50px;
}
.myappPrice .balance {
  display: flex;
  margin-top: 10px;
}
.balance div:nth-of-type(1) {
  padding-left: 5px;
}
.balance div:nth-of-type(2) {
  flex: 1;
  padding-left: 10px;
}
.balance div.myBalance {
  width: 50px;
}
/* chatter */
.chatter {
  padding: 10px 0 20px 0;
  border-top: 1px solid #ccc;
}
.chatter h5 {
  font-size: 13px;
}
.chatter a {
  display: block;
  margin-bottom: 10px;
  font-size: 13px;
}
.chatter>a:hover {
  text-decoration: underline !important;
}
/* content */
.myapp .app-content {
  margin-left: 250px;
}
@media screen and (max-width: 992px) {
  .myapp .app-content {
    margin-left: 0;
  }
}
.connect-btn {
  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 
 /* connect to a wallet */
 .antContent {
    position: relative;
    display: block;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 15px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    top: 15%;
    left: 40%;
    width: 350px
}
 .showorhide {
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   display: block;
   background-color: #666;
   /* opacity: .7; */
 }
 .showorhide1 {
   display: none;
 }
.ant-modal-close {
    float: right;
    border: hidden;
    background: #fff;
    border-radius: 15px;
}.ant-modal-close-x {
    display: block;
    width: 56px;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    line-height: 56px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
    color: #aaa;
}.anticon svg {
    display: inline-block;
}.ant-modal-header {
    border-bottom: 0!important;
    border-radius: 15px;
    padding: 16px 24px;
    color: rgba(0,0,0,.85);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
}
.ant-modal-title {
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
}.text-xl {
    font-size: 1.25rem;
}.title__icon {
    color: #31c77f;
}
.mr-1 {
    margin-right: .25rem;
}.ant-modal-body {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
}.WalletBtn {
    height: auto;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    width: 300px;
    background-color: #fff;
    padding: 5px 10px;
}.WalletBtn:hover{
  background-color: #31c77f;
  color: #fff;
}
.ant-row-middle {
    align-items: center;
}
.ant-row-center {
    justify-content: center;
}
.ant-row, .ant-row:after, .ant-row:before {
    display: flex;
}
.ant-row {
    flex-flow: row wrap;
}.ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
}.ant-image {
    position: relative;
    display: inline-block;
}
</style>