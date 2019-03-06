<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box" vid="map"
             :zoom="zoom"
             :center="center"
             :plugin="plugin">
      <el-amap-marker vid="marker"
                      :position="center"
                      :label="label">
      </el-amap-marker>
      <el-amap-circle  vid="circle"
                       :center="center"
                       :radius="radius"
                       fill-opacity="0.2"
                       strokeColor="#38f"
                       strokeOpacity="0.8"
                       strokeWeight="1"
                       fillColor="#38f">
      </el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: [
    'latitude',
    'longitude'
  ],
  data(){
    return{
      msg:'vue-amap demo',
      longitude:this.longitude,
      latitude:this.latitude,
      zoom:16,
      center:[this.longitude,this.latitude],
      lng:0,
      lat:0,
      label:{
        content:'',
        offset:[10,12]
      },
      radius:100,
      plugin: [
        {
          pName: 'ToolBar',//工具条插件
          position:'LB',
        },
        {
          pName: 'MapType',//卫星与地图切换
          defaultType: 0,
          showTraffic:true,//实时交通图层
        },
        {
          pName:'OverView',
          //isOpen:true//鹰眼是否打开
        },
        {
          pName:'Scale'
        },
        {
          pName:'Geolocation',//定位插件
          showMarker:false,
          // events:{
          //   init(o){
          //     //定位成功 自动将marker和circle移到定位点
          //     o.getCurrentPosition((status, result) => {
          //       console.log(result);
          //       vm.center=[result.position.lng,result.position.lat]
          //     });
          //   }
          // }
        }
      ]
    }
  },
  methods:{
    addRadius(){
      this.radius+=10;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .amap-wrapper{
    width: 105%;
    height: 320px;
    margin-left: -15px;
    box-sizing: border-box;
    border-radius: 16px;
    overflow: hidden;
  }
  .amap-box{
    border-radius: 16px !important;
  }
</style>
