<template>
  <div class="noLoggedOut" v-if="this.$store.state.noLoged">
      <div class="noLoggedText">
        <span>尚未登录</span>
        <p>您需要登陆之后才可以进行预约</p>
        <span class="closeNoLogged" @click="closeNoLogged">确定</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {


      methods:{
        closeNoLogged(){
          this.$store.dispatch("closeNoLogged")
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.noLoggedOut
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(76,76,76,.5)
  .noLoggedText
    background white
    width 60%
    position absolute
    left 0
    right 0
    margin 50% auto
    span
      font-size 0.36rem
      color: #fc6533
      display block
      width 100%
      text-align center
    p
      font-size 0.18rem
      color: #ababab
      width 50%
      text-align center
      line-height 0.4rem
      margin 0 25%
    .closeNoLogged
      display inline-block
      width 40%
      height 0.39rem
      background #fc6533
      font-size 0.18rem
      color: #FFFFFF
      line-height 0.39rem
      text-align center
      border-radius 25px
      margin 0.4rem 30%

</style>
