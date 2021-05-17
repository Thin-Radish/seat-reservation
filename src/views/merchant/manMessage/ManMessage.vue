<template>
  <div class="message">
    <nav-bar>
      <div slot="center">消息通知</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div class="top"></div>
      <div
        v-for="(item, index) in messageAll"
        :key="index"
        @click="goInteract(item.shopTitle)"
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
import MsgCard from "./childComps/msgcard/MsgCard";
export default {
  components: {
    Scroll,
    NavBar,
    MsgCard,
  },
  data() {
    return {
      messageAll: [
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "5-5 19:30",
        },
        {
          shopTitle: "不吃饭的胖萝卜",
          shopImg: require("../../../assets/images/profile/宫崎骏人物 (1).svg"),
          ctime: "5-4 21:20",
        },
        {
          shopTitle: "不吃饭的胖萝卜",
          shopImg: require("../../../assets/images/profile/二次元宠物-01.svg"),
          ctime: "5-4 21:20",
        },
        {
          shopTitle: "甜甜草莓酱",
          shopImg: require("../../../assets/images/profile/二次元宠物-02.svg"),
          ctime: "5-4 15:20",
        },
        {
          shopTitle: "酸酸柠檬果",
          shopImg: require("../../../assets/images/profile/二次元宠物-03.svg"),
          ctime: "4-25 14:10",
        },
        {
          shopTitle: "香香芒果干",
          shopImg: require("../../../assets/images/profile/二次元宠物-04.svg"),
          ctime: "4-20 12:10",
        },
        {
          shopTitle: "妙妙波罗蜜",
          shopImg: require("../../../assets/images/profile/二次元宠物-05.svg"),
          ctime: "4-25 11:10",
        },
        {
          shopTitle: "香香榴莲饼",
          shopImg: require("../../../assets/images/profile/二次元宠物.svg"),
          ctime: "4-20 10:20",
        },
        {
          shopTitle: "冰冰西瓜汁",
          shopImg: require("../../../assets/images/profile/宫崎骏 (1).svg"),
          ctime: "4-24 9:10",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/宫崎骏 (2).svg"),
          ctime: "4-11 11:20",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/宫崎骏 (3).svg"),
          ctime: "4-5 8:20",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "4-1 13:20",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "3-20 15:20",
        },
        {
         shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "3-15 11:20",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "3-12 14:30",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "3-10 12:10",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "3-5 19:10",
        },
        {
          shopTitle: "爱吃饭的瘦萝卜",
          shopImg: require("../../../assets/images/profile/avatar.svg"),
          ctime: "3-2 20:10",
        },
      ],
    };
  },
  methods: {
    goInteract(value) {
      this.$router.push({ name: "Interact", params: { title: value,isShowImg:false } });
    },
  },
  activated() {
    this.$refs.scroll.refresh();
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