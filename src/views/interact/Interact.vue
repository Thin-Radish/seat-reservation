<template>
  <div class="interact">
    <nav-bar>
      <div slot="left" @click="goBack()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">{{ title }}</div>
      <div slot="right" v-if="isShowImg">
        <img
          src="~assets/images/nav-bar/shop-icon.svg"
          class="shop-icon"
          @click="goto('/shop')"
        />
      </div>
    </nav-bar>

    <scroll class="msg-content" :probeType="3" ref="scroll">
      <div v-for="(item, index) in msgAll" :key="index">
        <inter-card :message="item" />
      </div>
      <div class="botton"></div>
    </scroll>

    <van-field
      class="text"
      v-model="message"
      rows="1"
      :autosize="{ maxHeight: 80, minHeight: 20 }"
      type="textarea"
      placeholder="请输入信息..."
    >
      <template #button>
        <van-button size="small" type="primary" @click="send">发送</van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import InterCard from "./childComps/InterCard";

import { getChatRecord } from "api/message";
export default {
  name: "Interact",
  components: {
    Scroll,
    NavBar,
    InterCard,
  },
  data() {
    return {
      clientHeight: null,
      isShowImg: true,
      title: "",
      message: "",
      msgAll: [],
    };
  },
  watch:{
    "$store.state.recMsg":{
      deep:true,
      handler: function (newValue, oldValue){

        let getter = this.$store.state.userId;  //4
        // let sender = this.$route.params.shopId; 
        if(newValue.sender ===1 && newValue.getter === getter){
          let msgItem ={
            ident: "other",
            icon:this.$route.params.message.shopAvatar,
            text:newValue.message
          }
          this.msgAll.push(msgItem);
          this.$nextTick(() => {
          this.$refs.scroll.refresh();
          this.$refs.scroll.toBottom();
      })
        }
      }
    }
  },
  computed:{
    shopAvatar(){
      return this.$route.params.message.shopAvatar;
    },
    userAvatar(){
      return this.$route.params.message.userAvatar;
    },
    userId(){
      return this.$store.state.userId;
    },
    shopUserId(){
      return this.$route.params.message.shopUserId;
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    goBack() {
      this.$router.go(-1);
    },
    getTitle() {
      this.title = this.$route.params.message.title;
      this.isShowImg = this.$route.params.isShowImg;
      if (this.title === undefined) {
        this.title = "聊天窗口";
      }
    },
    filterMsgData(data){
      for(let i= data.length-1; i>=0; i--){
        if(data[i].getter === this.userId){
          var ident = "other";
          var icon = this.shopAvatar;
        }
        else{
          var ident = "host";
          var icon = this.userAvatar;

        }
        let msgItem ={
          ident:ident,
          icon:icon,
          text:data[i].message
        }
        this.msgAll.push(msgItem);
      }
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
        this.$refs.scroll.toBottom();
      })
    },
    sendMsg(message){

      var sendMessage ={
        message:message,
        getter:this.shopUserId,
        sender:this.userId,
        type: 'message',                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      }

      sendMessage = JSON.stringify(sendMessage);
      this.$store.state.stomp.send("/app/message/talk", {}, sendMessage);
    },
    send() {
      let msg = {
        ident: "host",
        icon: this.userAvatar,
        text: this.message,
      };
      this.msgAll.push(msg);
      // this.message = "";

      this.$nextTick(() => {
        this.$refs.scroll.refresh();
        this.$refs.scroll.toBottom();
      })
      this.sendMsg(this.message);
    },

    getChatRecord_() {
      let getter = this.userId;
      let sender = this.shopUserId;
      getChatRecord(getter, sender)
        .then((res) => {
          console.log(res);
          this.filterMsgData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.getTitle();
  },
  mounted() {
    this.getChatRecord_();
  },
};
</script>

<style scoped>
.interact {
  /* height: 100vh; */
  background: #f2f2f2;
}
/* .shop-icon{
  margin-top: 10px;
} */
.text {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  background: #f1efef;
  box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.1);
}
.text /deep/ .van-field__control {
  border-radius: 5px;
  background: #fff;
  padding: 5px;
}

.msg-content {
  overflow: hidden;
  background: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 50px;
}

.botton {
  width: 100%;
  height: 20px;
}
</style>