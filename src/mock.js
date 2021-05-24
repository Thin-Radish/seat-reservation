const Mock = require('mockjs')

const Random = Mock.Random


const shopData=[
  {
    shopImg: require("../../assets/images/shop/shop-img/呷哺呷哺·火锅茶语（湘潭中心店）.jpg"),
    title: "呷哺呷哺·火锅茶语（湘潭中心店）",
    star: "4.7",
    monSell: "1138",
    label: " 味道挺好的，下次再点",
    totalSeat: "18",
    remSeat: "15",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/夫子庙老鸭粉丝馆（城市盒子店）.jpg"),
    title: "夫子庙老鸭粉丝馆（城市盒子店）",
    star: "4.9",
    monSell: "1380",
    label: "真宗的东北味",
    totalSeat: "30",
    remSeat: "11",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/乐山自助火锅（天虹店）.jpg"),
    title: "乐山自助火锅（天虹店）",
    star: "4.6",
    monSell: "538",
    label: "好吃的烤鱼，不能错过",
    totalSeat: "25",
    remSeat: "14",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）.png"),
    title: "捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
    title: "昭日料理（万达店）",
    star: "4.6",
    monSell: "560",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "48",
    remSeat: "30",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/李喜欢手工虾（万达店）.jpg"),
    title: "李喜欢手工虾（万达店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/柒酒烤肉（科大店）.jpg"),
    title: "柒酒烤肉（科大店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
   {
    shopImg: require("../../assets/images/shop/shop-img/Mr.胡韩式料理.jpg"),
    title: "Mr.胡韩式料理",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/傣妹火锅（潭城店）.jpg"),
    title: "傣妹火锅（潭城店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/田村长干爆牛蛙（万达店）.jpg"),
    title: "田村长干爆牛蛙（万达店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/索M小串（天虹店）.jpg"),
    title: "索M小串（天虹店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/老福州.jpg"),
    title: "老福州",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/肖友记卤粉.jpg"),
    title: "肖友记卤粉",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/花雕醉鸡（湘潭总店）.png"),
    title: "花雕醉鸡（湘潭总店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
  {
    shopImg: require("../../assets/images/shop/shop-img/蛙来哒（华隆步步高店）.jpg"),
    title: "蛙来哒（华隆步步高店）",
    star: "4.8",
    monSell: "1588",
    label: " 香辣猪脚，陆湘烤蹄",
    totalSeat: "13",
    remSeat: "8",
  },
]

function getShopAll() {
  return shopData;
}


Mock.mock('http://127.0.0.1:8081/userinfo', userInfo) ;
Mock.mock('http://127.0.0.1:8081/account',account);
Mock.mock('http://127.0.0.1:8081/hygiene',hygiene);
Mock.mock('http://127.0.0.1:8081/materials',materials);
Mock.mock('http://127.0.0.1:8081/materials',materials);
Mock.mock('http://127.0.0.1:15001/getShopAll',getShopAll);
Mock.mock('http://127.0.0.1:8081/test',"post",paylod=>{
  console.log(paylod);
  return "pass"
});