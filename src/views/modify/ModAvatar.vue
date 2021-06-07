<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">设置头像</div>
    </nav-bar>

    <div class="pos">
      <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
    </div>

    

    <com-button
      top="300"
      label="确认设置"
      background="#1989fa"
      @click.native="commit()"
    />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";

import { getAvatar } from "api/user";
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      fileList: [],
      formData: new FormData(),
    };
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },

    afterRead(file) {
      this.formData.append("dishImgFile", file.file);
    },

    commit() {
      getAvatar(this.formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>


.pos {
  position: absolute;
  top: 200px;
  left: 20px;
}
</style>

