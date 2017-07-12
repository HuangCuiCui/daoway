<template>
    <div>
      <div class="safeguard">
        <h2>到位<span>服务</span>保障</h2>
        <p>到位平台担保交易安全，交易未成功100%退款</p>
      </div>
      <div class="pic_service">
        <ul>
          <li>
            <img src="./img/quan.png" alt=""><br/>
            服务多
        </li>
          <li>
            <img src="./img/quan.png" alt=""><br/>
            上门快
        </li>
          <li>
            <img src="./img/quan.png" alt=""><br/>
            有保障
        </li>
        </ul>
      </div>
      <footer class="footer">
        <dl>
          <dt>热门城市</dt>
          <dd>
            <span>北京</span><span>上海</span><span>广州</span><span>深圳</span><span>成都</span><span>天津</span><span>南京</span><span>杭州</span><span>重庆</span><span>苏州</span><span>武汉</span><span>长沙</span><span>济南</span><span>郑州</span><span>西安</span><span>沈阳</span><span>福州</span><span>厦门</span><span>南昌</span><span>合肥</span><span>宁波</span><span>无锡</span><span>青岛</span><span>大连</span><span>东莞</span><span>佛山</span><span>石家庄</span><span>哈尔滨</span><span>太原</span><span>昆明</span><span>贵阳</span><span>南宁</span><span>温州</span>
          </dd>
        </dl>
      </footer>
      <div class="base_meg">
        <p>©2015 版权所有  到位 daoway.com 京ICP备15001471号-1</p>
        <p>北京邻家科技有限公司  </p>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  /*footer*/

  /*底部的模块*/
  .safeguard{
    text-align: center;
    width: 100%;
    padding-top: 60px;
    background: #fff;
    clear: both;
  }
  .safeguard h2{
    font-size: 28px;
    font-family: "微软雅黑";
    font-weight: 800;
  }
  .safeguard h2 span{
    color: #fb474f;
  }
  .safeguard p{
    font-size: 20px;
    color: #3d3838;
    margin: 0;
  }
  .pic_service{
    margin: 0 auto;
    width: 1200px;
    padding-top: 68px;
    background: #fff;
    height: 150px;
    font-family: "微软雅黑";
  }
  .pic_service ul{
    display: flex;
  }
  .pic_service ul li{
    flex: 1;
    text-align: center;
    color: #1d1515;
    font-size: 18px;
  }
  .pic_service ul li img{
    margin-bottom: 10px;
  }
  /* footer部分*/
  .footer{
    margin:0 auto;
    width: 1200px;
    clear: both;
    padding-top: 50px;
    height: 160px;
    background: #fff;
  }
  .footer dl dt{
    float: left;
    font-family: " 微软雅黑";
    font-weight: 700;
    font-size: 14px;
  }
  .footer dl dd {
    margin-left: 40px;
    width: 1100px;
    line-height: 30px;
    float: left;
  }
  .footer dl dd span{
    font-size: 16px;
    color: #898989;
    display: inline-block;
    width: 9%;
    text-align: center;
    font-weight: 200;
    cursor: pointer;
    font-family: "微软雅黑";
  }

  /*底部信息*/
  .base_meg{
    margin:0 auto;
    text-align: center;
    padding-top: 40px;
    background: #FBF8F8;
  }
  .base_meg p{
    color: #898989;
    padding: 0 0 1.5em;
    font-size: 14px;
    margin-bottom: -10px;
  }
</style>

