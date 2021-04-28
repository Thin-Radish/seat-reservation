<template>
  <div class="seller">
    <div class="address">
      <div class="addre-left">
        <img src="../../../assets/images/address.png" alt="" />
      </div>
      <div class="addre-text">湖南省湘潭市岳塘区湖南工程学院后街黄焖鸡</div>
      <div class="addre-right">
        <img src="../../../assets/images/phone.png" alt="" />
      </div>
    </div>
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
      <img src="../../../assets/images/safety.png" alt="" /> 查看食品安全档案
    </div>
    <split />
    <div class="server">
      <img src="../../../assets/images/server.png" alt="" />商家服务:
     <img src="../../../assets/images/ticket.svg" alt="" class="ticket">
      可提供发票
    </div>
     <div class="server-time">
      <img src="../../../assets/images/time.png" alt="" />
      营业时间:05:00-10:15,10:30-23:59
    </div>
    <!-- <split />

    <div class="server">
      <img src="../../../assets/images/server.png" alt="" />
      商家服务:免费提供饭菜
    </div> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Split from "components/content/split/Split";
export default {
  components: {
    Split,
  },
  data() {
    return {
      swipeImg: [
        require("../../../assets/images/swiper1.jpg"),
        require("../../../assets/images/swiper2.jpg"),
        require("../../../assets/images/swiper3.jpg"),
        require("../../../assets/images/swiper3.jpg"),
        require("../../../assets/images/swiper4.jpg"),
        require("../../../assets/images/swiper2.jpg"),
      ],
    };
  },
  created() {
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
.seller {
  background: white;
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


</style>