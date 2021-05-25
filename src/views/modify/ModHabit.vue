<template>
  <div> 
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">饮食习惯</div>
    </nav-bar>


    <div class="habits">
      <van-form>
        <van-field label="热爱食品" v-model="info.habit" :maxlength="12"/>
        <van-field label="口味偏好" v-model="info.flavor" :maxlength="12"/>
        <van-field label="忌口食物" v-model="info.avoid" :maxlength="12"/>
        <div></div>
      </van-form>
    </div>

    <com-button top="300" label="确认修改" background="#1989fa" @click.native="onSubmit()"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import ComButton from "components/common/button/ComButton"

import {setUserInfo} from "api/user"
import { Toast } from 'vant';
  export default {
    components:{
      NavBar,
      ComButton,
    },
    data(){
      return{
        info:{
          habit:'',
          flavor:'',
          avoid:'',
        }
      }
    },
    methods:{
      goBack(path) {
        this.$router.go(-1);
      },
      onSubmit(){
        setUserInfo(this.info).then(res=>{
          if(res.code === 200){
            this.$router.replace("/profile");
            Toast.success('设置成功');
          }else{
            Toast.fail('设置失败');
          }
        }).catch(err=>{
            console.log(err);
        })
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

