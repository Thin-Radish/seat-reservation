<template>
  <div class="index">
    <van-tabbar v-model="active" z-index=999>
      <van-tabbar-item icon="fire-o" to="find" name="/find">发现</van-tabbar-item>    
      <van-tabbar-item icon="comment-o" to="message" name="/message" :dot="isRecMsg" >消息</van-tabbar-item>
       <van-tabbar-item icon="orders-o" to="indent" name="/indent">订单</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="profile" name="/profile">我的</van-tabbar-item>
    </van-tabbar>

    <keep-alive exclude="Message">
      <!-- 二级路由 -->
      <router-view/>
    </keep-alive>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "/find",
    };
  },
  computed:{
    isRecMsg(){
      return this.$store.state.recMsg != {};
    }
  },

  watch:{
    $route: function (to, from) {
      this.active = this.$route.path;
    },
  }

};
</script>

<style scoped>
.index{
  overflow: hidden;
}
</style>