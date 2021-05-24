<template>
  <div class="hotel-card" @click="gotoShop()">
    <div class="goods-img"><img :src="shopData.shopAvatarUrl"  /></div>
    <div class="info">
      <span class="title">{{ shopData.title }}</span>

      <div>
        <div class="hot">
          <img src="~assets/images/star.svg" alt="" />
          <span>{{ shopData.star }}</span>
          <span mon-sell>月售：{{ shopData.monSell }}</span>
        </div>
        <span class="label">{{ shopData.label }}</span>
        <div class="re-seat">
          座位剩余：{{ shopData.totalSeat }}/{{ shopData.remSeat }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopData: {
      type: Object,
      default: null,
    },
  },
  methods:{
    gotoShop() {
      this.$router.push({
        path: '/shop',
          query: {
            id: this.shopData.id
          }
      });
    },
  },
  mounted(){
    this.$bus.$emit('imageLoad')
  }
};
</script>

<style scoped>
.hotel-card {
  width: 95%;
  height: 110px;
  background: white;
  margin: 10px auto;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;

  display: flex;
}
.hotel-card .goods-img {
  width: 24%;
  height: 76%;

  margin-left: 10px;
  margin-top: 5px;
}

.goods-img img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.info {
  margin-left: 30px;
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

.hot img {
  width: 12px;
  height: 12px;
}
.hot span {
  height: 20px;
  display: inline-block;
  vertical-align: middle;

  font-size: 12px;
  color: #83878a;
  line-height: 18px;

  margin-right: 15px;
}

.label {
  background: #fdf7df;
  display: inline-block;
  padding: 2px;
  font-size: 13px;
  color: #ff7f00;
  border-radius: 3px;

  margin: 2px;
}

.re-seat {
  font-size: 14px;
  color:  #474646;
}
</style>