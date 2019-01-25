<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 navigat">
        <div class="col-md-4">
          <span>设备管理</span>
          <span>>智能设备管理>添加智能设备</span>
        </div>
      </div>
      <div class="col-md-10 main-l">
        <div class="col-md-12 mes">
          <span>产品信息</span>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2">
            <span style="color: red">*</span>&nbsp&nbsp<span>设备类型：</span>
          </div>
          <div class="col-md-3">
            <select class="form-control" v-model="smartType">
              <option></option>
              <option>智能门锁</option>
              <option>智能水表</option>
              <option>智能电表</option>
              <option>智能烟感</option>
            </select>
          </div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2">
            <span style="color: red">*</span>&nbsp&nbsp<span>设备名称：</span>
          </div>
          <div class="col-md-3">
            <select class="form-control" v-model="smartName">
              <option></option>
              <option>设备1</option>
              <option>设备2</option>
              <option>设备3</option>
              <option>设备4</option>
              <option>设备5</option>
            </select>
          </div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2">
            <span style="color: red">*</span>&nbsp&nbsp<span>设备型号：</span>
          </div>
          <div class="col-md-3">
            <select class="form-control" v-model="smartModel">
              <option></option>
              <option>001</option>
              <option>002</option>
              <option>003</option>
              <option>004</option>
              <option>005</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-12">
          <div class="col-md-offset-3 col-md-4 back">
            <div class="col-md-6 cancel"><button>取消</button></div>
            <div class="col-md-6"><button>提交</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "addfacility",
    data() {
      return {
        menus: this.$store.state.menusModule.menus,
        pageIndex:1,
        smartType:'',
        smartName:'',
        smartModel:'',
      };
    },
    methods:{

    }
  };
</script>
<style scoped>
  .container{
    padding: 0;
    margin: 0;
    width: 1558px;
    float: right;
  }
  .navigat{
    width: 100%;
    height: 100px;
  }
  .navigat span:nth-child(1){
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: #333333;
    font-weight: bold;
    margin-left: 70px;
    line-height: 98px;
  }
  .navigat span:nth-child(2){
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: #91a7ff;
    font-weight: bold;
  }
  .navigat .sousuo input{
    width: 100%;
    height: 32px;
    margin-top: 30px;
    margin-left: 50px;
    border-radius: 25px;
    border: solid 1px rgba(77, 77, 77, 0.68);
    background: #f2f2f2;
    outline: none;
  }
  .navigat .sousuo img{
    position: absolute;
    top: 30px;
    right: -35px;
  }
  .navigat .add span{
    margin-left: 12px;
  }
  .navigat .add img{
    margin-left: 60px;
  }
  .navigat .del span{
    margin-left: 12px;
  }
  .main-l{
    padding: 0;
    color: #333333;
    border-radius: 16px;
    font-family: "Microsoft YaHei";
    background: #ffffff;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
    margin-left: 100px;
  }
  .main-l .mes{
    border-left: solid 2px #345DFF;
    margin-left: 40px;
    margin-top: 40px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-l .main-xq .form-control{
    width: 256px;
    height: 40px;
    outline: none;
    border: solid 1px #a8a8a8;
    padding-left: 15px;
    font-weight: 100;
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
  .back .cancel button{
    background: #ffffff;
    color: black;
    font-family: "Microsoft YaHei";
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
  }
</style>
