<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">更改绑定</div>
    </nav-bar>

    <div class="name">
      <van-form>
        <van-field label="当前手机号" v-model="oldTel"  type="tel" readonly />
        <van-field label="新的手机号" v-model="info.number" type="tel"
        :rules="[{ required: true, message: '请输入正确的手机号',validator: validateTel}]"/>
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入验证码"
        >
          <template #button>
            <van-button size="small" type="primary" >发送验证码</van-button>
          </template>
        </van-field>
        <div></div>
      </van-form>
    </div>

    <com-button top="300" label="确认修改" background="#1989fa" @click.native="onSubmit()" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";

import {setUserInfo} from "api/user"
import { Toast } from 'vant';
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      oldTel: "18973835153",
      info:{
        number: "",
      },
      sms:'',
    };
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },
    onSubmit(){
      if(this.validateTel(this.info.number)){
        setUserInfo(this.info).then(res=>{
          if(res.code === 200){
            this.$router.replace("/profile");
            Toast.success('绑定成功');
          }else{
            Toast.fail('绑定失败');
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    validateTel(val){
        return /^1[3|4|5|7|8|9]\d{9}$/.test(val);
    }
  },
};
</script>

<style scoped>
.name {
  height: 220px;

  position: absolute;
  top: 100px;
  right: 10px;
  left: 10px;
}
</style>

