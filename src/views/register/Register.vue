<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" ></div>
      <div slot="center">账号注册</div>
    </nav-bar>
    <div class="content">
      <div class="logo"><img src="~assets/images/logo.png" alt="" ></div>
      <van-form @submit="onSubmit" >
        <van-field
          v-model="register.username"
          name="name"
          label="填写账号"
          placeholder="数字、字母、下划线,长度4-16"
          right-icon="question-o"
          @click-right-icon="$toast('账号必须是数字、字母、下划线,长度4-16')"
          :rules="[{ required: true, message: '必须是数字、字母、下划线,长度4-16',validator: validateUsername}]"
        />  
        <van-field
          v-model="register.password"
          type="password"
          name="password"
          label="填写密码"
          placeholder="数字、字母、下划线,长度6-16"
          right-icon="question-o"
          @click-right-icon="$toast('密码必须是数字、字母、下划线,长度6-16')"
          :rules="[{ required: true, message: '必须是数字、字母、下划线,长度6-16',validator: validatePass}]"
        />
        <van-field
          v-model="register.repPassword"
          type="password"
          name="password"
          label="确认密码"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            >立即注册</van-button
          >
        </div>
      </van-form>
    </div>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import {userRegister} from "api/user"
import { Toast } from 'vant';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      register: {
          name: '',
          password: '',
          repPassword:'',
      },
    };
  },
  methods: {
    onSubmit(values) {
      if(this.register.password === this.register.repPassword ){
        userRegister(values).then(res=>{
          if(res.code === 200){
            this.$router.replace("/login");
            Toast.success(res.message);
          }else{
            Toast.fail(res.message);
          }
        }).catch(err=>{
          console.log(err);
        })
      }else{
        Toast.fail('两次密码输入不一致');
      }
      
    },

    validateUsername(val) {
      return /^[0-9a-zA-Z_.-]{4,16}$/.test(val);
    },
    validatePass(val) {
      return /^[0-9a-zA-Z_.-]{6,16}$/.test(val);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>


.content{
  position: absolute;
  top: 15%;
  left: 10px;
  right: 10px;
}

.content /deep/ .van-field__label{
  width: 4em;
}


.logo{
  text-align: center;
  margin-bottom: 15px;
}
.logo >img{
  height: 150px;
  width: 250px;
}
</style>