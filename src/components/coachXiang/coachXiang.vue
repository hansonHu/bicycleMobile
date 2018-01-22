<template>
  <div>
    <byHeader></byHeader>
    <div>
      <div class="coachTop">
        <img :src=coachXi.src>
        <div class="clearfix">
          <span class="coachClass">{{coachXi.day}} &nbsp;| &nbsp;{{coachXi.time}}&nbsp; | &nbsp;{{coachXi.type}}&nbsp; |&nbsp; {{coachXi.class}}</span>
          <span class="choiceClass">选择课程</span>
        </div>
      </div>
      <div class="coachMain">
          <div class="coachMain1 clearfix">
            <span class="classType">{{coachXi.classType}}</span>
            <span class="share"></span>
            <span class="shu">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span class="clothes"></span>
            <span class="shu">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span class="aiXing"></span>
          </div>
          <div class="coachMain2 clearfix">
            <div class="coachName">
              <span class="chinaName">{{coachXi.name}}</span>
              <span class="enName">{{coachXi.enName}}</span>
            </div>
            <p class="geQian">
              {{coachXi.geQian}}
            </p>
            <a href="javascript:;"></a>
          </div>
          <p class="geRen">
            {{coachXi.geRen}}
          </p>
          <div class="coachNav">
            <span  v-for="(item,index) in taIndex" @click="musicCoach(index)" :class=item.isClass>{{item.name}}</span>
          </div>
          <div class="musicOut clearfix" :class="this.taIndex[0].isShow">
              <span></span>
              <span>Playlist</span>
              <img src="./QQlogo@2x.png" alt="">
          </div>
          <div class="sceneOut clearfix" :class="this.taIndex[2].isShow">
            <div class="borderPx"></div>
            <ul class="clearfix imgList">
              <li v-for="(item,index) in imgages" :key="index">
                <img :src="item.src">
              </li>
            </ul>
          </div>
      </div>
      <div class="zuiOut" :class="this.taIndex[1].isShow">
        <div class="border1px"></div>
        <img :src="this.favourite1.src">
        <div class="zuiAi1">
          <span>SONG</span>
          <span>{{this.favourite1.song}}</span>
        </div>
        <div class="zuiAi1">
          <span>MUSIC</span>
          <span>{{this.favourite1.music}}</span>
        </div>
        <div class="zuiAi1">
          <span>CELEBRITYY</span>
          <span>{{this.favourite1.celebrityy}}</span>
        </div>
        <div class="zuiAi1">
          <span>FOOD</span>
          <span>{{this.favourite1.food}}</span>
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
        coachXi:{
          src:"../../static/images/img01.png",
          day:"06.07",
          time:"18.45",
          type:"Cycle",
          class:"SpaceCycle Spotlight : Katy Perry",
          classType:"Yoga / Barre",
          name:"李秋洁",
          enName:"Jennifer",
          geQian:"生命太短，要经常做你爱做的事情，实现你的梦想，分享你的热情",
          geRen:"作为从小练习舞蹈的专业舞者，我在瑜伽中自然而然地融入了舞蹈和音乐的元素，把舞蹈的韵律节奏通过呼吸加入到教学中，并使瑜伽课堂有着独特的魅力，称之为“与呼吸共舞",
          share:"javascript:;"
        },
        taIndex:[
          {name:"TA的音乐",isClass:"orangeClass",isShow:"show0"},
          {name:"TA的最爱",isClass:"",isShow:""},
          {name:"TA的现场",isClass:"",isShow:""}

        ],
        favourite1:{
          src:"../../static/images/img07.png",
          song:"简爱",
          music:"Pop Music Modern Classical",
          celebrityy:"金星",
          food:"冰淇淋"
        },
        imgages:[
          {src:"../../static/images/img04.png"},
          {src:"../../static/images/img06.png"}
        ]

      }

    },
      methods:{
        musicCoach(index){
          this.taIndex.filter(function (item,index) {
            item.isClass="";
            item.isShow=""
          });
          this.taIndex[index].isClass="orangeClass";
          this.taIndex[index].isShow=`show${index}`
        }

      },
    components:{
      byHeader
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"

  .coachTop
    width 100%
    position relative
    line-height 0.3rem
    img
      width 100%
    div
      width 100%
      position absolute
      left 0
      bottom 0
      span
        display inline-block
      .coachClass
        width 83%
        height 1rem
        line-height 1rem
        background #fd774c
        font-family NotoSansCJKsc-Regular
        font-size 0.18rem
        color white
        float left
        text-align center
      .choiceClass
        width 17%
        font-family NotoSansCJKsc-Regular
        font-size 0.18rem
        height 1rem
        line-height 1rem
        color white
        background #fb4522
        float left
        text-align center
  .coachMain
    width 100%
    box-sizing border-box
    -moz-box-sizing border-box
    -webkit-box-sizing border-box
    padding 0 5%
    .coachMain1
      font-size Montserrat-Regular
      font-size 0.24rem
      line-height 0.35rem
      margin-top 0.35rem
      color #fd774c
      .classType
        float left
      .aiXing
         display inline-block
         width 0.42rem
         height 0.35rem
         bg-image("./aiXing")
         background-size 100% 100%
         float right
         vertical-align middle
      .clothes
          display inline-block
          width 0.45rem
          height 0.35rem
          bg-image("./clothes")
          background-size 100% 100%
          vertical-align middle
          float right
      .share
        display inline-block
        width 0.30rem
        height 0.35rem
        bg-image("./share")
        background-size 100% 100%
        vertical-align middle
        float right
      .shu
        float right
    .coachMain2
      width 100%
      position relative
      margin-bottom 0.5rem
      .coachName
        font-size 0.48rem
        .chinaName
          font-family NotoSansCJKsc-Regular
          font-weight bold
        .enName
          font-family Montserrat-Light
      .geQian
        font-family NotoSansCJKsc-Regular
        font-size 0.24rem
        color #a7a7a7
        line-height 0.3rem
        width 70%
      a
        display inline-block
        width 1.94rem
        height 0.86rem
        bg-image("./classStart")
        background-size 100% 100%
        position absolute
        right 0
        top 50%
    .geRen
      font-family NotoSansCJKsc-Regular
      font-size 0.18rem
      line-height 0.4rem
      color #535353
      padding-bottom 0.2rem
      border-bottom 0.01rem solid #b2b2b2
    .coachNav
      width 100%
      border-bottom 1px soild #b2b2b2
      display -webkit-box
      display -webkit-flex
      display -ms-flexbox
      display flex
      -webkit-box-pack space-around
      -webkit-justify-content space-around
      -ms-flex-pack space-around
      justify-content space-around
      span
        font-family NotoSansCJKsc-Regular
        font-size 0.24rem
        color #959595
      .orangeClass
        color #fd774c
    .musicOut
      display none
      width 100%
      border-top 0.01rem solid #b2b2b2
      line-height 0.35rem
      span:nth-of-type(1)
        display inline-block
        width 0.3rem
        height 0.3rem
        bg-image("./record")
        background-size 100% 100%

      span:nth-of-type(2)
        font-family Montserrat-Reglar
        font-size 0.18rem
        color #6a6a6a
        margin-left -0.2rem
        line-height 0.3rem
      img
        display inline-block
        width 1.27rem
        height 0.35rem
        margin-left 45%
    .show0
      display block!important
  .zuiOut
      display none
      width 100%
      position relative
      .border1px
        width 90%
        margin 0 auto
        height 0.2rem
        border-top 0.01rem solid #b2b2b2
      img
        width 100%
      .zuiAi1
        width 25%
        line-height 0.6rem
        position absolute
        top 10%
        left 8%
        span:nth-of-type(1)
          display block
          width 100%
          font-family Montserrat-Light
          font-size 0.24rem
          color #df6b46
        span:nth-of-type(2)
          display block
          width 100%
          font-family NotoSansCJKsc-Regular
          font-size 0.18rem
          color #bcbcbc
          line-height 0.2rem
      .zuiAi1:nth-of-type(3)
        top 50%
      .zuiAi1:nth-of-type(2)
       left 46%
      .zuiAi1:nth-of-type(4)
        top 50%
        left 46%
  .show1
    display block!important
    width 100%
    overflow hidden
  .sceneOut
    display none
    width 100%
    .borderPx
      width 100%
      height 0.2rem
      border-top 0.01rem solid #b2b2b2
    .imgList
      height 1.53rem
      li
        width 2.5rem
        float left
        margin 0 0.1rem
        img
          width 100%
  .show2
     display block!important


  /*.show*/
      /*display block!important*/
</style>
