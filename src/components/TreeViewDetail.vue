<template>
  <div class="container">
    <div class="row">
      <div class="xinxi"></div>
      <div class="xinxi-1">
        <div class="down"><img src="../assets/icons/close_content.png" height="50" width="50"/></div>
        <Smarts></Smarts></div>
      <div class="col-md-12 navigat">
        <span>系统首页</span>
        <span>>概况( 苏州 )</span>
      </div>
      <div class="col-md-12 main-t">
        <div class="col-md-3">
            <div class="col-md-12 equipment-sum">
              <div class="col-md-5">
                <img src="../assets/icons/baojin_content.png" height="64" width="64"/></div>
              <div class="col-md-6 mes">
                <div class="col-md-12"><span>告警总数</span></div>
                <div class="col-md-12"><span>465</span></div>
              </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="col-md-12 equipment-sum-1">
              <div class="col-md-5">
                <img src="../assets/icons/shebeishuliang_content.png" height="64" width="64"/></div>
              <div class="col-md-6 mes">
                <div class="col-md-12"><span>设备数量</span></div>
                <div class="col-md-12"><span>10450</span></div>
              </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="col-md-12 equipment-sum-2">
              <div class="col-md-5">
                <img src="../assets/icons/fangyuan_content.png" height="80" width="80"/></div>
              <div class="col-md-6 mes">
                <div class="col-md-12"><span>房源数量</span></div>
                <div class="col-md-12"><span>182</span></div>
              </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="col-md-12 equipment-sum-3">
              <div class="col-md-5">
                <img src="../assets/icons/zuke_content.png" height="80" width="80"/></div>
              <div class="col-md-6 mes">
                <div class="col-md-12"><span>租客人数</span></div>
                <div class="col-md-12"><span>263</span></div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-md-12 main-b">
        <div class="col-md-6 lines">
          <div class="col-md-12 mes">
            <div class="col-md-6">
              <span>告警数量趋势图</span>
            </div>
            <div class="col-md-offset-4 col-md-2">
              <img src="../assets/icons/yixuanzhong.png" height="12" width="12"/>
              <span>报警</span>
            </div>
          </div>
          <div class="col-md-12">
            <Lines></Lines>
          </div>
        </div>
        <div class="col-md-6 lines-1">
            <Map></Map>
        </div>
      </div>
      <div class="col-md-12 main-br">
        <div class="col-md-6 undisposed">
          <div class="col-md-12 mes">
            <span>未处理报警列表</span>
          </div>
          <div class="col-md-12 mess">
            <div class="col-md-offset-1 col-md-10 messag">
              <ul class="list-inline">
                <li>设备名称</li>
                <li>告警类型</li>
                <li>设备位置</li>
                <li>告警时间</li>
              </ul>
            </div>
            <div class="col-md-offset-1 col-md-10 message">
              <ul class="list-inline" v-for="(item,index) in list">
                <li>设备一{{}}</li>
                <li>假锁{{}}</li>
                <li>大门{{}}</li>
                <li>2019-01-07{{}}</li>
              </ul>
              <ul class="list-inline">
                <li>设备二</li>
                <li>假锁</li>
                <li>大门</li>
                <li>2019-01-06</li>
              </ul>
              <ul class="list-inline">
                <li>设备三</li>
                <li>假锁</li>
                <li>大门</li>
                <li>2019-01-06</li>
              </ul>
              <ul class="list-inline">
                <li>设备四</li>
                <li>假锁</li>
                <li>大门</li>
                <li>2019-01-06</li>
              </ul>
              <ul class="list-inline">
                <li>设备五</li>
                <li>防撬</li>
                <li>大门</li>
                <li>2019-01-05</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 fault">
          <div class="col-md-12 mes">
            <span>报警数量</span>
          </div>
          <div class="col-md-12 pie">
            <Pie></Pie>
          </div>
        </div>
        <div class="col-md-3 faults">
          <div class="col-md-12 mes">
            <span>报警数量</span>
          </div>
          <div class="col-md-12 pies">
            <Pies></Pies>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Map from '@/components/Map'
import Pie from '@/components/Pie'
import Pies from '@/components/Pies'
import Lines from '@/components/Lines'
import Smarts from '@/components/Smarts'
  export default {
    name: "TreeViewDetail",
    components:{
      Map,
      Pie,
      Pies,
      Lines,
      Smarts
    },
    data() {
      return {
        currentRoute: this.$route.path,
        list:[],

      };
    },
    watch: {
      //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
      $route: {
        handler: function(val, oldVal) {
          this.currentRoute = val.name;
        },
        deep: true
      }
    },
  };
</script>
<style scoped>
  .container{
    margin: 0;
    padding: 0;
    width: 1558px;
    overflow: hidden;
  }
  .xinxi{
    width: 1920px;
    height: 1080px;
    display: none;
    background: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99998;
    opacity: 0.6;
  }
  .xinxi-1{
    display: none;
    position: relative;
    border-radius: 16px;
    width: 1400px;
    top: 150px;
    left: -50px;
    cursor:pointer;
    opacity: 10;
    z-index: 99999;
  }
  .xinxi-1 .down{
    position: fixed;
    right: 222px;
    top: 190px;
    width: 50px;
  }
  .navigat{
    width: 100%;
    height: 78px;
  }
  .navigat span:nth-child(1){
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: #333333;
    font-weight: bold;
    margin-left: 60px;
    line-height: 78px;
  }
  .navigat span:nth-child(2){
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: #91a7ff;
    font-weight: bold;
  }
  .main-t .equipment-sum{
    width: 330px;
    height: 146px;
    background: #ffffff;
    border-radius: 16px;
    margin-left: 45px;
    background-image: url("../assets/bg_1.png");
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-t .equipment-sum-1{
    width: 330px;
    height: 146px;
    background: #ffffff;
    border-radius: 16px;
    margin-left: 30px;
    background-image: url("../assets/bg_2.png");
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-t .equipment-sum-2{
    width: 330px;
    height: 146px;
    background: #ffffff;
    border-radius: 16px;
    margin-left: 15px;
    background-image: url("../assets/bg_3.png");
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-t .equipment-sum-3{
    width: 330px;
    height: 146px;
    background: #ffffff;
    border-radius: 16px;
    background-image: url("../assets/bg_4.png");
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-t .mes{
    margin-left: 4px;
    margin-top: 52px;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: #ffffff;
  }
  .main-t img{
    margin-left: 25px;
    margin-top: 41px;
  }
  .main-b .lines{
    width: 700px;
    height: 320px;
    margin-left: 60px;
    margin-top: 34px;
    background: #ffffff;
    border-radius: 16px;
    box-sizing: border-box;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-b .lines .mes{
    border-left: solid 2px #345DFF;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-b .lines .mes span{
    margin-left: -18px;
  }
  .main-b .lines .mes img{
    width: 6px;
    height: 6px;
    margin-left: -6px;
    border-radius: 50%;
  }
  .main-b .lines .mes span:nth-child(2){
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    margin-left: 5px;
  }
  .main-b .lines-1{
    width: 700px;
    height: 320px;
    margin-left: 40px;
    margin-top: 34px;
    background: #ffffff;
    border-radius: 16px;
    box-sizing: border-box;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-br .undisposed{
    width: 700px;
    height: 320px;
    margin-left: 60px;
    margin-top: 34px;
    margin-bottom: 50px;
    background: #ffffff;
    border-radius: 16px;
    box-sizing: border-box;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-br .undisposed .mes{
    border-left: solid 2px #345DFF;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-br .undisposed .mess{
    height: 258px;
    overflow: hidden;
  }
  .main-br .undisposed .messag ul{
    width: 100%;
    margin-top: 28px;
  }
  .main-br .undisposed .messag li{
    width: 24%;
    text-align: center;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    color: #999999;
  }
  .main-br .undisposed .messag li:first-child{
    margin-left: 0px;
  }
  .main-br .undisposed .message{
    height: 200px;
    overflow: hidden;
  }
  .main-br .undisposed .message ul{
    width: 100%;
    margin-top: 20px;
  }
  .main-br .undisposed .message ul:first-child{
    width: 100%;
    margin-top: 8px;
  }
  .main-br .undisposed .message li{
    width: 24%;
    text-align: center;
    font-family: "Microsoft YaHei";
    font-size: 13px;
    color: #333333;
  }
  .main-br .fault{
    width: 316px;
    height: 320px;
    margin-top: 30px;
    background: #ffffff;
    border-radius: 16px;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
    margin-left: 40px;
  }
  .main-br .fault .mes{
    border-left: solid 2px #345DFF;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-br .fault .pie{
    width: 300px;
    height: 280px;
    margin-top: 18px;
    margin-left: -29px;
  }
  .main-br .faults{
    width: 345px;
    height: 320px;
    margin-top: 30px;
    background: #ffffff;
    border-radius: 16px;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
    margin-left: 38px;
  }
  .main-br .faults .mes{
    border-left: solid 2px #345DFF;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-br .faults .pies{
    width: 330px;
    height: 300px;
    margin-top: -10px;
    margin-left: -29px;
  }

</style>
