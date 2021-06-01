<template>
  <div class="confirm">
    <nav-bar>
      <div slot="left" @click="goback()">
        <img src="~assets/images/nav-bar/return-black.svg"  />
      </div>
      <div slot="center">确认订单</div>
    </nav-bar>

    <div class="content">
      <div class="explain">
        <div>订单填写</div>
        <van-field
          v-model="text"
          type="text"
          label="商家留言"
          placeholder="输入留言信息"
        />
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="time"
          label="到店时间"
          placeholder="点击选择时间"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            :min-hour="currHours"
            :min-minute = "currMinutes"
            :max-hour="23"
            type="time"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <div></div>
      </div>

      <div class="seat-list">
        <div class="notice">
          <img src="~assets/images/speaker-smell.svg" alt="" />
          座位最多保留30分钟
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
        <div class="shop-tile">选菜详情列表</div>
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
      <div class="pay" @click="toPayFor()">立即支付</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import NavBar from "components/common/navbar/NavBar";
import SeatCard from "views/seat/childComps/seatCard/SeatCard";
import foodCard from "components/content/foodCard/foodCard";

import {createIndent} from "api/indent"
export default {
  name: "Comfirm",
  components: {
    NavBar,
    SeatCard,
    foodCard,
  },
  data() {
    return {
      time:"2020-05-25 10:30",
      showPicker: false,
      text: "",
      seatList: null,
      foodList: null,
      totalMoney: 0,
      indentDish:[],
      indentSeat:[],
    };
  },
  computed: {
    bookFee() {
      if (this.seatList) {
        return this.seatList.length;
      }
    },
    currDay(){
      var time = new Date();
      return time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate();
    },
    currHours(){
      return new Date().getHours();
    },
    currMinutes(){
      return new Date().getMinutes()+1;
    },
    
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },
    onConfirm(time) {
      this.time = this.currDay+' '+time;
      this.showPicker = false;
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
          this.$refs.foodList.style.height = height + 20 + "px";
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
      this.totalMoney = parseInt(total.toFixed(2))
    },

    //过滤下foodList数据
    filterDish(data){
      data.forEach(item=>{
        let dishItem={
          dishId:item.id,
          num:item.count,
        }
        this.indentDish.push(dishItem);
      })
    },
    filterSeat(data){
      data.forEach(item=>{
        let seatItem={
          tableId:item.dbTableId,
          seatId:item.chairId,
          type:item.type
        }
        this.indentSeat.push(seatItem)
      })
    },

    //支付
    toPayFor(){
      let indent = {
        userId: this.$store.state.userId,  //这里要在vux中拿到
        shopId:this.$route.query.id,
        arriveTime:this.time,
        orderDish:this.indentDish,
        seats:this.indentSeat,
        price:this.totalMoney,
      }
      createIndent(indent).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
      console.log(indent);

      
    }


  },
  created() {
    this.seatList = this.$store.state.seatList;
    this.foodList = this.$store.state.foodList;

    this.filterDish(this.foodList)
    this.filterSeat(this.seatList)
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
  font-size: 12px;
  display: flex;
  vertical-align: middle;
  color: rgb(163, 158, 158);
}
.notice > img {
  width: 17px;
  height: 17px;
  margin-right: 2px;
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
  width: 50%;
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