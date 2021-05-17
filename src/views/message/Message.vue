<template>
  <div class="message">
    <nav-bar>
      <div slot="center">消息通知</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div class="top"></div>
      <div
        v-for="(item, index) in messageAll"
        :key="index"
        @click="goInteract(item.shopTitle)"
      >
        <van-swipe-cell>
          <msg-card :message="item" />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </div>
      <div class="bottom"></div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import MsgCard from "./childComps/MsgCard";
export default {
  components: {
    Scroll,
    NavBar,
    MsgCard,
  },
  data() {
    return {
      messageAll: [
        {
          shopTitle: "串客·来一手烧烤（福兴中路店子）",
          shopImg: require("../../assets/images/shop/shop-img/串客·来一手烧烤（福兴中路店子）.jpg"),
          ctime: "5-5 19:30",
        },
        {
          shopTitle: "昭日料理（万达店）",
          shopImg: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
          ctime: "5-4 21:20",
        },
        {
          shopTitle: "记亦抄纸巷·油条包麻糍（地下商业街A区店）",
          shopImg: require("../../assets/images/shop/shop-img/记亦抄纸巷·油条包麻糍（地下商业街A区店）.jpg"),
          ctime: "5-4 15:20",
        },
        {
          shopTitle: "夫子庙老鸭粉丝馆（城市盒子店）",
          shopImg: require("../../assets/images/shop/shop-img/夫子庙老鸭粉丝馆（城市盒子店）.jpg"),
          ctime: "4-25 14:10",
        },
        {
          shopTitle: "乐山自助火锅（天虹店）",
          shopImg: require("../../assets/images/shop/shop-img/乐山自助火锅（天虹店）.jpg"),
          ctime: "4-20 12:10",
        },
        {
          shopTitle: "捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）",
          shopImg: require("../../assets/images/shop/shop-img/捞缘椰子鸡·猪肚鸡火锅（湘潭万达店）.png"),
          ctime: "4-25 11:10",
        },
        {
          shopTitle: "昭日料理（万达店）",
          shopImg: require("../../assets/images/shop/shop-img/昭日料理（万达店）.jpg"),
          ctime: "4-20 10:20",
        },
        {
          shopTitle: "李喜欢手工虾（万达店）",
          shopImg: require("../../assets/images/shop/shop-img/李喜欢手工虾（万达店）.jpg"),
          ctime: "4-24 9:10",
        },
        {
          shopTitle: "柒酒烤肉（科大店）",
          shopImg: require("../../assets/images/shop/shop-img/柒酒烤肉（科大店）.jpg"),
          ctime: "4-11 11:20",
        },
        {
          shopTitle: "Mr.胡韩式料理",
          shopImg: require("../../assets/images/shop/shop-img/Mr.胡韩式料理.jpg"),
          ctime: "4-5 8:20",
        },
        {
          shopTitle: "傣妹火锅（潭城店）",
          shopImg: require("../../assets/images/shop/shop-img/傣妹火锅（潭城店）.jpg"),
          ctime: "4-1 13:20",
        },
        {
          shopTitle: "田村长干爆牛蛙（万达店）",
          shopImg: require("../../assets/images/shop/shop-img/田村长干爆牛蛙（万达店）.jpg"),
          ctime: "3-20 15:20",
        },
        {
          shopTitle: "索M小串（天虹店）",
          shopImg: require("../../assets/images/shop/shop-img/索M小串（天虹店）.jpg"),
          ctime: "3-15 11:20",
        },
        {
          shopTitle: "老福州",
          shopImg: require("../../assets/images/shop/shop-img/老福州.jpg"),
          ctime: "3-12 14:30",
        },
        {
          shopTitle: "肖友记卤粉",
          shopImg: require("../../assets/images/shop/shop-img/肖友记卤粉.jpg"),
          ctime: "3-10 12:10",
        },
        {
          shopTitle: "花雕醉鸡（湘潭总店）",
          shopImg: require("../../assets/images/shop/shop-img/花雕醉鸡（湘潭总店）.png"),
          ctime: "3-5 19:10",
        },
        {
          shopTitle: "蛙来哒（华隆步步高店）",
          shopImg: require("../../assets/images/shop/shop-img/蛙来哒（华隆步步高店）.jpg"),
          ctime: "3-2 20:10",
        },
      ],
    };
  },
  methods: {
    goInteract(value) {
      this.$router.push({ name: "Interact", params: { title: value,isShowImg:true }});
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  overflow: hidden;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 50px;
}

.delete-button {
  height: 100%;
  border-radius: 10px;
  margin-right: 5px;
}
.top {
  height: 7px;
  width: 100%;
}
.bottom {
  height: 20px;
  width: 100%;
}
</style>