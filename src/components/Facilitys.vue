<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 navigat">
        <div class="col-md-4">
          <span>设备管理</span>
          <span>>智能设备管理>设备详情</span>
        </div>
      </div>
      <div class="col-md-10 main-l">
        <div class="col-md-12">
          <div class="col-md-4 mes">
            <span>产品信息</span>
          </div>
          <div class="col-md-4 mes">
            <span>设备信息</span>
          </div>
          <div class="col-md-3 mes">
            <span>设备状态</span>
          </div>
        </div>
        <div class="col-md-12 ">
          <div class="col-md-4 main-xq">
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span style="color: red">*</span>&nbsp&nbsp<span>设备类型：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true" v-if="list.deviceType===0" placeholder="智能门锁">
               <input type="text" class="form-control" readonly="true" v-else placeholder="其他">
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span style="color: red">*</span>&nbsp&nbsp<span>设备名称：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true" v-model="list.deviceName">
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span style="color: red">*</span>&nbsp&nbsp<span>设备型号：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true" placeholder="NB-IOT">
             </div>
           </div>
          </div>
          <div class="col-md-4 main-xq">
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span style="color: red">*</span>&nbsp&nbsp<span>运营商：</span>
             </div>
             <div class="col-md-9">
               <select class="form-control">
                 <option v-if="list.buttPlatformType===0">中国电信</option>
                 <option v-else>中国移动</option>
               </select>
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span>生产日期：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true" v-model="list.createTime">
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span>安装日期：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true">
             </div>
           </div>
          </div>
          <div class="col-md-4 main-xq">
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span style="color: red">*</span>&nbsp&nbsp<span>运行状态：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true" v-if="list.deviceStatus===0" placeholder="正常">
               <input type="text" class="form-control" readonly="true" v-else placeholder="报警">
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span style="color: red">*</span>&nbsp&nbsp<span>激活状态：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control" readonly="true" value="已激活">
             </div>
           </div>
          </div>
        </div>
        <div class="col-md-12 huos">
          <div class="col-md-4 mes">
            <span>公寓房源信息</span>
          </div>
        </div>
        <div class="col-md-12 ">
          <div class="col-md-6 main-xq housing">
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span>公寓名称：</span>
             </div>
             <div class="col-md-9">
               <select class="form-control">
                 <option></option>
                 <option></option>
                 <option></option>
               </select>
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span>所属机构：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control tab">
             </div>
           </div>
          </div>
          <div class="col-md-6 main-xq housing">
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span>房间号：</span>
             </div>
             <div class="col-md-9">
               <select class="form-control">
                 <option></option>
                 <option>电信</option>
                 <option>移动</option>
               </select>
             </div>
           </div>
           <div class="col-md-12 main-x">
             <div class="col-md-3">
               <span>公寓地址：</span>
             </div>
             <div class="col-md-9">
               <input type="text" class="form-control tab">
             </div>
           </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-12">
          <div class="col-md-offset-4 col-md-4 back">
            <div class="col-md-6 cancel"><button @click="quxiao">返回</button></div>
            <!--<div class="col-md-6"><button @click="tijiao">提交</button></div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "facilitys",
    data() {
      return {
        list:[],
        id:'',
      };
    },
    created() {
      this.id=this.$route.params.id
    },
    mounted() {
      this.getData();
    },
    methods:{
      getData:function () {
        axios.get('https://xc.tcsmart.com.cn/api/web/device'+'?id='+this.id,{
          headers: {
            'Authorization':'Bearer'+' '+sessionStorage.getItem("Authorization")
          }
        })
          .then(res=>{
            if (res.data.code===0){
              this.list=res.data.data;
            }
            else if(res.data.code===3){
              this.$router.push({path: '/'})
            }
          })
      },
      quxiao:function () {
        this.$router.push({path:'/smartdevice'})
      },
      // tijiao:function () {
      //   let updata={
      //     device:this.list.deviceName
      //   };
      //   axios.put('http://192.168.10.24:9000/api/web/device',JSON.stringify(updata),{
      //     headers: {
      //       'Authorization':'Bearer'+' '+sessionStorage.getItem("Authorization")
      //     }
      //   })
      //     .then(res=>{
      //       console.log(res.data)
      //     })
      // }
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
    -webkit-box-shadow:0 0 10px #9daff3;
    -moz-box-shadow:0 0 10px #9daff3;
    box-shadow:0 0 10px #9daff3;
    margin-left: 100px;
  }
  .main-l .huos{
    margin-top: 30px;
  }
  .main-l .mes{
    border-left: solid 2px #9daff3;
    margin-top: 60px;
    font-size: 16px;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-l .mes:first-child{
    margin-left: 40px;
  }
  .main-l .main-xq .form-control{
    width: 256px;
    height: 40px;
    outline: none;
    border: solid 1px #a8a8a8;
    padding-left: 15px;
    font-weight: 100;
    background: #ffffff;
  }
  .main-l .housing{
    margin-left: -53px;
  }
  .main-l .housing:nth-child(2){
    margin-left: 0;
  }
  .main-l .housing .tab{
    width: 462px;
  }
  .main-l .main-x{
    margin-left: 15px;
    margin-top: 40px;
  }
  .main-l .main-xq{
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .main-l .main-xq:last-child{
    margin-bottom: 60px;
  }
  .main-l .main-xq .col-md-3{
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
    -webkit-box-shadow:0 0 10px #9daff3;
    -moz-box-shadow:0 0 10px #9daff3;
    box-shadow:0 0 10px #9daff3;
  }
</style>
