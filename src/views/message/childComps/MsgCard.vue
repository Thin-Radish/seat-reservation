<template>
  <div
    class="contain"
    @click="goInteract(message.title, message.shopUserId, message.shopAvatar)"
  >
    <div class="card-head">
      <div class="dot" v-if="isRead"></div>
      <div class="shop-img">
        <img :src="message.shopAvatar" />
      </div>
      <div class="shop-title">{{ message.title }}</div>
      <div class="ctime">{{ mtime }}</div>
    </div>
    <div class="card-content">
      您好，欢迎光{{
        message.title
      }}，您预定的位置已为您预留，请问还有什么可以帮助您的吗？
    </div>
  </div>
</template>

<script>
import formatDate from "common/utils/formatDate";
export default {
  props: {
    message: Object,
  },
  computed: {
    mtime() {
      return formatDate(this.message.mtime, "MM-dd hh:mm");
    },
  },
  data() {
    return {
      isRead: true,
    };
  },
  methods: {
    goInteract(title, shopUserId, shopAvatar) {
      this.$router.push({
        name: "Interact",
        params: { title, shopUserId, shopAvatar, isShowImg: true },
      });
    },
  },
};
</script>

<style scoped>
.contain {
  width: 96%;

  background: #fff;
  border-radius: 10px;
  margin: 0px auto;
  margin-bottom: 8px;
  padding: 15px;
  box-sizing: border-box;
}
.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ee0a24;

  position: absolute;
  right: 18px;
  top: 8px;
}
.card-head {
  height: 40px;
  display: flex;
}

.shop-img {
  width: 40px;
  height: 40px;
}

.shop-img > img {
  height: 30px;
  width: 30px;
  border-radius: 5px;
}

.shop-title {
  flex: 1;
  margin-left: 5px;
  line-height: 30px;
  font-size: 14px;
  color: rgb(53, 51, 51);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ctime {
  width: 70px;
  font-size: 12px;
  line-height: 30px;
  color: rgb(138, 135, 135);
  text-align: end;
}
.card-content {
  font-size: 13px;
  color: rgb(122, 118, 118);
}
</style>