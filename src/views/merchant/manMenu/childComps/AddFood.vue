<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">增加菜品</div>
    </nav-bar>

    <div class="habits">
      <van-field label="食品名称" v-model="foodName" />
      <van-field label="食品描述" v-model="foodLabel" />
      <van-field label="食品价格" v-model="foodPrice" />
      <div class="food-img">
        <div>菜品图片</div>
        <van-uploader
          :after-read="afterRead"
          v-model="fileList"
          :max-count="1"
        />
      </div>
      <div></div>
    </div>
    <!-- <input type="file" class="pos"> -->
    <form action="" enctype=‘multipart/form-data’>
      <input
      class="pos"
      name="file"
      type="file"
      accept="image/png,image/gif,image/jpeg"
      @change="update"
      
    />
    </form>

    <com-button top="400" label="确认添加" background="#1989fa" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";
import axios from "axios";
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      foodName: "",
      foodLabel: "",
      foodPrice: "",
      fileList: [],
    };
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },

    afterRead(file) {
      var formData = new FormData();
      formData.append("image", file.file);
      axios({
        method: 'post',
        headers: { "Content-Type": "multipart/form-data"},
        url: 'http://localhost:3000/test.do',
        data:formData
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })


      // let form = new FormData();
      // form.append("username", "zxj");
      // form.append("password", 123456);
      // axios.post("http://localhost:3000/test.do", formData).then((res) => {
      //   console.log(res);
      // });
    },
    update(e) {
      let file = e.target.files[0];
      let param = new FormData(); // 创建form对象
      param.append("files", file); // 通过append向form对象添加数据
      // console.log(param.get("files"));
      axios({
        method: "post",
        url: "http://localhost:3000/test.do",
        headers: { "Content-Type": "multipart/form-data"},
        data:param
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          console.log("++++++++++++++");
        });
    },
  },
};
</script>

<style scoped>
.habits {
  height: 220px;

  position: absolute;
  top: 100px;
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

