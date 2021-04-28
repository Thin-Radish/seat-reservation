<template>
  <div>
    <van-tabbar v-model="active" z-index=999>
      <van-tabbar-item icon="fire-o" to="find">发现</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="collect">收藏</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="indent">订单</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="profile">我的</van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
</style>