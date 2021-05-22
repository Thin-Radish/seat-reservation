<template>
  <div class="seat">
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">位置分布</div>
    </nav-bar>
    <div class="seat-map">
      <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="28"
        :max-rows="15"
        :is-draggable="isdraggable"
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
          ref="gridItem"
          class="background"
        >
          <div v-if="item.type === 4">
            <four-table :index="index" :state="item.state" :isRotate="item.isRotate"/>
          </div>
         
          <div v-if="item.type === 2">
            <two-table :index="index" :state="item.state" :isRotate="item.isRotate" />
          </div>

          <div v-if="item.type === 6">
            <six-table :index="index" :state="item.state" :isRotate="item.isRotate" />
          </div>


          <!-- <div v-if="item.type === 'checkout'">
            <checkout :direc="item.isCol" />
          </div> -->

          <!-- <div v-if="item.type === 'door'">
            <door :direc="item.isCol" />
          </div> -->
        </grid-item>
      </grid-layout>
    </div>
    <div class="eidt">
      <div class="modMap">修改</div>
      <div class="saveMap" @click="saveMap">保存</div>
    </div>
    <div class="sele-seat">
      <div class="item">
        <div class="seat-sort">双 <br> 人<br>坐</div>
        <div class="select">
          <div class="first" @click="addDouSeat(false)">横向</div>
          <div @click="addDouSeat(true)">纵向</div> 
        </div>   
      </div>
      <div class="item">
        <div class="seat-sort">四 <br> 人<br>坐</div>
        <div class="select">
          <div class="first" @click="addFourSeat(false)">横向</div>
          <div @click="addFourSeat(true)">纵向</div>
        </div>   
      </div>
      <div class="item">
        <div class="seat-sort">六 <br> 人<br>坐</div>
        <div class="select">
          <div class="first" @click="addSixSeat(false)">横向</div>
          <div @click="addSixSeat(true)">纵向</div>
        </div>   
      </div>
    </div>
    <!-- <div class="confirm" @click="toComfirm"></div> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import VueGridLayout from "vue-grid-layout";
import FourTable from "components/content/tables/FourTable.vue";
import TwoTable from "components/content/tables/TwoTable.vue";
import SixTable from "components/content/tables/SixTable.vue";
import Checkout from "components/content/tables/Checkout.vue";
import Door from "components/content/tables/Door.vue";

import NavBar from "components/common/navbar/NavBar";

import {setSeatMap} from "api/seat"

const axios = require('axios');
export default {
  name:'Seat',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    TwoTable,
    FourTable,
    SixTable,
    Checkout,
    Door,
    NavBar,
  },
  data() { 
    return {
      isdraggable:true,
      // tableType:[
      //   { x:9,y:9,w:2,h:3,i:0,type:"twoTable",isRotate:false,state:[0,0] },
      //   { x:9,y:9,w:3,h:3,i:0,type:"fourTable",isRotate:false,state:[0,0,0,0] },
      //   { x:9,y:9,w:4,h:3,i:0,type:"sixTable",isRotate:false,state:[0,0,0,0,0,0]}
      // ],
      layout: [
        // { x: 0, y: 0, w: 2, h: 3, i: "0", type: "twoTable",isRotate:true,state:[0,0]  },
        // { x: 0, y: 3, w: 4, h: 3, i: "1", type: "sixTable",isRotate:false,state:[0,0,0,0,0,0]  },
        // { x: 3, y: 0, w: 3, h: 3, i: "2", type: "fourTable",isRotate:false,state:[0,0,0,0]  },
        // { x: 9, y: 7, w: 3, h: 3, i: "4", type: "fourTable",isRotate:false,state:[0,0,0,0]  },
        // { x: 9, y: 3, w: 3, h: 3, i: "5", type: "fourTable",isRotate:false,state:[0,0,0,0]  },
        // { x: 9, y: 0, w: 3, h: 3, i: "6", type: "fourTable",isRotate:true,state:[0,0,0,0]  },
        // { x: 3, y: 7, w: 3, h: 3, i: "7", type: "fourTable",isRotate:true,state:[0,0,0,0]  },
        // { x: 0, y: 7, w: 3, h: 3, i: "8", type: "fourTable",isRotate:true,state:[0,0,0,0]  },
        // { x: 0, y: 7, w: 3, h: 3, i: "9", type: "table",state:[0,0,0,1]  },
        // { x: 0, y: 7, w: 3, h: 3, i: "10", type: "table",state:[0,0,0,1]  },
        // { x: 0, y: 7, w: 3, h: 3, i: "11", type: "table",state:[0,0,0,1]  },
        // { x: 6, y: 11, w: 6, h: 2, i: "9", type: "checkout", isCol: false },
        // { x: 0, y: 13, w: 4, h: 1, i: "10", type: "door", isCol: false },
      ],
      
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    modMap(){
      this.isdraggable = true;
    },
    saveMap(){
      this.isdraggable = false;
    },
    addDouSeat(isRotate){
      let table={
        x:9,y:9,w:2,h:3,i:this.layout.length,type:2,isRotate:isRotate,state:[0,0],shopId:11 
      }
      this.layout.push(table);
    },
    addFourSeat(isRotate){
      let table={
        x:9,y:9,w:3,h:3,i:this.layout.length,type:4,isRotate:isRotate,state:[0,0,0,0],shopId:11 
      }
      this.layout.push(table);
    },
    addSixSeat(isRotate){
      let table={
        x:7,y:9,w:4,h:3,i:this.layout.length,type:6,isRotate:isRotate,state:[0,0,0,0,0,0],shopId:11 
      }
      this.layout.push(table);
    },
    saveMap(){

      let table = this.layout;

      setSeatMap(table).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })

      // console.log(this.layout);
    }






  },
  mounted(){
    this.$bus.$on('delTable',index=>{
      //删除该号桌子
      this.layout.splice(index,1);
      //重新编号
      for(let i in this.layout){
        this.layout[i].i = i;
      }
    })
  }

};
</script>

<style scoped>
.seat {
  /* height: 100vh; */
  background: rgb(245, 245, 245);
  overflow: hidden;

  display: flex;
}

.seat-map {
  position: fixed;
  top: 46px;
  width: 100%;
  height: 420px;

  padding: 10px;
  box-sizing: border-box;
  
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
  line-height: 50px;
}

.eidt{
  width: 100%;
  height: 35px;
  padding: 0 10px;
  box-sizing: border-box;

  position: absolute;
  bottom: 87px;

  display: flex;
}
.eidt >div{
  flex: 1;
  text-align: center;
  line-height: 35px;
  border: 1px solid #07c160;
    
}

.sele-seat{
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 70px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
}
.sele-seat>div{
  flex: 1;
  border-radius: 10px;
  margin: 0 5px;
  background: #fff;
  color: rgb(92, 89, 89);
  border: 1px solid #07c160;
}
.seat-sort{
 text-align: center;
 line-height: 22px;
 border-right: 1px solid #07c160;
}
.item{
  display: flex;
}

.item>div{
  flex: 1;

}


.select>div{
  height: 48%;
  width: 100%;

  text-align: center;
  line-height: 33px;

}

.first{
  border-bottom: 1px solid #07c160;
}



</style>