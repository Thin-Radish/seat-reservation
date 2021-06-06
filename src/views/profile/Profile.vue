<template>
  <div class="profile">  
    <nav-bar>
      <div slot="center">个人中心</div>
    </nav-bar>
    <scroll class="content">
      <div class="split"></div>
      <contain class="head">
        <div class="avatar">
          <img src="~assets/images/profile/avatar.svg" alt="" />
          <!-- <img :src="userInfo.avatarUrl" alt="" /> -->
        </div>
        <div class="head-center">
          <div class="name">
            {{userInfo.name}}
            <img src="~assets/images/profile/boy.svg"  v-if="userSex.sex ==='男生'">
            <img src="~assets/images/profile/girl.svg"  v-else>
          </div>
          <div class="vip" v-if="userInfo.vip ===1">正式会员</div>
          <div class="general" v-else>普通用户</div>
        </div>
      </contain>

      <contain>
        <van-grid :column-num="4" :border="false" class="record">
          <van-grid-item to="/collect">
            <img src="~assets/images/profile/collect.svg" alt="">收藏夹
          </van-grid-item>
          <van-grid-item to="/footprint"> 
            <img src="~assets/images/profile/record.svg" alt="">历史记录
          </van-grid-item>
          <van-grid-item>
            <img src="~assets/images/profile/register.svg" alt="">签到
          </van-grid-item>
          <van-grid-item>
            <img src="~assets/images/profile/wallet.svg" alt="">钱包
          </van-grid-item>
        </van-grid>
      </contain>

      <contain height="180">
        <div><span>饮食习惯</span><span  class="change" @click="goto('/modhabit')"><img src="~assets/images/profile/change.svg" alt=""></span></div>
        <van-field label="热爱食品" :value="userInfo.habit"  readonly />
        <van-field label="口味偏好" :value="userInfo.flavor"  readonly />
        <van-field label="忌口食物" :value="userInfo.avoid" readonly />
        <div></div>
      </contain>

      <contain height="263">
        账号管理
        <van-cell title="我的昵称" is-link :value="userInfo.name" to="/modname"/>
        <van-cell title="手机绑定" is-link to="/modtel" :value="userInfo.number"/>
        <van-cell title="我的性别" :value="userInfo.sex" is-link @click="showPicker = true"/>
        <van-popup v-model="showPicker" position="left">
          <van-picker
          title="性别"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      
        </van-popup>
        <van-cell title="我的头像" is-link value="修改"/>
        <van-cell title="修改密码" is-link to="/modpwd" value="修改"/>
        
        <div></div>
      </contain>
  
      <div class="quit">退出登录</div>
      <div class="bottom"></div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import Contain from "components/content/container/Contain";

import {setUserInfo,getUserInfo} from "api/user"
import { Toast } from 'vant';
export default {
  name:'Profile',
  components: {
    Scroll,
    NavBar,
    Contain,
  },
  methods:{
    goto(path) {
      this.$router.push(path);
    },

    //设置性别
    onConfirm(value){
      this.showPicker = false;
      this.userSex.sex = value;
      setUserInfo(this.userSex).then(res=>{
        if(res.code === 200){
            Toast.success('设置成功');
        }else{
            Toast.fail('设置失败');
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    getUserInfo_(){
      let userId = this.$store.state.userId;
      getUserInfo(userId).then(res=>{
        console.log(res);
        this.userInfo = res.data;
        this.userSex.sex=res.data.sex;
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  data(){
    return{
      showPicker: false,
      columns:['男生','女生'],
      userSex:{
        sex:''
      },
      // user:{
      //   name:"爱吃饭的瘦萝卜",
      //   sex:"男生",
      //   identity:"vip", //general
      //   avatar:"~assets/images/profile/avatar.svg",
      //   tel:"18973835153",
      //   habit:{
      //     favFood:"鸡肉、牛肉",
      //     flavor:"微辣，多汤",
      //     avoid:"不要香菜、不要葱"
      //   }
      // },
      userInfo:{},


    }
  },
  mounted(){
    this.getUserInfo_();
  }
};
</script>

<style scoped>


.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 45px;
  bottom: 50px;
}
.split {
  height: 8px;
  width: 100%;
}
.head {
  display: flex;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: antiquewhite;
}
.avatar > img {
  width: 70px;
  height: 70px;
}

.head-center {
  margin-left: 15px;
  flex: 1;
  padding: 10px;
}

.name {
  font-size: 18px;
  display: flex;
  line-height: 16px;
  vertical-align: middle;
}

.name svg {
  margin-left: 5px;
}
.vip {
  width: 55px;
  height: 15px;
  margin-top: 10px;
  background: #bfa3ec;
  border-radius: 3px;
  text-align: center;
  line-height: 16px;
  font-size: 11px;
  color: #fff;
}
.general {
  width: 55px;
  height: 15px;
  margin-top: 10px;
  background: #0fbcf9;
  border-radius: 3px;
  text-align: center;
  line-height: 16px;
  font-size: 11px;
  color: #fff;
}
.record {
  font-size: 12px;
}

.record img {
  height: 30px;
  height: 30px;
}
.change{
  float: right;
  margin-right: 5px;
}
.quit {
  width: 95%;
  height: 45px;
  margin: 0 auto;
  /* background-image: linear-gradient(to right, rgb(238, 168, 143), coral); */
  background: #969696;
  border-radius: 30px;

  text-align: center;
  color: rgb(223, 219, 219);
  line-height: 50px;
}

.bottom {
  width: 100%;
  height: 30px;
}
</style>