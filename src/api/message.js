import { request } from '../common/utils/request'
const qs = require('qs')

export function getMessageList(userId){
  return request({
    method: 'get',
    url: '/message/getListByUserId',
    params: {
      id:userId
    }
  })
}


export function shopMessageList(shopId){
  return request({
    method: 'get',
    url: '/message/getListByShopId',
    params: {
      id:shopId
    }
  })
}

export function getChatRecord(getter,sender){
  return request({
    method: 'get',
    url: '/message/get',
    params: {
      getter:getter,
      sender:sender,
      page:0
    }
  })
}

export function delMessage(msgId){
  return request({
    method: 'post',
    url: '/message/updateList',
    data: qs.stringify({
      id:msgId,
      visible:0,
    })
  })
}





