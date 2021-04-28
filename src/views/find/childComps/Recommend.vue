<template>
  <div class="recommend">
    <div class="recom-title">猜你喜欢</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.recommend{
  width: 95%;
  height: 360px;
  margin: 10px  auto;

  background: #fff;
  padding-top: 8px;
  border-radius: 10px;
}
.recom-title{
  margin-left: 5px;
  font-family: SimHei;
  font-size: 20px;
  font-weight: 500;
  color: rgb(59, 54, 35);


}


</style>