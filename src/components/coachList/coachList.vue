<template>
  <div>
    <byHeader></byHeader>
    <div class="clearfix">
      <div v-for="(item,index) in data2" :key="index" class="coachList">
        <img :src="item.src">
        <span class="coactName">{{item.name}}</span>
        <span class="coactType">{{item.type}}</span>
        <router-link to="/coachList/coachXiang">MORE</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
    export default {
      data(){
        return{
          data2:[
            {
              name:"李秋杰",
              type:"Yoga/Barre",
              src:"../../static/images/img19.png"
            },
            {
              name: "Momo",
              type: "Cycle",
              src: "../../static/images/img18.png"
            },
            {
              name: "Ayisha",
              type: "Cycle",
              src: "../../static/images/img17.png"
            },
            {
              name: "Ayisha",
              type: "Cycle",
              src: "../../static/images/img16.png"
            },
            {
              name: "Kidd",
              type: "Cycle",
              src: "../../static/images/img15.png"
            },
            {
              name: "王邵波",
              type: "Cycle",
              src: "../../static/images/img14.png"
            },
            {
              name:"李秋杰",
              type:"Yoga/Barre",
              src:"../../static/images/img19.png"
            },
            {
              name: "Momo",
              type: "Cycle",
              src: "../../static/images/img18.png"
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

  .coachList
    width 50%
    float left
    position relative
    line-height 0.32rem
    img
      width 100%
    .coactName
      font-family NotoSansCJKsc-Blod
      font-size 0.3rem
      color white
      position absolute
      top 10%
      left 0.32rem
    .coactType
      font-family Montserrat-Light
      font-size 0.22rem
      color #9e9da0
      position absolute
      top 23%
      left 0.32rem
    a
      display inline-block
      width 0.83rem
      height 0.45rem
      background #ea5205
      color white
      font-family Montserrat-Reglar
      font-size 0.16rem
      text-align center
      line-height 0.45rem
      border-radius 20px
      position absolute
      bottom 0.32rem
      right 0.32rem


</style>
