<template>
  <div class="seat">
    <nav-bar>
      <div slot="left" @click="goback()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">卤味饭·热干面</div>
    </nav-bar>
    <div class="seat-map">
      <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="false"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="false"
        :margin="[0, 0]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="(item, index) in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="index"
          :minW="3"
          :minH="3"
          class="background"
        >
          <div v-if="item.type === 'fourTable'">
            <four-table :index="index" :state="item.state"/>
          </div>
          <div v-if="item.type === 'checkout'">
            <checkout :direc="item.isCol" />
          </div>
          <div v-if="item.type === 'door'">
            <door :direc="item.isCol" />
          </div>
        </grid-item>
      </grid-layout>
    </div>
    <div class="result">
      <div class="notice">
        <img src="~assets/images/speaker-smell.svg" alt="">
        座位最多保留30分钟
      </div>

      <div class="card-wrapper" ref="cardView">
        <ul class="card-list" ref="cardList">
          <li
            ref="cardItem"
            class="card-item"
            v-for="(item, index) in seatList"
            :key="index"
          >
            <seat-card :pos="item" />
          </li>
        </ul>
      </div>
    </div>
    <div class="confirm" @click="toComfirm">{{ lable }}</div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import VueGridLayout from "vue-grid-layout";
import FourTable from "components/content/tables/FourTable.vue";
import Checkout from "components/content/tables/Checkout.vue";
import Door from "components/content/tables/Door.vue";

import NavBar from "components/common/navbar/NavBar";

import SeatCard from "./childComps/seatCard/SeatCard";

import {getSeatMap} from "../../api/seat"
export default {
  name:'Seat',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    FourTable,
    Checkout,
    Door,
    NavBar,
    SeatCard,
  },
  data() {
    return {
      lable:null,
      seatList: null,
      layout: [
        { x: 0, y: 0, w: 3, h: 3, i: "0", type: "fourTable",state:[0,1,0,0]  },
        { x: 0, y: 3, w: 3, h: 3, i: "1", type: "fourTable",state:[0,0,0,0]  },
        { x: 3, y: 0, w: 3, h: 3, i: "2", type: "fourTable",state:[0,0,0,0]  },
        { x: 3, y: 3, w: 3, h: 3, i: "3", type: "fourTable",state:[0,0,0,0]  },
        { x: 9, y: 7, w: 3, h: 3, i: "4", type: "fourTable",state:[0,0,0,0]  },
        { x: 9, y: 3, w: 3, h: 3, i: "5", type: "fourTable",state:[0,0,1,0]  },
        { x: 9, y: 0, w: 3, h: 3, i: "6", type: "fourTable",state:[0,0,0,0]  },
        { x: 3, y: 7, w: 3, h: 3, i: "7", type: "fourTable",state:[0,1,0,0]  },
        { x: 0, y: 7, w: 3, h: 3, i: "8", type: "fourTable",state:[0,0,0,1]  },
        { x: 6, y: 11, w: 6, h: 2, i: "9", type: "checkout", isCol: false },
        // { x: 0, y: 13, w: 4, h: 1, i: "10", type: "door", isCol: false },
      ],
      
    };
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },
    toComfirm(){
      this.$router.push("/comfirm");
    }

  },

  mounted() {
    this.seatList = this.$store.state.seatList;
    getSeatMap(5).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })

    
  },
  updated() {
    if(this.seatList.length ===0){
      this.lable = "请先选座"
    }else{
      this.lable = "立即订坐"
    }


    this.$nextTick(() => {
      if (this.seatList.length !=0) {
        let cardW = this.$refs.cardItem[0].clientWidth;
        let marginR = 10;
        let width = (cardW + marginR) * this.seatList.length;
        this.$refs.cardList.style.width = width + "px";
        this.scroll = new BScroll(this.$refs.cardView, {
          scrollX: true,
        });
      }
    });
  },

};
</script>

<style scoped>
.seat {
  height: 100vh;
  background: rgb(245, 245, 245);
  overflow: hidden;
}

.seat-map {
  position: fixed;
  top: 46px;
  width: 100%;
  height: 420px;

  padding: 10px;
  box-sizing: border-box;
  
}
.result {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 60px;
  width: 94%;
  height: 100px;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
}
.notice {
  height: 35%;
  width: 100%;
  border-bottom: 1px solid rgb(243, 237, 237);
  font-size: 12px;
  display: flex;
  vertical-align: middle;
  color: rgb(163, 158, 158);
}

.notice>img{
  width: 17px;
  height: 17px;
  margin-right: 2px;
}

.card-wrapper {
  margin-top: 5px;

  width: 100%;
  overflow: hidden;
}
.card-list {
  width: 100%;
  display: flex;
}
.card-item {
  width: 60px;
  height: 50px;
  margin-right: 10px;
}
.confirm {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 5px;
  width: 95%;
  height: 45px;
  margin: 0 auto;
  background-image: linear-gradient(to right, rgb(238, 168, 143), coral);
  border-radius: 30px;

  text-align: center;
  color: rgb(223, 219, 219);
  line-height: 50px;
}
</style>