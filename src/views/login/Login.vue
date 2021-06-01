<template>
  <div class="login">
    <div class="register" @click="goto('/register')"><div>注册</div></div>
    <div class="content">
      <div class="logo"><img src="~assets/images/logo.png" alt="" ></div>
      <van-form @submit="onSubmit" >
        <van-field
          v-model="loginForm.username"
          name="name"
          label="账号"
          placeholder="账号"
          left-icon="contact"
          right-icon="question-o"
          @click-right-icon="$toast('账号必须是数字、字母、下划线,长度4-16')"
          :rules="[{ required: true, message: '必须是数字、字母、下划线,长度4-16',validator: validateUsername}]"
        />  
        <van-field
          v-model="loginForm.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          left-icon="closed-eye"
          right-icon="question-o"
          @click-right-icon="$toast('密码必须是数字、字母、下划线,长度6-16')"
          :rules="[{ required: true, message: '必须是数字、字母、下划线,长度6-16',validator: validatePass}]"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import {userLogin} from "api/user"
import { Toast } from 'vant';
export default {
  data() {
    return {
      loginForm: {
          username: '',
          password: '',
      },
    };
  },
  methods: {
    onSubmit(values) {

      userLogin(values).then(res=>{
        if(res.code === 200){
          this.$store.commit('commitRole',1);
          this.$store.commit('commitUserId',res.data.id);
          // sessionStorage.setItem("role",1);   
          this.$router.replace("/index");
          Toast.success(res.message);
        }else{
          Toast.fail(res.message);
        }
        
      }).catch(err=>{
        console.log(err);
      })
    },

    validateUsername(val) {
      return /^[0-9a-zA-Z_.-]{4,16}$/.test(val);
    },
    validatePass(val) {
      return /^[0-9a-zA-Z_.-]{6,16}$/.test(val);
    },
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>


<style scoped>
.register{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 10px;

}

.register>div{
  width: 50px;
  height: 30px;
  line-height: 30px;
  float: right;
  background:  #f3eeee;
  text-align: center;
  border-radius: 5px;
  color: rgb(53, 52, 52);
}

.content{
  position: absolute;
  top: 18%;
  left: 10px;
  right: 10px;
}

.content /deep/ .van-field__label{
  width: 3.5em;
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