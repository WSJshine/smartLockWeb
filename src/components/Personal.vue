<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 navigat">
        <div class="col-md-6">
          <span>用户管理</span>
          <span>>个人中心</span>
        </div>
        <div class="col-md-offset-3 col-md-3 xiugai">
          <img src="../assets/icons/xiugai_content.png" height="32" width="32"/>
          <span>修改登录密码</span>
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-12 mes">
          <span>个人信息</span>
        </div>
        <div class="col-md-12">
          <div class="col-md-6">
            <div class="col-md-12 wenben">
              <span style="color: red">*</span>&nbsp&nbsp<span>用户名:</span>
              <input type="text" readonly="true" v-model="userName">
            </div>
            <div class="col-md-12 wenben">
              <span style="color: red">*</span>&nbsp&nbsp<span>手机号码:</span>
              <input type="text" readonly="true" v-model="userMobile">
            </div>
            <div class="col-md-12 wenben">
              <span style="color: red">*</span>&nbsp&nbsp<span>联系邮箱:</span>
              <input type="text" readonly="true" v-model="userEmail">
            </div>
          </div>
          <div class="col-md-6">
            <div class="col-md-12 portrait">
              <img src="../assets/icons/portrait_content.png" height="140" width="140"/>
            </div>
            <div class="col-md-12 poto">
              <span>修改头像</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="back">
          <button>返回</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "personal",
    data() {
      return {
        menus: this.$store.state.menusModule.menus,
        userName:'',
        userMobile:'',
        userEmail:'',
      };
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
  .navigat .xiugai img{
    /*margin-top: 30px;*/
    margin-left: 126px;
  }
  .navigat .xiugai span{
    margin-left: 12px;
    line-height: 98px;
    font-size: 14px;
  }
  .container .main{
    width: 1337px;
    height: 534px;
    margin-left: 115px;
    border-radius: 16px;
    -webkit-box-shadow:0 0 10px #345DFF;
    -moz-box-shadow:0 0 10px #345DFF;
    box-shadow:0 0 10px #345DFF;
    background: #ffffff;
  }
  .container .main .mes{
    border-left: solid 2px #345DFF;
    margin-left: 40px;
    margin-top: 40px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .container .main .wenben{
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    margin-top: 40px;
    margin-left: 28px;
  }
  .container .main .wenben input{
    margin-left: 20px;
    width: 256px;
    height: 40px;
    outline: none;
  }
  .container .main .wenben:nth-child(2){
    margin-left: 14px;
  }
  .container .main .wenben:nth-child(3){
    margin-left: 14px;
  }
  .container .main .portrait{
    width: 140px;
    height: 140px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 40px;
    margin-left: 365px;
  }
  .container .main .portrait img{
    display: block;
    width: 140px;
    height: 140px;
    object-fit: cover;
  }
  .container .main .poto{
    margin-top: 44px;
  }
  .container .main .poto span{
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    margin-left: 395px;
  }
  .container .back button{
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
