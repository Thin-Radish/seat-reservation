import { request } from '../common/utils/request'
const qs = require('qs')

export function userLogin(info){
  return request({
    method: 'post',
    url:'/user/login',
    data:qs.stringify(info)
  })
}


