<template>
  <div class="index">
    <van-tabbar v-model="active" z-index=999>
      <van-tabbar-item icon="fire-o" to="menu" name="/merchant/menu">菜单</van-tabbar-item>    
      <van-tabbar-item icon="comment-o" to="message" name="/merchant/message">信息</van-tabbar-item>
       <van-tabbar-item icon="orders-o" to="indent" name="/merchant/indent">订单</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="shop" name="/merchant/shop">店铺</van-tabbar-item>
    </van-tabbar>    
      <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "/merchant/shop",
    };
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