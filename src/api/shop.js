import { request } from '../common/utils/request'
const qs = require('qs')

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

export function updateShopInfo(info){
  return request({
    method: 'post',
    url:'/shop/update',
    data:info
  })
}

export function getShopAll(shops){
  return request({
    method: 'get',
    url:'/shop/getShopAll',
    params:{
      sort:shops.currentSort,
      page:shops.currentPage
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



