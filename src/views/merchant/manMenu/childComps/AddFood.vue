<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">增加菜品</div>
    </nav-bar>

    <div class="habits">
      <!-- <van-field label="月出售" v-model.number="dish.monSell" type="number"/> -->
      <van-field label="菜品名称" v-model="dish.foodName" />
      <van-field label="菜品描述" v-model="dish.foodLabel" />
      <van-field label="菜品价格" v-model.number="dish.foodPrice" type="number" />
      <van-field label="菜品分类" v-model="dish.foodType" />
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

    <com-button top="460" label="确认添加" background="#1989fa"   @click.native="commit()"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";

import { addFood } from "api/dish";
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      dish:{
        shopId:2,
        monSell:89,
        foodName: "",
        foodLabel: "",
        foodPrice:null,  
        foodType:"",
      },
      fileList: [],
      formData: new FormData(),
    };
  },
  created(){
    this.dish.foodType = this.$route.query.sort;
    // console.log(this.$route.query.sort);
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },

    afterRead(file) {
      this.formData.append("dishImgFile", file.file);
    },
    appendData(){
      this.formData.append("shopId", this.dish.shopId); 
      this.formData.append("monSell", this.dish.monSell); 
      this.formData.append("name", this.dish.foodName);
      this.formData.append("introduction", this.dish.foodLabel);
      this.formData.append("price", this.dish.foodPrice);
      this.formData.append("type", this.dish.foodType);
    },
    commit(){
      this.appendData();
      addFood(this.formData).then(res=>{
        if(res.code === 200){
          this.$toast.success(res.message);
          this.$router.replace("/merchant/menu");
        }else{
          this.$toast.fail(res.message);
        }
      }).catch(err=>{
        console.log(err);
      })
    }
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

