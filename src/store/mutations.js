import SockJS from "sockjs-client"
import Stomp from "stompjs"

const mutations = {
  //mutations唯一的目的就是修改 state中状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  commitFoodList(state, paylod) {
    state.foodList = paylod;
  },
  commitSeatList(state, paylod) {
    state.seatList = paylod;
  },
  commitRole(state, paylod) {
    state.userRole = paylod;
  },
  commitUserId(state, paylod) {
    state.userId = paylod;
  },
  commitSellerInfo(state, paylod) {
    state.sellerInfo = paylod;
  },


  //websocket初始化
  initWebsocket(state) {

    var url = 'http://114.55.38.15:15001/now';
    var sock = new SockJS(url);
    state.stomp = Stomp.over(sock);


    state.stomp.connect(
      // headers连接头
      {
        id: state.userId,
      },

      //连接成功
      function connectCallback(frame) {
        var tx = state.stomp.begin();
        tx.commit();
        console.log("websocket连接成功");
        
        state.stomp.subscribe("/user/queue/talk", res => {
          var content = res.body;
          var msgObj = JSON.parse(content);
          console.log(msgObj);
          // console.log(msgObj.message);
          state.recMsg = msgObj;
        });    

      },

      // 连接失败
      function errorCallBack(error) {
        console.log(error);
      }
    );
  },

  // msgSend(state,msgInfo){

  //   // var sendMessage ={
  //   //   message:message,
  //   //   getter:getter,
  //   //   sender:state.userId,
  //   //   type: 'message',
  //   // }

  //   msgInfo.sender = state.userId;
  //   msgInfo.type = 'message';

  //   msgInfo = JSON.stringify(msgInfo);

  //   state.stomp.send("/app/message/talk", {}, msgInfo);

  // }

}

export default mutations;

