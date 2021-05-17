<template>
  <div class="goods-card">

    <div class="good-img"><img :src="shopData.shopImg" alt="" /></div>
    <div class="info">
      <span class="title">{{ shopData.name }}</span>
      <div>
        <div class="hot">
          <span>月售：{{ shopData.monSell }} </span>
        </div>
        <span class="label">{{ shopData.label }}</span>
      </div>
      <div class="price-wrapper">
        <div class="price">￥{{ shopData.price }}</div>
        <div class="cart-control-wrapper">
          <cart-control :listItem="shopData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartControl from "views/shop/childComps/order/cartControl/CartControl";
export default {

  components: {
    CartControl,
  },
  props: {
    shopData: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.goods-card {
  width: 95%;
  height: 110px;
  background: white;
  margin: 5px auto;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;

  display: flex;
}
.goods-card .good-img {
  width: 40%;
  height: 100%;
  margin-left: 10px;
}

.good-img img {
  width: 80%;
  height: 80%;
  border-radius: 8px;
}

.info {
  height: 100%;
  flex: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info .title {
  font-size: 17px;
  font-weight: 550;
  margin-bottom: 2px;
}

.hot span {
  display: inline-block;
  height: 15px;
  vertical-align: top;

  font-size: 13px;
  color: #83878a;
}

.label {
  background: #fdf7df;
  display: inline-block;
  padding: 2px;
  font-size: 8px;
  color: #ff7f00;
  border-radius: 3px;

  margin: 2px;
}

.price-wrapper {
  display: flex;
  position: relative;
}

.price {
  color: red;
}

.cart-control-wrapper {
  position: absolute;
  right: 5px;
  bottom: 0;
}
</style>