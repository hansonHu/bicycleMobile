<template>
    <div>
      <byHeader></byHeader>
      <div>
        <div v-for="(item,index) in huoImg" class="huoDong">
          <img :src=item.src>
          <span class="roomHuo">{{item.text}}</span>
          <div class="huoActive">
            <span class="iconImg"></span>
            <span>{{item.address}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
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
         }
       ]
     }
    },
    components:{
      byHeader
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
      font-size 0.2rem
      font-family Montserrat-Bold
      font-weight bold
    .huoActive
      .iconImg
        display inline-block
        width 0.14rem
        height 0.16rem
        bg-image("./dingweiHuo")
        background-size 100% 100%
      span
        font-family Montserrat-Bold
        font-weight bold
        font-size 0.13rem
        color #88808e


</style>
