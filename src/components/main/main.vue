<template>
  <div id="main">
    <router-link to="/downApp">下载页</router-link>
    <br>
    <router-link to="/classIntroduce">课程详情</router-link>
    <br>
    <router-link to="/login">login</router-link>
    <br>
    <router-link to="/recruit">社会招聘</router-link>
    <br>
    <router-link to="/venueList">场馆列表</router-link>
    <br>
    <router-link to="/activityList">活动列表</router-link>
    <br>
    <router-link to="/coachList">教练列表</router-link>
    <br>
    <router-link to="/fullMedia">全媒体列表</router-link>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data(){
      return{

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #main
    font-size 0.32rem
    a
      font-size 0.4rem
      color: #000

</style>
