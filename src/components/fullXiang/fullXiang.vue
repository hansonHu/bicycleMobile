<template>
  <div class="fullXiangOut" ref="fullXiangOut">
    <div>
      <byHeader></byHeader>
      <div class="xiangMain" v-for="(item,index) in fullXiang">
        <img :src="item.src">
        <span>{{item.time}}</span>
        <h2>{{item.title}}</h2>
        <p>{{item.text}}</p>
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
        fullXiang:[
          {
            src:"../../static/images/fullList1.png",
            time:"12.24.2018",
            title:"SpaceCycle中国首家场馆闪耀亮相北京太古里 \n" +
            "最In最Fun最High的潮流运动体验正式开启",
            text:"2016年9月6日，集合运动、音乐、科技的新型运动体验中心SpaceCycle于北京潮流聚集地——三里屯太古里北区隆重揭幕。此次北京太古里馆的开业标志着SpaceCycle已正式进军中国市场。SpaceCycle将运动、音乐、科技结合的新型娱乐方式受到很多人的青睐，世界著名瑜伽大师、运动科学家Mr. Paul Dallaghan，台湾著名音乐人姚谦先生，台湾著名艺人艾利克斯先生、李永娴小姐，以及中国数码文化集团都是品牌幕后的投资者。开幕当天，除了上述各位投资人，知名演员郑恺先生、著名歌手吉克隽逸小姐以及中国数码文化集团总裁许东棋先生、QQ音乐品牌&公关总监林娜小姐等共同前来为SpaceCycle太古里馆开业助阵并送上祝福。"
          },
          {
            src:"../../static/images/fullList1.png",
            time:"12.24.2018",
            title:"SpaceCycle中国首家场馆闪耀亮相北京太古里 \n" +
            "最In最Fun最High的潮流运动体验正式开启",
            text:"2016年9月6日，集合运动、音乐、科技的新型运动体验中心SpaceCycle于北京潮流聚集地——三里屯太古里北区隆重揭幕。此次北京太古里馆的开业标志着SpaceCycle已正式进军中国市场。SpaceCycle将运动、音乐、科技结合的新型娱乐方式受到很多人的青睐，世界著名瑜伽大师、运动科学家Mr. Paul Dallaghan，台湾著名音乐人姚谦先生，台湾著名艺人艾利克斯先生、李永娴小姐，以及中国数码文化集团都是品牌幕后的投资者。开幕当天，除了上述各位投资人，知名演员郑恺先生、著名歌手吉克隽逸小姐以及中国数码文化集团总裁许东棋先生、QQ音乐品牌&公关总监林娜小姐等共同前来为SpaceCycle太古里馆开业助阵并送上祝福。"
          },
          {
            src:"../../static/images/fullList1.png",
            time:"12.24.2018",
            title:"SpaceCycle中国首家场馆闪耀亮相北京太古里 \n" +
            "最In最Fun最High的潮流运动体验正式开启",
            text:"2016年9月6日，集合运动、音乐、科技的新型运动体验中心SpaceCycle于北京潮流聚集地——三里屯太古里北区隆重揭幕。此次北京太古里馆的开业标志着SpaceCycle已正式进军中国市场。SpaceCycle将运动、音乐、科技结合的新型娱乐方式受到很多人的青睐，世界著名瑜伽大师、运动科学家Mr. Paul Dallaghan，台湾著名音乐人姚谦先生，台湾著名艺人艾利克斯先生、李永娴小姐，以及中国数码文化集团都是品牌幕后的投资者。开幕当天，除了上述各位投资人，知名演员郑恺先生、著名歌手吉克隽逸小姐以及中国数码文化集团总裁许东棋先生、QQ音乐品牌&公关总监林娜小姐等共同前来为SpaceCycle太古里馆开业助阵并送上祝福。"
          }
        ]
      }
    },
    components:{
      byHeader
    },
      mounted(){
        this.$refs.fullXiangOut.style.height=document.documentElement.clientWidth/100*2+"rem";
        let scroll = new BScroll('.fullXiangOut',{
          click:true
        });
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">


  .xiangMain
    width 100%
    line-height 0.3rem
    img
      width 100%
    span
      font-family   Montserrat-Reglar
      font-size 0.18rem
      color #8d8d8d
      margin 5%
    h2
      font-family NotoSansCJKsc-Regular
      font-size 0.3rem
      line-height 0.35rem
      color #fd8964
      width 90%
      margin 5%
    p
      font-family NotoSansCJKsc-Regular
      font-size 0.18rem
      line-height 0.3rem
      color #5f5f5f
      width 90%
      margin 5%



</style>
