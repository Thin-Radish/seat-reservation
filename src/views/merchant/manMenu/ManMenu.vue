<template>
  <div class="menu">
    <nav-bar>
      <div slot="center">菜单管理</div>
    </nav-bar>
    <div class="menu-content">
      <div class="sidebar">
        <van-sidebar v-model="activeKey">
          <div v-for="(item, index) in sort" :key="index">
            <van-sidebar-item :title="item"  />
          </div>
        </van-sidebar>
      </div>
      
      <!-- 商品展示列表 -->
      <scroll class="content" :probeType="3" ref="scroll" >
        <div class="top"></div>
        <van-button type="primary" block plain class="add-food" color="#34495e" @click="goto('/addfood')">+添加菜品</van-button>
        <div v-for="(item, index) in foodData[activeKey]" :key="index">
          <van-swipe-cell>
            <goods-card :shopData="item" />
            <template #right>
              <div class="edit-card">
                <van-button square type="danger" text="删除" class="del-card"/>
                <van-button square type="primary" text="修改" class="mod-card"/>
              </div>
            </template>
          </van-swipe-cell> 
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import GoodsCard from "views/shop/childComps/order/goodsCard/GoodsCard";

export default {
  components: {
    Scroll,
    NavBar,
    GoodsCard,
  },
  data() {
    return {
      activeKey: 0,
      sort: ["进店必买", "双拼卤饭", "卤菜小吃", "热干面", "手工粉"],
      foodData: [
        [
          {
            shopImg: require("assets/images/shop/food-img/单人佛跳墙.jpg"),
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
      ],
    };
  },
  methods:{
    goto(path) {
      this.$router.push(path);
    },
  },
  // 每次切换刷新下scroll
  watch:{
    activeKey(){
      this.$nextTick(()=>{
        this.$refs.scroll.refresh();
      })
    }
  }
};
</script>

<style scoped>
.menu{
  /* height: 100vh; */
  overflow: hidden;
  background: #f2f2f2;
}

.sidebar {
  position: absolute;
  width: 80px;
  left: 0px;
  top: 46px;
}
.content {
  position: absolute;
  top: 46px;
  right: 0;
  left: 80px;
  bottom: 50px;
  overflow: hidden;
  background: #f2f2f2;
}


.add-food{
  width: 95%;
  margin: 5px 8px;
}

.top {
  height: 2px;
  width: 100%;
}

.edit-card{
  height: 100%;
  margin-right: 7px;
}

.del-card{
  height: 100%;
  margin-right: 5px;
  border-radius: 5px;
}

.mod-card{
  height: 100%;
  border-radius: 5px;
}
</style>

