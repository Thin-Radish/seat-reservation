import { request } from '../common/utils/request'
const qs = require('qs')

export function userLogin(info){
  return request({
    method: 'post',
    url:'/user/login',
    data:qs.stringify(info)
  })
}



// axios({
//   method: 'post',
//   url: 'http://114.55.38.15:15001/user/login',
//   params: {
//     name: 'chenzhenliang',
//     password: '123456789'
//   }


