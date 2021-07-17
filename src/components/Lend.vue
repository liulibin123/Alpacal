<template>
  <div class="lend">
    <header class="lend-header">
      <h2 class="hidden-xs hidden-sm">Available Lending Pools</h2>
      <div class="total-value-locked">
        <h3
          data-toggle="tooltip"
          data-placement="top"
          title="Value of total LP tokens locked + deposits that are not borrowed + ALPACA-BNB LP tokens staked + sALPACA staked">
          Total Value Locked
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="info-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </h3>
        <p>
          <span class="total">$1,226,060,637.91</span>
        </p>
      </div>
    </header>
    <article class="lend-body"  v-if="datalist">
      <!-- table 在md lg时候表格展示数据 -->
      <div>
        <table class="table table-hover">
          <thead>
            <tr style="border-style: hidden">
              <th></th>
              <th>APY</th>
              <th>Total Supply</th>
              <th>Total Borrowed</th>
              <th>Utilization</th>
              <th>Your Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datalist" :key="data.name">
              <td class="data-title">
                <img :src="data.icon" alt="icon" width="40" height="40">
                <h4>{{data.name}}</h4>
                <p>1 ib{{data.name}} = {{data.ratio}} {{data.name}}</p>
              </td>
              <td class="APR">
                <p>
                  <span>Lending APR: </span>
                  <span>{{data.LendingAPR}}</span>
                </p>
                <p>
                  <span>Staking APR: </span>
                  <span>{{data.StakingAPR}}</span>
                </p>
                <p v-if="data.ProtocolAPR">
                  <span>Protocol APR: </span>
                  <span>{{data.ProtocolAPR}}</span>
                </p>
                <p>
                  <span>Total APR: </span>
                  <span>{{data.TotalAPR}}</span>
                </p>
                <p class="text-green">
                  <span>Total APY: </span>
                  <span>{{data.TotalAPY}}</span>
                </p>
              </td>
              <td>
                <p>{{data.TotalSupply}}</p>
              </td>
              <td>
                <p>{{data.TotalBorrowed}}</p>
              </td>
              <td>
                <p>{{data.Utilization}}</p>
              </td>
              <td>
                <p>0.00 ib{{data.name}}</p>
                <p>0.00 {{data.name}}</p>
              </td>
              <td class="operate-btn">
                <router-link to="/deposit" tag="div" class="btn btn-success" style="border-color: #31c77f; background-color: #31c77f">Deposit</router-link>
                <br/>
                <router-link to="/withdraw" tag="div" class="btn btn-success" style="margin-top: 10px; border-color: #31c77f; background-color: #31c77f">Withdraw</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </article>
    <!-- spacer -->
    <div class="spacer-50"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [
        {
          name: 'Alpaca',
          icon: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/alpaca.svg',
          ratio: '1.0026',
          LendingAPR: '1.05%',
          StakingAPR: '18.02%',
          ProtocolAPR: '2.23%',
          TotalAPR: '21.3%',
          TotalAPY: '23.74%',
          TotalSupply: '67.75M ALPACA',
          TotalBorrowed: '11.57M ALPACA',
          Utilization: '17.07%'
        },
        {
          name: 'BNB',
          icon: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/bnb.svg',
          ratio: '1.0361',
          LendingAPR: '11.38%',
          StakingAPR: '3.4%',
          TotalAPR: '14.78%',
          TotalAPY: '15.93%',
          TotalSupply: '741.42k BNB',
          TotalBorrowed: '468.91k BNB',
          Utilization: '63.24%'
        },
        {
          name: 'BUSD',
          icon: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/busd.svg',
          ratio: '1.0435',
          LendingAPR: '5.93%',
          StakingAPR: '2.27%',
          TotalAPR: '8.2%',
          TotalAPY: '8.84%',
          TotalSupply: '250.27M BUSD',
          TotalBorrowed: '101.54M BUSD',
          Utilization: '40.57%'
        },
        {
          name: 'USDT',
          icon: 'https://alpaca-app-asset.s3-ap-southeast-1.amazonaws.com/icons/coins/usdt.svg',
          ratio: '1.0075',
          LendingAPR: '4.24%',
          StakingAPR: '4.85%',
          TotalAPR: '9.09%',
          TotalAPY: '9.52%',
          TotalSupply: '158.35M USDT',
          TotalBorrowed: '53.37M USDT',
          Utilization: '34.33%'
        }
      ]
    }
  },
}
</script>

<style>
  .lend {
    padding: 5px 50px 0 0;
    margin-top: -250px;
    margin-left: 300px;
  }
  /* header */
  .lend-header {
    height: 110px;
  }
  .lend-header>h2 {
    display: inline-block;
    padding-top: 50px;
    font-size: 24px;
    font-weight: 700;
  }
  .total-value-locked{
    margin-top: -250px;
    width: 300px;
  }
  .lend .total-value-locked {
    float: right;
    padding: 15px 10px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 3px 5px 5px #ccc;
  }
  .total-value-locked>h3 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }
  .total-value-locked svg {
    width: 15px;
    height: 15px;
  }
  .total-value-locked>p {
    margin: 0;
    font-size: 30px;
    text-align: center;
    color: #31C77F;
  }
  @media screen and (max-width: 992px) {
    .lend {
      padding: 5px 10px 0 10px;
    }
    .total-value-locked {
      width: 100%;
    }
  }
  /* body */
  .lend-body {
    padding: 15px;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 5px 5px #ccc;
  }
  .lend-body>h2 {
    margin: 0;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
  .spacer-50 {
    height: 50px;
  }
  /* lend table */
  .lend-body .table {
    margin-top: 20px;
  }
  .lend-body .table td {
    vertical-align: middle;
    padding-top: 15px;
  }
  .lend-body .table td:nth-of-type(3) {
    font-size: 18px;
    color: #0f1228;
  }
  .lend-body .table td:nth-of-type(4) {
    font-size: 18px;
    color: #0f1228;
  }
  .lend-body .table td:nth-of-type(5) {
    font-size: 18px;
    color: #0f1228;
  }
  .lend-body .list-group {
    margin-top: 20px;
  }
  .data-title p {
    color: #828282;
    background-color: #f4f4f4;
    font-size: 13px;
  }
  .data-title h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .operate-btn .btn {
    width: 100px;
    border-radius: 15px;
  }
  .data-title {
    width: 200px;
  }
  .APR {
    width: 210px;
    padding-right: 35px !important;
    font-size: 14px;
  }
  .APR p {
    display: flex;
    margin: 0;
  }
  .APR .text-green {
    color: #31C77F;
  }
  /* lend list */
  .lend-body .list-group-item {
    display: flex;
    justify-content: space-between;
  }
  .list-group-item .li-left {
    flex: 1;
  }
  .li-left p:nth-of-type(1) {
    max-width: 200px;
    max-height: 40px;
    text-align: center;
    color: #828282;
    background-color: #f4f4f4;
  }
  .list-group-item .li-right {
    flex: 1;
    text-align: right;
  }
  .li-right p:nth-of-type(1) {
    margin: 0;
  }
  @media screen and (max-width: 500px) {
    .li-left p:nth-of-type(1) {
      height: 40px;
    }
    .li-right p:nth-of-type(1) {
      margin: 11px 0;
    }
  }
  .li-right p.balance span {
    display: block;
  }
  .li-left p.balance,
  .li-right p.balance {
    height: 40px;
  }
  .li-left p.balance {
    line-height: 40px;
  }
  .list-group-item .text-green {
    color: #31C77F;
  }
  .list-group-item .btn {
    width: 98%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 15px;
  }
  .btn-success {
    color: #000;
    background-color: #5cad88;
    border-color: #198754;
  }
</style>
