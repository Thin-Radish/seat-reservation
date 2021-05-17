<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      z-index="999"
    />

    <div class="foodImg">
      <!-- <img src="../../assets/images/shopImg.jpg" alt="" /> -->
    </div>

    <div class="foodName">
      <div>食品名字</div>
      <div>
        月售：xxx    
        <div class="star">热度 <van-icon name="star-o" /> <van-icon name="star-o" /> <van-icon name="star-o" /> <van-icon name="star-o" /></div>
      </div>
    </div>
    <van-sticky :offset-top="46"   >
      <div class="priceBox">
        <div class="price">￥12.96</div>
        <div class="seat">剩余座位：10
          <van-button type="primary" size="small" class="book">立即订坐</van-button>
          <van-button type="primary" size="small" color="#f1c40f" class="book">加入收藏</van-button>
        </div>
        
      </div>
    </van-sticky>

    <div class="foodDetial">
      食物的简单介绍
    </div>
    <div class="evaluate">
      评价
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
    </div>
    
   
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  methods: {
    onClickLeft() {
      this.$router.replace("hotel");
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
  },
};
</script>

<style scoped>
.foodImg {
  margin-top: 48px;
}
.foodImg > img {
  width: 100%;
  height: 180px;
}

.foodName {
  height: 50px;
  background: seashell;
}

.star {
  float: right;
}

.priceBox{
  
  background: white;
}
.price{
  color: rgb(226, 25, 25);
  font-size: 25px;  
}
.seat{
  height: 50px;
  line-height: 30px;
}
.book{
  float:right;
}

.foodDetial{
  height: 130px;
  background: rosybrown;
}
</style>