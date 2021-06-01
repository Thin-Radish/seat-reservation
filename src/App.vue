<template>
  <div id="app">
    <keep-alive exclude="ModName,Seat,Comfirm,Interact,Category,Shop">
      <router-view />
    </keep-alive>
  </div>
</template>


<script>
export default {
  watch: {
    $route: function (to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style>

@import "~assets/css/base.css";
</style>
