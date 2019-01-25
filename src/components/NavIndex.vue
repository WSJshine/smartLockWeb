<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 nav-main">
        <div class="col-md-3 logo">
          <img src="../assets/logo_denglu.png" height="96" width="102"/>
          <span>天诚智慧家庭管理平台</span>
        </div>
        <div class="col-md-offset-5 col-md-4 nav-r">
          <div class="col-md-offset-4 col-md-2 messa">
            <img src="../assets/icons/information_leftnav.png" height="40" width="40"/>
          </div>
          <div class="col-md-3 user">
            <img src="../assets/icons/portrait_nav.png" height="48" width="48"/>
            <span>{{username}}</span>
          </div>
          <div class="col-md-3 exit">
            <img src="../assets/icons/land_nav.png" height="48" width="48"/>
            <span @click="logOut">退出登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  name: 'NavIndex',
  data () {
    return {
      msg: '',
      username:'',
      remeberFlag: true,
    }
  },
  mounted(){
    this.getCookie();
  },
  methods:{
    logOut(){
      alert("确认退出？");
      axios.post('')
        .then(res=>{
          if (this.remeberFlag==="false"){
            this.clearCookie();
            sessionStorage.removeItem('sysUserId');
          }
          this.$router.push('/login');
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('='); //再次切割
          //判断查找相对应的值
          if (arr2[0] === 'userName') {
            this.username = arr2[1];  //保存到保存数据的地方
          } else if (arr2[0] === 'remeberFlag') {
            this.remeberFlag = arr2[1];
          }
        }
      }
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays, remeberFlag) {
      let exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "remeberFlag" + "=" + remeberFlag + ";path=/;expires=" + exdate.toGMTString();
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1, ""); //修改2值都为空，天数为负1天就好了
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 100%;
    height: 96px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    background: -webkit-linear-gradient(left top, #4494ee , #8156fe); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #4494ee,#8156fe); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #4494ee, #8156fe); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #4494ee ,#8156fe); /* 标准的语法 */
    /*border-bottom: solid 1px #cccccc;*/
    /*-webkit-box-shadow: rgba(82, 115, 227, 0.75) 0 1px 1px;*/
    /*-moz-box-shadow: rgba(82, 115, 227, 0.75) 0 1px 1px;*/
    /*box-shadow: rgba(82, 115, 227, 0.75) 0 1px 1px;*/
  }
  .nav-main{
    padding: 0;
    /*margin: 0;*/
  }
  .logo{
    width: 360px;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: #ffffff;
  }
  .logo img{
    margin-left: 20px;
  }
  .nav-r{
    height: 90px;
    overflow: hidden;
    margin-right: 10px;
    position: absolute;
    right: 0;
    color: #ffffff;
  }
  .nav-r .messa img{
    margin-top: 29px;
  }
  .nav-r span{
    line-height: 90px;
    margin-left: 8px;
  }
</style>
