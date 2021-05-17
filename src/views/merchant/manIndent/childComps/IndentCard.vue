<template>
  <div class="contain" :class="{'contain-small':isNew}">
    <div class="card-head">
      <img :src="indent.userImg" alt="">
      <div class="user-name">{{indent.userName}}</div>
      <div class="state">{{state}}</div>
    </div>
    <div class="card-content">
      <div v-if="isNew" class="remind">  你好，我在您家店铺定好了位置，请您尽快接受订单，谢谢！</div>
      <div class="content-right" v-else>
        <div>下单时间：{{indent.ctime}}</div>
        <div>数量：{{indent.count}}</div>
        <div>{{isCancel}}：￥{{indent.fee}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      indent:Object,
    },
    computed:{
      isCancel(){
        if(this.indent.state === 2){
          return "退款"
        }else{
          return "实付"
        }
      },
      isNew(){
        return this.indent.state ===0;
      },
      state(){
        if(this.indent.state === 0){
          return this.indent.ctime.slice(-5);
        }else if(this.indent.state === 1){
          return "进行中"
        }else if(this.indent.state === 2){
          return "退款"
        }else if(this.indent.state === 3){
          return "已完成"
        }
      }
    }

  }
</script>

<style scoped>
.contain {

  width: 96%;
  height: 140px;

  background: #fff;

  border-radius: 10px;
  margin: 0px auto;
  margin-bottom: 8px;
  padding: 10px;
  box-sizing: border-box;
}
.contain-small{
    height: 115px;
}
.card-head{
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #f2f2f2;;
}

.card-head >img{
  margin-right: 5px;
  width: 30px;
  height: 30px;
}
.user-name{
  flex: 1 ;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 30px;
}
.state{
  width: 60px;
  font-size: 13px;
  text-align: end;
  color: #646161;


}

.card-content{
  height: 80px;
  width: 100%;
  display: flex;
  margin-top:10px;

}


.content-right{
  flex: 1;
  margin-left: 10px;

  font-size: 14px;
  color: #585858;
  line-height: 25px;
}

.remind{
  font-size: 14px;
  color: #585858;
  line-height: 25px;
  text-indent: 1em;
}

</style>