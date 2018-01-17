<template>
  <div id="header">
    <el-row type="flex" class="row-bg">
      <el-col :span="2"></el-col>
      <el-col :span="3" id="logo">
          <img src="./logo_phone.png" >
      </el-col>

      <el-col :span="12">&nbsp;</el-col>
      <el-col :span="2" id="userHeader">
        <img src="./userHead.png" alt="">
        <span>{{this.$store.state.massages}}</span>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="2" id="headerBtn">
        <img src="./button_phone.png">

      </el-col>
      <el-col :span="2"></el-col>
    </el-row>


  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header
    width 100%
    /*margin-top 0.44rem*/
    #logo
      img
        width 100%
        vertical-align middle
    #headerBtn
      img
        width 100%
        vertical-align middle
    #userHeader
      position relative
      img
        width 120%
        vertical-align middle
      span
        display: inline-block
        width 0.25rem
        height 0.25rem
        background red
        border-radius 50%
        font-size 0.15rem
        line-height 0.25rem
        text-align center
        color white
        background #fd774c
        position absolute
        top 0.2rem
        right -0.1rem




</style>
