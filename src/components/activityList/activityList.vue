<template>
    <div class="activeListOut" ref="activeListOut">
      <div>
        <byHeader></byHeader>
        <div>
          <div v-for="(item,index) in huoImg" class="huoDong">
            <img :src=item.src>
            <span class="roomHuo">{{item.text}}</span>
            <div class="huoActive clearfix">
              <span class="iconImg"></span>
              <span>{{item.address}}</span>
              <router-link to="/activityList/activityClass">加入我们</router-link>
            </div>
          </div>
        </div>

      </div>
      <div class="filter">
        <span></span>&nbsp;
        <span>FILTER</span>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
  import BScroll from 'better-scroll'
    export default {
    data(){
     return{
       huoImg:[
         {
           src:"../../static/images/img11.png",
           text:"ROCK FORM EAST TO WEST",
           address:"SHANGHAI TAIKOO HUI"
         },
         {
           src:"../../static/images/img12.png",
           text:"ROCK FORM EAST TO WEST",
           address:"SHANGHAI TAIKOO HUI"
         },
         {
           src:"../../static/images/img11.png",
           text:"ROCK FORM EAST TO WEST",
           address:"SHANGHAI TAIKOO HUI"
         },
         {
           src:"../../static/images/img11.png",
           text:"ROCK FORM EAST TO WEST",
           address:"SHANGHAI TAIKOO HUI"
         }
         ,  {
           src:"../../static/images/img11.png",
           text:"ROCK FORM EAST TO WEST",
           address:"SHANGHAI TAIKOO HUI"
         }
         ,  {
           src:"../../static/images/img11.png",
           text:"ROCK FORM EAST TO WEST",
           address:"SHANGHAI TAIKOO HUI"
         }
       ]
     }
    },
    components:{
      byHeader
    },
      mounted(){
        this.$refs.activeListOut.style.height=document.documentElement.clientWidth/100*2+"rem";
        let scroll = new BScroll('.activeListOut',{
          click:true
        });


      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"


  .huoDong
    width 100%
    img
      width 100%
    .roomHuo
      display block
      font-size 0.2rem
      font-family Montserrat-Bold
      font-weight bold
      line-height 0.2rem
      margin-left 0.2rem
      margin-top 0.34rem
    .huoActive
      margin 0.24rem 0 0.5rem 0.2rem
      position relative
      .iconImg
        display block
        width 0.14rem
        height 0.16rem
        bg-image("./dingweiHuo")
        background-size 100% 100%
        float left
        margin-right 0.1rem
        vertical-align middle
      span
        display block
        font-family Montserrat-Bold
        font-weight bold
        font-size 0.13rem
        color #88808e
        line-height 0.2rem
        float left
      a
        display block
        width 1.2rem
        height 0.4rem
        background #fb3f00
        font-size 0.16rem
        font-family NotoSansCJKsc-Bold
        text-align center
        line-height 0.4rem
        color #ffffff
        border-radius 20px
        position absolute
        top -0.2rem
        right 0.5rem
  .filter
    width 1.75rem
    height 0.7rem
    background white
    border-radius 25px
    position fixed
    bottom 0.6rem
    left 35%
    line-height 0.7rem
    display: flex;
    justify-content: center;
    align-items: center;
    span:nth-of-type(2)
      font-size 0.18rem
      font-family Montserrat-Bold
      color black
      font-weight bold
    span:nth-of-type(1)
      display inline-block
      width 0.35rem
      height 0.25rem
      bg-image("./SAIICON")
      background-size 100% 100%



</style>
