<template>
  <div class="ratings" ref="rateView">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="comment-score">
            <p class="score">4.7</p>
            <p class="text">商家评分</p>
          </div>
          <div class="other-score">
            <div class="quality-score item">
              <span class="text">口味</span>
              <star :score="4" class="star"></star>
              <span class="score"></span>
            </div>
            <div class="pack-score item">
              <span class="text">价格</span>
              <star :score="4" class="star"></star>
              <span class="score"></span>
            </div>
          </div>
        </div>
        <div class="overview-right">
          <div class="delivery-score">
            <p class="score">4.8</p>
            <p class="text">环境评分</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <div v-for="(item,index) in commentData " :key="index">
        <comment :comData="item" />
      </div>
    </div>

    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Split from "components/content/split/Split";
import Star from "../star/Star";

import Comment from "./Comment";

export default {
  components: {
    Star,
    Split,
    Comment,
  },
  created(){
    console.log(this.commentData);
  },
  data() {
    return {
      commentData: [
        {
          comName: "a****p",
          comTime: "2016-5-29 09:52",
          comText:
            "不错，烤鸭很好吃，我经常吃这一家，非常赞，以后会经常来吃，强烈推荐",
        },
        {
          comName: "a****p",
          comTime: "2016-5-29 09:52",
          comText:
            "不错，烤鸭很好吃，我经常吃这一家，非常赞，以后会经常来吃，强烈推荐",
        },
        {
          comName: "a****p",
          comTime: "2016-5-29 09:52",
          comText:
            "不错，烤鸭很好吃，我经常吃这一家，非常赞，以后会经常来吃，强烈推荐",
        },
        {
          comName: "a****p",
          comTime: "2016-5-29 09:52",
          comText:
            "不错，烤鸭很好吃，我经常吃这一家，非常赞，以后会经常来吃，强烈推荐",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .ratings {
  position: absolute;
  left: 0;
  top: 191px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
} */



.avatar {
  width: 28px;
  background: bisque;
}

.comment {
  padding: 0 10px;
}

.ratings {
  background: white;
}

.ratings-wrapper {
  border-bottom: 5px solid #f2f2f2;
}

.overview {
  padding: 20px 0 18px 0;
  display: flex;
}

.overview-left {
  flex: 1;
  padding-left: 26px;
}

.comment-score {
  float: left;
  width: 48px;
  text-align: center;
  margin-right: 26px;
}

.comment-score .score {
  font-size: 23px;
  font-weight: 800;
  color: #ffb000;
  margin-bottom: 9px;
}

.comment-score .text {
  font-size: 11px;
  color: #666666;
}

.overview-left .other-score {
  float: left;
  margin-top: 3px;
}

.other-score .item {
  height: 11px;
}

.other-score .item .text {
  font-size: 11px;
  color: #666666;
  margin-right: 11px;
  float: left;
}

.other-score .item .star {
  float: left;
  margin-right: 11px;
}

.item .score {
  font-size: 11px;
  color: #ffb000;
  float: left;
}

.other-score .quality-score {
  margin-bottom: 14px;
}

.overview-right {
  flex: 0 0 100px;
  text-align: center;
  border-left: 1px solid #d6d5d5;
}

.delivery-score .score {
  font-size: 19px;
  font-weight: 500;
  color: #999999;
  margin-bottom: 10px;
  margin-top: 3px;
}

.delivery-score .text {
  font-size: 11px;
  color: #999999;
}
</style>
