<template>
  <div class="container">
    <div class="beijing">
    </div>
    <div class="row">
      <div class="col-md-12 login">
        <div class="nav-l">
          <img src="../assets/logo_denglu.png">
          <span>天诚智慧家庭管理平台</span>
        </div>
        <div class="use-l">
          <div class="denglu"><img src="../assets/icons/portrait_denglu.png" height="48" width="48">
            <input @change="checkname" v-model="username" type="text" placeholder="用户名"></div>
        </div>
        <div class="use-l">
          <div class="denglu"><img src="../assets/icons/keywords_denglu.png" height="48" width="48">
            <input @change="checkpassword" v-model="password" id="test" type="password" placeholder="密码"></div>
          <div class="reme">
            <input type="checkbox" v-model="checked"><span>记住密码</span>
          </div>
          <button @click="doLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      username:'',
      password:'',
      mspassword:'',
      msname:'',
      Login:false,
      checked:true,
    }
  },
  mounted(){
    this.getCookie();
  },
  methods:{
    checkname:function(){
      console.log(this.username);
      let myname = /^[\w\u4e00-\u9fa5]{2,8}$/;
      if(this.username===""){
        this.msname="昵称不能为空";
        this.Login=false;
      }else if(!myname.test(this.username)){
        this.msname="昵称2-8位，不包含特殊字符";
        this.Login=false;
      }else{
        this.msname="";
        this.Login=true;
      }
    },
    checkpassword:function(){
      let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      let value = $('#test').val();
      if(this.password===""){
        this.mspassword = "密码不能为空";
        this.Login=false;
      }else if(!pwdReg.test(value)){
        this.mspassword = "密码为8-16位，需要有数字字母组成";
        this.Login=false;
      }else{
        this.mspassword = "";
        this.Login=true;
      }
    },
    doLogin() {
     // if (this.Login) {
       let dd={
         "userName":this.username,
         "password":this.password
       };
       axios.post('https://xc.tcsmart.com.cn/api/web/sys/user/login/',JSON.stringify(dd),{
         headers: {
           'Content-Type': 'application/json;charset=utf-8',
         }
       })
         .then(res => {
           if (res.data.code === 0) {
             let remeberFlag;
             //判断复选框是否被勾选
             if (this.checked) {
               remeberFlag="true";
             }else {
               remeberFlag="false";
             }
             //调用配置cookie方法,传入账号名，密码，和保存天数3个参数
             this.setCookie(this.username, this.password, 7, remeberFlag);
             this.$router.push({path: '/home'});
             sessionStorage.setItem('Authorization',res.data.data)
           } else {
             this.message=res.data.message
           }
         })
         .catch(error => {
           console.log(error)
         })
     // }else {
     //   alert("请正确输入登录信息")
     // }
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

    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        let arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split('='); //再次切割
          //判断查找相对应的值
          if (arr2[0] === 'userName') {
            this.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] === 'userPwd') {
            this.password = arr2[1];
          }
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .beijing{
    background-image: url("../assets/beijing.png");
    width: 100%;
    height: 100%;
    z-index: auto;
    position:absolute;
    left:0;
    top:0;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
  .login{
    margin: 0;
    padding: 0;
    width: 580px;
    height: 680px;
    position: absolute;
    top: 150px;
    right: 208px;
    background: #ffffff;
  }
  .nav-l{
    width: 100%;
    height: 120px;
    /*background: #9c7cfe;*/
    background: -webkit-linear-gradient(left top, #9c7cfe , #5479eb); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #9c7cfe,#5479eb); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #9c7cfe, #5479eb); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #9c7cfe ,#5479eb); /* 标准的语法 */
  }
  .nav-l img{
    width: 120px;
    height: 96px;
    margin-left: 120px;
  }
  .nav-l span{
    font-size: 18px;
    line-height: 120px;
    color: #ffffff;
    font-family:"Microsoft YaHei" ;
  }
  .use-l{
    width: 400px;
    height: 58px;
    /*background: red;*/
    margin-left: 90px;
    margin-top: 80px;
    border-bottom: solid 1px #3746a6;
  }
  .denglu{
    padding: 0;
    margin: 0;

  }
  .use-l .denglu img{
    margin-left: 8px;
    margin-bottom: 8px;
  }
  .use-l .denglu input{
    outline: none;
    border: none;
    width: 302px;
    height: 40px;
    border-left: 1px solid #3746a6;
    padding-left: 18px;
    font-size: 24px;
  }
  .use-l .reme input{
    width: 58px;
    height: 15px;
    background: #3746a6;
    margin-top: 30px;
  }
  .use-l .reme input::after{
    box-sizing: content-box;
    content: "";
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 4px;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    transform-origin: center;
  }
  .use-l .reme span{
    font-size: 20px;
    font-family: "PingFang-SC-Medium";
    color: #cccccc;
  }
  button{
    width: 400px;
    height: 60px;
    border-radius: 24px;
    font-size: 24px;
    background: #3746a6;
    color: #fff;
    outline: none;
    border: none;
    margin-top: 80px;
    font-family: "PingFang-SC-Medium";
  }
</style>
