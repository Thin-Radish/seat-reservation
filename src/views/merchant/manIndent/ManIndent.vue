<template>
  <div class="indent">
    <nav-bar>
      <div slot="center">账单管理</div>
    </nav-bar>
    <van-tabs v-model="activeName" class="tab" color="#61a9f1">
      <van-tab title="新订单" :name="0"></van-tab>
      <van-tab title="进行中" :name="1"></van-tab>
      <van-tab title="退款" :name="2"></van-tab>
      <van-tab title="历史记录" :name="3"></van-tab>
    </van-tabs>
    <scroll class="content" ref="scroll">
      <div class="top"></div>
      
      <indent-card
        v-for="(item, index) in showIndent"
        :key="index"
        :indent="item"
      />
      <div class="botton"></div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import IndentCard from "./childComps/IndentCard";

export default {
  components: {
    Scroll,
    NavBar,
    TabControl,
    IndentCard,
  },
  data() {

    return {
      activeName: 0,
      selIndent: [],
      indentAll: [
        {
          userName: "爱吃饭的瘦萝卜",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 0,
          ctime: "2021-5-4 19:30",
          count: 2,
          fee: 132,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 0,
          ctime: "2021-5-4 21:20",
          count: 1,
          fee: 19,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 1,
          ctime: "2021-5-4 15:20",
          count: 1,
          fee: 25,
        },
        {
          userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 1,
          ctime: "2021-4-25 14:10",
          count: 1,
          fee: 30,
        },
        {
         userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-4-20 12:10",
          count: 2,
          fee: 168,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-4-25 11:10",
          count: 1,
          fee: 58,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-4-20 10:20",
          count: 1,
          fee: 19,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-4-24 9:10",
          count: 1,
          fee: 25,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-4-11 11:20",
          count: 1,
          fee: 35,
        },
        {
          userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 2,
          ctime: "2021-4-5 8:20",
          count: 2,
          fee: 78,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-4-1 13:20",
          count: 1,
          fee: 135,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 2,
          ctime: "2021-3-20 15:20",
          count: 2,
          fee: 190,
        },
        {
          userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-3-15 11:20",
          count: 2,
          fee: 56,
        },
        {
          userName: "冰冰西瓜汁",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-3-12 14:30",
          count: 1,
          fee: 62,
        },
        {
         userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-3-10 12:10",
          count: 3,
          fee: 25,
        },
        {
          userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-3-5 19:10",
          count: 3,
          fee: 150,
        },
        {
          userName: "甜甜草莓酱",
          userImg: require("../../../assets/images/profile/avatar.svg"),
          state: 3,
          ctime: "2021-3-2 20:10",
          count: 1,
          fee: 150,
        },
      ],
    };
  },
  computed: {
    showIndent() {
      let selIndent = [];
      this.indentAll.forEach((elem) => {
        if (elem.state === this.activeName) {
          selIndent.push(elem);
        }
      });
      return selIndent;
      
    },
  },
  methods: {
    refScroll() {
        this.$refs.scroll.refresh();
    },
    goto(path){
      this.$router.push(path);
    }
  },
  // 每次切换刷新下scroll
  watch:{
    activeName(){
      this.$nextTick(()=>{
        this.$refs.scroll.refresh();
      })
    }
  },
  activated(){
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>


.tab {
  position: fixed;
  top: 46px;
  width: 100%;
  color: #8abef1;
}
.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 50px;
}
.top {
  height: 7px;
  width: 100%;
}
.botton {
  height: 10px;
  width: 100%;
}
</style>