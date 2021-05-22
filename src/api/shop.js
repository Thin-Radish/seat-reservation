import { request } from '../common/utils/request'

export function uploadShopImg(file){
  return request({
    method: 'post',
    url:'/shop/uploadImage',
    // headers: { "Content-Type": "multipart/form-data"},
    data:file
  })
}


export function setShopInfo(info){
  return request({
    method: 'post',
    url:'/shop/uploadImage',
    data:info
  })
}

