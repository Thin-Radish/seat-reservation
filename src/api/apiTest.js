const axios = require('axios');
const fs = require("fs");



/**
 * 获取店铺座位分布数据
 */


// axios({
//   method: 'get',
//   url: 'http://114.55.38.15:15001/seat/getShopSeat',
//   params: {
//     id:6
//   }

// }).then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.log(err);  
// })


// let table = [
//   {
//     shopId: 8,
//     x: 6,
//     y: 5,
//     w: 3,
//     h: 3,
//     i: "0",
//     type: 4,
//     isRotate: false
//   },
//   {
//     shopId: 8,
//     x: 6,
//     y: 5,
//     w: 3,
//     h: 3,
//     i: "1",
//     type: 4,
//     isRotate: false
//   },
//   {
//     shopId: 8,
//     x: 6,
//     y: 5,
//     w: 3,
//     h: 3,
//     i: "2",
//     type: 4,
//     isRotate: false
//   },

// ]

/**
 * 插入位置分布数据
 */

// axios({
//   method: 'post',
//   url: 'http://114.55.38.15:15001/seat/insertAll',
//   data: table

// }).then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.log(err);
//   console.log('++++++');
// })






/**
 * 根据id获取店铺信息
 */

// axios({
//   method: 'get',
//   url: 'http://114.55.38.15:15001/shop/getShopById',
//   params: {
//     id:5
//   }

// }).then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.log(err);
// })


/**
 * 获取菜单
 */

// axios({
//   method:'get',
//   url:'http://114.55.38.15:15001/dish/getDishByType',
//   params:{
//     shopId:4
//   }

// }).then(res=>{  
//   console.log(res.data.data);
// }).catch(err=>{
//   console.log(err);
// })





/**
 * 用户登录
 */


axios({
  method: 'post',
  url: 'http://114.55.38.15:15001/user/login',
  params: {
    name: 'chenzhenliang',
    password: '123456789'
  }

}).then(res => {
  console.log(res.data);


  axios({
    method: 'get',
    url: 'http://114.55.38.15:15001/shop/getShopAll',
    params: {
      sort: 'id'
    }

  }).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })

  // axios({
  //   method: 'post',
  //   url: 'http://114.55.38.15:15001/shop/insert',
  //   data: {
  //     title: '傣妹火锅',
  //     openTime: '9:30-14:30;16:30-21:30',
  //     phoneNum: '400851751',
  //     local: '雨湖区车站路33号3楼',
  //     classify: 'hotpot',
  //     label: '味道挺好，下次再点',
  //     shopAvatar: 1,
  //     sampleGraph: 1,
  //     fileld: [1]

  //   }
  // }).then(res => {
  //   console.log(res.data);
  // }).catch(err => {
  //   console.log(err);
  //   console.log('++++++');
  // })



  // axios({
  //   method: 'post',
  //   url: 'http://114.55.38.15:15001/seat/insertAll',
  //   params: table

  // }).then(res => {
  //   console.log(res.data);
  // }).catch(err => {
  //   console.log(err);
  // })

}).catch(err => {
  console.log(err);
  console.log('++++++++++++++');
})


let shopInfo = {
  title: '傣妹火锅',
  openTime: '9:30-14:30;16:30-21:30',
  phoneNum: '400851751',
  local: '雨湖区车站路33号3楼',
  classify: 'hotpot',
  label: '味道挺好，下次再点',
  shopAvatar: 1,
  sampleGraph: 1,
  fileld: [1]

}


let indent = {
  "userId": 1,
  "shopId": 4,
  "state": 21995023.139329597,
  "arriveTime": "2020-9-9 19:20:12",
  "orderDish": [
    {
      "dishId": 2,
      "num": 2
    },
    {
      "dishId": 2,
      "num": 2
    },
    {
      "dishId": 2,
      "num": 2
    }
  ],
  "price": 12,
  "seats": [
    {
      "tableId": 1,
      "seatId": 1,
      "type": 4
    },
    {
      "tableId": 1,
      "seatId": 1,
      "type": 4
    },
    {
      "tableId": 1,
      "seatId": 1,
      "type": 4
    },
    {
      "tableId": 1,
      "seatId": 1,
      "type": 4
    },
    {
      "tableId": 1,
      "seatId": 1,
      "type": 4
    }
  ]
}


// axios({
//   method: 'post',
//   url: 'http://114.55.38.15:15001/order/insert',
//   data: indent
// }).then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.log(err);
//   console.log('++++++');
// })