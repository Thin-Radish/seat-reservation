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

import { getIndentAll } from "api/indent";
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
      indentAll: [
        {
          shopName: "乐山自助火锅",
          shopAvatar: require("../../assets/images/shop/shop-img/乐山自助火锅（天虹店）.jpg"),
          state: 2,
          date: 1622508907000,
          count: 2,
          price: 168,
        },
        {
          shopName: "捞缘椰子鸡",
          shopAvatar: require("../../assets/images/shop/shop-img/捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）.png"),
          state: 2,
          date: 1622782507000,
          count: 1,
          price: 58,
        },
        {
          shopName: "昭日料理",
          shopAvatar: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
          state: 3,
          date: 1622886907000,
          count: 1,
          price: 19,
        },
      ],
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
  activated() {
    this.$refs.scroll.refresh();
  },
  created() {
    getIndentAll()
      .then((res) => {
        this.indentAll = this.indentAll.concat(res.data).reverse();
      })
      .catch((err) => {
        console.log(err);
      });
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