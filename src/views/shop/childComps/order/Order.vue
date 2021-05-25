<template>
  <div class="order">
    <!-- 分类侧边栏 -->

    <van-sticky :offset-top="40" z-index="-1">
      <div class="sidebar">
        <van-sidebar v-model="activeKey">
          <div v-for="(item, index) in dishSort" :key="index">
            <van-sidebar-item :title="item" />
          </div>
        </van-sidebar>
      </div>
    </van-sticky>

    <!-- 商品展示列表 -->
    <!-- <scroll class="content" :probeType="3" ref="scroll" @scroll="scrollPos" :isPropage="isPropage"> -->
      <div class="top"></div>
      <div class="card">
        <div v-for="(item, index) in foodList[activeKey]" :key="index">
          <goods-card :shopData="item" />
        </div>
      </div>
    <!-- </scroll> -->
    <!-- 购物车 -->
    <shop-cart :foodlist="selectFoods" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import GoodsCard from "views/shop/childComps/order/goodsCard/GoodsCard";
import ShopCart from "views/shop/childComps/order/shopCart/ShopCart";

import { getDishList } from "api/dish";
export default {
  name: "Order",
  components: {
    Scroll,
    GoodsCard,
    ShopCart,
  },
  data() {
    return {
      isPropage:false,
      activeKey: 0,
      foodList:[],
      foodData: [
        {
          shopImg: require("assets/images/shop/food-img/双人烧烤套餐.jpg"),
          name: "单人佛跳墙",
          monSell: "46",
          label: "门店销售第一",
          price: 65.9,
        },
        {
          shopImg: require("assets/images/shop/food-img/豪气麻辣米线.jpg"),
          name: "豪气麻辣米线",
          monSell: "35",
          label: "烤鱼、鲈鱼",
          price: 59.1,
        },
        {
          shopImg: require("assets/images/shop/food-img/黄金牛油.png"),
          name: "黄金牛油",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: 33.1,
        },
        {
          shopImg: require("assets/images/shop/food-img/烤肉串.png"),
          name: "烤肉串",
          monSell: "32",
          label: " 虾米、粉条、葱",
          price: 28.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/挪威三文鱼.jpg"),
          name: "挪威三文鱼",
          monSell: "21",
          label: " 虾米、粉条、葱",
          price: 85.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/2-4人烤羊排.png"),
          name: "2-4人烤羊排",
          monSell: "33",
          label: "虾米、粉条、葱",
          price: 11.94,
        },
        {
          shopImg: require("assets/images/shop/food-img/丝虾滑.jpg"),
          name: "丝虾滑",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: 21.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/酸菜鱼.jpg"),
          name: "酸菜鱼",
          monSell: "18",
          label: " 虾米、粉条、葱",
          price: 18.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/香辣石锅饭.jpg"),
          name: "香辣石锅饭",
          monSell: "18",
          label: " 烤鱼、鲈鱼",
          price: 15.2,
        },
        {
          shopImg: require("assets/images/shop/food-img/肖友记了卤粉.jpg"),
          name: "肖友记了卤粉",
          monSell: "50",
          label: " 猪脚、烤蹄",
          price: 20.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/鱼丸粉.jpg"),
          name: "鱼丸粉",
          monSell: "102",
          label: " 烤鱼、鲈鱼",
          price: 15.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/扎虾米线.jpg"),
          name: "扎虾米线",
          monSell: "150",
          label: " 猪脚、烤蹄",
          price: 60.5,
        },
        {
          shopImg: require("assets/images/shop/food-img/招牌米线.jpg"),
          name: "招牌米线",
          monSell: "65",
          label: " 烤鱼、鲈鱼",
          price: 50.2,
        },
        {
          shopImg: require("assets/images/shop/food-img/招牌牛肉串.jpg"),
          name: "招牌牛肉串",
          monSell: "75",
          label: " 猪脚、烤蹄",
          price: 20.1,
        },
        {
          shopImg: require("assets/images/shop/food-img/招牌猪耳朵.jpg"),
          name: "招牌猪耳朵",
          monSell: "18",
          label: " 烤鱼、鲈鱼",
          price: 20.8,
        },
        {
          shopImg: require("assets/images/shop/food-img/自助火锅.jpg"),
          name: "自助火锅",
          monSell: "20",
          label: " 烤鱼、鲈鱼",
          price: 15.9,
        },
      ],
      // sort: ["进店必买", "双拼卤饭", "卤菜小吃", "热干面", "手工粉"],
      dishSort: [],
    };
  },
  computed: {
    selectFoods() {
      let cartList = [];
      if(this.foodList.length){      //在组件创建时this.foodList为空

        for (let i = 0; i < this.foodList.length; i++) {
          this.foodList[i].forEach(item => {
            if (item.count > 0) {
              cartList.push(item);
            }
          });
          
        }
        // this.$store.state.foodList = cartList;
        this.$store.commit('commitFoodList',cartList)
      }
      return cartList;
    },
  },
  methods: {
    scrollPos(postion) {
      // console.log(postion.y);
      if(postion.y<0){
        this.isPropage =true
        this.$bus.$emit('shopStop',-210)
      }
      
    },
    getDishType(data){
      for(let i=0; i<data.length; i++){
        this.dishSort.push(data[i][0].type)
      }
    }
  },
  created(){
    getDishList(1).then(res=>{
      console.log(res.data);
      this.getDishType(res.data)
      this.foodList = res.data;
    }).catch(err=>{
      console.log(err);
    })
  },
  mounted(){
    this.$bus.$on('orderStop',posY=>{
      this.$refs.scroll.scrollTo(0, posY, 0);
    })
  }
};
</script>

<style scoped>
.order {
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 100vh;
  /* margin-top: 70px; */
}
.sidebar {
  float: left;
  margin-top: 5px;
}
.card {
  width: 100%;
  float: right;
  width: calc(100% - 80px);

  /* position: absolute;
  left: 80px; */
}

.content {
  overflow: hidden;
  width: calc(100% - 80px);

  /* position: absolute;

  top: 0;
  bottom: 0;
  right: 0; */

}

.top {
  height: 2px;
  width: 100%;
}
</style>