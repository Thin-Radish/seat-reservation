<template>
  <div class="confirm">
    <nav-bar>
      <div slot="left" @click="goback()"><img src="~assets/images/nav-bar/return-black.svg" alt=""></div>
      <div slot="center">订单信息</div>
    </nav-bar>
<div class="content">
    <div class="explain">
      <div>订单留言</div>
      <van-field
        v-model="text"
        type="text"
        label="用户留言"
        readonly
      />
      <van-field
        v-model="time"
        type="text"
        label="到店时间"
        readonly
      />
      <div></div>
    </div>

    <div class="seat-list">
      <div class="notice">
        座位预定
      </div>

      <div class="card-wrapper" ref="cardView">
        <ul class="card-list" ref="cardList">
          <li
            ref="cardItem"
            class="card-item"
            v-for="(item, index) in seatList"
            :key="index"
          >
            <seat-card :pos="item" />
          </li>
        </ul>
      </div>
    </div>

    <div class="food-list">
      <div class="shop-tile">用户点单</div>
      <div class="list-wrapper" ref="listView">
        <ul ref="foodList">
          <li v-for="(item, index) in foodList" :key="index" ref="foodItem">
            <food-card :food="item" />
          </li>
        </ul>
      </div>
    </div>

    <div class="book-fee">
      <div class="book-fee-left">
        <div>预定费用</div>
        <div class="prompt">每个座位1元预定费</div>
      </div>
      <div class="seat-fee">￥{{ bookFee }}</div>
    </div>
</div>
    <div class="pay-content">
      <div class="togle-price">￥{{ totalMoney }}</div>
      <div class="pay" v-if="isNew">接受订单</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import NavBar from "components/common/navbar/NavBar";
import SeatCard from "views/seat/childComps/seatCard/SeatCard";
import foodCard from "./foodCard";
export default {
  name:'Comfirm',
  components: {
    NavBar,
    SeatCard,
    foodCard,
  },
  props:{
    isNew:{
      type:Boolean,
      default:true,
    }
  },
  data() {
    return {
      text: "希望多加汤，少辣",
      time: "19:40",
      seatList: [
        { d:1,c:1},
        { d:1,c:2},
        { d:1,c:3},
      ],
      foodList: [
        {
          shopImg: require("assets/images/shop/food-img/单人佛跳墙.jpg"),
          name: "单人佛跳墙",
          monSell: "46",
          price: 65.9,
          count:1,
        },
        {
          shopImg: require("assets/images/shop/food-img/豪气麻辣米线.jpg"),
          name: "豪气麻辣米线",
          monSell: "35",
          label: "烤鱼、鲈鱼",
          price: 59.1,
          count:1,
        },
        {
          shopImg: require("assets/images/shop/food-img/黄金牛油.png"),
          name: "黄金牛油",
          monSell: "18",
          label: " 猪脚、烤蹄",
          price: 33.1,
          count:1,
        },
        {
          shopImg: require("assets/images/shop/food-img/烤肉串.png"),
          name: "烤肉串",
          monSell: "32",
          label: " 虾米、粉条、葱",
          price: 28.5,
          count:1,
        },
      ],
      totalMoney: 0,
    };
  },
  computed: {
    bookFee() {
      if (this.seatList) {
        return this.seatList.length;
      }
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },

    setScroll() {
      this.$nextTick(() => {
        if (this.seatList.length != 0) {
          let cardW = this.$refs.cardItem[0].clientWidth;
          let marginR = 10;
          let width = (cardW + marginR) * this.seatList.length;
          this.$refs.cardList.style.width = width + "px";
          this.scroll = new BScroll(this.$refs.cardView, {
            scrollX: true,
          });
        }
      });

      this.$nextTick(() => {
        if (this.foodList.length != 0) {
          let listH = this.$refs.foodItem[0].clientHeight;
          let marginT = 10;
          let height = (listH + marginT) * this.foodList.length;
          this.$refs.foodList.style.height = height +20+ "px";
          this.scroll = new BScroll(this.$refs.listView, {
            scrollX: true,
          });
        }
      });
    },
    totalFee() {
      let total = 0;
      this.foodList.forEach((val) => {
        total += val.count * val.price;
      });
      if (this.seatList) {
        total += this.seatList.length;
      }
      this.totalMoney = total.toFixed(2);
    },
  },
  mounted() {
    // this.seatList = this.$store.state.seatList;
    // this.foodList = this.$store.state.foodList;

    this.totalFee();
    this.setScroll();
  },
};
</script>

<style scoped>
.confirm {
  height: 100%;
  /* min-height: 100vh; */
  background: rgb(245, 245, 245);
}

.content{
  position: absolute;
  top: 46px;
  bottom: 50px;
  left: 0;
  right: 0;
  background: rgb(245, 245, 245);
}

.explain {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 25%;
  background: #fff;
  border-radius: 10px;
  padding: 15px 10px;
  box-sizing: border-box;
}


.seat-list {
  position: absolute;
  top: 28%;
  right: 10px;
  left: 10px;
  height: 25%;
  background: #fff;
  border-radius: 10px;
  padding: 15px 10px;
  box-sizing: border-box;
  overflow: hidden;
}
.notice {
  height: 20%;
  width: 100%;
  border-bottom: 1px solid rgb(243, 237, 237);
  font-size: 14px;
  display: flex;
  vertical-align: middle;

}

.card-wrapper {
  margin-top: 20px;

  width: 100%;
  overflow: hidden;
}
.card-list {
  width: 100%;
  display: flex;
}
.card-item {
  width: 60px;
  height: 50px;
  margin-right: 10px;
}

.food-list {
  position: absolute;
  top: 55%;
  right: 10px;
  left: 10px;
  height: 30%;
  background: #fff;
  border-radius: 10px;
  padding: 15px 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.shop-tile {
  height: 17%;
  width: 100%;
  border-bottom: 1px solid rgb(243, 237, 237);
  font-size: 14px;
  margin-bottom: 10px;
}
.list-wrapper {
  height: 140px;
  overflow: hidden;
}

.book-fee {
  position: absolute;
  top: 87%;
  right: 10px;
  left: 10px;
  height: 10%;
  background: #fff;
  border-radius: 10px;
  padding: 10px 10px;
  box-sizing: border-box;

  display: flex;
}
.book-fee-left {
  flex: 1;
}
.prompt {
  color: rgb(163, 158, 158);
  font-size: 12px;
}

.seat-fee {
  width: 50px;
  height: 50px;
}

.pay-content {
  position: absolute;
  bottom: 1%;
  right: 10px;
  left: 10px;
  height: 50px;
  background: #3a3939;
  border-radius: 30px;

  display: flex;
}

.togle-price {
  flex: 1;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.pay {
  width: 50%;
  text-align: center;
  line-height: 50px;
  background: blanchedalmond;
  border-radius: 30px;
  transform: translateX(1px);
}
</style>