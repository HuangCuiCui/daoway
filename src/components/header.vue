<template>
    <div>
      <div class="header">
        <div class="header_left">
          <img src="./img/logo.png" alt="">
        </div>
        <div class="city">
          <img src="./img/citypoint.png" alt="">
          <a>北京</a>
          <a>切换城市</a>
        </div>
        <div class="header_right">
          <ul class="header_list">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/downloadApp">下载APP</router-link></li>
            <li><router-link to="/seller">服务商</router-link></li>
            <li><router-link to="/server_join">商家入驻</router-link></li>
            <li><a href="#">关于我们</a></li>
            <li>
              <div class="login">
                <a href="#" target="_blank">商家登录</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  /*导航栏*/
  .header {
    height: 65px;
    width : 100%;
    z-index: 10000;
    box-shadow: 3px 4px 3px rgba(234,234,234,0.9);
    background: white;
    opacity: 0.9;
  }
  .header .city{
    float: left;
    margin-left: 150px;
    margin-top: 25px;
  }

  .header .city a{
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }
  .header_left{
    width: 280px;
    height: 40px;
    float: left;
    margin-left: 100px;
    margin-top: 10px;

  }
  .header_right{
    float: left;
    margin-left: 70px;
  }
  .header_right .header_list li{
    float: left;
    margin-left: 30px;
    margin-top: 25px;
  }
  .header_right .header_list li a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
  .header_right .header_list li a:hover{
    transition: 0.5s;
    color: #d43f3a;
  }
  .header_right .header_list li a:active{
    color: #d43f3a;
  }

  .header_right .header_list li .login {
    width: 80px;
    height: 30px;
    background-color: #d43f3a;
    border-radius: 8%;
    margin-top: -5px;
    line-height: 30px;
    text-align: center;
  }
  .header_right .header_list li .login a{
    color: white;
  }
</style>

