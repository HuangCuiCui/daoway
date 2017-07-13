<template>
    <div>
      <div class="container">
        <div class="regist">
          <div class="content">
            <div class="title"></div>
            <div class="control-group">
              <div class="input">
                <input class="form-control" type="text" maxlength="11" placeholder="请输入手机号">
                <div class="input-group">
                  <img src="../img/code.jpg" alt="">
                  <input type="text" class="form-control" maxlength="4" placeholder="请输入图片中的字符串">
                  <span class="input-group-addon">获取验证码</span>
                </div>
                <input type="text" style="margin: 10px 0;" class="form-control" maxlength="4" placeholder="请输入验证码">
                <input class="form-control" type="password" id="password" placeholder="请输入密码">
              </div>

            </div>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" checked>
              <a>您确认并同意到位用户协议</a>
            </label>
          </div>
          <div class="register">
            <button class="btn btn-primary btn-lg btn-block">注册</button>
          </div>
          <div style="padding: 20px;">
            <a style="margin-left: 80px">已有账户？登录</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  body {
    padding-top: 50px;
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .regist {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 13%;
    border-radius: 5px;
    background: #fff;
    border: 1px #ccc solid;
  }

  .content .title {
    background: url(../img/houtai-logo.png) center no-repeat;
    height: 70px;
    line-height: 70px;
    text-indent: -9999px;
    background-size: 290px;
    margin-top: 0;
  }
  .control-group input {
    height: 50px;
  }
  .control-group div {
    margin: 10px 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  .input-group img {
    height: 50px;
    width: 100%;
    border: 1px solid #ccc;
  }
  .checkbox {
    margin-bottom: 30px;
  }
  .checkbox a{
    font-size: 14px;
  }

</style>

