import { request } from '../common/utils/request'


export function getSeatMap(shopId){
  return request({
    url:'/seat/getShopSeat',
    params:{
      id:shopId
    }
  })
}



export function setSeatMap(table){
  return request({
    method: 'post',
    url: '/seat/insertAll',
    data: table
  })
}




