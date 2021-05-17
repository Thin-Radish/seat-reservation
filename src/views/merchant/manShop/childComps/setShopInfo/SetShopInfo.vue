<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center" >资料设置</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
  export default {
    components:{
      NavBar,
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
    },
  }
</script>

<style scoped>

</style>