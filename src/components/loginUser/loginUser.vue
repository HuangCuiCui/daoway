<template>
    <div>
      <div class="login">
        <div class="content">
          <h2>到位商家后台</h2>
          <div class="input-group">
        <span class="input-group-addon icon-1">
          <div class="icon user"></div>
        </span>
            <input class="form-control" id="username" type="text" placeholder="输入昵称或手机号">
          </div>

          <form class="input2">
      <span>
        <div class="input-group">
          <span class="input-group-addon icon-2">
            <div class="icon lock"></div>
          </span>
          <input class="form-control" id="password" type="password" placeholder="输入密码">
        </div>
      </span>
          </form>

        </div>
        <div class="login-icon">
          <button class="btn btn-primary btn-lg btn-block">登录</button>
        </div>
        <div class="bottom">
          <a class="left" href="">忘记密码</a>
          <router-link class="right" to="/registerUser">注册</router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  .content {
    margin-bottom:16px;
  }
  .login {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 13%;
    border-radius: 5px;
    background: #fff;
    border: 1px #ccc solid;
  }
  .login h2 {
    background: url("http://www.daoway.com/dian/img/houtai-logo.png") center no-repeat;
    height: 70px;
    line-height: 70px;
    background-size: 290px;
    margin-top: 0;
    font-size:0;
  }
  .form-control {
    width: 263px;
    height: 55px;
  }
  .login .icon-1 {
    border-bottom: 0;
    border-bottom-left-radius: 0;
  }
  .input2 .icon-2 {
    border-top-left-radius: 0;
  }
  #username {
    border-bottom: 0;
    border-bottom-right-radius: 0;
  }
  #password {
    border-top-right-radius:0;
  }
  .icon {
    width: 11px;
    height: 14px;

  }
  .user {
    /*background: url("../img/user.svg") center no-repeat;*/
    background-size: 11px 14px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../img/user.svg");
  }
  .lock {
    background-size: 11px 14px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../img/lock.svg");
  }

  .bottom {
    padding: 20px ;
    text-decoration: none;
  }
  .bottom .left {
    float: left; text-decoration: none;
  }
  .bottom .right {
    float: right; text-decoration: none;
  }
</style>

