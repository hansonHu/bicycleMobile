<template>
  <div>
    <byHeader></byHeader>
    <img :src=activData.bigImg class="actiTop1">
    <div class="activity_top">
      <span>{{activData.actitle}}</span>
      <div class="titleData clearfix">
        <span><i class="acRi"></i>{{activData.acdate}}</span>
        <span><i class="acShi"></i>{{activData.actime}}</span>
        <span><i class="acAdd"></i>{{activData.acaddress}}</span>
      </div>
      <div class="activ_main">
        <span>
          {{activData.jiaban}}
        </span>
        <p>
          {{activData.jieshao}}
        </p>
      </div>
      <div class="ac_select clearfix">
        <span>选择时间</span>
        <select name="" id="acSelect" v-model="value">
          <option v-for="(item,index) in selectData" :value="item" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="ac_nav">
        <span>报名</span>
        <a href="javascript:;"><span>SHARE &nbsp;&nbsp;<i></i></span></a>
      </div>
      <div class="ac_music">
        <iframe src="http://www.dianyintai.com/playlist.html?uid=wpCpG+cfVomCfEKokA&playlist_id=lpv5EeVLVYiCeEui" frameborder="0" width="100%" height="600px" style="float: right;"></iframe>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
    export default {
    data(){
      return{
        activData:{
          bigImg:"../../static/images/img02.png",
          actitle:"SPACE CYCLE DIVA |MADONNA",
          acdate:"2017-01-17",
          actime:"14:45",
          acaddress:"Beijing Taikoo Li",
          jiaban:"MADONNA",
          jieshao:"身价达3.25亿美元，一个充满争方的超级巨星，一个引领时代潮流的歌手，" +
          "一个不断推动界限的艺术家，一个迷人的、睿智的、自私的尤物。她总刺激着听众的思绪，也总引起人们的争论。" +
          "过去十几年里，麦当娜一直是流行音乐圈的中心，她始终保持流行舞曲的宗旨进行创作，但每张专辑却能呈现出多样曲风和效果，" +
          "娇媚的娃娃音，重金属摇滚，蓝调怨曲，复古迪斯科......至今，她仍是歌迷眼中的一个神话，一个难解的谜。"

        },
        selectData:[
        "01.07 16:30 - Moves -SpaceCycle DIVA:Madonna",
        "01.08 16:30 - Moves -SpaceCycle DIVA:Madonna",
        "01.09 16:30 - Moves -SpaceCycle DIVA:Madonna",
        "01.10 16:30 - Moves -SpaceCycle DIVA:Madonna",
          "01.11 16:30 - Moves -SpaceCycle DIVA:Madonna"
        ],
        value:"01.07 16:30 - Moves -SpaceCycle DIVA:Madonna"
      }
    },
    components:{
      byHeader
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .actiTop1
    width 100%
  .activity_top
    width 100%
    span
      display block
      font-family Montserrat-Regular
      font-size 0.30rem
      margin 0 5%
    .titleData
      width 100%
      span
        font-family Montserrat-Regular
        font-size 0.18rem
        float left
        .acRi
          display inline-block
          width 0.17rem
          height 0.15rem
          bg-image("./acRi")
          background-size 100% 100%
          margin-right 0.1rem
        .acShi
          display inline-block
          width 0.14rem
          height 0.14rem
          bg-image("./acShi")
          background-size 100% 100%
          margin-right 0.1rem
        .acAdd
          display inline-block
          width 0.13rem
          height 0.17rem
          bg-image("./acAdd")
          background-size 100% 100%
          margin-right 0.1rem
    .activ_main
      margin-top 0.5rem
      span
        display block
        font-family Montserrat-Bold
        font-size 0.22rem
        line-height 0.22rem
        color #fd774c
        margin-bottom 0.35rem
      p
        font-family NotoSansCJKsc-Regular
        font-size 0.22rem
        line-height 0.3rem
        margin-left 5%
    .ac_select
      width 100%
      height 0.65rem
      margin-top 0.4rem
      span
        font-family NotoSansCJK-Bold
        font-size 0.22rem
        line-height 0.65rem
        float left
        width 30%
        display inline-block
        height 0.65rem
        background #f0f0f0
        margin 0 0 0 5%
        text-align center
        border-radius 20px 0 0 20px
        font-weight bold
      #acSelect
        font-family Montserrat-Regular
        height 0.65rem
        float left
        width 60%
        border 0
        background #f0f0f0
        border-radius  0 20px 20px 0
        font-size 0.2rem
        color #fb3f00
    .ac_nav
      width 100%
      span
        display inline-block
        width 2.4rem
        height 0.7rem
        background #fb3f00
        border-radius 10px
        font-family NotoSansCJK-Bold
        font-weight bold
        text-align center
        line-height 0.7rem
        color #ffffff
        font-size 0.22rem
        i
          display inline-block
          width 0.14rem
          height 0.18rem
          bg-image("./ac_share")
          background-size 100% 100%
    .ac_music
      margin-top 1.4rem



</style>
