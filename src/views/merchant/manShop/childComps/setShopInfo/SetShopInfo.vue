<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">资料编辑</div>
    </nav-bar>

    <div class="info">
      <van-field label="店铺名称" v-model="shopInfo.title" />
      <van-field label="店铺特色" v-model="shopInfo.label" />
      <van-field label="店铺热线" v-model="shopInfo.phoneNum" />
      <van-field label="店铺地址" v-model="shopInfo.local" />
      <van-field label="营业时间" v-model="shopInfo.openTime" />
      <van-field
        label="店铺分类"
        v-model="shopInfo.classify"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="top">
        <van-picker
          title="店铺分类"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <div class="food-img">
        <div>店铺图片</div>
        <van-uploader
          :after-read="afterRead"
          v-model="fileList"
          :max-count="6"
        />
      </div>
      <div></div>
    </div>

    <com-button
      top="570"
      label="确认上传"
      background="#1989fa"
      @click.native="commit()"
    />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";

import { uploadShopImg, updateShopInfo } from "api/shop";
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      columns: [
        "海鲜",
        "火锅",
        "甜品饮料",
        "烧烤烤肉",
        "西餐",
        "香锅烤鱼",
        "小吃快餐",
        "自助餐",
      ],
      showPicker: false,
      shopInfo: {
        // shopId: 20,
        title: "",
        openTime: "",
        phoneNum: "",
        local: "",
        classify: "",
        label: "",
        shopAvatar: null,
        sampleGraph: null,
        fileId: null,
      },
      fileList: [],
      formData: new FormData(),
    };
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },
    onConfirm(value) {
      this.shopInfo.classify = value;
      this.showPicker = false;
    },

    afterRead(file) {
      this.formData.append("image", file.file);
    },
    updateShopInfo_() {
      this.shopInfo.userId = this.$store.state.userId;
      this.shopInfo.id = this.$store.state.shopId;
      console.log(this.shopInfo);
      updateShopInfo(this.shopInfo)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            this.$toast.success(res.message);
            this.$router.replace("/merchant");
          } else {
            this.$toast.fail(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    commit() {
      uploadShopImg(this.formData)
        .then((res) => {
          console.log(res);
          if (res.code === 200 && res.data.length != 0) {
            this.shopInfo.shopAvatar = res.data[0];
            this.shopInfo.sampleGraph = res.data[0];
            let imgList = res.data.slice(1);
            this.shopInfo.fileId = JSON.stringify(imgList);
          }
          this.updateShopInfo_();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.info {
  height: 220px;

  position: absolute;
  top: 60px;
  right: 10px;
  left: 10px;
}

.food-img > div {
  margin: 10px 15px;
  font-size: 14px;
  color: #646566;
}

.pos {
  position: absolute;
  top: 300px;
}
</style>

