<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 navigat">
        <div class="col-md-3">
          <span>消息管理</span>
          <span>>详情</span>
        </div>
      </div>
      <div class="col-md-10 main-l">
        <div class="col-md-12 mes">
          <span>信息详情</span>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>设备所属公寓：</p></div>
          <div class="col-md-3">
            <input type="text" readonly="true"></div>
          <div class="col-md-2"><p>设备类型：</p></div>
          <div class="col-md-3">
            <input type="text" readonly="true" v-model="list.deviceTypeName"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>设备所属房间：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>设备名称：</p></div>
          <div class="col-md-3"><input type="text" readonly="true" v-model="list.deviceName"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>运营商：</p></div>
          <div class="col-md-3"><input type="text" readonly="true" placeholder="中国电信"></div>
          <div class="col-md-2"><p>设备型号：</p></div>
          <div class="col-md-3"><input type="text" readonly="true" v-model="list.deviceModel"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>imel值：</p></div>
          <div class="col-md-3"><input type="text" readonly="true"></div>
          <div class="col-md-2"><p>预警类型：</p></div>
          <div class="col-md-3"><input type="text" readonly="true" v-model="list.alarmContent"></div>
        </div>
        <div class="col-md-12 main-xq">
          <div class="col-md-2"><p>deviceID：</p></div>
          <div class="col-md-3"><input type="text" readonly="true" v-model="list.deviceId"></div>
          <div class="col-md-2"><p>预警时间：</p></div>
          <div class="col-md-3"><input type="text"readonly="true" v-model="list.alarmTime"></div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-12">
          <div class="back">
            <button><router-link to="/alarm">返回</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "informations",
    data() {
      return {
        list:[],
        id:'',
      };
    },
    created() {
      this.id=this.$route.params.id;
      this.getData()
    },
    methods: {
    getData: function () {
      axios.get('https://xc.tcsmart.com.cn/api/web/device/alarm' + '?id=' + this.id, {
        headers: {
          'Authorization': 'Bearer' + ' ' + sessionStorage.getItem("Authorization")
        }
      })
        .then(res => {
          if (res.data.code === 0) {
            this.list = res.data.data;
          } else if (res.data.code === 3) {
            this.$router.push({path: '/'})
          }
        })
      },
    }
  };
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #ffffff;
  }
  .container{
    padding: 0;
    margin: 0;
    width: 100%;
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
    font-size: 14px;
    font-family: "Microsoft YaHei";
    padding-left: 30px;
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
  .navigat .del{
    margin-top: 30px;
    position: absolute;
    right: 0;
    padding-left: 5px;
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
    -webkit-box-shadow:0 0 10px #9daff3;
    -moz-box-shadow:0 0 10px #9daff3;
    box-shadow:0 0 10px #9daff3;
    margin-left: 100px;
  }
  .main-l .mes{
    border-left: solid 2px #9daff3;
    margin-left: 40px;
    margin-top: 40px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-l .main-xq input{
    width: 89%;
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
    width: 10%;
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
