<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">增加菜品</div>
    </nav-bar>

    <div class="info">
      <van-field label="店铺名称" v-model="shopInfo.title" />
      <van-field label="店铺特色" v-model="shopInfo.label" />
      <van-field label="店铺分类" v-model="shopInfo.classify" />
      <van-field label="店铺热线" v-model="shopInfo.phoneNum" />
      <van-field label="店铺地址" v-model="shopInfo.local" />
      <van-field label="营业时间" v-model="shopInfo.openTime" />
      <div class="food-img">
        <div>店铺图片</div>
        <van-uploader
          :after-read="afterRead"
          v-model="fileList"
          :max-count="6"
        />
      </div>
      <input type="file" name="files" id="file" multiple="multiple" />
      <div @click="commitImg">提交</div>
      <!-- <form action="http://114.55.38.15:15001/shop/uploadImage" enctype="multipart/form-data" method="post">
        <input type="file" name="files" multiple='multipart'>
        <input type="submit" value="提交">
      </form> -->

      <div></div>
    </div>

    <com-button
      top="570"
      label="确认添加"
      background="#1989fa"
      @click.native="commit()"
    />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";
import axios from "axios";
import { uploadShopImg } from "api/shop";
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      shopInfo: {
        shopId: 6,
        title: "",
        label: "",
        classify: "",
        phoneNum: "",
        local: "",
        openTime: "",
      },
      fileList: [],
    };
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },
    commitImg() {
      var fromData = new FormData();

      document.getElementById("file").onchange = () => {
        for (var item of document.getElementById("file").files) {
          fromData.append("file", item);
        }
      };

      document.getElementById("shop-img").onclick = (e) => {
        axios({
          method: "post",
          headers: { "Content-Type": "multipart/form-data" },
          url: "http://localhost:15001/shop/uploadImages",
          data: fromData,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    },

    afterRead(file) {
      console.log(file.file.name);
      var formData = new FormData();
      formData.append("image", file.file);
      console.log(formData.get("image"));

      // uploadShopImg(formData).then(res=>{
      //   console.log(res);
      // }).catch(err=>{
      //   console.log(err);
      // })
      axios.defaults.withCredentials = true;
      axios({
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        url: "http://114.55.38.15:15001/shop/uploadImage",
        data: formData,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    commit() {
      console.log(this.shopInfo);
    },
  },
  // mounted() {
  //   axios({
  //     method: "get",
  //     url: "http://127.0.0.1:15001/getShopAll",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
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

