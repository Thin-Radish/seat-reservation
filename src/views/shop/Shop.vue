<template>
  <div class="hotel">
    <div class="hotel-nav">
      <img
        @click="goback"
        class="nav-left"
        src="~assets/images/nav-bar/return.svg"
        alt=""
      />

      <div class="nav-right">
        <!-- <img src="../../assets/images/省略.svg" alt="" > -->
        <img src="../../assets/images/nav-bar/collect.svg" alt="" />
        <img src="../../assets/images/nav-bar/message.svg" alt="" />
        <img src="../../assets/images/nav-bar/search.svg" alt="" />
      </div>
    </div>

    <img :src="shopInfo.shopAvatarUrl"  class="hotel-img" />

    <div>
      <div class="hotel-info">
        <img :src="shopInfo.shopAvatarUrl" class="hotel-icon" />
        <span class="title">{{ shopInfo.title }}</span>
        <div>
          <div class="hot">
            <img src="~assets/images/star.svg" alt="" />
            <span>{{shopInfo.star}} </span>
            <span mon-sell>月售：{{shopInfo.monSell}}</span>
          </div>
          <div class="label">{{shopInfo.label}}</div>
          <div class="re-seat">座位剩余：{{shopInfo.remSeat}}/{{shopInfo.totalSeat}}</div>
          <!-- <div class="location">地址：湘潭市岳塘区湖南工程学院后街黄焖鸡</div> -->
          <div class="welcome">
            <img src="~assets/images/speaker.svg" alt="" />
            欢迎光临，很高兴为您服务
          </div>
        </div>
      </div>
      <van-sticky :offset-top="0" class="shop-nav">
        <div>
          <tab-control
            :titles="['点菜', '评价', '商家']"
            :path="childPath"
          />
        </div>
      </van-sticky>
    </div>

    <keep-alive exclude="Order">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";

import { getShopById } from "api/shop";
export default {
  name: "Shop",
  components: {
    TabControl,
    Scroll,
    NavBar,
  },
  data() {
    return {
      shopInfo:{},
      sellerInfo:{} ,
      childPath:[
        {
          path:'order',
          query: {
            id: this.$route.query.id
          }
        },
        {
          path:'ratings',
          query: {
            id: this.$route.query.id
          }
        },
        {
          path:'seller',
          query: {
            id: this.$route.query.id
          }
        },

      ]
    };
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },
    getSellerInfo(shopInfo){

      //整理数据
      this.sellerInfo.local =  shopInfo.local;
      this.sellerInfo.phoneNum = shopInfo.phoneNum;
      this.sellerInfo.openTime = shopInfo.openTime;
      this.sellerInfo.imageUrls = shopInfo.imageUrls;

      //上传至vuex
      this.$store.commit('commitSellerInfo',this.sellerInfo)
    }
  },
  created() {
    let shopId = this.$route.query.id
    getShopById(shopId).then(res=>{
      console.log(res);
      this.shopInfo = res.data;
      // this.getSellerInfo(this.shopInfo);
    }).catch(err=>{
      console.log(err);
    })
  },
};
</script>

<style scoped>
.hotel {
  overflow: hidden;
  background: #f2f2f2;
  /* height: 100vh; */
}


.hotel-nav {
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;

  display: flex;
}
.nav-left {
  width: 25px;
  height: 25px;
  margin: 10px;
}
.nav-right {
  flex: 1;
  width: 50%;
  padding: 15px;
}

.nav-right img {
  float: right;
  margin-right: 8px;
}

.hotel-info {
  width: 100%;
  border-radius: 15px;
  background: white;
  box-sizing: border-box;
  padding: 8px;

  position: absolute;
  top: 100px;
}

.hotel-info .title {
  font-size: 22px;
  font-weight: 600;
  font-family: KaiTi_GB2312;
}

.hotel-icon {
  width: 55px;
  height: 55px;
  border-radius: 5px;
  position: absolute;
  right: 20px;
  top: -8px;
}
.hot img {
  margin-left: 5px;
}
.hot span {
  display: inline-block;
  height: 20px;
  vertical-align: top;
  line-height: 21px;
  font-size: 13px;
  color: #83878a;

  margin-right: 15px;
}
.label {
  background: #f4f4f5;
  display: inline-block;
  padding: 3px;
  font-size: 12px;
  border-radius: 3px;

  margin: 2px;
}

.re-seat {
  font-size: 13px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 2px;
  float: right;
}

.hotel-img {
  width: 100%;
  height: 130px;
  margin-bottom: 2px;
  margin-top:-10px ;
  margin-bottom:13px ;
}

.location {
  font-size: 15px;
  font-family: inherit;
}

.welcome {
  display: flex;
  height: 20px;
  line-height: 23px;
  font-size: 13px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  vertical-align: middle;
}
.welcome img {
  margin-right: 8px;
}

.sidebar {
  float: left;
}
.card {
  width: calc(100% - 80px);
  position: absolute;
  left: 80px;
}

.shop-nav {
  margin-top: 75px;
}
</style>

