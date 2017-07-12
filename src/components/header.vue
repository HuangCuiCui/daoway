<template>
    <div>
      <header id="d_header" class="transparent">
        <div class="header_nav">
          <div class="container">
            <div class="contain-nav">
              <div class="nav-bar">
                <a href="/">
                  <img src="./img/logo.png" class="img-responsive logo-white" alt="logo商标">
                </a>
              </div>
              <ul class="nav_list">
                <li id="position">
                  <a href="#">
                    <img src="./img/citypoint.png" alt="">
                    <span class="city">北京</span>
                    <span class="show-city">切换城市</span>
                  </a>
                </li>
                <li class="nav_item"><router-link to="/">首页</router-link></li>
                <li class="nav_item"><router-link to="/downloadApp">下载APP</router-link></li>
                <li class="nav_item"><router-link to="/seller">服务商</router-link></li>
                <li class="nav_item"><router-link to="/server_join">商家入驻</router-link></li>
                <li class="nav_item"><a href="#">关于我们</a></li>
                <li class="nav_item">
                  <a id="login" href="#">商家登录</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
    export default {}
</script>

<style>

  /*导航栏*/
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .contain-nav{
    height: 70px;
    line-height: 70px;
  }
  .nav-bar{
    display: inline-block;
  }
  .nav-bar a .img-responsive{
    display: inline-block;
    background: #FCFCFC;
    vertical-align: middle;
  }
  .logo{
    float: left;
  }
  .header_nav .nav_list{
    float: right;
    overflow: hidden;
    font-size: 16px;
    font-weight: bold;
  }
  .nav_list li{
    display: inline-block;
  }
  .nav_list .nav_item{
    float: left;
    margin-bottom: 0;
  }
  #position{
    padding-right: 45px;
    display: inline-block;
    float: left;
  }
  #position a{
    text-decoration: none;
  }
  .show-city:hover{
    color: #e94840;;
  }
  .header_nav span{
    display: inline-block;
    font-weight: bold;
    color: #000;
    height: 40px;
    line-height: 40px;
  }
  .nav_item a{
    text-decoration: none;
    display: inline-block;
    padding-right: 5px;
    height: 22px;
    line-height: 22px;
  }
  .nav_item a:hover{
    color: #e94840;
  }
  .nav_list li{
    display: block;
    margin-right: 35px;
  }
  #login{
    background-color: #e94840;
    border-radius: 6px;
    padding: 2px 6px;
    color: #fff;
  }
</style>

