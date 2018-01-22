<template>
  <div class="recruitOut">
    <byHeader></byHeader>
    <div class="searchJs">
      <span class="seachTitle">JOIN US</span>
      <span class="seachText">
        Spacecycle provide a better working
        environment for you.
      </span>
      <div class="inputOut">
        <input type="text" placeholder="Job title">
        <span class="seachJob"></span>
      </div>
      <div class="inputOut">
        <input type="text" placeholder="Shanghai">
        <span class="dingZhao"></span>
      </div>
      <el-button>search</el-button>
    </div>
    <div class="recruitMain" v-for="(item,index) in massage" :key=index>
        <div class="titleTop clearfix">
          <span>{{item.jobWork}}</span>
          <span>{{item.peopleNum}} <i>PEOPLE</i></span>
        </div>
        <div class="jobCity">
          <span></span>
          <span>{{item.position}}</span>
        </div>
        <div class="Responsibility">
          <span>Responsibility</span>
          <p>{{item.Responsibility}}</p>
        </div>
        <div class="Requirement">
        <span>Requirement</span>
        <p v-for="(item1,index) in item.Requirement" :key=index>{{item1}}</p>
      </div>
        <div class="btnA clearfix">
          <a href="javascript:;">SEND</a>
        </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"

    export default {
    data(){
      return{
        massage:[
          {
            jobWork:"SALES SPECIALIST",
            peopleNum:5,
            position:"SHANGHAI | BEIJING",
            Responsibility:"responsible for data product demand collection and collation, project scheduling coordination, product research and development follow-up, product promotion and other full cycle work.",
            Requirement:["1. Proficient in Node.js/JavaScript;" ,
                          "2, proficient JavaScript code ability and PHP code ability",
                          "3. With more than 2 years of experience in server application related development, understand basic network protocols and applications such as Socket."
              ]
          },
          {
            jobWork:"SALES SPECIALIST",
            peopleNum:5,
            position:"SHANGHAI | BEIJING",
            Responsibility:"responsible for data product demand collection and collation, project scheduling coordination, product research and development follow-up, product promotion and other full cycle work.",
            Requirement:["1. Proficient in Node.js/JavaScript;" ,
              "2, proficient JavaScript code ability and PHP code ability",
              "3. With more than 2 years of experience in server application related development, understand basic network protocols and applications such as Socket."
            ]
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
.recruitOut
  background #f9f9f9
  .searchJs
    width 100%
    height 4.3rem
    bg-image("./bg")
    background-size 100% 100%
    margin-bottom 0.2rem
    .seachTitle
      display block
      width 100%
      font-family Montserrat-Light
      font-size 0.38rem
      color #ffffff
      text-align center
      line-height 0.38rem
      padding 0.56rem 0 0.1rem 0
    .seachText
      font-family Montserrat-Light
      font-size 0.18rem
      color #ffffff
      display block
      padding 0 20%
      line-height 0.3rem
      text-align center
    .inputOut
      position relative
      input
       display block
       border 0
       width 55%
       height 0.4rem
       margin 0.2rem auto
       padding-left 0.5rem
       background white
       font-family Montserrat-Bold
       font-size 0.16rem
       color #f43f09
      input::-moz-placeholder
        font-family Montserrat-Bold
        font-size 0.16rem
        color #f43f09
        font-weight bold
      input::-moz-placeholder
              font-family Montserrat-Bold
              font-size 0.16rem
              color #f43f09
              font-weight bold
      input:-ms-input-placeholder
              font-family Montserrat-Bold
              font-size 0.16rem
              color #f43f09
              font-weight bold
      input::-webkit-input-placeholder
              font-family Montserrat-Bold
              font-size 0.16rem
              color #f43f09
              font-weight bold
      .seachJob
        display block
        width 0.17rem
        height 0.19rem
        bg-image("./jobSeach")
        background-size 100% 100%
        position absolute
        top 25%
        left 22%
      .dingZhao
        display block
        width 0.15rem
        height 0.20rem
        bg-image("./zhaoDinf")
        background-size 100% 100%
        position absolute
        top 25%
        left 22%
    button
      display block
      border 0
      width 63%
      height 0.4rem
      margin 0.2rem auto
      padding-left 0.5rem
      background rgba(255,255,255,0)
      border 2px solid white
      text-align center
      font-size 0.16rem
      font-family Montserrat-Bold
      font-weight bold
      color #ffffff
      line-height 0rem
  .recruitMain
    width 100%
    line-height 0.3rem
    margin 0 0 0.5rem 0
    .titleTop
      width 90%
      margin 0 auto
      box-sizing border-box
      -moz-box-sizing border-box
      -webkit-box-sizing border-box
      padding 0 5%
      background white
      padding-top 0.5rem
      span:nth-of-type(1)
        font-family Montserrat-Bold
        font-weight bold
        font-size 0.32rem
        color #fd774c
        float left
      span:nth-of-type(2)
        font-family Montserrat-Bold
        font-size 0.34rem
        color black
        font-weight bold
        float right
        i
          font-size 0.16rem
          font-family Montserrat-Bold
          font-weight bold
          text-decoration none
          font-style normal
    .jobCity
      width 90%
      margin 0 auto
      box-sizing border-box
      box-sizing border-box
      -moz-box-sizing border-box
      -webkit-box-sizing border-box
      padding 0 5% 0.2rem 4.5%
      background #ffffff
      span:nth-of-type(1)
        display inline-block
        width 0.16rem
        height 0.22rem
        bg-image("zhaoDinB")
        background-size  100% 100%
      span:nth-of-type(2)
        font-family Montserrat-Bold
        font-size 0.22rem
        font-weight bold
        line-height 0.3rem
    .Responsibility
      width 90%
      margin 0 auto
      box-sizing border-box
      box-sizing border-box
      -moz-box-sizing border-box
      -webkit-box-sizing border-box
      padding 0 5%
      background #ffffff
      span
        display block
        font-family Montserrat-Bold
        font-size 0.2rem
        font-weight bold
        line-height 0.4rem
        margin-bottom 0.2rem
      p
        font-family Montserrat-Light
        font-size 0.2rem
        line-height 0.25rem
        padding-bottom 0.2rem
    .Requirement
      width 90%
      margin 0 auto
      box-sizing border-box;
      box-sizing border-box
      -moz-box-sizing border-box
      -webkit-box-sizing border-box
      padding 0 5%
      background #ffffff
      span
        font-family Montserrat-Bold
        font-size 0.2rem
        font-weight bold
        line-height 0.4rem
        margin-bottom 0.2rem
        display block
      p
        font-family Montserrat-Light
        font-size 0.2rem
        line-height 0.25rem
    .btnA
      width 90%
      margin 0 auto
      box-sizing border-box;
      box-sizing border-box
      -moz-box-sizing border-box
      -webkit-box-sizing border-box
      padding 0 5%
      background #ffffff
      a
        display block
        width 1.5rem
        height 0.45rem
        background #fb3f00
        font-family NotoSansCJKsc-Blod
        font-weight bold
        text-align center
        line-height 0.45rem
        font-size 0.2rem
        border-radius 20px
        float right
        margin 0.3rem 0.2rem 0.5rem

</style>
