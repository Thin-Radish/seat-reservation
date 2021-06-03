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