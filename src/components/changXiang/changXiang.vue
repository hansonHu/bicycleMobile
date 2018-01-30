<template>
  <div>
    <byHeader></byHeader>
    <el-carousel :interval="5000" arrow="always" class="xiangOut">
      <el-carousel-item v-for="(item,index) in changBig.src" :key="index" class="xiangMain">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="changMain">
      <span class="changTitle">{{changBig.title}}</span>
      <span>ADDRESS</span>
      <p>{{changBig.address}}</p>
      <span>PHONE</span>
      <p>{{changBig.phone}}</p>
      <span>BUSINESS HOURS</span>
      <p v-for="(item,index) in changBig.bus">{{item}}</p>

    </div>
    <div class="mapOut">
      <div id="XSDFXPage" class="XSDFXPage">
      </div>
      <div class="mapText">
        <span class="mapText_title">METRO</span>
        <p>Line 10, Nanjing West Road Station No. 3 exit</p>
        <span>BUS</span>
        <p>Sanlitun station: take No.112 , No.223 , No.442 , No.153 , No.921 Changhong Road Station: take No. 344, No.332</p>
        <p>Changhong Road Station: take No. 344, No.332 , No.49</p>
        <span>ORIVING TOUTE</span>
        <p>Parking lot entrance of Sanlitun North District</p>
      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import byHeader from "../byHeader/byHeader"
    export default {
    data(){
      return{
        changBig:{
          src:[
            {src:"../../static/images/changXiangBig.png"},
            {src:"../../static/images/changXiangBig.png"},
            {src:"../../static/images/changXiangBig.png"},
            {src:"../../static/images/changXiangBig.png"}
          ],
          title:"BEIJING TAI KU LI",
          address:"Four floor N4-40A, hospital No. 11, Sanlitun Road, Chaoyang District, Beijing",
          phone:"010-84516101",
          bus:[
            "Monday, Tuesday, Thursday: 6:00-22:00; Wednesday,",
            " Friday,Wednesday, Friday, Saturday, Sunday: 8:30-22:00"
          ]
        }
      }
    },
    components:{
      byHeader
    },
      mounted(){

        // 百度地图API功能
        var map = new BMap.Map("XSDFXPage");
        map.centerAndZoom(new BMap.Point(116.417854,39.921988), 15);
        var data_info = [[116.417854,39.921988,"地址：北京市东城区王府井大街88号乐天银泰百货八层"],
          [116.406605,39.921585,"地址：北京市东城区东华门大街"],
          [116.412222,39.912345,"地址：北京市东城区正义路甲5号"]
        ];
        var opts = {
          width : 250,     // 信息窗口宽度
          height: 80,     // 信息窗口高度
          title : "信息窗口" , // 信息窗口标题
          enableMessage:true//设置允许信息窗发送短息
        };
        for(var i=0;i<data_info.length;i++){
          var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
          var content = data_info[i][2];
          map.addOverlay(marker);               // 将标注添加到地图中
          addClickHandler(content,marker);
        }
        function addClickHandler(content,marker){
          marker.addEventListener("click",function(e){
            openInfo(content,e)}
          );
        }
        function openInfo(content,e){
          var p = e.target;
          var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
          var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
          map.openInfoWindow(infoWindow,point); //开启信息窗口
        }

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/fonts/stylesheet.css"

  .xiangOut
    width 100%
    .el-carousel__container
      width 100%
      img
        width 100%
    .el-carousel__indicators
      bottom 0.3rem
  .changMain
    width 100%
    line-height 0.2rem
    .changTitle
      font-family: 'Montserrat-Blod';
      font-size 0.4rem
      display block
      margin-left 5%
    span
      font-family: 'Montserrat-Blod';
      font-size 0.22rem
      margin-left 5%
      line-height 0.22rem
      margin-top 0.4rem
      display inline-block
    p
      font-family: "Montserrat-Light";
      font-size 0.2rem
      line-height 0.22rem
      margin-left 5%
      margin-top 0.2rem
  .mapOut
    position relative
    #XSDFXPage
      width 100%
      height 7rem
      margin-top 0.4rem
      position relative
    .mapText
      position absolute
      top 20%
      left 5%
      width 4rem
      height 4.5rem
      background url("./bussBg.png") no-repeat
      background-size 100% 100%
      overflow auto
    span
      display inline-block
      font-family Montserrat-Bold
      font-size 0.22rem
      color white
      font-weight bold
      line-height 0.22rem
      margin 2% 10%
    p
      font-family Montserrat-Light
      font-size 0.18rem
      line-height 0.22rem
      color white
      width 90%
      margin 2% 0 3% 10%


</style>
