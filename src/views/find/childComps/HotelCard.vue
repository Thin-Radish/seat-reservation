<template>
  <div class="hotel-card">
    <div class="shopImg"><img :src="shopData.shopImg" alt=""></div>
    <div class="info">
      <span class="title">{{shopData.title}}</span>

      <div>
        <div class="hot">
          <img src="../../../assets/images/star.svg" alt=""><span>{{shopData.star}}  月售：{{shopData.monSell}} </span>
        </div>
        <span class="label">{{shopData.label}}</span>
        <div class="re-seat">座位剩余：{{shopData.totalSeat}}/{{shopData.remSeat}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      shopData:{
        type:Object,
        default:null,
      }
    },
  }
</script>

<style scoped>

.hotel-card{
  width: 95%;
  height: 110px;
  background: white;
  margin: 10px  auto;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;

  display: flex;

}
.hotel-card .shopImg{
  width: 40%;
  height: 100%;
}

.shopImg img{
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.info{
  margin-left: 10px;
  height: 100%;
  flex: 1;

   overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.info .title{
  font-size: 17px;
  font-weight:550;
  margin-bottom: 2px;
}


.hot span{
  display: inline-block;
  height: 15px;
  vertical-align:top;

  font-size: 13px;
  color: #83878a;
}

.label{
  background: #fdf7df;
  display:inline-block;
  padding: 2px;
  font-size: 13px;
  color: #ff7f00;
  border-radius: 3px;

  margin: 2px;
}

.re-seat{
  font-size: 16px;
  /* color: #83878a; */
}


</style>