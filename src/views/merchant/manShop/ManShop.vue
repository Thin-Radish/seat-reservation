<template>
  <div>
    <nav-bar>
      <div slot="center">店铺设置</div>
    </nav-bar>
    <scroll class="content">
      <div class="hotel">
        <img src="~assets/images/shop/shop-img/CoCo.jpg" alt="" class="hotel-img" />

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
              <div class="welcome">
                <img src="~assets/images/speaker.svg" alt="" />
                欢迎光临，很高兴为您服务
              </div>
            </div>
        </div>

        <div class="seller"> 
          <div class="address">
            <div class="addre-left">
              <img src="~assets/images/seller/address.png" alt="" />
            </div>
            <div class="addre-text">湖南省湘潭市岳塘区湖南工程学院后街黄焖鸡</div>
            <div class="addre-right">
              <img src="~assets/images/seller/phone.png" alt="" />
            </div>
          </div>
          <split />
          <div class="pics-wrapper" ref="picsView">
            <ul class="pics-list" ref="picsList">
              <li
                ref="picsItem"
                class="pics-item"
                v-for="(imgurl, index) in swipeImg"
                :key="index"
              >
                <img :src="imgurl" />
              </li>
            </ul>
          </div>
          <div class="safety">
            <img src="~assets/images/seller/safety.png" alt="" /> 查看食品安全档案
          </div>
          <split />
          <div class="server">
            <img src="~assets/images/seller/server.png" alt="" />商家服务:
            <img src="~assets/images/seller/ticket.svg" alt="" class="ticket" />
            可提供发票
          </div>
          <div class="server-time">
            <img src="~assets/images/seller/time.png" alt="" />
            营业时间:05:00-10:15,10:30-23:59
          </div>
        </div>
        <split />
        <div class="edit" >
          <div @click="goto('/seatmap')">位置分布</div>
          <div @click="goto('/setinfo')"> 信息编辑</div>
        </div>
        <div class="quit" @click="signOut()" >退出登录</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import Split from "components/content/split/Split";
import BScroll from "better-scroll";


export default {
  name: "Shop",
  components: {
    TabControl,
    Scroll,
    NavBar,
    Split,
  },
  data() {
    return {
      swipeImg: [
        require("assets/images/seller/shop-img-1.jpg"),
        require("assets/images/seller/shop-img-2.jpg"),
        require("assets/images/seller/shop-img-3.jpg"),
        require("assets/images/seller/shop-img-4.jpg"),
      ],
    };
  },

  methods: {
    goto(path){
      this.$router.push(path)
    },
    toDetial() {
      this.$router.replace("detial");
    },
    signOut(){
      this.$router.replace('/login');
    },
  },
  created() {
    // 连接即时通讯
    this.$store.commit('initWebsocket');

    this.$nextTick(() => {
      let imgW = this.$refs.picsItem[0].clientWidth;
      let marginR = 11;
      let width = (imgW + marginR) * this.swipeImg.length;
      this.$refs.picsList.style.width = width + "px";
      this.scroll = new BScroll(this.$refs.picsView, {
        scrollX: true,
      });
    });
  },

};
</script>

<style scoped>
.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 45px;
  bottom: 50px;
}
.hotel {
  overflow: hidden;
  background: #f2f2f2;
}


.hotel-info {
  width: 100%;
  border-radius: 15px;
  background: white;
  box-sizing: border-box;
  padding: 8px;
  transform: translateY(-35px);

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




.seller {
  background: white;
  margin-top:-30px ;
  width: 100%;

}
.address {
  display: flex;
  background: white;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px;
  /* box-sizing: border-box; */
  width: 95%;
  margin: auto;
}

.addre-left {
  width: 40px;
  height: 40px;
  line-height: 50px;
  text-align: center;
}
.addre-left > img {
  width: 15px;
  height: 17px;
}
.addre-text {
  flex: 1;
  font-size: 15px;
  padding-top: 8px;
  font-family: serif;
}
.addre-right {
  width: 40px;
  height: 20px;
  text-align: center;
  margin-top: 10px;
  margin-left: 5px;
  border-left: 1px solid #f2f2f2;
}

.addre-right > img {
  /* margin-left: 5px; */
  width: 18px;
  height: 22px;
}


.pics-wrapper {
  padding: 10px 10px;
  overflow: hidden;
  border-bottom: 1px solid #f4f4f4;
  white-space: nowrap;
}
.pics-item {
  display: inline-block;
  margin-right: 11px;
  width: 93px;
  height: 75px;
}
.pics-item img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.tip-wrapper {
  padding-left: 15px;
}


.safety {
  display: flex;
  background: white;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px;
  width: 95%;
  margin: auto;
  font-family: serif;
  font-size: 15px;
  line-height: 20px;
}

.safety > img {
  margin: 2px 12px;
  width: 12px;
  height: 15px;
}

.server {
  display: flex;
  background: white;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px;
  width: 95%;
  margin: auto;
  font-family: serif;
  font-size: 15px;
  line-height: 20px;
}

.server > img {
  margin: 2px 12px;
  width: 14px;
  height: 14px;
}

.server-time {
  display: flex;
  background: white;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px;
  width: 95%;
  margin: auto;
  font-family: serif;
  font-size: 15px;
  line-height: 20px;
}

.server-time > img {
  margin: 2px 12px;
  width: 14px;
  height: 14px;
}

.edit{
  width: 95%;
  height: 45px;
  margin: 10px auto;
  background:  coral;
  border-radius: 30px;
  color: #fff;
  line-height: 50px;

  display: flex;
}

.edit>div{
  width: 50%;
  text-align: center;
  border-right: 1px solid;
}

.quit {
  width: 95%;
  height: 45px;
  margin: 20px auto;
  /* background-image: linear-gradient(to right, rgb(238, 168, 143), coral); */
  background: #969696;
  border-radius: 30px;

  text-align: center;
  color: rgb(223, 219, 219);
  line-height: 50px;
}
</style>

