<template>
  <div class="find">

    
    <van-search
      show-action
      label="店铺"
      placeholder="请输入搜索关键词"
      shape="round"
      background="#f1f0f0"
    >
      <template #action>
        <div>搜索</div>
      </template>
    </van-search>




    <scroll class="content" @scroll="navScroll" :probeType="3" ref="scroll">
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
      <van-grid :column-num="4" :border="false" class="category-icon">
        <van-grid-item v-for="(icon, index) in categoryIcon" :key="index" @click="goto('/category/' +icon.type)">
          <img :src="icon.url" />
          <span>{{ icon.title }}</span>
        </van-grid-item>
      </van-grid>

      <recommend>
        <div v-for="(item, index) in recomData" :key="index" >
          <recom-item :recomData="item" />
        </div>
      </recommend>

      <div class="variety">
        <div class="title">附近商家</div>
        <tab-control :titles="['全部店铺', '销量排序', '好评排序']" />
      </div>
     

      <div v-for="(item, index) in shopList" :key="index" >
        <shop-card :shopData="item" />
      </div>
      <div class="botton"></div>
    </scroll>

    <div class="copy-variety" v-show="isShow">
        <div class="title">附近商家</div>
        <tab-control :titles="['全部店铺', '销量排序', '好评排序']" />
      </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";

import Recommend from "views/find/childComps/recommend/Recommend";
import RecomItem from "views/find/childComps/recommend/RecomItem";

import ShopCard from "views/find/childComps/shopCard/ShopCard.vue";


import { getShopAll } from "api/shop";
import debounce from 'common/utils/debounce'
export default {
  name:"Find",
  components: {
    Scroll,
    Recommend,
    RecomItem,
    TabControl,
    ShopCard,
  },

  data() {
    return {
      postionY:null,
      active: 0,
      isShow:false,
      swipeImg: [
        require("assets/images/swiper/swiper1.jpg"),
        require("assets/images/swiper/swiper2.jpg"),
        require("assets/images/swiper/swiper3.jpg"),
        require("assets/images/swiper/swiper4.jpg"),
      ],
      categoryIcon: [
        {
          url: require("assets/images/category-icon/hot-pot.png"),
          title: "火锅",
          type:"hotpot"
        },
        {
          url: require("assets/images/category-icon/dessert.png"),
          title: "甜点饮品",
          type:"dessert"
        },
        {
          url: require("assets/images/category-icon/buffet.png"),
          title: "自助餐",
          type:"buffet"
        },
        {
          url: require("assets/images/category-icon/fast-food.png"),
          title: "小吃快餐",
          type:"fastfood"
        },
        {
          url: require("assets/images/category-icon/western-food.png"),
          title: "西餐",
          type:"wesfood"
        },
        {
          url: require("assets/images/category-icon/barbecue.png"),
          title: "烧烤烤肉",
          type:"barbecue"
        },
        {
          url: require("assets/images/category-icon/grilled-fish.png"),
          title: "香锅烤鱼",
          type:"fish"
        },
        {
          url: require("assets/images/category-icon/seafood.png"),
          title: "海鲜",
          type:"seafood"
        },
      ],

      recomData: [
        {
          
          shopImg: require("../../assets/images/shop/shop-img/记亦抄纸巷·油条包麻糍（地下商业街A区店）.jpg"),
          title: "Mr.记亦抄纸巷·油条包麻糍（地下商业街A区店）",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/串客·来一手烧烤（福兴中路店子）.jpg"),
          title: "串客·来一手烧烤（福兴中路店子）",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/奈哥酸菜鱼.jpg"),
          title: "奈哥酸菜鱼",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/京满堂北京烤鸭.png"),
          title: "京满堂北京烤鸭",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/湘江小杜.jpg"),
          title: "湘江小杜",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/华掌勺·蒸菜·小碗菜（熙春路店）.jpg"),
          title: "华掌勺·蒸菜·小碗菜（熙春路店）",
        },
      ],
      shopList:[],
      shopData: [
        {
          shopImg: require("../../assets/images/shop/shop-img/呷哺呷哺·火锅茶语（湘潭中心店）.jpg"),
          title: "呷哺呷哺·火锅茶语（湘潭中心店）",
          star: "4.7",
          monSell: "1138",
          label: " 味道挺好的，下次再点",
          totalSeat: "18",
          remSeat: "15",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/夫子庙老鸭粉丝馆（城市盒子店）.jpg"),
          title: "夫子庙老鸭粉丝馆（城市盒子店）",
          star: "4.9",
          monSell: "1380",
          label: "真宗的东北味",
          totalSeat: "30",
          remSeat: "11",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/乐山自助火锅（天虹店）.jpg"),
          title: "乐山自助火锅（天虹店）",
          star: "4.6",
          monSell: "538",
          label: "好吃的烤鱼，不能错过",
          totalSeat: "25",
          remSeat: "14",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）.png"),
          title: "捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
          title: "昭日料理（万达店）",
          star: "4.6",
          monSell: "560",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "48",
          remSeat: "30",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/李喜欢手工虾（万达店）.jpg"),
          title: "李喜欢手工虾（万达店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/柒酒烤肉（科大店）.jpg"),
          title: "柒酒烤肉（科大店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
         {
          shopImg: require("../../assets/images/shop/shop-img/Mr.胡韩式料理.jpg"),
          title: "Mr.胡韩式料理",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/傣妹火锅（潭城店）.jpg"),
          title: "傣妹火锅（潭城店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/田村长干爆牛蛙（万达店）.jpg"),
          title: "田村长干爆牛蛙（万达店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/索M小串（天虹店）.jpg"),
          title: "索M小串（天虹店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/老福州.jpg"),
          title: "老福州",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/肖友记卤粉.jpg"),
          title: "肖友记卤粉",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/花雕醉鸡（湘潭总店）.png"),
          title: "花雕醉鸡（湘潭总店）",
          star: "4.8",
          monSell: "1588",
          label: " 香辣猪脚，陆湘烤蹄",
          totalSeat: "13",
          remSeat: "8",
        },
        {
          shopImg: require("../../assets/images/shop/shop-img/蛙来哒（华隆步步高店）.jpg"),
          title: "蛙来哒（华隆步步高店）",
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
    goto(path) {
      this.$router.push(path);
    },
    navScroll(postion){
      this.postionY = postion.y;
      this.isShow = postion.y<-750;
    },

  },
  activated(){
    this.$refs.scroll.refresh()
   
  },


  mounted(){
    getShopAll('id').then(res=>{
      console.log(res.data);
      this.shopList = res.data;
    }).catch(err=>{
      console.log(err);
    })

    const refresh = debounce(this.$refs.scroll.refresh) 
    this.$bus.$on('imageLoad',()=>{
      refresh();
    })
  }



};
</script>

<style scoped>
.find{
  /* height: 100vh; */
  background: #f2f2f2;
}
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
  top: 49px;
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

.category-icon img {
  width: 46px;
  height: 46px;
}
.category-icon span {
  font-size: 13px;
  margin-top: 5px;
}

.sticky {
  background: white;
  height: 50px;
}
.nav-bar {
  background: white;
}

.variety {
  background: white;
  z-index: 10;
}
.title {
  background: white;
  height: 30px;
  line-height: 40px;
  text-indent: 8px;
  font-family: SimHei;
  font-size: 20px;
  font-weight: 500;
  color: rgb(59, 54, 35);
}
.copy-variety{
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  height: 30px;

  background: white;
  z-index: 10;
}
.botton {
  height: 80px;
  width: 100%;
}
</style>

