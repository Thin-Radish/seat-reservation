<template>
  <div class="item">
    <div class="icon"><img :src="recomData.shopImg" alt=""></div>
    <div class="title"><span>{{recomData.title}}</span></div>
  </div>
</template>

<script>
  export default {
    props:{
      recomData:{
        type:Object,
        default:null,
      }
    },
  }
</script>

<style scoped>

.item{
  width: 46%;
  height: 100px;
  float: left;
  margin-left: 2.5%;
  margin-top: 10px;
}

.icon{
  width: 100%;
  height: 80px;
 
}
.icon img{
  width: 100%;
  height: 80px;
   border-radius: 4px;
}
.title{
  width: 100%;
  height: 20px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;

  font-size: 14px;
}



</style>