import { request } from '../common/utils/request'


export function getMessageList(userId){
  return request({
    method: 'get',
    url: '/message/getListByUserId',
    params: {
      id:userId
    }
  })
}

export function getChatRecord(getter,sender){
  return request({
    method: 'get',
    url: '/message/get',
    params: {
      getter:getter,
      sender:sender
    }
  })
}

