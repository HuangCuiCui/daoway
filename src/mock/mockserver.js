/**
 * Created by Administrator on 2017/7/12 0012.
 */

import Mock from "mockjs"
import data from "./data.json"


Mock.mock('/api/server',{
  code:0,
  data : data.server
})

Mock.mock('/api/seller',{
  code:0,
  data : data.seller
})
