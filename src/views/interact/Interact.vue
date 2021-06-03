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
      msgAll: [
        {
          ctime: "17:18",
          ident: "other",
          icon: require("../../assets/images/shop/shop-img/肖友记卤粉.jpg"),
          text: "您好，欢迎光临，有什么可以帮助到你的吗？",
        },
        {
          ident: "host",
          icon: require("../../assets/images/profile/avatar.svg"),
          text: "您好，我的卤粉不需要香菜，需要多加些汤，并且微辣，麻烦了",
        },
        {
          ident: "other",
          icon: require("../../assets/images/shop/shop-img/肖友记卤粉.jpg"),
          text: "好的呢，这就为您准备",
        },
      ],
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    goBack() {
      this.$router.go(-1);
    },
    getTitle() {
      this.title = this.$route.params.title;
      this.isShowImg = this.$route.params.isShowImg;
      if (this.title === undefined) {
        this.title = "聊天窗口";
      }
    },
    send() {
      // let msg = {
      //   ident: "host",
      //   icon: require("../../assets/images/profile/avatar.svg"),
      //   text: this.message,
      // };
      // this.msgAll.push(msg);
      // this.message = "";

      // this.$nextTick(() => {
      //   this.$refs.scroll.refresh();
      //   this.$refs.scroll.toBottom();
      // })

      // this.$store.commit("msgSend", msgInfo);
      // console.log(this.$store.state.recMsg.data);
    },

    getChatRecord_() {
      let userId = this.$store.state.userId;
      let shopId = this.$route.params.shopId;
      getChatRecord(userId, shopId)
        .then((res) => {
          console.log(res);
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