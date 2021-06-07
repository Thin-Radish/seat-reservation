<template>
  <div class="confirm">
    <nav-bar>
      <div slot="left" @click="goback()">
        <img src="~assets/images/nav-bar/return-black.svg" alt="" />
      </div>
      <div slot="center">订单信息</div>
    </nav-bar>
    
    <div class="content">
      <div class="explain">
        <div>订单留言</div>
        <van-field
          :value="indentInfo.levWords"
          type="text"
          label="用户留言"
          readonly
        />
        <van-field
          :value="indentInfo.arriveTime"
          type="text"
          label="到店时间"
          readonly
        />
        <div></div>
      </div>

      <div class="seat-list">
        <div class="notice">座位预定</div>

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
      <div class="togle-price">订单金额：</div>
      <div class="pay" v-if="isNew">￥{{ totalPrice }}</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import NavBar from "components/common/navbar/NavBar";
import SeatCard from "views/seat/childComps/seatCard/SeatCard";
import foodCard from "components/content/foodCard/foodCard";

import { getIndentById } from "api/indent";
export default {
  name: "Comfirm",
  components: {
    NavBar,
    SeatCard,
    foodCard,
  },
  props: {
    isNew: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      indentInfo: {},
    };
  },
  computed: {
    bookFee() {
      if (this.indentInfo.seats) {
        return this.indentInfo.seats.length;
      }
    },
    totalPrice() {
      if (this.indentInfo.price) {
        return this.indentInfo.price + this.bookFee;
      }
    },
    seatList() {
      if (this.indentInfo.seats) {
        let seats = [];
        this.indentInfo.seats.forEach((item) => {
          let seatItem = {
            tableId: item.tableId,
            chairId: item.seatId,
          };
          seats.push(seatItem);
        });

        //要等seatCard创建完后才能获取ref   computed执行在mounted之后
        this.setSeatScroll();
        return seats;
      }
    },

    foodList() {
      if (this.indentInfo.orderDish) {
        let foods = [];
        this.indentInfo.orderDish.forEach((item) => {
          item.dish.count = item.num;
          foods.push(item.dish);
        });
        this.setFoodScroll();
        return foods;
      }
    },
  },
  methods: {

    getIndentById_(){
      let indentId = this.$route.query.id;
      getIndentById(indentId)
      .then((res) => {
        this.indentInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
      
    },


    goback() {
      this.$router.go(-1);
    },

    setSeatScroll() {
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
    },

    setFoodScroll() {
      this.$nextTick(() => {
        if (this.foodList.length != 0) {
          let listH = this.$refs.foodItem[0].clientHeight;
          let marginT = 10;
          let height = (listH + marginT) * this.foodList.length;
          this.$refs.foodList.style.height = height + 20 + "px";
          this.scroll = new BScroll(this.$refs.listView, {
            scrollX: true,
          });
        }
      });
    },
  },
  mounted() {
    this.getIndentById_();
  },
};
</script>

<style scoped>
.confirm {
  height: 100%;
  /* min-height: 100vh; */
  background: rgb(245, 245, 245);
}

.content {
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
  color: #fff;
}

.pay {
  width: 50%;
  text-align: center;
  line-height: 50px;
  background: blanchedalmond;
  border-radius: 30px;
  transform: translateX(1px);

  font-size: 18px;
  font-weight: 600;
}
</style>