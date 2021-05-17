<template>
  <div> 
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">修改密码</div>
    </nav-bar>


    <div class="name">
      <van-field label="原有密码" type="password" v-model="oldpPwd"/>
      <van-field label="原有密码" type="password" v-model="newPwd"/>
      <van-field label="再次输入" type="password" v-model="again"/>
      <div></div>
    </div>

    <com-button top="300" label="确认修改" background="#1989fa"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import ComButton from "components/common/button/ComButton"
  export default {
    components:{
      NavBar,
      ComButton,
    },
    data(){
      return{
        oldpPwd:'',
        newPwd:'',
        again:'',
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

