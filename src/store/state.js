//存储数据
const state = {
  foodList:[],
  seatList:[],
  index:0,
  role:0,
  userId:null,
  sellerInfo:{},

  ws: null,
  //推送消息
  recMsg:{},
  stomp:null,
};
export default state;