<template>
  <div>
    <byHeader></byHeader>
    <noLogged></noLogged>
      <img src="./downLoadApp.png" class="downEr" alt="二维码">
      <p  class="downText">购买课程需要通过APP，在APP STORE和各大商城均可免费下载并且使用</p>
      <a href="javascript:;">
        <img src="./ios.png" class="iosDown" alt="ios下载">
      </a>
      <a href="javascript:;">
        <img src="./Google.png" class="anzhuoDown" alt="安卓下载">
      </a>

      <img src="./phoneDown.png" class="phoneDown" alt="phone图片">
  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader";
  import noLogged from "../noLogged/noLoggoed"
    export default {


      components:{
        byHeader,
        noLogged
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.downEr
  width 2.44rem
  margin 0.4rem 2rem
.downText
  font-size 0.2rem
  font-family 'stheitisc-light'
  width 70%
  line-height 0.4rem
  text-align center
  margin 0 15%
 .iosDown
  width 35%
  margin 0.2rem 32.5% 0 32.5%
.anzhuoDown
  width 35%
  margin 0.2rem 32.5% 0 32.5%
 .phoneDown
  width 80%
  margin 0.5rem 0 0 20%

</style>
