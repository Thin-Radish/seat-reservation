<template>
  <div class="item" @click="gotoShop()">
    <div class="icon"><img :src="recomData.shopImg" /></div>
    <div class="title"><span>{{ recomData.title }}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    recomData: {
      type: Object,
      default: null,
    },
  },
  methods: {
    gotoShop() {
      this.$router.push({
        path: "/shop",
        query: {
          id: this.recomData.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.item {
  width: 46%;
  height: 100px;
  float: left;
  margin-left: 2.5%;
  margin-top: 10px;
}

.icon {
  width: 100%;
  height: 80px;
}
.icon img {
  width: 100%;
  height: 80px;
  border-radius: 4px;
}
.title {
  width: 100%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
}
</style>