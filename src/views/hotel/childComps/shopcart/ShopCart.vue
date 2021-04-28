<template>
  <div class="shopcart" v-show="totalCount">
    <!--购物车左边-->
    <div class="left">
      <div class="circle" @click="toggle()">
        <img src="~assets/images/shop-cart.svg" alt="">
        <div class="num-red">
          {{ totalCount }}
        </div>
      </div>

      <div class="left-text-after" v-show="totalCount">
        <div class="total-money">￥{{ totalMoney }}</div>
        <div class="promise">保留位置20分钟</div>
      </div>
    </div>
    <!--购物车右边-->
    <div class="right">选位置</div>

    <!-- 购物车列表 -->
    <div class="shopcart-list" v-show="listShow" :class="{ show: listShow }">
      <div class="list-header">
        <div class="empty" @click="clearCart">
          <img src="./img/ash_bin.png" />
          <span>清空购物车</span>
        </div>
      </div>
      <div class="list-content" ref="listContent">
        <ul>
          <li class="food-item" v-for="(food, index) in foodlist" :key="index">
            <div class="desc-wrapper">
              <div class="desc-left">
                <div class="name">{{ food.name }}</div>
              </div>
              <div class="desc-right">￥{{ food.price }}</div>
            </div>
            <div class="cartcontrol-wrapper">
              <cart-control :listItem="food" />
            </div>
          </li>
        </ul>
      </div>
      <div class="list-bottom"></div>
    </div>
    <div class="shopcart-mask" v-show="listShow" @click="hideMask"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import CartControl from "views/hotel/childComps/shopcart/CartControl";
export default {
  components: {
    CartControl,
  },
  data() {
    return {
      isShow: false,
      shopScroll: null,
    };
  },
  props: {
    foodlist: {
      type: Array,
      default: [],
    },
  },
  methods: {
    clearCart() {
      this.foodlist.forEach((val) => {
        val.count = 0;
      });
      this.isShow = false;
    },
    toggle() {
      if (!this.totalCount) {
        this.isShow = false;
      }
      this.isShow = !this.isShow;
    },
    hideMask() {
      this.isShow = false;
    },
  },
  computed: {
    totalMoney() {
      let total = 0;
      this.foodlist.forEach((val) => {
        if (!val.count) {
          return;
        } else {
          total += val.count * val.price;
        }
      });
      return total.toFixed(2);
    },
    totalCount() {
      let num = 0;
      this.foodlist.forEach((val) => {
        if (!val.count) {
          return;
        } else {
          num += val.count;
        }
      });
      return num;
    },

    listShow() {
      if (!this.totalCount) {
        this.isShow = false;
        return false;
      }

      // this.$nextTick(() => {
      //   if (!this.shopScroll) {
      //     this.shopScroll = new BScroll(this.$refs.shopListScroll, {
      //       click: true,
      //     });
      //   } else {
      //     this.shopScroll.refresh();
      //   }
      // });

      return this.isShow;
    },
  },
};
</script>

<style scoped>
.shopcart {
  width: 100%;
  background: #514f4f;
  position: fixed;
  bottom: 0;
  height: 44px;
  display: flex;

  z-index: 1;
}
.left {
  flex: 1;
}
.circle {
  width: 50px;
  height: 50px;

  border-radius: 50%;
  position: relative;
  left: 10px;
  bottom: 16px;
  float: left;

  background: #ffd161;
  color: #2d2b2a;
  line-height: 70px;
  text-align: center;
}
.circle .num-red {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 9px;
  line-height: 15px;
  text-align: center;
  right: 0;
  top: 0;
}
.left-text-before {
  position: relative;
  left: 18px;
  font-size: 14px;
  line-height: 50px;
  color: #c4c4c4;
  float: left;
}
.left-text-after {
  position: relative;
  left: 18px;
  color: #c4c4c4;
  float: left;
}
.left-text-after .total-money {
  font-size: 24px;
  line-height: 28px;
}
.left-text-after .promise {
  font-size: 11px;
}
.right {
  flex: 0 0 110px;
  line-height: 50px;
  text-align: center;
  background: #ffd161;
  color: #2d2b2a;
}

.shopcart-list {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
}

.shopcart-list.show {
  transform: translateY(-100%);
}

.list-header {
  height: 30px;
  background: #f4f4f4;
}

.list-header .title {
  float: left;
  border-left: 4px solid #53c123;
  padding-left: 6px;
  line-height: 30px;
  font-size: 12px;
}

.list-header .empty {
  float: right;
  line-height: 30px;
  margin-right: 10px;
  font-size: 0;
}

.list-header .empty img {
  height: 14px;
  margin-right: 9px;
  vertical-align: middle;
}

.list-header .empty span {
  font-size: 12px;
  vertical-align: middle;
}

.shopcart-list .list-content {
  max-height: 360px;
  overflow: hidden;
  background: white;
}

.list-content .food-item {
  height: 38px;
  padding: 12px 12px 10px 12px;
  border-bottom: 1px solid #f4f4f4;
}

.food-item .desc-wrapper {
  float: left;
  width: 240px;
}

.desc-wrapper .desc-left {
  float: left;
  width: 170px;
}

.desc-left .name {
  font-size: 16px;
  margin-bottom: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
}





.desc-wrapper .desc-right {
  float: right;
  width: 70px;
  text-align: right;
}

.desc-right .price {
  font-size: 12px;
  line-height: 38px;
}

.cartcontrol-wrapper {
  float: right;
  margin-top: 6px;
}

.shopcart .shopcart-mask {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: rgba(7, 17, 27, 0.6);
}
</style>