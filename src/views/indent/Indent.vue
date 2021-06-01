<template>
  <div class="indent">
    <nav-bar>
      <div slot="center">账单查看</div>
    </nav-bar>
    <van-tabs v-model="activeName" class="tab" color="#61a9f1">
      <van-tab title="全部" :name="-1"></van-tab>
      <van-tab title="进行中" :name="1"></van-tab>
      <van-tab title="待评价" :name="2"></van-tab>
      <van-tab title="退款" :name="3"></van-tab>
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

import { getIndentAll } from "api/indent"
export default {
  components: {
    Scroll,
    NavBar,
    TabControl,
    IndentCard,
  },
  data() {
    return {
      activeName: -1,
      selIndent: [],
      indentAll:[],
      // indentAll: [
      //   {
      //     shopTitle: "串客·来一手烧烤（福兴中路店子）",
      //     shopImg: require("../../assets/images/shop/shop-img/串客·来一手烧烤（福兴中路店子）.jpg"),
      //     state: 1,
      //     ctime: "2021-5-5 19:30",
      //     count: 2,
      //     fee: 132,
      //   },
      //   {
      //     shopTitle: "昭日料理（万达店）",
      //     shopImg: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
      //     state: 2,
      //     ctime: "2021-5-4 21:20",
      //     count: 1,
      //     fee: 19,
      //   },
      //   {
      //     shopTitle: "记亦抄纸巷·油条包麻糍（地下商业街A区店）",
      //     shopImg: require("../../assets/images/shop/shop-img/记亦抄纸巷·油条包麻糍（地下商业街A区店）.jpg"),
      //     state: 1,
      //     ctime: "2021-5-4 15:20",
      //     count: 1,
      //     fee: 25,
      //   },
      //   {
      //     shopTitle: "夫子庙老鸭粉丝馆（城市盒子店）",
      //     shopImg: require("../../assets/images/shop/shop-img/夫子庙老鸭粉丝馆（城市盒子店）.jpg"),
      //     state: 1,
      //     ctime: "2021-4-25 14:10",
      //     count: 1,
      //     fee: 30,
      //   },
      //   {
      //     shopTitle: "乐山自助火锅（天虹店）",
      //     shopImg: require("../../assets/images/shop/shop-img/乐山自助火锅（天虹店）.jpg"),
      //     state: 2,
      //     ctime: "2021-4-20 12:10",
      //     count: 2,
      //     fee: 168,
      //   },
      //   {
      //     shopTitle: "捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）",
      //     shopImg: require("../../assets/images/shop/shop-img/捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）.png"),
      //     state: 2,
      //     ctime: "2021-4-25 11:10",
      //     count: 1,
      //     fee: 58,
      //   },
      //   {
      //     shopTitle: "昭日料理（万达店）",
      //     shopImg: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
      //     state: 2,
      //     ctime: "2021-4-20 10:20",
      //     count: 1,
      //     fee: 19,
      //   },
      //   {
      //     shopTitle: "李喜欢手工虾（万达店）",
      //     shopImg: require("../../assets/images/shop/shop-img/李喜欢手工虾（万达店）.jpg"),
      //     state: 0,
      //     ctime: "2021-4-24 9:10",
      //     count: 1,
      //     fee: 25,
      //   },
      //   {
      //     shopTitle: "柒酒烤肉（科大店）",
      //     shopImg: require("../../assets/images/shop/shop-img/柒酒烤肉（科大店）.jpg"),
      //     state: 1,
      //     ctime: "2021-4-11 11:20",
      //     count: 1,
      //     fee: 35,
      //   },
      //   {
      //     shopTitle: "Mr.胡韩式料理",
      //     shopImg: require("../../assets/images/shop/shop-img/Mr.胡韩式料理.jpg"),
      //     state: 2,
      //     ctime: "2021-4-5 8:20",
      //     count: 2,
      //     fee: 78,
      //   },
      //   {
      //     shopTitle: "傣妹火锅（潭城店）",
      //     shopImg: require("../../assets/images/shop/shop-img/傣妹火锅（潭城店）.jpg"),
      //     state: 0,
      //     ctime: "2021-4-1 13:20",
      //     count: 1,
      //     fee: 135,
      //   },
      //   {
      //     shopTitle: "田村长干爆牛蛙（万达店）",
      //     shopImg: require("../../assets/images/shop/shop-img/田村长干爆牛蛙（万达店）.jpg"),
      //     state: 3,
      //     ctime: "2021-3-20 15:20",
      //     count: 2,
      //     fee: 190,
      //   },
      //   {
      //     shopTitle: "索M小串（天虹店）",
      //     shopImg: require("../../assets/images/shop/shop-img/索M小串（天虹店）.jpg"),
      //     state: 0,
      //     ctime: "2021-3-15 11:20",
      //     count: 2,
      //     fee: 56,
      //   },
      //   {
      //     shopTitle: "老福州",
      //     shopImg: require("../../assets/images/shop/shop-img/老福州.jpg"),
      //     state: 3,
      //     ctime: "2021-3-12 14:30",
      //     count: 1,
      //     fee: 62,
      //   },
      //   {
      //     shopTitle: "肖友记卤粉",
      //     shopImg: require("../../assets/images/shop/shop-img/肖友记卤粉.jpg"),
      //     state: 2,
      //     ctime: "2021-3-10 12:10",
      //     count: 3,
      //     fee: 25,
      //   },
      //   {
      //     shopTitle: "花雕醉鸡（湘潭总店）",
      //     shopImg: require("../../assets/images/shop/shop-img/花雕醉鸡（湘潭总店）.png"),
      //     state: 2,
      //     ctime: "2021-3-5 19:10",
      //     count: 3,
      //     fee: 150,
      //   },
      //   {
      //     shopTitle: "蛙来哒（华隆步步高店）",
      //     shopImg: require("../../assets/images/shop/shop-img/蛙来哒（华隆步步高店）.jpg"),
      //     state: 3,
      //     ctime: "2021-3-2 20:10",
      //     count: 1,
      //     fee: 150,
      //   },
      // ],
    };
  },
  computed: {
    showIndent() {
      let selIndent = [];
      if (this.activeName !== -1) {
        this.indentAll.forEach((elem) => {
          if (elem.state === this.activeName) {
            selIndent.push(elem);
          }
        });
        return selIndent;
      } else {
        return this.indentAll;
      }
    },
  },
  methods: {
    refScroll() {
      this.$refs.scroll.refresh();
    },
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  activated(){
    this.$refs.scroll.refresh();
  },
  created() {
    getIndentAll().then(res=>{
      console.log(res);
      this.indentAll = res.data;
    }).catch(err=>{
      console.log(err);
    })
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