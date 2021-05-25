<template>
  <div> 
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">修改密码</div>
    </nav-bar>


    <div class="name">
      <!-- <van-field label="原有密码" type="password" v-model="oldpPwd"/> -->
      <van-form>
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="填写密码"
            placeholder="数字、字母、下划线,长度6-16"
            right-icon="question-o"
            @click-right-icon="$toast('密码必须是数字、字母、下划线,长度6-16')"
            :rules="[{ required: true, message: '数字、字母、下划线,长度6-16',validator: validatePass}]"
          />
          <van-field
            v-model="again"
            type="password"
            name="password"
            label="确认密码"
          />
        <div></div>
      </van-form>
    </div>

    <com-button top="350" label="确认修改" background="#1989fa" @click.native="onSubmit()"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import ComButton from "components/common/button/ComButton"

import {modPassword} from "api/user"
import { Toast } from 'vant';
  export default {
    components:{
      NavBar,
      ComButton,
    },
    data(){
      return{
        oldpPwd:'',
        password:'',
        again:'',
      }
    },
    methods:{
      goBack(path) {
        this.$router.go(-1);
      },
      onSubmit(){
        console.log(this.password);
        console.log(this.again);
        if(this.again === this.password){
          modPassword(this.password).then(res=>{
            console.log(res);
          }).catch(err=>{
            console.log(err);
          })
        }else{
          Toast.fail('两次密码输入不一致')
        }
      },
      validatePass(val) {
        return /^[0-9a-zA-Z_.-]{6,16}$/.test(val);
      },
    }
  }
</script>

<style scoped>
.name{
  height: 220px;

  position: absolute;
  top: 180px;
  right: 10px;
  left: 10px;

}

</style>

