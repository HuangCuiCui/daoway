<template>
    <div>
      <way_header></way_header>
      <div id="d_banner">
        <div class="full-banner">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="../img/banner1.jpg" alt="...">
                <div class="carousel-caption">
                </div>
              </div>
              <div class="item">
                <img src="../img/banner2.jpg" alt="...">
                <div class="carousel-caption">
                </div>
              </div>
              <div class="item">
                <img src="../img/banner3.jpg" alt="...">
                <div class="carousel-caption">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <!--二级菜单-->
          <div id="banner-nav">
            <ul class="list-left">
              <li class="nav-name">
                <router-link to="/serverList">
                  <i>家庭保洁</i>
                </router-link>
                <div class="h-before"></div>
                <div class="h-after"></div>
                <ul class="list-right">
                  <li><a target="_blank">小时工</a></li>
                  <li><a target="_blank">开荒保洁</a></li>
                  <li><a target="_blank">擦玻璃</a></li>
                  <li><a target="_blank">深度保洁</a></li>
                  <li><a target="_blank">家居养护</a></li>
                  <li><a target="_blank">杀虫灭鼠</a></li>
                </ul>

              </li>
              <li class="nav-name">
                <a href="#">
                  <i>上门按摩</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
                <ul class="list-right">
                  <li><a href="#" target="_blank">中医推拿</a></li>
                  <li><a href="#" target="_blank">油压SPA</a></li>
                  <li><a href="#" target="_blank">局部理疗</a></li>
                  <li><a href="#" target="_blank">足疗套餐</a></li>
                  <li><a href="#" target="_blank">美体塑形</a></li>
                  <li><a href="#" target="_blank">母婴保健</a></li>
                </ul>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>上门维修</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
                <ul class="list-right">
                  <li><a href="#" target="_blank">手机维修</a></li>
                  <li><a href="#" target="_blank">家电维修</a></li>
                  <li><a href="#" target="_blank">电脑维修</a></li>
                  <li><a href="#" target="_blank">家庭维修</a></li>
                  <li><a href="#" target="_blank">管道疏通</a></li>
                  <li><a href="#" target="_blank">开锁换锁</a></li>
                  <li><a href="#" target="_blank">安装打孔</a></li>
                  <li><a href="#" target="_blank">空气净化</a></li>
                </ul>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>家电清洗</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>衣物洗护</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>搬家速运</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>美容美妆</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>鲜花绿植</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>上门医护</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
              <li class="nav-name">
                <a href="#">
                  <i>养车用车</i>
                </a>
                <div class="h-before"></div>
                <div class="h-after"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="fff">
          <div class="servicebody">
            <div class="navigation">
              <span class="serviceIndex">家庭保洁</span>
              <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
            </div>
            <div class="servicetags">
              <div class="tagsListHeader">
                    <span class="lookMore">
                        <a href="#">更多服务></a>
                    </span>
              </div>
              <div class="row-sever">
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/1.1.jpg" alt="">
                    <div class="serviceName">家庭保洁</div>
                    <div class="description">服务内容：家庭保洁服务，2小时起订。（云家政暂时不提供带保...</div>
                    <div class="price">
                      <span class="number">30</span>元/小时
                      <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/1.2.jpg" alt="">
                    <div class="serviceName">室内保洁</div>
                    <div class="description">服务内容：1.室内保洁服务，2小时起订，服务商携带清洁装备...</div>
                    <div class="price">
                      <span class="number">29</span>元/小时
                      <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/1.3.jpg" alt="">
                    <div class="serviceName">家庭保洁</div>
                    <div class="description">服务内容：1.家庭保洁服务，2小时起订，服务商携带清洁装备...</div>
                    <div class="price">
                      <span class="number">35</span>元/小时
                       <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/1.4.jpg" alt="">
                    <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                    <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢服务内容：1...</div>
                    <div class="price">
                      <span class="number">149</span>元/3小时
                       <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/1.5.jpg" alt="">
                    <div class="serviceName">日常保洁 小时工</div>
                    <div class="description">服务内容：日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...</div>
                    <div class="price">
                      <span class="number">35</span>元/小时
                       <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="fff bbb">
          <div class="servicebody">
            <div class="navigation">
              <span class="serviceIndex">上门按摩</span>
              <span class="serviceType">中医推拿/油压SPA/局部理疗/足疗套餐/美体塑形/母婴保健</span>
            </div>
            <div class="servicetags">
              <div class="tagsListHeader">
                        <span class="lookMore">
                            <a href="#">更多服务></a>
                        </span>
              </div>
              <div class="row-sever">
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/2.1.jpg" alt="">
                    <div class="serviceName">招牌Massage</div>
                    <div class="description">时长：90分钟服务姿势：卧姿适用介绍：适用于工作繁忙...</div>
                    <div class="price">
                      <span class="number">135</span>元/次
                       <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/2.2.jpg" alt="">
                    <div class="serviceName">生命源</div>
                    <div class="description">服务时长：100分钟服务姿势：仰卧 俯卧适用人群：适...</div>
                    <div class="price">
                      <span class="number">498</span>元/项
                      <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/2.3.jpg" alt="">
                    <div class="serviceName">非凡-固本培元</div>
                    <div class="description">给予您极致的享受！服务时长：120分钟服务姿势：卧姿...</div>
                    <div class="price">
                      <span class="number">488</span>元/项
                      <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/2.4.jpg" alt="">
                    <div class="serviceName">芳香SPA</div>
                    <div class="description">时长：90分钟服务姿势：卧姿适用介绍：适用于工作繁忙...</div>
                    <div class="price">
                      <span class="number">239</span>元/次
                      <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="member-container">
                    <img src="../img/card/2.5.jpg" alt="">
                    <div class="serviceName">全身推拿</div>
                    <div class="description">时长：60分钟服务姿势：卧姿适用介绍：适用机关工作、...</div>
                    <div class="price">
                      <span class="number">128</span>元/次
                      <span class="btn"><router-link to="/information">查看详情</router-link></span>
                    </div>
                  </div>
                </a>
              </div>
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

  /*横幅区域*/
  #d_banner{
    position: relative;
  }
  .full-banner{
    margin: 0 auto;
    width: 1360px;
    height: 420px;
  }
  #banner-nav{
    background:  #757881;
    position: absolute;
    top:0;
    left: 105px;
    width: 180px;
    height: 420px;
    color: #fff;
  }
  #banner-nav .nav-name{
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding-left: 40px;
  }
  #banner-nav .nav-name a{
    display: inline-block;
    vertical-align: middle;
  }
  .nav-name a i{
    font-weight: bold;
    color: #fff;
    display: inline-block;
    width: 70px;
    font-style: normal;
  }
  #banner-nav .list-left .list-right{
    position: absolute;
    top:0;
    left: 180px;
    background: rgba(255,255,255,0.7);
    width: 160px;
    margin-top: 0;
    display: none;
  }
  .list-right li{
    text-align: center;
  }
  .list-right li>a:hover{
    text-decoration: none;
    color: #e94840;
  }
  .list-left .nav-name .h-before{
    display: inline-block;
    width: 6px;
    height: 11px;
    background: url("../img/right.png") no-repeat;
    float: right;
    margin-top: 15px;
    margin-right: 30px;
  }
  .list-left .nav-name .h-after{
    width: 10px;
    height: 10px;
    background: white;
    transform: rotate(40deg);
    opacity: 0.5;
    float: right;
    margin-top: 15px;
    margin-right: -6px;
    display: none;
  }
  .list-left li:hover .h-before{
    display: none;
  }
  .list-left li:hover .h-after{
    display: block;
  }
  .list-left li:hover{
    background: #60646D;;
  }
  /*.list-left>li:hover .list-right{
      color: #1b6d85;
      display: block;
  }*/
  #banner-nav .list-left li.nav-name:hover > ul.list-right{
    /*background-color: red;*/
    display: block;
  }
  /*图片分隔区*/
  .servicebody{
    width: 100%;
    height: 446px;
  }
  .fff{
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    clear: both;
  }
  .navigation{
    text-align: center;

  }
  .navigation span{
    display: block;
  }
  .serviceIndex{
    font-size: 28px;
    font-weight: bold;
    font-family: 'Microsoft YaHe';
    line-height: 1;

  }
  .serviceType{
    font-size: 22px;
    font-family: "幼圆";
    margin-top: 15px;
    color: #3d3838;
    line-height: 1;
  }
  .tagsListHeader{
    text-align: right;
  }
  .lookMore{
    font-size: 18px;
    color: #898989;
    font-family: "幼圆";
  }
  .row-sever{
    display: flex;
    margin-top: 10px;
  }
  .row-sever a{
    text-decoration: none;
  }
  .member-container{
    padding: 10px;
    width: 230px;
    border:1px solid #eaeaea;
    margin: 0 5px;
    background: #fff;
    cursor: pointer;
    height: 345px;
  }
  .member-container:hover{
    box-shadow: 5px 5px 15px #ccc;
  }
  .member-container img{
    width: 210px;
    height: 210px;
  }
  .member-container .serviceName{
    font-size: 16px;
    padding: 10px 0;
    font-weight: 800;
    color: #000;
    height: 28px;
    overflow: hidden;
    width: 101%;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .member-container .description{
    color: #929292;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 13px;
    line-height: 18px;
    height: 58px;
  }
  .member-container .price{
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #fb474f;
  }
  .member-container .price a{
    color: #fff;
  }
  .price .number{
    font-size: 20px;
  }
  .price .btn{
    float: right;
    padding: 0;
    width: 76px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #fb474f;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
  }

</style>

