<template>
  <div class="contain">
      <div class="card-head">
        <div class="shop-img">
          <img
            :src="message.shopImg"
            alt=""
          />
        </div>
        <div class="shop-title">{{message.shopTitle}}</div>
        <div class="ctime">{{message.ctime}}</div>
      </div>
      <div class="card-content">
        您好，欢迎光{{message.shopTitle}}，您预定的位置已为您预留，请问还有什么可以帮助您的吗？
      </div>
      
  </div>
</template>

<script>
export default {
  props:{
    message:Object,
  }
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
  width: 60px;
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