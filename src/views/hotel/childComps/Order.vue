<template>
  <div class="order">
    <van-sticky :offset-top="45" z-index="-1">
      <div class="sidebar">
        <van-sidebar v-model="activeKey">
          <div v-for="(item, index) in sort" :key="index">
            <van-sidebar-item :title="item" />
          </div>
        </van-sidebar>
      </div>
    </van-sticky>

    <div class="card">
      <div v-for="(item, index) in shopData" :key="index">
        <goods-card :shopData="item" />
      </div>
    </div>

    <shop-cart :foodlist="selectFoods" />
  </div>
</template>

<script>
import GoodsCard from "./GoodsCard.vue";
import Scroll from "components/common/scroll/Scroll";
import ShopCart from "views/hotel/childComps/shopcart/ShopCart";
export default {
  components: {
    GoodsCard,
    Scroll,
    ShopCart,
  },
  data() {
    return {
      activeKey: 0,
      shopData: [
        {
          shopImg: require("assets/images/shop/虾吃虾涮（世纪金源店）.jpg"),
          name: "虾吃虾涮",
          monSell: "33",
          label: "虾米、粉条、葱",
          price: 11.94,
        },
        {
          shopImg: require("assets/images/shop/醉东北.jpg"),
          name: "鱼粉",
          monSell: "46",
          label: "门店销售第一",
          price: 25.90,
        },
        {
          shopImg: require("assets/images/炙灼炉鱼（二道店）.png"),
          name: "纸包鱼",
          monSell: "35",
          label: "烤鱼、鲈鱼",
          price: 48.10,
        },
        {
          shopImg: require("assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          name: "陆湘烤猪蹄",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: 35.50,
        },
        {
          shopImg: require("assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          name: "陆湘烤猪蹄",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: 35.50,
        },
        {
          shopImg: require("assets/images/陆湘烤猪蹄（罗宾森店）.png"),
          name: "烤猪蹄",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: 35.50,
        },
      ],
      sort: ["进店必买", "双拼卤饭", "卤菜小吃", "热干面", "手工粉"],
    };
  },
  computed: {
    selectFoods() {
      let foods = [];
      this.shopData.forEach((item) => {
        if (item.count > 0) {
          foods.push(item);
        }
      });
      return foods;
    },
  },
};
</script>

<style scoped>
.content {
  height: 1000px;
}
.sidebar {
  float: left;
  z-index: -1;
}
.card {
  width: calc(100% - 80px);
  position: absolute;
  left: 80px;
}
</style>