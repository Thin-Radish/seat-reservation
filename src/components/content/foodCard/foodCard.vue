<template>
  <div class="food-card">
    <div  class="food-img">
      <img :src="food.dishImg" alt="">
    </div>
    <div class=" food-name">
      <div>{{food.name}}</div>
      <div class="count">x{{food.count}}</div>
    </div>
    <div class="food-price">￥{{food.price}}</div>
  </div>
</template>

<script>
  export default {
    props:{
      food:Object,
    },
  }
</script>

<style scoped>
.food-card{
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
}
.food-img{
  width: 70px;
  height: 50px;
}

.food-img img{
  height: 50px;
  width: 50px;
  border-radius: 5px;
  margin-left: 5px;
}

.food-name{
  flex: 1;
}

.food-price{
  width: 60px;
  height: 50px;
  text-align: center;
}

.count{
  font-size: 12px;
  color: rgb(163, 160, 160);
  line-height: 30px;
}
</style>