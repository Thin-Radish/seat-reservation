<template>
  <div class="seller">
    <div class="address">
      <div class="addre-left">
        <img src="~assets/images/seller/address.png" alt="" />
      </div>
      <div class="addre-text">{{sellerInfo.local}}</div>
      <div class="addre-right">
        <img src="~assets/images/seller/phone.png" alt="" />
      </div>
    </div>
    <div class="pics-wrapper" ref="picsView">
      <ul class="pics-list" ref="picsList">
        <li
          ref="picsItem"
          class="pics-item"
          v-for="(imgurl, index) in sellerInfo.imageUrls"
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
      {{sellerInfo.openTime}}
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Split from "components/content/split/Split";

import { getDetailById } from "api/shop";
export default {
  components: {
    Split,
  },
  data() {
    return {
      sellerInfo:{},
    };
  },
  methods:{
    ImgListScroll(){
      this.$nextTick(() => {
        let imgW = this.$refs.picsItem[0].clientWidth;
        let marginR = 11;
        let width = (imgW + marginR) * this.sellerInfo.imageUrls.length;
        this.$refs.picsList.style.width = width + "px";
        this.scroll = new BScroll(this.$refs.picsView, {
          scrollX: true,
        });
    });
    }
  },
  created() {

    let shopId = this.$route.query.id
    getDetailById(shopId).then(res=>{
      this.sellerInfo = res.data;

      //因为图片动态加载，则scroll只能在dom渲染完之后才能获取content范围
      this.ImgListScroll();

    }).catch(err=>{
      console.log(err);
    })
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
  line-height: 30px;
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
  padding: 10px;
  overflow: hidden;
  border-bottom: 1px solid #f4f4f4;
  white-space: nowrap;
}
.pics-item {
  display: inline-block;
  margin-left: 10px;
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