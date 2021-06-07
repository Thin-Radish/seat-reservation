//存储数据
const state = {
  foodList:[],
  seatList:[],
  index:0,
  userRole:0,
  userId:null,
  shopId:null,
  sellerInfo:{},
  routes:[],

  ws: null,
  //推送消息
  recMsg:{},
  stomp:null,
};
export default state;