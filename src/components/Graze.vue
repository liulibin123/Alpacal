<template>
  <div class="graze">
    <!-- mobile-header -->
  
    <div class="content">
      <!-- pc-header -->
      <header class="graze-header">
        <h2>Grazing Range</h2>
        <span>The Grazing Range is where the herd can come to graze on rare crops.</span>
        <span>Stake your ibALPACA to earn rewards of your choice.</span>
        <span>No risks. High APYs. Happy Alpacas.</span>
        <!-- graze-type -->
        <div class="graze-type">
          <button @click="changeGrazeType" :class="{button: isShow, button1: !isShow}">Live</button>
          <button @click="changeGrazeType" :class="{button: !isShow, button1: isShow}">Completed</button>
          <!-- switch -->
          <div>
            Staked only
          </div>
        </div>
        <img src="../assets/images/grazing-range.svg" alt="grazing-range" class="graze-img">
      </header>
      <!-- body -->
      <article class="graze-body">
        <!-- pc -->
        <!-- mobile -->
      </article>
    </div>
    <!-- spacer -->
    <div class="spacer-50"></div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      isShow: true
    }
  },
  methods: {
    changeGrazeType(){
      this.isShow = !this.isShow
    }
  }
}
</script>
<style>
.graze {
  padding-right: 50px;
}
.graze .content {
  padding: 50px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 3px 5px 5px #ccc;
  margin-left: 300px;
  margin-top: -200px;
  width: 84%;
}
.graze .content h2 {
  position: relative;
  z-index: 66;
  font-size: 24px;
  font-weight: 700;
}
/* graze-header */
.graze-header {
  position: relative;
  text-shadow: 1px 1px #aaa;
}
.graze-header span {
  position: relative;
  z-index: 66;
  display: block;
  font-size: 16px;
  text-shadow: 0.3px 0.3px #aaa;
  color: #666
}
.graze .button {
    height: 40px;
    padding: 0 10px;
    border-radius: 20px;
    border: hidden;
    background-color: rgb(11, 196, 11);
    color: #fff;
    font-weight: 700;
}
.button1 {
    height: 40px;
    padding: 0 20px;
    background-color: #fff;
    border: hidden;
    color: #777;
    text-shadow: 0.3px 0.3px #aaa;
}
.graze-img {
  position: absolute;
  z-index: 0;
  top: -10px;
  right: 30px;
  width: 448px;
  height: 360px;
}
@media screen and (max-width: 992px) {
  .graze {
    padding: 0 10px;
  }
  .content {
    position: relative;
    z-index: 10;
  }
}
.graze-m-header {
  position: relative;
  padding-bottom: 10px;
}
.graze-m-header h3 {
  font-size: 16px;
  font-weight: 700;
}
.graze-m-header span {
  display: block;
  font-size: 12px;
}
.graze-m-img {
  width: 208px;
  height: 167px;
  position: absolute;
  top: 0;
  right: 0;
}
/* header中的几个筛选按钮 */
.graze-type {
  position: relative;
  z-index: 66;
  margin-top: 60px;
}
.graze-type>div {
  display: inline-block;
  padding: 10px 20px;
  font-weight: 700;
  color: #9ca3af;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
}
.graze-type>div.active {
  color: #fff;
  background-color: #31c77f;
}
/* header中的switch */
.switch-box {
  margin-left: 30px;
}
.switch-box span {
  display: inline-block;
  vertical-align: 7px;
}
.vue-switcher {
  margin-right: 10px;
}
</style>
