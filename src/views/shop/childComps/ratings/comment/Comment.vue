<template>
  <div>
    <div class="comment">
      <div class="avatar"><img src="~assets/images/ratings/avatar.svg" alt="" /></div>
      <div class="content">
        <div>
          <span class="name">{{ comData.comName }}</span>
          <span class="com-time">{{ comData.comTime }}</span>
        </div>
        <star :size="24" :score="5"></star>
        <p class="text">{{ comData.comText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "components/content/star/Star";
export default {
  components: {
    Star,
  },
  props: {
    comData: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px;

  z-index: 999;
}
.avatar {
  width: 35px;
}

.content {
  flex: 1;
  margin-left: 10px;
}

.name {
  font-size: 15px;
}
.com-time {
  float: right;
  font-size: 13px;
  color: rgb(154, 166, 177);
}
.text {
  margin-top: 5px;
  font-size: 13px;
}
</style>