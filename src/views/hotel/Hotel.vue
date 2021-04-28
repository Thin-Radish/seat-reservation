<template>
  <div class="hotel">
    <div class="hotel-nav">
      <img
        @click="goback"
        class="nav-left"
        src="~assets/images/return.svg"
        alt=""
      />

      <div class="nav-right">
        <!-- <img src="../../assets/images/省略.svg" alt="" > -->
        <img src="../../assets/images/收 藏(1).svg" alt="" />
        <img src="../../assets/images/消 息.svg" alt="" />
        <img src="../../assets/images/搜索.svg" alt="" />
      </div>
    </div>
    <img src="~assets/images/shop/hotel-b.jpg" alt="" class="hotel-img" />
    <div class="">
      <div class="hotel-info">
        <img src="~assets/images/shop/hotel-b.jpg" alt="" class="hotel-icon" />
        <span class="title">卤味饭·热干面</span>

        <div>
          <div class="hot">
            <img src="../../assets/images/star.svg" alt="" />
            <span>4.8 </span>
            <span mon-sell>月售：564</span>
          </div>
          <div class="label">湘潭川菜好评榜第1名</div>
          <div class="re-seat">座位剩余：18/10</div>
          <!-- <div class="location">地址：湘潭市岳塘区湖南工程学院后街黄焖鸡</div> -->
          <div class="welcome">
            <img src="../../assets/images/speaker.svg" alt="" />
            欢迎光临，很高兴为您服务
          </div>
        </div>
      </div>
      <van-sticky :offset-top="0">
        <tab-control
          :titles="['点菜', '评价', '商家']"
          :path="['order', 'ratings', 'seller']"
        />
      </van-sticky>

      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <!-- <van-sticky :offset-top="0">
      <tab-control
        :titles="['点菜', '评价', '商家']"
        :path="['order', 'ratings', 'seller']"
      />
    </van-sticky>
    <shop-cart /> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";

export default {
  components: {
    TabControl,
    Scroll,
    NavBar,
  },
  data() {
    return {
      activeKey: 0,
      shopData: [
        {
          shopImg: require("../../assets/images/shop/虾吃虾涮（世纪金源店）.jpg"),
          title: "虾吃虾涮",
          monSell: "33",
          label: "虾米、粉条、葱",
          price: "11.94",
        },
        {
          shopImg: require("../../assets/images/shop/醉东北.jpg"),
          title: "鱼粉",
          monSell: "46",
          label: "门店销售第一",
          price: "25.90",
        },
        {
          shopImg: require("../../assets/images/炙灼炉鱼（二道店）.png"),
          title: "纸包鱼",
          monSell: "35",
          label: "烤鱼、鲈鱼",
          price: "48.10",
        },
        {
          shopImg: require("../../assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          title: "陆湘烤猪蹄",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: "35.50",
        },
        {
          shopImg: require("../../assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          title: "陆湘烤猪蹄",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: "35.50",
        },
        {
          shopImg: require("../../assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          title: "烤猪蹄",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: "35.50",
        },
      ],
      sort: ["进店必买", "双拼卤饭", "卤菜小吃", "热干面", "手工粉"],
    };
  },
  methods: {
    goback() {
      this.$router.replace("/index");
    },
    toDetial() {
      this.$router.replace("detial");
    },
  },
  mounted() {},
};
</script>

<style scoped>

.hotel {
  background: #f2f2f2;
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

.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0px;
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
  height: 200px;
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
</style>

