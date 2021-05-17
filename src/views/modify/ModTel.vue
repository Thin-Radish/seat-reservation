<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">更改绑定</div>
    </nav-bar>

    <div class="name">
      <van-field label="当前手机号" v-model="oldTel"  type="tel" readonly />
      <van-field label="新的手机号" v-model="newTel" type="tel"/>
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
    </div>

    <com-button top="300" label="确认修改" background="#1989fa" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ComButton from "components/common/button/ComButton";
export default {
  components: {
    NavBar,
    ComButton,
  },
  data() {
    return {
      oldTel: "18973835153",
      newTel: "",
      sms:'',
    };
  },
  methods: {
    goBack(path) {
      this.$router.go(-1);
    },
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

