import { request } from '../common/utils/request'
const qs = require('qs')

export function createIndent(indentInfo){
  return request({
    method: 'post',
    url: '/order/insert',
    data: qs.stringify(indentInfo)
  })
}

