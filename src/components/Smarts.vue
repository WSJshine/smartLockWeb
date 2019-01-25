<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 main-l">
        <div class="col-md-12 mes">
          <span>设备一详细信息</span>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>设备所属公寓：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>设备类型：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>设备所属房间：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>设备名称：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>责任人：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>联系方式：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>处理人：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>处理状态：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>预警类型：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>预警时间：</p></div>
          <div class="col-md-3"><input type="text" placeholder="2018-01-12 15:00" readonly="true"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Smarts",
    data() {
      return {
        menus: this.$store.state.menusModule.menus,
        pageIndex:1,
      };
    }
  };
</script>
<style scoped>
  .container{
    padding: 0;
    margin: 0;
    width: 1400px;
    position: fixed;
    /*margin-left: 300px;*/
    /*margin-top: 150px;*/
    border-radius: 16px;
    background: #ffffff;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
  .main-l{
    padding: 0;
    color: #333333;
    font-family: "Microsoft YaHei";
  }
  .main-l .mes{
    border-left: solid 2px #345DFF;
    margin-left: 40px;
    margin-top: 40px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-l .main-xq input{
    width: 256px;
    height: 40px;
    outline: none;
    border: solid 1px #a8a8a8;
    background: #f2f2f2;
    padding-left: 15px;
  }
  .main-l .main-xq{
    margin-top: 30px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-l .main-xq:last-child{
    margin-bottom: 60px;
  }
  .main-l .main-xq .col-md-2{
    text-align: right;
    line-height: 40px;
    padding: 0;
  }
  .back button{
    width: 142px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 25px;
    color: #fffefe;
    background: #5479eb;
    margin-left: 45%;
    margin-top: 80px;
    font-size: 18px;
    font-family: "Microsoft YaHei";
  }
</style>
