import SockJS from "socket.js"
import Stomp from "stomp.js"

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
    state.role = paylod;
  },
  commitUserId(state, paylod) {
    state.userId = paylod;
  },
  commitSellerInfo(state, paylod) {
    state.sellerInfo = paylod;
  },


  //websocket初始化
  initWebsocket(state) {

    var url = 'http://localhost:8080/now';
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

        
        state.stomp.subscribe("/user/queue/talk", res => {
          var content = res.body;
          var obj = JSON.parse(content);
          console.log(obj.message);
        });

      },

      // 连接失败
      function errorCallBack(error) {
        console.log(error);
      }
    );
  },

  msgSend(state,message,getter){

    var sendMessage ={
      message:message,
      getter:getter,
      sender:state.userId,
      type: 'message',
    }

    state.stomp.send("/app/message/talk", {}, sendMessage);

  }


}

export default mutations;







    // const wsUrl = 'ws://localhost:3000';
    // state.ws = new WebSocket(wsUrl);

    // state.ws.onopen = function () {
    //   console.log("open websocket...");
    // };

    // //接收服务端消息
    // state.ws.onmessage = function (msg) {
    //   state.recMsg = msg;

    // };