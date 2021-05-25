import { request } from '../common/utils/request'

export function uploadShopImg(file){
  return request({
    method: 'post',
    url:'/shop/uploadImages',

    data:file
  })
}


export function setShopInfo(info){
  return request({
    method: 'post',
    url:'/shop/insert',
    data:info
  })
}

export function getShopAll(sortWay){
  return request({
    method: 'get',
    url:'/shop/getShopAll',
    params:{
      sort:sortWay
    }
  })
}

export function getShopById(shopId){
  return request({
    method: 'get',
    url:'/shop/getShopById',
    params:{
      id:shopId
    }
  })
}

export function getShopByType(shopType){
  return request({
    method: 'get',
    url:'/shop/getShopByType',
    params:{
      type:shopType
    }
  })
}

export function getDetailById(shopId){
  return request({
    method: 'get',
    url:'/shop/getDetailById',
    params:{
      id:shopId
    }
  })
}





let indent = {
  
  "userId": 1,
  "shopId": 4,
  "arriveTime": "2020-9-9 19:20:12",
  "orderDish": [
    {
      "dishId": 2,
      "num": 2
    },
    {
      "dishId": 2,
      "num": 2
    },
    {
      "dishId": 2,
      "num": 2
    },
    {
      "dishId": 2,
      "num": 2
    }
  ],
  "price": 12,
  "seats": [
    {
      "tableId": 1,
      "seatId": 2,
      "type": 4
    },
    {
      "tableId": 1,
      "seatId": 1,
      "type": 4
    },
    {
      "tableId": 2,
      "seatId": 2,
      "type": 6
    },
    {
      "tableId": 2,
      "seatId": 4,
      "type": 6
    }
  ]
}
