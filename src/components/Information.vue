<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 navigat">
        <div class="col-md-3">
          <span>消息管理</span>
        </div>
        <!--<div class="col-md-offset-3 col-md-3 sousuo">-->
          <!--<input type="text">-->
          <!--<img src="../assets/icons/sousuo_content.png" height="32" width="32"/>-->
        <!--</div>-->
        <!--<div class="col-md-2 del">-->
          <!--<img src="../assets/icons/shanchu_content.png" height="32" width="32"/>-->
          <!--<span>删除智能设备</span>-->
        <!--</div>-->
      </div>
      <div class="col-md-10 main-l">
        <div class="col-md-12 bq">
          <ul class="list-inline">
            <li> <div class="hy-check hlyw-fg-pandect-l">
              <input type="checkbox" v-model="selectAll" @change="checkAll(selectAll)"/>
              <label class="abs-cell"></label>
            </div></li>
            <li>序号</li>
            <li>信息类型</li>
            <li>状态</li>
            <li>更新时间</li>
            <li>提交时间</li>
            <li>操作</li>
          </ul>
        </div>
        <div class="col-md-12" v-for="(item,index) in list">
          <ul class="list-inline">
            <li> <div class="hy-check hlyw-fg-pandect-l">
              <input type="checkbox"  v-model="item.checked" @change="checkOneBox(item)"/>
              <label class="abs-cell"></label>
            </div></li>
            <li>{{index+1}}</li>
            <li>{{item.alarmDeviceTypeString}}</li>
            <li>{{item.handleStatusString}}</li>
            <li>{{item.updateTime}}</li>
            <li>{{item.alarmTime}}</li>
            <li><router-link :to="{ name:'informations',params:{ id:item.id}}">详情</router-link></li>
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
  import axios from 'axios'
  export default {
    name: "information",
    data() {
      return {
        pageIndex:1,
        pagesize:1,
        list:[],
        checkAllId:[],
        checked:'',
        selectAll:false,
        alarmDeviceType:'',
        handleStatus:'',
      };
    },
    created:function () {
      this.getData();
    },
    mounted:function () {
      this.list.forEach(item=>{
        this.$set(item,'select',this.selectAll)
      })
    },
    methods:{
      checkAll(val) {
        this.checkAllId=[];
        this.list.forEach(item=>{
          item.checked=val;
        });
        if (val){
          this.list.forEach(item=>{
            this.$data.checkAllId.push(item.id);
          })
        } else {
          this.checkAllId=[];
        }
      },
      checkOneBox(item) {
        //判断是否全选
        if (this.list.every(item=>item.checked===true)){
          this.selectAll=true;
        } else {
          this.selectAll=false;
        }
        //如果被点击则存其id
        if (item.checked){
          this.checkAllId.push(item.id)
        }else {
          for (let i=0;i<this.checkAllId.length;i++){
            if (this.checkAllId[i]===item.id){
              this.checkAllId.splice(i,1)
            }
          }
        }
      },
      getData(){
        axios.get('https://xc.tcsmart.com.cn/api/web/device/alarm/list'+'?pageNum='+this.pageIndex+'&alarmDeviceTypeString='+this.alarmDeviceType+'&handleStatusString='+this.handleStatus,{
          headers:{
            'Authorization':'Bearer'+' '+sessionStorage.getItem("Authorization")
          }
        })
          .then(res=>{
            if (res.data.code===3){
              this.$router.push({path:'/'})
            }else{
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
    }
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
  .navigat .add{
    margin-top: 30px;
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
    -webkit-box-shadow:0 0 10px #9daff3;
    -moz-box-shadow:0 0 10px #9daff3;
    box-shadow:0 0 10px #9daff3;
    margin-left: 100px;
  }
  .main-l .col-md-12,ul,li{
    padding: 0;
    margin: 0;
  }
  .main-l .col-md-12:last-child{
    border: none;
    box-sizing: border-box;
  }
  .main-l ul{
    height: 60px;
    line-height: 60px;
  }
  .main-l li{
    width: 245px;
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .main-l li:first-child{
    width: 90px;
  }
  .main-l li:nth-child(2){
    width: 126px;
  }
  .main-l li:last-child{
    width: 100px;
    color: #91a7ff;
    border: none;
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
