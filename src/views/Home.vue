<template>
  <div class="site-header">
        <!-- Site Logo -->
          <a href="#home" class="site-logo-landing-desktop"><img src="../assets/images/logo.png"></a>
          <a href="#home" class="site-logo-landing-mobile"><img src="../assets/images/logo-mob.svg"></a>
    
        <!-- Site Menu -->
          <nav class="site-menu-custom">
            <!-- <div class="button-white">
                <a href="https://snapshot.page/#/alpacafinance.eth" >Vote</a>
            </div> -->
            <div class="button-white">
              <router-link to="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F" tag="a" style="color: #828282">Buy ALPACA</router-link>
                <!-- <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F">Buy ALPACA</a> -->
            </div>
            <div class="button-green">
                <!-- <a href="http://app.alpacafinance.org" target="blank">Launch App</a> -->
                <router-link to="/lend" style="color: #fff">Launch App</router-link>
            </div>
        </nav>
  <div id="home-landing">

        <div class="container align-self-center text-center" style="max-width: 100%; margin-top:-100px;">
        <div class="displaypc">
          <h2>Leveraged yield farming<br> by the Alpacas, for the Alpacas</h2>
        </div>
        <div class="displaymobile">
          <h2>Leverage yield<br> farming by the Alpacas,<br>for the Alpacas</h2>
        </div>
          <div class="spacer-35"></div>
          <p>Let this majestic South American mammal take your yield to new heights</p>
          <div class="spacer-35"></div>
          <div class="button-green">  <router-link to="/lend" target="blank" style="color: #fff">Use Alpaca</router-link></div>
          <div class="button-white-g"><router-link to="/doc" target="blank" style="color: #31C77F;">Documentation</router-link></div>
          <div class="button-white-g"><a href="#section5-landing" style="color: #31C77F">FAQs</a></div>
        </div>
      </div>
      <div id="section2-landing">
        <div class="container align-self-center text-center middle">
          <div class="rows">
            <div class="column3">
              <div class="icon-box">
                  <img class="sec1-img" src="../assets/images/team.svg">
                  <h4>Community<br>owned</h4>
              </div>
            </div>
            <div class="column3">
              <div class="icon-box">
                    <img class="sec1-img" src="../assets/images/coin.svg">
                  <h4>No Investor</h4>
              </div>
            </div>
            <div class="column3">
              <div class="icon-box">
                      <img class="sec1-img" src="../assets/images/handcheck.svg">
                  <h4>Fair Launch</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section3-landing">
        <div class="container align-self-center text-center middle">
          <h2>Learn more about <span class="breakline"><br></span><span style="color:#31C77F; font-weight:700;">Alpaca Finance</span></h2>
          <div class="rows">
            <div class="column3">
              <a href="https://medium.com/alpaca-finance/introducing-alpaca-finance-d6e858896efd" target="blank">
                <div class="icon-box">
                    <img src="../assets/images/alpaca.svg">
                    <h4>Intro to<br>Alpaca Finance</h4>
                </div>
              </a>
            </div>
            <div class="column3">
              <a href="https://docs.alpacafinance.org/tokenomics/alpaca-tokens" target="blank">
                <div class="icon-box">
                      <img src="../assets/images/rocket.svg">
                    <h4>Tokenomics</h4>
                </div>
              </a>
            </div>
            <div class="column3">
              <a href="https://docs.alpacafinance.org/our-protocol-1/future-development-plan" target="blank">
                <div class="icon-box">
                        <img src="../assets/images/roadmap.svg">
                    <h4>Roadmap</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="section4-landing">
        <div class="container align-self-center text-center middle">
          <h2>Our contracts <span class="breakline"></span><span>have been audited by</span></h2>
          <div class="rows">
            <div class="column2">
              <a href="https://bit.ly/3xqIo4j" target="blank">
                <div class="icon-box">
                    <img src="../assets/images/peckshield.svg">
                </div>
              </a>
            </div>
            <div class="column2">
              <a href="https://bit.ly/3gnxlmS" target="blank">
                <div class="icon-box">
                    <img src="../assets/images/certik.svg">
                </div>
              </a>
            </div>
            <div class="column2">
              <a href="https://bit.ly/3wuhd8N" target="blank">
                <div class="icon-box">
                      <img src="../assets/images/slowmist.svg">
                </div>
              </a>
            </div>
            <div class="column2">
              <a href="https://bit.ly/2Ss4zZr" target="blank">
                <div class="icon-box">
                      <img src="../assets/images/inspex.svg">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="section5-landing">
        <div class="container align-self-center text-center middle">
          <h2>Our Partners </h2>
          <div class="rows">
            <!-- line 1 -->
            <div class="column4">
              <a href="https://wault.finance/" target="blank">
                <div class="icon-box">
                  <img src="../assets/images/wault.svg">
                  <h4>Wault Finance</h4>
                </div>
              </a>
            </div>
            <div class="column4">
              <a href="https://pancakeswap.finance/" target="blank">
                <div class="icon-box">
                  <img src="../assets/images/cake.svg">
                  <h4>PancakeSwap</h4>
                </div>
              </a>
            </div>
            <div class="column4">
              <a href="https://chain.link/" target="blank">
                <div class="icon-box">
                  <img src="../assets/images/chainlink.svg">
                  <h4>Chainlink</h4>
                </div>
              </a>
            </div>
            <div class="column4">
              <a href="https://immunefi.com/bounty/alpacafinance/" target="blank">
                <div class="icon-box">
                  <img src="../assets/images/immunefi.svg">
                  <h4>Immunefi</h4>
                </div>
              </a>
            </div>
            <!-- line 2 -->
            <div class="column4">
              <a href="https://dodoex.io/" target="blank">
                <div class="icon-box">
                      <img src="../assets/images/dodo.svg">
                      <h4>DODO</h4>
                </div>
              </a>
            </div>
            <div class="column4">
              <a href="https://belt.fi/bsc/" target="blank">
                <div class="icon-box">
                      <img src="../assets/images/belt.svg">
                      <h4>Belt</h4>
                </div>
              </a>
            </div>
            <!-- hide for moblie if more than 6 -->
            <div class="content"></div>
              <div class="column4">
                <a href="https://multiplier.finance/" target="blank">
                  <div class="icon-box">
                        <img src="../assets/images/multiplier.svg">
                        <h4>Multiplier</h4>
                  </div>
                </a>
              </div>
              <div class="column4">
                <a href="https://www.boringdao.com/" target="blank">
                  <div class="icon-box">
                      <img src="../assets/images/borring.svg">
                      <h4>Boring DAO</h4>
                  </div>
                </a>
              </div>
              <!-- line 3 -->
              <div class="column4">
                <a href="https://formation.fi/" target="blank">
                  <div class="icon-box">
                      <img src="../assets/images/form.svg">
                      <h4>Formation</h4>
                  </div>
                </a>
              </div>
              <div class="column4">
                <a href="https://www.seascape.network/" target="blank">
                  <div class="icon-box">
                      <img src="../assets/images/crown.svg">
                      <h4>Seascape</h4>
                  </div>
                </a>
              </div>
              <div class="column4">
                <a href="https://swingby.network/" target="blank">
                  <div class="icon-box">
                      <img src="../assets/images/swingby.svg">
                      <h4>Swingby</h4>
                  </div>
                </a>
              </div>
              <div class="column4">
                <a href="https://oddz.fi/" target="blank">
                  <div class="icon-box">
                      <img src="../assets/images/oddz.svg">
                      <h4>Oddz</h4>
                  </div>
                </a>
              </div>
              <!-- line 4 -->
              <div class="column4">
              </div>
              <div class="column4">
                <a href="https://berrydata.co/#/home" target="blank">
                  <div class="icon-box">
                      <img src="../assets/images/berry.svg">
                      <h4>Berry Data</h4>
                  </div>
                </a>
              </div>
              <div class="column4">
                <a href="https://itam.network/" target="blank">
                <div class="icon-box">
                    <img src="../assets/images/ITAM.svg">
                    <h4>ITAM</h4>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
        <div id="section6-landing">
        <div class="container container-sp align-self-center text-center middle">
          <h2>Join our community</h2>
          <div class="rows">
            <div class="column5">
            <a href="https://twitter.com/AlpacaFinance" target="blank">
              <div class="icon-box">
                  <i class="fab fa-twitter"></i>
                  <h4>Twitter</h4>
                  <p>Follow @AlpacaFinance<br>for the latest<br>news and updates</p>
              </div>
            </a>
            </div>
            <div class="column5">
              <a href="https://t.me/alpacafinance" target="blank">
                <div class="icon-box">
                    <i class="fab fa-telegram-plane"></i>
                    <h4>Telegram</h4>
                    <p>Mix and mingle with<br>your fellow Alpacas</p>
                </div>
              </a>
            </div>
            <div class="column5">
              <a href="https://discord.gg/WnUWeRNTwk" target="blank">
              <div class="icon-box">
                  <i class="fab fa-discord "></i>
                  <h4>Discord</h4>
                  <p>Meet your fellow<br>community members,<br>and chat with them<br>in real time</p>
              </div>
              </a>
            </div>
            <div class="column5">
              <a href="https://medium.com/alpaca-finance" target="blank">
              <div class="icon-box">
                  <img src="../assets/images/medium.svg">
                  <h4>Medium</h4>
                  <p>Read our latest<br>blog posts</p>
              </div>
              </a>
            </div>
            <div class="column5">
              <a href="https://github.com/alpaca-finance" target="blank">
              <div class="icon-box">
                  <i class="fab fa-github"></i>
                  <h4>Github</h4>
                  <p>Review our code</p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="section7-landing">
        <div class="container align-self-center text-center middle">
          <h2>Frequently asked questions</h2>
          <div class="spacer-70"></div>
          <div class="accordion-main">
          <button class="accordion">What is Alpaca Finance?</button>
          <div class="panel">
            <p>Alpaca Finance is the largest lending protocol allowing leveraged yield farming on Binance Smart Chain. It helps lenders to earn safe and stable yields, and offers borrowers undercollateralized loans for leveraged yield farming positions, vastly multiplying their farming principals and resulting profits.‌</p>
            <p>Furthermore, Alpacas are a virtuous breed. That’s why, we are a fair-launch project with no pre-sale, no investor, and no pre-mine. So from the beginning, this has always been a product built by the people, for the people. Or as we like to say: <b>by the Alpacas, for the Alpacas.</b></p>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">What is yield farming?</button>
          <div class="panel">
            <p>Yield farming is an innovative DeFi concept where users stake or lend their crypto assets, providing liquidity in order to receive returns.</p>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">Where does my yield come from?</button>
          <div class="panel">
            <p>That’s a great question! In fact, you should always try to understand where the yield comes from in each DeFi project.</p>
            <p>In Alpaca Finance, the source of your yield will depend on how you participate in the protocol:</p>
            <p>As a lender, your yield comes from:</p>
            <ul>
              <li>Interest paid by borrowers to open leveraged yield farming positions (Interest rate is based on lending pool utilization).</li>
              <li>Incentive rewards paid in ALPACA.</li>
              <li>Incentive rewards paid in tokens of platform partners (in featured pools).</li>
            </ul>
            <p>As a yield farmer, your yield comes from:</p>
            <ul>
              <li>Yield farming incentive rewards from the AMM, if applicable - i.e. CAKE tokens from PCS.</li>
              <li>Underlying trading fees of the pool - i.e. trading fees from the PancakeSwap pools.</li>
              <li>Incentive rewards paid in ALPACA (only if you have a leveraged position).</li>
              <li>Incentive rewards paid in tokens of platform partners (in featured pools).</li>
            </ul>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">How do I use Alpaca Finance?</button>
          <div class="panel">
            <p>You can participate in Alpaca Finance in three ways:</p>
            <ul>
              <li><b>Lender:</b> You can earn safe and stable returns on your base assets by depositing them into our lending vaults. These assets are then offered to yield farmers for leveraging up their positions.</li>
              <li><b>Yield farmer:</b> You can borrow base assets from our lending vaults, allowing you to open a leveraged farming position, multiplying your farming APR by up to 6x(minus borrowing interest). Of course, these higher yields come with larger risks than lending: liquidation, impermanent loss, etc.</li>
              <li><b>Liquidator:</b> Monitors the pool for underwater leveraged farming positions(when equity collateral becomes too low, thus approaching risk of default) and liquidates them. (Bots only)</li>
            </ul>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">Is it safe to use Alpaca Finance?</button>
          <div class="panel">
            <p>In short, yes, Alpaca is amongst the safest and most secure projects on BSC, and here's why:</p>
            <ul>
              <li>
                <p>Our code is open-source, with every line having been combed through by hundreds of independent developers. We even have an ongoing <a href="https://medium.com/alpaca-finance/alpaca-finance-bug-bounty-program-983835f89ecd" target="blank">bug bounty program</a> to offer them high rewards if they spot as little as a minor issue. We invite you to have a look through our code yourself <a href="https://github.com/alpaca-finance" target="blank">here</a>.</p>
              </li>
              <li>
                <p>We've also had multiple top security firms provide audits for our code. All our smart contracts have been audited by PeckShield. You can read their audit report <a href="https://github.com/alpaca-finance/bsc-alpaca-contract/blob/main/audits/PeckShield-Audit-Report-Alpaca-v1.0.pdf" target="blank">here</a>. We also have an ongoing audit with Certik, which you can view the status of <a href="https://www.certik.org/projects/alpacafinance" target="blank">here</a>.</p>
              </li>
              <li>
                <p>We've burned our LP tokens in the ALPACA-BNB PancakeSwap pool so they can't be withdrawn, which you can verify <a href="https://bscscan.com/tx/0xc93eca7278404b3c7acf15d37c222abacfa4712f2236651300615ce87e6e7a2e">here</a>.</p>
              </li>
              <li>
                <p>We've locked up our LP tokens in the sALPACA-ALPACA pool in Wault Locker so they can't be withdrawn until the pool is closed, which you can verify <a href="https://bscscan.com/tx/0x592f862260579f7ee2e61232fcc439f63274ea34e677db2aefb1a49e5945f572">here</a>.</p>
              </li>
              <li>
                <p>Besides extensive code reviews having been conducted both internally and externally, there are also built-in safeguards in place. For example, all the contracts we deploy are owned by a Timelock contract. Thus, any changes made by our developers will have a 24-hour lag before becoming effective. That means users will have ample time to withdraw their funds and exit safely in the case of any questionable update to the code. With tens of thousands of users, you can believe that every small change is under constant scrutiny from many participants. At times, it's a tough job dealing with all their questions, but it's honest work. 👨‍🌾</p>
              </li>
              <li>
                <p>In addition, we do extensive testing, focusing on security first as a design principle. Yet, even with everything we do, you should still be aware of the potential risks of participating in any DeFi project, which you can read more about <a href="https://docs.alpacafinance.org/our-protocol-1/risks">here</a>.</p>
              </li>
            </ul>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">What is ALPACA token and why should I hold it?</button>
          <div class="panel">
            <p>ALPACA token is the central token for governing and capturing the value of the Alpaca Finance platform. The benefits of holding the token are listed below:</p>
            <p>
              </p><h5>Governance</h5>
              <p>Once we implement governance (slated for Q3 on the roadmap), holding ALPACA will give you the power to decide the future direction of the protocol itself. To appreciate the significance of that, it's important to realize one thing--Alpaca Finance is unlike the majority of current BSC projects.</p>
              <p>We are not a copy-paste yield farm or low-volume AMM that only provides inflationary farming tokens, adding no real value to the BSC DeFi ecosystem. Instead, Alpaca is quickly becoming a foundational layer of BSC, because it offers genuine value as a lending platform posessing the unique strategic advantage of providing leverage. In this way, we can offer more stable APYs to lenders, higher APYs to yield farmers, and additional liquidity to AMMs and partnered projects we create pools for. This is a multiplying enabler for the DeFi ecosystem as a whole.</p>
              <p>In addition, only a handful of other platforms can offer leverage at all because of its technical complexity. Meanwhile, we are the leading platform providing this sarervice on BSC across all metrics(TVL, user base, volume, etc), with the most flexibility in customization, while also having the most intuitive UI. In other words, we're ahead on all fronts, and the market is still in its nascent stage.</p>
              <p>So why is understanding this crucial in order to comprehend the significance of governance? Well, the value of a right to governance is directly proportional to the value of the thing you're governing. So if you believe in the long-term potential of Alpaca Finance, you should also understand that the value of the governance power of your ALPACA tokens--shares that same potential.</p>
              <p>ALPACA tokens are the voting slips to control this protocol we've built, and their governance value is permanent because our tokens have a hardcap. That means 1 token will always be worth 1 vote. That's as true now as it will be 1 year or 10 years from now, and as the protocol continues to grow, that voting power will also accrue in value.</p>
              <p>What's more, governance is only one benefit of holding ALPACA tokens. </p>
            <p></p>
            <p>
              </p><h5>Deflationary Price Increase</h5>
              <p>ALPACA tokens are long-term deflationary. Emissions have a hardcap and are continuing to decrease, while burn is permanent and continuing to increase, and we burn quite a bit of tokens; A significant portion of protocol fees go towards token burn: 100% of liquidation fees and 50% of protocol lending fees. So as Alpaca Finance continues growing, more ALPACA will be burnt, leading to the value of each remaining ALPACA token rising continuously and permanently.</p>
            <p></p>
            <p>
              </p><h5>Exclusive NFT Access</h5>
              <p>We are planning to integrate NFTs with actual utility into the platform. Users will have to hold ALPACA in order to benefit from this utility, as well as to gain access to these NFTs in the first place, along with other exclusive items such as real-world Alpaca merch.</p>
            <p></p>
            <p>
              </p><h5>Protocol Utility</h5>
              <p>Finally, we are planning on implementing additional utility and economic benefits for ALPACA tokens within the protocol.</p>
              <p>For one, we will have an ALPACA lending pool, offering ALPACA farming pairs leverage, which at the moment is only available for the most popular token pairs and exclusive partners. As more leveraged ALPACA pairs come online, this will increase the demand for ALPACA, as having it will mean gaining the ability to receiving higher yields both lending and farming.</p>
              <p>We also plan to incentivize partners to create more pools pairing their tokens with ALPACA, driving higher volume and demand for ALPACA due to users gaining the potential to participate in more pools with it.</p>
              <p>In the long term, our vision is for ALPACA to provide similar utility for our protocol as CAKE does for PancakeSwap or BNB does for Binance and BSC.</p>
              <p>Yet, these are only some of the things we're working on for the ALPACA token. We'll announce many more initiatives in the future. For now though, you can read more about the ALPACA token <a href="https://docs.alpacafinance.org/tokenomics/alpaca-tokens">here</a>.</p>
            <p></p>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">How do I earn ALPACA tokens?</button>
          <div class="panel">
            <p>We are a fair launch project. There was no investor, presale, or pre-mine. Thus, the only way to earn ALPACA is to participate on our platform. To learn more about ways to earn ALPACA, please visit our tokenomics page: <a href="https://docs.alpacafinance.org/tokenomics/alpaca-tokens">https://docs.alpacafinance.org/tokenomics/alpaca-tokens</a></p>
          </div>
          </div>
          <div class="accordion-main">
          <button class="accordion">Where can I buy ALPACA tokens?</button>
          <div class="panel">
            <p>You can buy ALPACA from the PancakeSwap ALPACA-BNB pool here: <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F">https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F</a></p>
            <p>Or one of the other exchanges we're listed on here: <a href="https://www.coingecko.com/en/coins/alpaca-finance#markets">https://www.coingecko.com/en/coins/alpaca-finance#markets</a></p>
            <p>Contract address of ALPACA token: 0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F</p>
            <p>We're also working on listing ALPACA on more CEX and DEX exchanges</p>
          </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">How can I calculate the worth of my LP tokens?</button>
            <div class="panel">
              <p><a href="https://apeboard.finance/">https://apeboard.finance/</a></p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Have your contracts been audited?</button>
            <div class="panel">
              <p>Yes, our smart contracts have been audited by PeckShield. You can see their audit report <a href="https://github.com/alpaca-finance/bsc-alpaca-contract/blob/main/audits/PeckShield-Audit-Report-Alpaca-v1.0.pdf">here</a>.</p>
              <p>We also have an ongoing audit with Certik, which you can verify <a href="https://www.certik.org/projects/alpacafinance">here</a>.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why does my transaction to open a leveraged farming position keep failing?</button>
            <div class="panel">
              <p>You need to set the gas limit to at least 2 million since our code does a lot of back-end work for you (setting up your position's LP tokens by optimally converting the individual assets). If that doesn't work, try raising the gas as well. If that still doesn't work after several tries, contact us at contact@alpacafinance.org or DM an admin on Telegram or Discord.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">I tried to open a farming position. My TX failed but I can't find my funds now. What do I do?</button>
            <div class="panel">
              <p>Relax, young Alpaca. Your funds are safu. Our code has to convert funds into wBNB in the background to interact with AMMs. Since your TX failed part-way, they must still be in wBNB. In other words, your tokens are in your wallet where they've always been.</p>
              <p>So add wBNB to your wallet: 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c </p>
              <p>You can unwrap your wBNB into BNB without fees on PancakeSwap. Then, try opening a position using the instructions in the FAQ question above this one.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">My farming position was successfully created according to the TX but why can't I see it on the Farm page?</button>
            <div class="panel">
              <p>This happens on rare occasions. It's due to lag with BSC nodes and there isn't anything we can do about it. You can relax though because it's only a UI issue. If the TX went through, your position exists and is accruing yields. You can verify this by checking that you're earning claimable ALPACA rewards on the Stake page. Try closing the browser window and reopening it. If that doesn't work, then your position should also show up on the Farm page eventually, in some minutes or at the latest, hours.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why am I unable to add collateral to my pool?</button>
            <div class="panel">
              <p>At the moment, to succeed in adding collateral, it has to be enough to get your position's debt ratio to the maximum allowed when opening a new position for that pool. In other words, you have to add enough to get your leverage back up to where you started. We understand the usability of this isn't great and we're working on making it more flexible. For the time being though, please take a look at the necessary debt ratio you need for your pool which is listed under Work Factor here: <a href="https://docs.alpacafinance.org/our-protocol-1/pool-specific-parameters">https://docs.alpacafinance.org/our-protocol-1/pool-specific-parameters</a></p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why are the pools for lending and borrowing receiving so many of the ALPACA rewards instead of the ALPACA-BNB pool?</button>
            <div class="panel">
              <p>Alpaca Finance is a lending protocol allowing leveraged-yield farming. That means what supports the protocol the most is not a thicker LP pool, but the lending and borrowing pools. We generate the most TVL and fees from them and they also help grow the protocol. This then feeds back to ALPACA holders in two ways: higher ALPACA prices through burn, and increased governance value through having voting power over a bigger protocol.</p>
              <p>ALPACA is not a short-term speculation play. It is a long-term ecosystem play, like when people bought ETH, BNB, UNI, or CAKE in their infancy. You see, our primary goal as a team and protocol is not to raise ALPACA's price as high as possible so the founders can dump and move onto their next project. Yes, unfortunately, that's the goal of many of the other projects you've looked at... </p>
              <p>Instead, we're aiming to build a protocol that's going to scale out horizontally and vertically. The ALPACA token will be the lifeblood of that in the future. So the incentives are all aligned in order to make that vision a reality, not for people to make temporary gains from flipping ALPACA.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why can't I withdraw my funds from the lending pool?</button>
            <div class="panel">
              <p>The lending pool is there for people to borrow funds. That's why you're earning yields from it. So when people are borrowing your funds in active positions, how could you withdraw them? If you're unable to withdraw, then the utilization of the lending pool is too high, which means a high percentage of the funds are being borrowed at the moment. You can try to lower the amount you attempt to withdraw and it may succeed. However, the inability to withdraw is also a temporary issue.</p>
              <p>The interest rate model exists to stabilize utilization levels. At above 90 utilization, the interest rate rises at a steep rate, making borrowing more expensive and lending more lucrative. This inevitably leads to borrowers closing their positions and more lenders coming in. When that happens, the utilization will drop to an optima where everyone can still profit, but lenders can withdraw without issue. This should not take longer than hours in most cases, and if something isn't working and the utilization rate remains high for a few days in a row, the team will step in to change the interest rate model to lower utilization.</p>
              <p>We're also optimizing one step at a time to always have the most efficient interest rate model, allowing everyone to profit while lenders can also withdraw with ease. You can read more about the interest rate model <a href="https://docs.alpacafinance.org/our-protocol-1/global-parameters">here</a>.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why is borrowing interest so high? Why is utilization so high? Why is my APY negative?</button>
            <div class="panel">
              <p>This is due to a utilization spike from supply and demand for the lending asset. Too many people want to borrow in the pool/s related to this asset and there aren't enough lenders, leading to high demand and low supply. However, it shouldn't last long.</p>
              <p>As explained in the previous question which you can reference, high utilization will soon lead to a systemic correction as lenders enter to chase the high lending rate and borrowers exit due to the borrowing interest being too high. Just wait and you can watch this happen. </p>
              <p>There's also not much to worry about. Even if the APY became negative, it would have to stay that way for a long time to make you lose any substantial funds, and not only is the system designed to prevent this, pushing corrections to happen in minutes, but the team would step in to change the interest rate model if there was any nagging inefficiency.</p>
              <p>We're also optimizing one step at a time to always have the most efficient interest rate model, allowing everyone to profit while lenders can also withdraw with ease. You can read more about the interest rate model <a href="https://docs.alpacafinance.org/our-protocol-1/global-parameters">here</a>.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">I just opened a leveraged farming position, but why did my equity value drop?</button>
            <div class="panel">
              <p>Equity value when you open a position is the value of your principal equity when you first added it to the position. However, remember that because this is leveraged farming and not normal farming, you borrowed funds. Depending on which asset/s you added and the leverage level, the protocol may have had to do AMM conversions in order to get your added funds + borrowed funds into the correct 50:50 ratio to create your LP position. That means you would've paid price impact(slippage) + trading fees. Those fees reduced your starting equity value and act as entry costs for opening a leveraged yield farming position. When you exit, you will also have similar fees. </p>
              <p>That is why when you want to farm at high leverage, you should keep in mind that you'd be best off intending to hold that position for a while. That way, you will give enough time for the APR to cover your entry and exit costs, and allow your yields to grow.</p>
              <p>If you do not wish to pay entry or exit costs, you can also farm at 1x(standard farming without borrowing), or up to 2x while adding funds so that when combined with the borrowed funds, your assets are already in a 50:50 ratio and the protocol will not have to make any swaps.</p>
              <p>For example, if you want to farm ETH-BNB at 2x leverage and you plan to borrow 2 BNB, if you add an amount of ETH that is worth 2 BNB then the assets will already be in a 50:50 split and you will pay no fees. </p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why did my equity value drop below its value when I opened the position even though I am leveraged farming a stablecoin-stablecoin pair?</button>
            <div class="panel">
              <p>First, please read the prior question's answer if you are unaware why your initial equity might be less than the funds you added.</p>
              <p>Second, you should note that with leverage, price moves will have a larger effect on your equity value. Please take a look at a price chart of your pair. Even if it is a stablecoin-stablecoin pair, the prices swing 1-2% very regularly. With leverage, that price movement is multiplied. So at 4x, a 1% movement, can cause a 2% price drop to your equity value on that token's portion(% move * leverage / token's portion of equity = 1% * 4 / 2). Of course, since these are stablecoins, you can believe they will soon swing back to peg with high confidence.</p>
              <p>You may have another doubt: since this is an LP pool, shouldn't it not matter if one stablecoin drops in value because that means the other goes up in value? if I am farming USDT-BUSD and USDT drops in value, BUSD will go up to cover that, and IL is insignificant with these small price movements. </p>
              <p>Well, that is the case for normal farming. However, when you leverage above 2x, you are borrowing an asset, and that also means that you are not long, but short on that asset. (We'll be releasing more articles to explain shorting in the future.)</p>
              <p>What this means is that when you borrow BUSD to farm something like USDT-BUSD, you are long USDT and short BUSD. So when the price of USDT drops, you are losing value on your USDT portion, but this also means that you are losing value on your BUSD when the price of it rises. This creates additional volatility, multiplying your temporary losses on your total equity by 2.</p>
              <p>What's more is that it's not necessarily true that BUSD value rises when USDT price falls, because both USDT and BUSD can drop against the market at the same time and still have a ratio like .99:1.01. Albeit, it's true that's not common with stablecoins, but happens somewhat often with non-pegged tokens. </p>
              <p>So in summary, most of the time it's because the price of your long asset temporarily dropped against the borrowed asset. To reiterate though, this should be temporary.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Why have my yields not been as high as the APY says? Why is my position/equity value not increasing?</button>
            <div class="panel">
              <p>First of all, you should make sure you understand <b>what APY is.</b> APY is how much you'll earn at the end of the year if you take all your yields and regularly add those on top of your principal into the pool, compounding your equity to <b>earn yields on your yields.</b> This is a powerful process that quickly becomes exponential over time.</p>
              <p>APR, on the other hand, is simple interest that shows what your direct earnings would be at the end of the year if you earned yields only on your initial principal.</p>
              <p>Now, here's the key, when you first open a position or make a deposit, APR=APY. Can you see why? Because you have no yields to redeposit! Over time, as you earn yields, APY starts to soar above APR as you redeposit those yields and begin generating compounded earnings. So, in summary, it takes time for your earnings to reach the standard of APY.</p>
              <p>To see more, you can make APR to APY conversions here: <a href="https://www.aprtoapy.com/">https://www.aprtoapy.com/</a></p>
              <p>Another factor you have to keep in mind if you are leveraged yield farming is that a large part of your total APR or APY is in ALPACA rewards. Those are claimable on the STAKE page and are not factored into your equity value shown in the farming dashboard. Of course, you can add them as collateral to your farming position if you want or stake them in another pool to earn yields on them which achieves the same effect as compounding, only in multiple baskets.</p>
              <p>As for your position/equity value not increasing, if the APR on your leveraged farming pair is low enough, it's possible that the yield farming and trading fees are only enough to cover the borrowing interest. In that case, your position value would not increase, but the ALPACA rewards are where you'd be earning your yields, which is not calculated in those metrics.</p>
              <p>In addition, it's important to remember that in the short and possibly medium-term, the greatest impact on your position/equity value will be the prices of the assets. This is like any other farming. If the prices move  unfavorably for you, this can result in your equity and position value dropping. Since it takes time for yields to accrue to substantial amounts relative to your principal, they will not be able to cover this asset exposure in a short time. So it's recommended you choose carefully about which token pair you farm in.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">Where are my ALPACA rewards from farming?</button>
            <div class="panel">
              <p>On the farm page, on the Your Positions dashboard, at the top right you should see a Claim button. Click that and you will find your rewards.</p>
            </div>
          </div>
          <div class="accordion-main">
            <button class="accordion">How can I contact the team?</button>
            <div class="panel">
              <p>contact@alpacafinance.org or DM an admin on the Telegram or Discord</p>
              <p>Discord: <a href="https://discord.gg/2UvgmqcVDQ">https://discord.gg/2UvgmqcVDQ</a></p>
              <p>Telegram: <a href="https://t.me/alpacafinance">https://t.me/alpacafinance</a></p>
            </div>
          </div>
        </div>
  </div>
      
      </div>
</template>

<style>
        .site-header {
    background: #ffffff;
    width: 100%;
}*{
    margin: 0;
    padding: 0
}
div {
    display: block;
}
body {
    font-weight: 300;
    color: #0F1228;
    font-size: 15px;
}
img {
    vertical-align: middle;
    border-style: none;
    max-width: 320px;
}.site-logo-landing-desktop {
    color: #31C77F;
    align-items: center;
    z-index: 1030;
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin-left: 60px;
    margin-top: 40px;
    float: left;
}
@media only screen and (min-width: 768px){
    .site-logo-landing-mobile {
    display: none;
}
}

.site-logo-landing-mobile {
    color: #31C77F;
    align-items: center;
    z-index: 1030;
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 10px;
    float: left;
}
a {
    color: #31C77F;
    text-decoration: none;
    background-color: transparent;
}.site-menu-custom {
    margin-right: 60px;
    margin-top: 40px;
    top: 0;
    right: 0;
    z-index: 1050;
    float: right;
}.button-white {
    width: 130px;
    background: #FFFFFF;
    border: 2px solid #828282;
    box-sizing: border-box;
    box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
    border-radius: 10px;
    display: inline-block;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 15px;
}
.button-white a {
    display: block;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
}.button-green {
    background: #31C77F;
    border: 2px solid #31C77F;
    box-sizing: border-box;
    box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
    border-radius: 10px;
    display: inline-block;
    padding: 5px 25px;
}.button-green a {
    display: block;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
}


#home-landing {
    width: 100%;
}
::before{
    display: table;
    content: " ";
}
::after{
    clear: both;
}
#home-landing {
    min-height: 90vh;
    display: inline-flex;
    background: url(../assets/images/bgnew.svg);
    background-size: 100%;
    background-position: bottom center;
    background-repeat: no-repeat;
}
@media only screen and (min-width: 768px){
    container-md, .container-sm, .container {
    max-width: 1250px;
}
}

.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    position: relative;
    z-index: 1;
}
.text-center {
    text-align: center !important;
}
.align-self-center {
    align-self: center !important;
}
.align-self-center h2{
  font-size: 60px;
}
@media (min-width: 1200px){
    .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
}
}

@media (min-width: 992px){
    .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
}
}

@media (min-width: 768px){
    .container-md, .container-sm, .container {
    max-width: 720px;
}
}

@media (min-width: 576px){
    .container-sm, .container {
    max-width: 100%;
}
}

.container, .container-fluid, .container-xl, .container-lg, .container-md, .container-sm {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1200px){
    .container {
    width: 1170px;
}
}

@media (min-width: 992px){
    .container {
    width: 970px;
}
}

@media (min-width: 768px){
    .container {
    width: 750px;
}
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.text-center {
    text-align: center;
}
h2 {
    margin-block-end: 0.3em;
    font-weight: 500;
    font-size: 3.5vw;
}
@media only screen and (min-width: 768px){
    .displaymobile {
    display: none;
}
}
.spacer-35 {
    margin-bottom: 35px;
}
p {
    opacity: 0.7;
}
.button-white-g {
    background: #ffffff;
    border: 2px solid #31C77F;
    box-sizing: border-box;
    box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
    border-radius: 10px;
    display: inline-block;
    padding: 5px 25px;
    margin-left: 5px;
}.button-white-g a {
    display: block;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
}
#section2-landing {
    padding: 7rem 0;
}
.rows {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: -15px;
}
.middle{
    width: 60%;
}.column3 {
    width: 33.3%;

}.icon-box {
    margin: 10px;
}.sec1-img {
    padding: 60px;
    background: #F6F4F5;
    border-radius: 50%;
    margin-bottom: 10px;
    width: 200px;
}.icon-box h4 {
    font-weight: 600;
    font-size: 26px;
    margin-top: 10px
}
#section3-landing {
    padding: 7rem 0;
    background: #f4f4f4;
}
#section3-landing .row {
    margin: auto;
    margin-top: 70px;
}
#section3-landing h2 {
    font-size: 44px;
}@media only screen and (min-width: 768px){
    .breakline {
    display: none;
}
}element.style {
    color: #31C77F;
    font-weight: 700;
}
#section3-landing .icon-box {
    background: #ffffff;
    padding: 40px 20px;
    box-shadow: 0px 8px 22px -6px rgb(24 39 75 / 12%), 0px 14px 64px -4px rgb(24 39 75 / 12%);
    border-radius: 10px;
    min-height: 350px;
    margin: 0px 40px;
}#section3-landing img {
    width: 146px;
}#section3-landing .icon-box h4 {
    font-size: 24px;
    color: #31C77F;
    margin-top: 40px;
    font-weight: 600;
}
#section4-landing {
    padding: 7rem 0;
}#section4-landing h2 {
    font-size: 44px;
}.column2 {
    width: 50%;
}#section4-landing .icon-box {
    background: #ffffff;
    padding: 40px 20px;
    box-shadow: 0px 8px 22px -6px rgb(24 39 75 / 12%), 0px 14px 64px -4px rgb(24 39 75 / 12%);
    border-radius: 10px;
    min-height: 140px;
    margin: 20px 40px;
}#section4-landing img {
    width: 400px;
    height: 100px;
}#section5-landing {
    padding: 7rem 0;
    background: #f4f4f4;
}
#section5-landing .content {
    display: contents;
}#section5-landing h2 {
    font-size: 44px;
}#section5-landing .row {
    margin: auto;
    margin-top: 70px;
    margin-right: 25px;
}.column4 {
    width: 25%;
}#section5-landing .icon-box {
    border: 1px solid #80808047;
    border-radius: 10px;
    min-height: 60px;
    text-align: left;
    padding-left: 15px;
}#section5-landing img {
    width: 40px;
    margin-top: -5px;

}#section5-landing .icon-box h4 {
    font-size: 20px;
    color: #0F1228;
    margin-top: 15px;
    font-weight: 200;
    display: inline-block;
}#section6-landing {
    padding: 7rem 0;
}#section6-landing .row {
    margin: auto;
    margin-top: 70px;
}.column5 {
    width: 20%;
}
.fa-discord:before {
    content: "\f392";
}
.fa-telegram-plane:before {
    content: "\f3fe";
}.fa-twitter:before {
    content: "\f099";
}.fa-github:before {
    content: "\f09b";
}#section6-landing a {
    color: #0F1228;
}
#section6-landing .middle{
    width: 80%;
}
#section6-landing .icon-box {
    border: 2px solid #F6F4F5;
    background: #F6F4F5;
    border-radius: 10px;
    padding: 80px 20px 40px 20px;
    border-radius: 10px;
    min-height: 380px;
    margin: 20px;
}
#section6-landing img {
    width: 70px;
}#section6-landing i {
    font-size: 70px;
}#section6-landing .icon-box h4 {
    font-size: 24px;
    color: #0F1228;
    font-weight: 600;
    margin: 30px 0px;
    text-decoration: none;
}#section6-landing p {
    font-size: 14px;
    font-weight: 500;
}#section7-landing {
    padding: 7rem 0;
    background: #f4f4f4;
}#section7-landing h2 {
    font-size: 44px;
}.spacer-70 {
    margin-bottom: 70px;
}.accordion-main {
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 30px;
}.accordion {
    cursor: pointer;
    width: 100%;
    outline: none;
    transition: 0.4s;
    font-size: 21px;
    font-weight: 500;
    background-color: transparent;
    border: 0px;
    text-align: left;
}.panel {
    padding: 0px 32px;
    display: none;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    background: transparent;
    border: 0px;
    box-shadow: none;
}.panel p {
    opacity: 1;
    padding: 20px 0px 0px 0px;
}.accordion:before {
    content: '\25CF';
    font-size: 23px;
    color: #31C77F;
    margin-right: 15px;
}.accordion:after {
    content: '\002B';
    font-size: 23px;
    color: #31C77F;
    margin-left: 5px;
    float: right;
}


@media only screen and (max-width: 1024px) {
  .sec1-img {margin-bottom:30px;width:200px;padding:35px;}
  #section3-landing .icon-box  {margin:0px 20px;}
    h2 {font-size:42px;}
}


@media only screen and (max-width: 767px) {

  .site-logo-text img {max-width:200px;}
  p{font-size:16px;}
  .text-comingsoon {font-size:16px;}

  .col-sm-auto {border:0px;padding-left:10px;padding-right:10px;}
  .col-6 {flex: 0 0 25%;}

  section {padding:0; height:80vh;}

  .btn-icon.btn-sm, .btn-group-sm > .btn-icon.btn {font-size: 1.0rem;
  width: 2rem;
  height: 2rem;}

  .site-logo-text {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 1.0rem !important;
  }
  .site-logo-landing-desktop{display:none;}

  .site-menu-custom {
    margin-right: 10px;
    margin-top: 20px;
  }
  .site-menu-custom .button-green a{
    font-size:14px;
  }

  h2{font-size:28px;}
  #home h2{font-size:4.5vw;}
  #home-landing h2{font-size:4.5vw;}
  .site-logo-text {font-size:1.6rem;}
  .countdown .number {font-size:9.3vw;min-width:1.5em;}
  .countdown .title {font-size:2.5vw;}
  .countdown {padding: 10px;margin: 10px 0px;}
  .site-menu-custom .button-white {display:none;}
  #home-landing .button-green {width: 80%;margin-bottom: 10px;}
  #home-landing .button-white-g {width: 80%;margin-bottom: 10px;}
  .column2 { width:100%;}
  .column3 { width:100%;}
  .column4 {width:50%;}
  .column5 {width:50%}
  #section5-landing .column4 {width:100%;}
  #section2-landing{padding: 4rem 0;}
  #section3-landing{padding: 4rem 0;}
  #section4-landing{padding: 4rem 0;}
  #section5-landing{padding: 4rem 0 2rem 0;}
  #section6-landing{padding: 4rem 0;}
  #section7-landing{padding: 4rem 0;}
  .sec1-img {margin-bottom:30px;width:200px;padding:35px;}
  .site-header .button-green {padding: 5px 15px;}
  .icon-box {margin-bottom:20px;}
  .collapsible{background-color: #ffff;width: 40px;height: 40px;border-radius: 50%;}
  #section5-landing a {display: flex;align-items: center;justify-content: center;}
  #section4-landing img {width: 240px; height: 65px;}
  #section5-landing img {width: 35px;}
  #section5-landing .images-Collapse{width: 10px;background-color: #ffff;}
  #section3-landing .icon-box {margin:10px 60px;}
  #section4-landing .icon-box {margin:10px 20px;}
  #section5-landing .icon-box {margin:10px 10px;width: 70%; min-height: 60px;}
  #section6-landing .icon-box {margin: 5px;padding: 20px 5px; min-height:290px;}
  #section5-landing .icon-box h4 {font-size:18px;}
  #section3-landing h2 {font-size:28px;}
  #section4-landing h2 {font-size:28px;}
  #section5-landing h2 {font-size:28px;}
  #section6-landing h2 {font-size:28px;}
  #section7-landing h2 {font-size:28px;}
  #section6-landing p {font-size:13px;}
  #section5-landing .content {display: none;}
  .displaypc{display:none;}
  .accordion:before{height:100%;}
  .accordion {font-size:15px;}
  .panel p  {font-size:13px;}
  .panel li {font-size:13px;}
  .accordion-main {padding:15px;}
  .breaklinedesk {display:none;}
  .butt-coll {z-index: 4;left: 45%;position: relative;margin-top: -20px;display: block;}
}

@media only screen and (max-width: 480px) {

  .text-comingsoon {font-size:13px;}
  p{font-size:13px;}
}

@media only screen and (min-width: 768px) {
.site-logo-landing-mobile {display:none; }
container-md, .container-sm, .container {max-width: 1250px;}
container-md, .container-sp {max-width: 1500px;}
.breakline{display:none;}
.displaymobile{display:none;}
}

    </style>