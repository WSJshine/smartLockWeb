<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 navigat">
        <div class="col-md-3">
          <span>设备管理</span>
          <span>>智能设备管理</span>
        </div>
        <div class="col-md-offset-2 col-md-3 sousuo">
          <input type="text" v-model="deviceName">
          <img src="../assets/icons/sousuo_content.png" height="32" width="32" @click="getData"/>
        </div>
        <div class="col-md-2 add">
          <router-link to="/Addfacility"><img src="../assets/icons/tianjia_content.png" height="32" width="32"/>
            <span>添加智能设备</span></router-link>
        </div>
        <div class="col-md-2 del">
          <img src="../assets/icons/shanchu_content.png" height="32" width="32"/>
          <span>删除智能设备</span>
        </div>
      </div>
      <div class="col-md-10 main-l">
        <div class="col-md-12 bq">
          <ul class="list-inline">
            <li> <div class="hy-check hlyw-fg-pandect-l">
              <input type="checkbox" v-model="selectAll" @change="checkAll(selectAll)"/>
              <label class="abs-cell"></label>
            </div></li>
            <li>序号</li>
            <li>设备类型</li>
            <li>设备名称</li>
            <li>设备型号</li>
            <li>激活状态</li>
            <li>设备状态</li>
            <li>运营商</li>
            <li>安装日期</li>
            <li>公寓/房间号</li>
            <li>操作</li>
          </ul>
        </div>
        <div class="col-md-12" v-for="(item,index) in list">
          <ul class="list-inline">
            <li> <div class="hy-check hlyw-fg-pandect-l">
              <input type="checkbox" v-model="item.checked" @change="checkOneBox(item)">
              <label class="abs-cell"></label>
            </div></li>
            <li>{{index}}</li>
            <li v-if="item.deviceType===0">智能门锁</li>
            <li v-else-if="item.deviceType===1">智能水表</li>
            <li>{{item.deviceName}}</li>
            <li>/</li>
            <li>激活</li>
            <li v-if="item.deviceStatus===0">正常</li>
            <li v-else style="color: red">报警</li>
            <li v-if="item.buttPlatformType===0">中国电信</li>
            <li v-else>中国移动</li>
            <li>{{item.createTime}}</li>
            <li>/</li>
            <li><router-link :to="{ name:'facilitys',params:{ id:item.id}}">详情</router-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-12">
        <page-index :currentIndex="1"  :count="pagesize" @indexclick="getIndex" v-show="pagesize>1"></page-index>
      </div>
    </div>
  </div>
</template>
<script>
  import  axios from 'axios'
  export default {
    name: "smartdevice",
    data() {
      return {
        pageIndex:1,
        pagesize:1,
        list:[],
        checkedAllId:[],
        checked:'',
        selectAll:false,
        deviceName:'',
      };
    },
    creatted:function () {
      this.getData();
    },
    mounted:function () {
      let _this=this;
      this.list.forEach(item=>{
        _this.$set(item,'select',this.selectAll);
      });
    },
    methods: {
      deleteOne:function(){
        console.log(del);
        axios.post('http://127.0.0.1:5000/delGoods/',del,{
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          }
        })
          .then(res=>{
            console.log(res.data);
            if(res.data.code===200){
            }
          })
      },
      checkAll (val) {
        let _this=this;
        this.checkAllId = [];
        this.list.forEach(item => {
          item.checked = val;
        });
        if (val) {
          this.list.forEach(item => {
            _this.$data.checkAllId.push(item.id);
          })
        } else {
          this.checkAllId = [];
        }
      },
// 单选 使用every遍历数组每一项，每一项返回true,则最终结果为true。当任何一项返回false时，停止遍历，返回false。不改变原数组
      checkOneBox (item) {
        let _this=this;
        // 判断是否全选
        if (this.list.every(item=>item.checked===true)) {
          this.selectAll = true
        } else {
          this.selectAll = false
        }
        // 如果被点击则存其id
        if (item.checked) {
          _this.checkAllId.push(item.id);
          console.log(this.checkAllId)
        } else {
          // 删除数组里取消选择的id
          for (let i = 0; i < this.checkAllId.length; i++) {
            if (this.checkAllId[i] === item.id) {
              this.checkAllId.splice(i, 1)
            }
          }
        }
      },
      getData: function () {
        let vm = this;
        axios.get('http://192.168.10.46:9000/api/web/device/list'+'?pageNum='+this.pageIndex+'&sysUserId='+sessionStorage.getItem('sysUserId')+'&deviceName='+this.deviceName)//请求数据
          .then(res => {
            console.log(res.data);
            if (res.data.code === 3) {
              vm.$router.push({path: '/login'})
            } else if (res.data.code===0) {
              this.list = res.data.data.list;
              this.pagesize=res.data.data.pageSum;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getIndex:function (i) {
        this.pageIndex=i;
        this.getData();
      }
    },
  };
</script>
<style scoped>
  a{
    text-decoration: none;
  }
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
    margin-left: 0;
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
    right: 15px;
  }
  .navigat .add{
    margin-top: 30px;
  }
  .navigat .add a{
    /*text-decoration: none;*/
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
    width: 87%;
    padding: 0;
    color: #333333;
    font-family: "Microsoft YaHei";
    background: #ffffff;
    border-radius: 16px;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
    margin-left: 100px;
  }
  .main-l .col-md-12,ul,li{
    padding: 0;
    margin: 0;
  }
  .main-l ul{
    height: 60px;
    line-height: 60px;
  }
  .main-l li{
    width: 126px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }
  .main-l li:first-child{
    width: 90px;
  }
  .main-l li:last-child{
    width: 100px;
    color: #91a7ff;
  }
  .main-l .bq li{
    font-family: "Microsoft YaHei";
    color: #999999;
  }
  /* 多选 方框 自定义*/
  .hy-check {
    width: 30px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 35px;
    right: 0;
  }
  .hy-check label {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
    margin-left: 5px;
    background: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 20px;
  }
  .hy-check  label:after {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 3px;
    left: 3px;
    border-top: none;
    border-right: none;
    opacity: 0;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5), inset 0 0 1px 1px rgba(255,255,255,.3);
    background-image: linear-gradient(to top, rgba(20,133,255,1), rgba(139,195,255,1));
  }
  .hy-check input[type=checkbox]:checked + label:after {
    opacity: 1;
  }
  .hy-check input[type=checkbox] {
    opacity: 0;
    position: absolute;
    z-index: 999;
    left: 0;
    top: 50%;
    width: 30px;
    height: 30px;
    margin: 0;
    margin-top: -15px;
    cursor: pointer;
  }
  /* 多选 对勾 自定义*/
  .hy-checkk {
    width: 30px;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
  .hy-checkk label {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
    margin-left: 5px;
    background: #fff;
    border: 1px solid #e7e7e7;
  }
  .hy-checkk  label:after {
    content: '\00a0';
    /*	display: inline-block;*/
    border: 4px solid   rgba(20,133,255,1);
    width: 12px;
    height: 8px;
    position: absolute;
    /*	top: 3px;
        left: 3px*/;
    border-top-width: 0;
    border-right-width: 0;
    opacity: 0;
    -webkit-transform: rotate(-50deg);
    /*	content: '\00a0';
        display: inline-block;
        border: 4px solid #fff;
        border-top-width: 0;
        border-right-width: 0;
        width: 18px;
        height: 10px;
        -webkit-transform: rotate(-50deg);
        position: absolute;
        top:6px;
        left:4px;*/
    /*content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      top: 3px;
      left: 3px;
      border-top: none;
      border-right: none;
      opacity: 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.5), inset 0 0 1px 1px rgba(255,255,255,.3);
      background-image: linear-gradient(to top, rgba(20,133,255,1), rgba(139,195,255,1));*/
  }
  .hy-checkk input[type=checkbox]:checked + label:after {
    opacity: 1;
  }
  .hy-checkk input[type=checkbox] {
    opacity: 0;
    position: absolute;
    z-index: 999;
    left: 0;
    top: 50%;
    width: 30px;
    height: 30px;
    margin: 0;
    margin-top: -15px;
    cursor: pointer;
  }
</style>
