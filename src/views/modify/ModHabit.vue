<template>
  <div> 
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">饮食习惯</div>
    </nav-bar>


    <div class="habits">
      <van-field label="热爱食品" v-model="favFood"/>
      <van-field label="口味偏好" v-model="flavor"/>
      <van-field label="忌口食物" v-model="avoid" />
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
        favFood:'',
        flavor:'',
        avoid:'',
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
.habits{
  height: 220px;

  position: absolute;
  top: 100px;
  right: 10px;
  left: 10px;

}

</style>

