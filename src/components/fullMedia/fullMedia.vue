<template>
  <div class="fullOut" ref="fullOut">
    <div>
      <byHeader></byHeader>
      <div class="fullMain" v-for="(item,index) in fullMedia">
        <img :src="item.src" alt="">
        <span>{{item.time}}</span>
        <p>{{item.text}}</p>
        <router-link to="/fullMedia/fullXiang">MORE</router-link>
      </div>
    </div>
    <span class="filter"><i></i>&nbsp;&nbsp;FILTER</span>
  </div>

</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
  import BScroll from 'better-scroll'
    export default {
    data(){
      return{
        fullMedia:[
          {
            src:"../../static/images/fullList1.png",
            time:"12.24.2018",
            text:"SpaceCycle中国首家场馆闪耀亮相北京太古里最In最Fun最High的潮流运动体验正式开启"
          },
          {
            src:"../../static/images/fullList2.png",
         time:"12.24.2018",
        text:"SpaceCycle中国首家场馆闪耀亮相北京太古里最In最Fun最High的潮流运动体验正式开启"
          },
          {
            src:"../../static/images/fullList1.png",
            time:"12.24.2018",
            text:"SpaceCycle中国首家场馆闪耀亮相北京太古里最In最Fun最High的潮流运动体验正式开启"
          },
          {
            src:"../../static/images/fullList2.png",
            time:"12.24.2018",
            text:"SpaceCycle中国首家场馆闪耀亮相北京太古里最In最Fun最High的潮流运动体验正式开启"
          }
        ]
      }
    },
    components:{
      byHeader
    },
      mounted(){
        this.$refs.fullOut.style.height=document.documentElement.clientWidth/100*2+"rem";
        let scroll = new BScroll('.fullOut',{
          click:true
        });
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .fullMain
    width 100%
    line-height 0.3rem
    position relative
    img
      width 100%
    span
      font-family Montserrat-Reglar
      font-size 0.18rem
      color #8d8d8d
      line-height 0.2rem
      margin-left 5%
    p
      font-family NotoSansCJKsc-Regular
      font-size 0.21rem
      width 70%
      margin 5%
    a
      display inline-block
      width 1.2rem
      height 0.42rem
      background #fd774c
      border-radius 25px
      font-family NotoSansCJKsc-Blod
      font-weight bold
      font-size 0.16rem
      color white
      text-align center
      line-height 0.42rem
      position absolute
      bottom 2%
      right 5%
  .filter
    position fixed
    bottom 5%
    left 35%
    font-family Montserrat-Bold
    font-size 0.18rem
    font-weight bold
    display inline-block
    width 1.75rem
    height 0.75rem
    background white
    text-align center
    line-height 0.75rem
    border-radius 25px
    i
      display inline-block
      width 0.3rem
      height 0.24rem
      bg-image("SAIICON")
      background-size 100% 100%
      vertical-align middle


</style>
