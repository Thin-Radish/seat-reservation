<template>
  <div class="message">
    <nav-bar>
      <div slot="center">消息通知</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div class="top"></div>
      <div
        v-for="(item, index) in messageList"
        :key="index"
        @click="goInteract(item.title,item.shopId)"
      >
        <van-swipe-cell>
          <msg-card :message="item" />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </div>
      <div class="bottom"></div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import MsgCard from "./childComps/MsgCard";

import { getMessageList } from "api/message";
export default {
  components: {
    Scroll,
    NavBar,
    MsgCard,
  },
  data() {
    return {
      messageList: [],
    };
  },
  methods: {
    goInteract(title,shopId) {
      this.$router.push({
        name: "Interact",
        params: { title,shopId,isShowImg: true },
      });
    },
    getMessageList() {
      let userId = this.$store.state.userId;
      getMessageList(userId)
        .then((res) => {
          console.log(res);
          this.messageList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  mounted() {
    this.getMessageList();
  },
};
</script>

<style scoped>
.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 50px;
}

.delete-button {
  height: 100%;
  border-radius: 10px;
  margin-right: 5px;
}
.top {
  height: 7px;
  width: 100%;
}
.bottom {
  height: 20px;
  width: 100%;
}
</style>