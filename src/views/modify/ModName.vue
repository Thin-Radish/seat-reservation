<template>
  <div> 
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">修改昵称</div>
    </nav-bar>


    <div class="name">
      <van-field label="原有昵称" value="爱吃饭的瘦萝卜" readonly/>
      <van-field label="新的昵称" v-model="newName"/>
      <div></div>
    </div>

    <com-button top="300" label="确认修改" background="#1989fa"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import ComButton from "components/common/button/ComButton"
  export default {
    name:'ModName',
    components:{
      NavBar,
      ComButton,
    },
    data(){
      return{
        newName:'',
      }
    },
    methods:{
      goBack(path) {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>
.name{
  height: 220px;

  position: absolute;
  top: 100px;
  right: 10px;
  left: 10px;

}

</style>

