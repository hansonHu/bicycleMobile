<template>
  <div class="wrapperVenList" ref="wrapperVenList">
    <div class="content">
      <byHeader></byHeader>
      <div class="venueMain">
        <div v-for="(item,index) in bgImg" class="venueList" :key="index">
          <img :src=item.src>
          <router-link to="/venueList/changXiang">
            <div class="venueLi">
              <span></span>
              <span>{{item.text}}</span>
            </div>
          </router-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
  import BScroll from 'better-scroll'

    export default {
      data(){
        return{
          bgImg:[
            {src:"../../static/images/img08.png",
              text:"BEIJING TAI KU LI"
            },
            {src:"../../static/images/img09.png",
              text:"BEIJING CHINA WORLD"
            },
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            },
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }
            ,
            {src:"../../static/images/img10.png",
              text:"BEIJING TAI KU LI"
            }


          ]


        }
      },
      components:{
        byHeader
      },
      mounted(){
        this.$refs.wrapperVenList.style.height=document.documentElement.clientWidth/100*2+"rem";
        let scroll = new BScroll('.wrapperVenList',{click:true});


      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"

  .venueMain
    width 100%
    .venueList
      width 100%
      height auto
      position relative
      img
        width 100%
        height 100%
        display block
      .venueLi
        font-size 0.2rem
        color: white
        font-family Montserrat-Bold
        position absolute
        width 50%
        top 30%
        left 0
        bottom 30%
        right 0
        margin auto
        text-align center
        span:nth-of-type(1)
          display block
          width 0.35rem
          height 0.45rem
          bg-image('./changguandingwei')
          background-size 100% 100%
          margin auto


</style>
