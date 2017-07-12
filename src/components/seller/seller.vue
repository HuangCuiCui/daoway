<template>
    <div>
      <way_header></way_header>
      <div class="wrapper">
        <h2 class="sever-h2">服务商</h2>
        <div class="service-center">
          <div class="centerleft">
            <div class="tabdiv">
              <ul class="ulactivety">
                <router-link to="/sellerTerm" target="_blank">
                  <li id="800ff6443dd043b39c7f17ede21dfc9d">

                      <img  class="img-width" src="http://img.daoway.cn/img/2017/01/20/c3a2490e-04fc-43de-9a05-8a62dce47f57_thumb.jpg">
                      <p class="img-p">
                        <img src="../img/home1.png">
                        <b>宜生到家</b>
                      </p>
                      <p class="pp">已接单11952单<span>好评98%</span></p>
                  </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                  <li id="c8e42f7716124bd2ad23c95445002d88">
                  <img class="img-width" src="http://img.daoway.cn/img/2016/12/28/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>云家政</b>
                  </p>
                  <p class="pp">已接单26860单<span>好评86%</span></p>
                </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                  <li id="dab8bd7932194f07ba754b116f196bbd">
                  <img class="img-width" src="http://img.daoway.cn/img/2016/11/11/450b3aac-c628-4e2f-bed0-331b47136f5b_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>蓝犀牛</b>
                  </p>
                  <p class="pp">已接单1794单<span>好评99%</span></p>
                </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                  <li id="fba4e31f6c07416baef89bcbfbf5c910">
                  <img class="img-width" src="http://img.daoway.cn/img/2016/08/24/94117c68-1048-473b-8370-dc40ab66c3e0_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>三鼎家政</b>
                  </p>
                  <p class="pp">已接单13883单<span>好评84%</span></p>
                </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                <li id="c89bbd38967e47038e80a370c81044b8">
                  <img class="img-width" src="http://img.daoway.cn/img/2015/10/20/7ae90a81-e216-42bd-baf2-4500d870cc78_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">已接单829单<span>好评95%</span></p>
                </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                  <li id="0568391fbf7c44a3a73456bbfeb714c4">
                  <img class="img-width" src="http://img.daoway.cn/img/2016/06/21/6441ca7d-cd34-4474-870d-2ee9180232f6_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>哈喽维修</b>
                  </p>
                  <p class="pp">已接单233单<span>好评98%</span></p>
                </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                  <li id="2316d6d972554724afe616a1a1e98c7e">
                  <img class="img-width" src="http://img.daoway.cn/img/2017/02/14/e2b168c4-c462-48e8-a3a6-dabf56e409b6_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>十分到家</b>
                  </p>
                  <p class="pp">已接单3198单<span>好评97%</span></p>
                </li>
                </router-link>
                <router-link to="/sellerTerm" target="_blank">
                  <li id="233f096f9d474e009408d8728a58795d">
                  <img class="img-width" src="http://img.daoway.cn/img/2016/09/12/1861ffae-b30c-4bd7-8f32-a7212ca7028b_thumb.jpg">
                  <p class="img-p">
                    <img src="../img/home1.png">
                    <b>牛牛家电清洗</b>
                  </p>
                  <p class="pp">已接单283单<span>好评91%</span></p>
                </li>
                </router-link>

              </ul>
            </div>
            <div class="getServiceList">
                <span>查看更多商家
                    <img src="../img/fuwu_down2.jpg" alt="">
                </span>
            </div>
          </div>
          <div class="centerright">
            <img class="right-top" src="../img/join-1.jpg">
            <div class="quickmark">
              <img src="../img/join-2.png">
            </div>
          </div>
        </div>

      </div>
      <way_footer></way_footer>
    </div>
</template>

<script>
  import Vue from  "vue"

  import way_header from "../header.vue"
  import way_footer from  "../footer.vue"

  export default {
    components:{
      way_header,
      way_footer
    }
  }
</script>

<style>

  /*content左边的图片部分*/
  .wrapper{
    width: 100%;
    overflow: hidden;
    background: #FBF8F8;
    border-top: 1px solid #e5e5e5;
  }

  h2{
    line-height: 85px;
    width: 1200px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 600;
  }
  .service-center {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .centerleft {
    width: 970px;
    float: left;
    margin-bottom: 50px;
  }
  .tabdiv ul .ulactivety {
    display: block;
  }
  .centerleft ul li {
    border: 1px solid #eaeaea;
    padding: 10px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #fff;
    cursor: pointer;
  }
  .centerleft ul li img{
    vertical-align: middle;
  }
  .centerleft ul li .img-width{
    width: 210px;
    height: 210px;
  }
  .centerleft ul p {
    display: block;
    width: 210px;
    height: 26px;
    line-height: 26px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .centerleft ul .img-p{
    margin-top: 15px
  }
  .centerleft ul .img-p img{
    margin-bottom: 5px;
    width:18px;
    height:17px;
  }
  .centerleft p.pp {
    font-size: 12px;
    color: #929292;
  }
  .centerleft p.pp span{
    float: right;
  }
  .getServiceList{
    display: block;
    width: 100%;
    margin: 0 auto;
    height: 152px;
    clear: both;
    text-align: center;
  }
  .getServiceList span{
    width: 200px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin: 50px 5px;
    background: #fff;
    display: inline-block;
    font-size: 16px;
    color: #b1b1b1;
    cursor: pointer;
  }
  .getServiceList img{
    margin-left: 5px;
    vertical-align: middle;
  }
  /*content的右边的图片部分*/
  .centerright {
    width: 230px;
    float: right;
  }
  .centerright img{
    vertical-align: middle;
  }
  .centerright .right-top{
    cursor: pointer;
    width: 230px;
    height:auto;
  }
  .centerright .quickmark img{
    width:130px;
    height:auto;
  }
  .quickmark {
    width: 230px;
    height: 290px;
    background: url(../img/quickmark.jpg) no-repeat center;
    margin-top: 10px;
  }
  .quickmark img {
    margin: 50px 0 0 50px;
  }

</style>

