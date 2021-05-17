<template>
  <div class="hotel">
    <!-- <scroll
      class="contain"
      @scroll="stopScroll"
      :probeType="3"
      ref="scroll"
      contnetH="1000"
    > -->
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

      <img
        src="~assets/images/shop/shop-img/CoCo.jpg"
        alt=""
        class="hotel-img"
      />

      <div>
        <div class="hotel-info">
          <img
            src="~assets/images/shop/shop-img/CoCo.jpg"
            alt=""
            class="hotel-icon"
          />
          <span class="title">卤味饭·热干面</span>

          <div>
            <div class="hot">
              <img src="~assets/images/star.svg" alt="" />
              <span>4.8 </span>
              <span mon-sell>月售：564</span>
            </div>
            <div class="label">湘潭川菜好评榜第1名</div>
            <div class="re-seat">座位剩余：18/10</div>
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
              :path="['order', 'ratings', 'seller']"
            />
          </div>
        </van-sticky>
      </div>

      <keep-alive exclude="Order">
        <router-view />
      </keep-alive>
    <!-- </scroll> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Shop",
  components: {
    TabControl,
    Scroll,
    NavBar,
  },
  data() {
    return {};
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },
    toDetial() {
      this.$router.replace("detial");
    },
    stopScroll(postion) {
      // console.log(postion.y);
      this.$bus.$on("shopStop", (posY) => {
        
        // this.$refs.scroll.scrollTo(0, posY, 0);
        
      });

      if(postion.y <= -210){
        this.$refs.scroll.scrollTo(0, -210, 0);
      }else{
        // this.$bus.$emit("orderStop", 0);
        
      }
        

    },
  },
  mounted() {},
  // created() {
  //   console.log("shop-created");
  // },
  // beforeDestroy() {
  //   console.log("shop-beforeDestory");
  // },
};
</script>

<style scoped>
.hotel {
  overflow: hidden;
  background: #f2f2f2;
  /* height: 100vh; */


}


.contain {
  /* overflow: hidden; */
  background: #f2f2f2;
  /* height: 1000px; */
  /* height: 100%; */
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0px;
  /* height: 100px; */
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

