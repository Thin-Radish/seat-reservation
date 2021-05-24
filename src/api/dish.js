import { request } from '../common/utils/request'



export function addFood(foodInfo){
  return request({
    method: 'post',
    url:'/dish/insert',
    data:foodInfo
  })
}