<template>
  <div class="find">
    <!-- <van-nav-bar title="预座选餐" :fixed="true" z-index="999" class="nav-bar" /> -->
    <!-- <nav-bar class="find-nav"><div slot="center">购物街</div></nav-bar> -->
    <scroll class="content">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        height="150"
      >
        <van-swipe-item v-for="(image, index) in swipeImg" :key="index">
          <img :src="image" alt="" />
        </van-swipe-item>
      </van-swipe>

      <recommend>
        <div v-for="(item, index) in recomData" :key="index" @click="toHotel">
          <recom-item :recomData="item" />
        </div>
      </recommend>

      <van-sticky :offset-top="46" class="category">
        <div class="title">附近商家</div>
        <tab-control :titles="['经典煲仔', '快餐便当', '汉堡薯条']" />
      </van-sticky>

      <div v-for="(item, index) in shopData" :key="index" @click="toHotel">
        <hotel-card :shopData="item" />
      </div>
      <div class="botton"></div>
    </scroll>

    
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import Recommend from "../../views/find/childComps/Recommend";
import RecomItem from "../../views/find/childComps/RecomItem";

import TabControl from "components/content/tabControl/TabControl";
import HotelCard from "./childComps/HotelCard.vue";

export default {
  components: {
    NavBar,
    Scroll,
    Recommend,
    RecomItem,
    TabControl,
    HotelCard,
  },

  data() {
    return {
      active: 0,
      swipeImg: [
        require("../../assets/images/swiper1.jpg"),
        require("../../assets/images/swiper2.jpg"),
        require("../../assets/images/swiper3.jpg"),
        require("../../assets/images/swiper4.jpg"),
      ],
      recomData: [
        {
          shopImg: require("../../assets/images/东东包（盛龙广场店）.jpg"),
          title: "东东包（盛龙广场店）",
        },
        {
          shopImg: require("../../assets/images/怪之味烤鱼（滨江道店）.jpg"),
          title: "怪之味烤鱼（滨江道店）",
        },
        {
          shopImg: require("../../assets/images/炙灼炉鱼（二道店）.png"),
          title: "炙灼炉鱼（二道店）",
        },
        {
          shopImg: require("../../assets/images/盘古烤猪蹄（鹿都店）.jpg"),
          title: "盘古烤猪蹄（鹿都店）",
        },
        {
          shopImg: require("../../assets/images/shop/虾吃虾涮（世纪金源店）.jpg"),
          title: "虾吃虾涮",
        },
        {
          shopImg: require("../../assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          title: "陆湘烤猪蹄（罗宾森店）",
        },
      ],

      shopData: [
        {
          shopImg: require("../../assets/images/shop/虾吃虾涮（世纪金源店）.jpg"),
          title: "虾吃虾涮",
          star: "4.7",
          monSell: "1138",
          label: " 味道挺好的，下次再点",
          totalSeat: "18",
          remSeat: "15",
        },
        {
          shopImg: require("../../assets/images/shop/醉东北.jpg"),
          title: "醉东北",
          star: "4.9",
          monSell: "1380",
          label: "真宗的东北味",
          totalSeat: "30",
          remSeat: "11",
        },
        {
          shopImg: require("../../assets/images/炙灼炉鱼（二道店）.png"),
          title: "炙灼炉鱼（二道店）",
          star: "4.6",
          monSell: "538",
          label: "好吃的烤鱼，不能错过",
          totalSeat: "25",
          remSeat: "14",
        },
        {
          shopImg: require("../../assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          title: "陆湘烤猪蹄（罗宾森店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
      ],
    };
  },
  methods: {
    toHotel() {
      this.$router.replace("/hotel");
    },
  },
};
</script>

<style scoped>
.find-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 50px;
}

.my-swipe {
  /* margin: 0px 10px 0px 10px; */
  margin: 5px;
  border-radius: 2px;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #39a9ed;
}

.sticky {
  background: white;
  height: 50px;
}
.nav-bar {
  background: white;
}

.category {
  background: white;
  z-index: 10;
}
.category .title {
  background: white;
  height: 30px;
  line-height: 40px;
  text-indent: 8px;
  font-family: SimHei;
  font-size: 20px;
  font-weight: 500;
  color: rgb(59, 54, 35);
}
.botton {
  height: 70px;
  width: 100%;
}
</style>

