<template>
  <div> 
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">修改昵称</div>
    </nav-bar>

    <div class="name">
      <van-form>
        <van-field label="原有昵称" value="爱吃饭的瘦萝卜" readonly/>
        <van-field 
          name="name"
          label="新的昵称"
          v-model="info.name"
          :rules="[{ required: true, message: '限制3-8个之内英文或汉字',validator: validateName}]"/>
        <div></div>
      </van-form>
    </div>

    <com-button @click.native="onSubmit()" top="300" label="确认修改" background="#1989fa"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import ComButton from "components/common/button/ComButton"

import {setUserInfo} from "api/user"
import { Toast } from 'vant';
  export default {
    name:'ModName',
    components:{
      NavBar,
      ComButton,
    },
    data(){
      return{
        info:{
          name:'',
        } 
      }
    },
    methods:{
      goBack(path) {
        this.$router.go(-1);
      },
      onSubmit(){
        if(this.validateName(this.info.name)){
          
          setUserInfo(this.info).then(res=>{
            console.log(res);
            if(res.code === 200){
              this.$router.replace("/profile");
              Toast.success('修改成功');
            }else{
              Toast.fail('修改失败');
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      },
      validateName(val){
        return /^[\u4e00-\u9fa5a-zA-Z]{3,8}$/.test(val);
      }
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

