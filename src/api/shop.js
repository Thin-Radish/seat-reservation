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

export function getDetailById(shopId){
  return request({
    method: 'get',
    url:'/shop/getDetailById',
    params:{
      id:shopId
    }
  })
}



