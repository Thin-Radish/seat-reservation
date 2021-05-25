import { request } from '../common/utils/request'



export function addFood(foodInfo){
  return request({
    method: 'post',
    url:'/dish/insert',
    data:foodInfo
  })
}

export function getDishList(shopId){
  return request({
    method: 'get',
    url:'/dish/getDishByType',
    params:{
      shopId:shopId
    }
  })
}