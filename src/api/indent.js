import { request } from '../common/utils/request'


export function createIndent(indentInfo){
  return request({
    method: 'post',
    url: '/order/insert',
    data: indentInfo
  })
}

