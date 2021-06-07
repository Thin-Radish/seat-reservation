<template>
  <div class="card">
    <div class="card-head" v-if="message.ctime">{{message.ctime}}</div>
    <div class="context"> 
      <div class="left-icon"><img :src="message.icon"  v-if="message.ident ==='other'"></div>
      <div class="center-text">{{message.text}}</div>
      <div class="right-icon"><img :src="message.icon" v-if="message.ident ==='host'"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      message:Object,
    }
  }
</script>

<style scoped>

.card{
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 70px;
}
.card-head{
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  color: rgb(138, 135, 135);
}

.context{
  display: flex;
}

.left-icon,.right-icon{
  width: 50px;
  height: 50px;
}
.right-icon{
  text-align: end;
}
.left-icon img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.right-icon img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.center-text{
  flex: 1 ;
  background: #fff;
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
  /* 解决连续英文不换行 */
  word-break: break-all; 
}
</style>