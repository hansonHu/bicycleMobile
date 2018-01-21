<template>
  <div>
    <byHeader></byHeader>
    <div id="logoIn" ref="logoIn">
      <img src="./login.png">
      <el-button class="toSign" @click="toSign">SIGN UP</el-button>
      <span class="loginSpan">LOG IN</span>
      <el-form ref="form" :model="form" label-width="80px" id="signForm" class="clearfix">
          <el-input v-model="form.username11" placeholder="EMAIL/MOBILE NUMBER"></el-input>
          <el-input v-model="form.userpower" placeholder="PASSWORD" type="password"></el-input>
          <a href="javascript:;" class="forget">Forget your passwprd?</a>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn">LOG IN</el-button>
        </el-form-item>
        <span class="tourist">log in as <a href="javascript:;">TOURIST</a></span>
      </el-form>
    </div>
    <div id="signUp" ref="signUp">
      <img src="./signUp.png" alt="">
      <el-button class="toLogin" @click="toLogin">LOG IN</el-button>
      <div class="signUp" ref="signUp1">
        <span class="signUp33">SIGN UP</span>
        <el-form ref="form3" :model="form3" label-width="80px" id="signUpForm1">
          <el-input v-model="form3.number" placeholder="EMAIL/MOBULE NUMBER"></el-input>
          <el-input v-model="form3.entercode" placeholder="ENTER CODE"></el-input>
          <span class="enterCode">3494</span>
          <el-form-item>
            <el-button type="primary" @click="onSubmitSend" class="btn1">SEND</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="verification" ref="verification">
        <span class="signSpan">ENTER THE CODE</span>
        <el-form ref="form2" :model="form2" label-width="80px" id="signUpForm2">
          <el-input v-model="form2.verificationcode" placeholder="VERIFICATION CODE"></el-input>
          <span class="resend">RESEND</span>
          <el-form-item>
            <el-button type="primary" @click="onSubmit2" class="btn2">DONE</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="createPass" ref="createPass">
        <span class="createPassText">CREATE A PASSWORD</span>
        <el-form ref="form4" :model="form4" label-width="80px" id="signUp4">
            <el-input v-model="form4.password" placeholder="CREATE YOUR PASSWORD"></el-input>
            <el-input v-model="form4.passwordres" placeholder="REPEAT YOUR PASSWORD"></el-input>
            <el-form-item>
              <el-button type="primary" @click="onSubmit4" class="btn4">DONE</el-button>
            </el-form-item>
        </el-form>
      </div>
      <div class="venue" ref="venue">
            <span class="venue1">CHOOSE THE SITE YOU OFTEN USE</span>
            <span class="venue2">This decision does not affect your actual use in other venues</span>
            <div class="wrapper" ref="wrapper">
              <ul class="content">
                <li v-for="(item, index) in city1"  @click="beijing(index)" :class=item.isA>
                  <span></span>
                  <span class="changText">{{item.city2}}</span>
                  &nbsp;&nbsp;
                  <span></span>
                </li>
              </ul>
            </div>
            <el-button>DONE</el-button>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader";
  import axios from "axios"
  import qs from "qs";

    export default {
      mounted:function () {

      },
      data() {
        return {
          form:{
            username11: '',
            userpower:''
          },
          form2:{
            verificationcode:''
          },
          form3:{
            number:"",
            entercode:""
          },
          form4:{
            password:'',
            passwordres:''
          },
          form5:{

          },
          city:[
            "Beijing Taikoo Li",
            "Beijing Gaomao",
            "Beijing Taikoo Li",
            "Beijing Gaomao"
          ],
          city1:[
            {city2:"Beijing Taikoo Li",isA:"huiSe"},
            {city2:"Beijing Gaomao",isA:"huiSe"},
            {city2:"Beijing Taikoo Li",isA:"huiSe"},
            {city2:"Beijing Gaomao",isA:"huiSe"},
            {city2:"Beijing Taikoo Li",isA:"huiSe"},
            {city2:"Beijing Gaomao",isA:"huiSe"},
            {city2:"Beijing Taikoo Li",isA:"huiSe"},
            {city2:"Beijing Gaomao",isA:"huiSe"}

          ],
          classList:[
            "false",
            "false",
            "false",
            "false"
          ]


        }
      },
      methods: {

          onSubmit() {
          // console.log('submit!');
            let obj={
              phone:this.form.username11,
              location_id:this.form.userpower
            };

            console.log(this.form.username11,this.form.userpower)
            axios.post("spacecycle/?c=apiLogin&m=doIssueSMS ",qs.stringify(obj))
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
        },
        onSubmit2(){
          this.$refs.verification.style.display="none";
          this.$refs.createPass.style.display="block";
          console.log(this.$refs.wrapper);

        },
        onSubmitSend(){
          console.log('submit!');
          this.$refs.signUp1.style.display="none";
          this.$refs.verification.style.display="block";
        },
        toSign(){
          this.$refs.logoIn.style.display="none";
          this.$refs.signUp.style.display="block";
          // this.form.userName="";
          // this.form.userPower=""

        },
        toLogin(){
          this.$refs.logoIn.style.display="block";
          this.$refs.signUp.style.display="none";
          // this.form2.name=""
        },
        onSubmit4(){
          this.$refs.createPass.style.display="none";
          this.$refs.venue.style.display="block"
        },
        beijing(index1){
          this.city1.filter(function (item,index) {
           item.isA="huiSe";

          });
          this.city1[index1].isA="heiSe"
        }
      },
    components:{
      byHeader


    }

    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
#logoIn
  position relative
  img
    width 100%
  .toSign
    border-color #FFFFEF
    background rgba(255,255,255,0)
    position absolute
    top 10%
    right 5%
    color: #fff
  .loginSpan
    display: inline-block
    width 100%
    font-size 0.53rem
    color #fff
    position absolute
    top 20%
    left 0
    text-align center
  #signForm
    position absolute
    top 30%
    left 0
    width 60%
    margin 0 20%
    input
      background rgba(255,255,255,0)
      border 0
      border-bottom 1px solid
      font-size 0.2rem
      color #a09794
    .btn
      background #fd774c
      border-radius 25px
      width 80%
      margin 0.6rem -18%
      border 0
    .forget
      font-size 0.16rem
      font-family 'Montserrat-Reglar'
      color rgba(158,148,146,.5)
      line-height 0.2rem
      float right
    .tourist
      display inline-block
      width 100%
      font-family 'Montserrat-Light'
      font-size 0.2rem
      color: #FFFFEF
      text-align center
      line-height 0.3rem
      position absolute
      top 100%
      left -3%
#signUp
  position relative
  display none
  width 100%
  img
    width 100%
  .toLogin
    position absolute
    top 10%
    right 5%
    background rgba(255,255,255,0)
    color: #ffffff
    z-index 9
  .verification
    position absolute
    top 0
    right  0
    left 0
    display none
    .signSpan
      color: #fff
      display inline-block
      width 100%
      text-align center
      font-size 0.43rem
      font-family 'Montserrat-Regular'
      margin-top 2.8rem
    #signUpForm2
      width 60%
      margin 0.7rem 20% 0
      position relative
      .el-input__inner
        background rgba(255,255,255,0)
        border 0
        border-bottom 1px solid
        font-size 0.2rem
        color #a09794
      .resend
        font-family 'Montserrat-Bold'
        color: #fd774c
        font-size 0.2rem
        position absolute
        top 10%
        right 0
      .btn2
        margin-top 0.8rem
        background #fd774c
        border 0
        width 60%
        border-radius 25px
  .signUp
    position absolute
    top 0
    left 0
    right 0
    .signUp33
      display inline-block
      width 100%
      text-align center
      font-family  'Montserrat-Regular'
      font-size 0.53rem
      color: #ffffff
      margin-top 2rem
    #signUpForm1
      width 60%
      margin 0.4rem 20% 0
      input
        background rgba(255,255,255,0)
        border 0
        border-bottom 1px solid
        font-size 0.2rem
        font-family 'Montserrat-Regular'
        color #a09794
      .enterCode
        font-size 0.3rem
        font-family 'NotoSansCJKsc-Blod'
        color #ffffff
        position absolute
        right 20%
        top 65%
      .btn1
        margin-top 0.8rem
        background #fd774c
        border 0
        width 65%
        border-radius 25px
        margin-left -6%
  .createPass
    position absolute
    top 0
    left 0
    right 0
    display none
    .createPassText
      display inline-block
      width 100%
      text-align center
      font-family  'Montserrat-Regular'
      font-size 0.4rem
      color: #ffffff
      margin-top 2rem
    #signUp4
      width 60%
      margin 0.4rem 20% 0
      input
        background rgba(255,255,255,0)
        border 0
        border-bottom 1px solid
        font-size 0.2rem
        font-family 'Montserrat-Regular'
        color #a09794
      .btn4
        margin-top 0.8rem
        background #fd774c
        border 0
        width 65%
        border-radius 25px
        margin-left -9%
  .venue
    position absolute
    top 20%
    left 10%
    display none
    width 80%
    background #ffffff
    .venue1
      font-family 'Montserrat-Regular'
      font-size 0.25rem
      display inline-block
      width 50%
      line-height 0.3rem
      position absolute
      top 5%
      left 25%
      text-align center
    .venue2
      font-family 'Montserrat-Light'
      font-size 0.16rem
      display inline-block
      /*width 70%*/
      text-align center
      line-height 0.25rem
      margin-top 25%
      padding 0 15%
    .wrapper
      height 3rem
      overflow-x hidden
      overflow-y scroll
      .huiSe
          width 100%
          padding 0 20%
          .changText
            font-size 0.2rem
            font-family 'NotoSansCJKsc-Bold'
            vertical-align middle
            color: #dddddd
          span:nth-of-type(1)
            display inline-block
            width 0.2rem
            height 0.3rem
            bg-image('./dingWeiH')
            background-size 100% 100%
            vertical-align middle
          span:nth-of-type(3)
             display inline-block
             width 0.3rem
             height 0.25rem
             vertical-align middle
             bg-image('./duiHaoH')
             background-size 100% 100%
        .heiSe
          width 100%
          padding 0 20%
          .changText
            font-size 0.2rem
            font-family 'NotoSansCJKsc-Bold'
            vertical-align middle
            color: #000
          span:nth-of-type(1)
            display inline-block
            width 0.2rem
            height 0.3rem
            bg-image('./dingWeiB')
            background-size 100% 100%
            vertical-align middle
          span:nth-of-type(3)
            display inline-block
            width 0.3rem
            height 0.25rem
            bg-image('./duiHaoB')
            background-size 100% 100%
            vertical-align middle
     button
          background #fd774c
          border 0
          width 40%
          border-radius 25px
          color #ffffff
          margin 0.4rem 30%


</style>
