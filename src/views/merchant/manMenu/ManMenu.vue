<template>
  <div class="menu">
    <nav-bar>
      <div slot="center">菜单管理</div>
    </nav-bar>
    <div class="menu-content">
      <div class="sidebar">
        <van-sidebar v-model="activeKey">
          <div v-for="(item, index) in dishSort" :key="index">
            <van-sidebar-item :title="item" />
          </div>
        </van-sidebar>
      </div>

      <!-- 商品展示列表 -->
      <scroll class="content" :probeType="3" ref="scroll">
        <div class="top"></div>
        <van-button
          type="primary"
          block
          plain
          class="add-food"
          color="#34495e"
          @click="goto('/addfood')"
          >+添加菜品</van-button
        >
        <div v-for="(item, index) in foodList[activeKey]" :key="index">
          <van-swipe-cell>
            <goods-card :shopData="item" />
            <template #right>
              <div class="edit-card">
                <van-button square type="danger" text="删除" class="del-card" />
                <van-button
                  square
                  type="primary"
                  text="修改"
                  class="mod-card"
                />
              </div>
            </template>
          </van-swipe-cell>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import GoodsCard from "views/shop/childComps/order/goodsCard/GoodsCard";

import { getDishList } from "api/dish";
export default {
  components: {
    Scroll,
    NavBar,
    GoodsCard,
  },
  data() {
    return {
      activeKey: 0,
      sort: ["进店必买", "双拼卤饭", "卤菜小吃", "热干面", "手工粉"],
      dishSort: [],
      foodList: [],
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    getDishType(data) {
      for (let i = 0; i < data.length; i++) {
        this.dishSort.push(data[i][0].type);
      }
    },
  },
  // 每次切换刷新下scroll
  watch: {
    activeKey() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    },
  },
  created() {
    getDishList(2)
      .then((res) => {
        this.getDishType(res.data);
        this.foodList = res.data;
        this.$nextTick(() => {
          this.$refs.scroll.refresh();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.menu {
  /* height: 100vh; */
  overflow: hidden;
  background: #f2f2f2;
}

.sidebar {
  position: absolute;
  width: 80px;
  left: 0px;
  top: 46px;
}
.content {
  position: absolute;
  top: 46px;
  right: 0;
  left: 80px;
  bottom: 50px;
  overflow: hidden;
  background: #f2f2f2;
}

.add-food {
  width: 95%;
  margin: 5px 8px;
}

.top {
  height: 2px;
  width: 100%;
}

.edit-card {
  height: 100%;
  margin-right: 7px;
}

.del-card {
  height: 100%;
  margin-right: 5px;
  border-radius: 5px;
}

.mod-card {
  height: 100%;
  border-radius: 5px;
}
</style>

