import { request } from '../common/utils/request'


export function createIndent(indentInfo){
  return request({
    method: 'post',
    url: '/order/insert',
    data: indentInfo
  })
}



export function getIndentAll(page){
  return request({
    method: 'get',
    url: '/order/getMy',
    params: {
      page:0,
    }
  })
}

export function getIndentById(OrderId){
  return request({
    method: 'get',
    url: '/order/getOrderById',
    params: {
      id:OrderId
    }
  })
}




