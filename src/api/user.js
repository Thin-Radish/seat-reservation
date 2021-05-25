import { request } from '../common/utils/request'
const qs = require('qs')

export function userLogin(info){
  return request({
    method: 'post',
    url:'/user/login',
    data:qs.stringify(info)
  })
}

export function userRegister(info){
  return request({
    method: 'post',
    url:'/user/register',
    data:qs.stringify(info)
  })
}


export function setUserInfo(info){
  return request({
    method: 'post',
    url:'/user/setData',
    data:qs.stringify(info)
  })
}

export function modPassword(password){
  return request({
    method: 'post',
    url:'/user/setting',
    data:qs.stringify(password)
  })
}

export function getUserInfo(userId){
  return request({
    method: 'post',
    url:'/user/setting',
    data:qs.stringify(password)
  })
}





