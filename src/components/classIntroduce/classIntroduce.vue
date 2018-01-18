<template>
  <div>
    <byHeader></byHeader>
    <img src="./CYCLE.png" class="introduceBig">
    <div class="classIntrodce">
      <img src="./class2.png">
      <span>CYCLE</span>&nbsp;<span>LIGHT</span>
      <p>
        适合初学者、或希望专注于基础训练的学员。在这45分钟
        的派对里，SPACE单车导师将会引领你完成一场活力酣畅
        的单车体验，强化力量提高耐力。骑行兼顾运动强度与安
        全保证，享受音乐节拍的同时更注重基础动作与技巧。坐
        定、卡稳，开启一场SPACE骑行派对。
      </p>
      <a href="javascript:;">查看课程</a>
    </div>
    <div class="classIntrodce">
      <img src="./class1.png">
      <span>SPACE</span>&nbsp;<span>CYCLE</span>
      <p>
        SPACE Cycle以节奏为灵魂，配合剧场级的声光效果，达
        到130rpms去获得突破，沉醉于骑行之中。融合高耗能
        舞蹈动作与高强度间歇，获得这场极致音乐骑行派对带
        给你前所未有的夜店级狂欢体验。
      </p>
      <a href="javascript:;">查看课程</a>
    </div>
    <div class="classBottom clearfix">
      <div class="classBottom1">
        <img src="./classLeft.png">
        <span class="bottomText">CLASS PACKAGE</span>
        <span class="zhezhao"></span>
      </div>
      <div class="classBottom1">
        <img src="./classRight.png">
        <span class="bottomText">FIRST TRY</span>
        <span class="zhezhao"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
    export default {

    components:{
      byHeader
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.introduceBig
  width 100%
  margin-top 0.3rem
.classIntrodce
  width 86%
  margin 0.5rem auto
  img
    width 100%
  span:nth-of-type(1)
    font-family "Montserrat-Regular";
    font-size 0.48rem
    color #fc6533
  span:nth-of-type(2)
    font-family "Montserrat-Light";
    font-size 0.48rem
    color #fb9879
  p
    font-size 0.24rem
    line-height 0.3rem
    margin-top 0.2rem
    font-family "NotoSansCJKsc-Regulars"
  a
    display inline-block
    width 2rem
    height 0.5rem
    background #fd774c
    margin-top 0.3rem
    border-radius 25px
    font-size 0.24rem
    color white
    text-align center
    line-height 0.5rem
    font-family "NotoSansCJKsc-bold"
.classBottom
  width 100%
  .classBottom1
    float left
    width 50%
    position relative
    img
      width 100%
    .bottomText
      display block
      width 60%
      font-size 0.36rem
      line-height 0.45rem
      text-align center
      color: #FFFFEF
      position absolute
      top 30%
      left 0
      right 0
      margin 0 auto
      z-index 1
      font-family "Montserrat-Light"
    .zhezhao
      display inline-block
      width 100%
      height 100%
      background rgba(0,0,0,.2)
      position absolute
      top 0
      left 0
  .classBottom1:nth-of-type(2)
    .zhezhao
      top 0
    span
      top 35%


</style>
