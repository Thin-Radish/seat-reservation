<template>
  <div class="find">    
    <input type="text" v-model="msg1">
    <button @click="sendMsg(msg1,1)">send1</button>
    <!-- <input type="text" v-model="msg2">
    <button @click="sendMsg(msg1,1)">send2</button> -->
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


    <scroll class="content" 
            @scroll="navScroll" 
            :probeType="3" 
            ref="scroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <van-swipe class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
                height="150">
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
        <tab-control 
          :titles="['全部店铺', '销量排序', '好评排序']"
          @tabClick="tabClick"
          ref="tabControl_1" />
      </div>
     

      <div v-for="(item, index) in shopList" :key="index" >
        <shop-card :shopData="item" />
      </div>
    </scroll>

    <div class="copy-variety" v-show="isShow">
        <div class="title">附近商家</div>
        <tab-control 
          :titles="['全部店铺', '销量排序', '好评排序']" 
          @tabClick="tabClick"
          ref="tabControl_2" />
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
      msg1:'',
      msg2:'',
      postionY:null,
      active: 0,
      isShow:false,
      shops:{
        currentSort:'id',//默认以id排序获取
        currentPage:0,   //默认当前为第一页
      },
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
          title: "甜品饮料",
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

    };
  },
  created(){
    //店铺数据请求
    // todo
    this.shopList=[]; 
    this.getShopInfo(this.shops);

    // 连接即时通讯
    this.$store.commit('initWebsocket');
  },

  mounted(){
    //监听item中图片加载完成(防抖动后)
    const refresh = debounce(this.$refs.scroll.refresh) 
    this.$bus.$on('imageLoad',()=>{
      refresh();
    })
  },
  activated(){
    //解决移动端浏览器不能keep-alive问题
    this.$refs.scroll.refresh()
  },
  methods: {

    /**
     * 事件处理相关
     */
    //路由跳转
    goto(path) {
      this.$router.push(path);
    },
    //navbar是否吸顶
    navScroll(postion){
      this.postionY = postion.y;
      this.isShow = postion.y<-750;
    },
    //切换栏切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.shops.currentSort = "id";
          break;
        case 1:
          this.shops.currentSort = "mon_sell";
          break;
        case 2:
          this.shops.currentSort = "star";
          break;
      }
      this.$refs.tabControl_1.currentIndex = index
      this.$refs.tabControl_2.currentIndex = index

      //切换后请求数据要先初始化
      this.shopList = [];
      this.shops.currentPage = 0;
      
      //重新进行排序请求
      this.getShopInfo(this.shops);
    },
    loadMore(){ 
      if(this.shopList.length){  //预防第一页数据没请求到就执行下拉加载
        this.getShopInfo(this.shops)
      }
    },
    sendMsg(message,getter){

      var sendMessage ={
        message:message,
        getter:getter,
        sender:this.$store.state.userId,
        type: 'message',                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      }

      sendMessage = JSON.stringify(sendMessage);

      console.log('============================================');

      this.$store.state.stomp.send("/app/message/talk", {}, sendMessage);
    },


    /**
     * 网络请求相关
     */

    getShopInfo(shops){
      getShopAll(shops).then(res=>{
        // console.log(res.data);
        // console.log(this.shops.currentPage);

        //往数据添加数据而不是赋值
        this.shopList.push(...res.data);
        //数据请求完后页数加一
        this.shops.currentPage++;

        //判断是否为最后一页
        if(res.data.length !=0){
          //当不是最后一页时，才能上拉加载更多
          //只有当scroll完成finishPullUp()时才能触发下次上拉请求
          this.$refs.scroll.finishPullUp();
        }else{
          this.$toast('到底了啦！')
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }

  },





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

</style>

