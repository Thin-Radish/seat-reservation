<template>
  <div class="contain" @click="goIndentInfo()">
    <div class="card-head">
      <div class="shop-title">{{indent.shopName}}</div>
      <div class="state">{{state}}</div>
    </div>
    <div class="card-content">
      <div class="content-left">
        <img :src="indent.shopAvatar"/>
      </div>
      <div class="content-right">
        <div>下单时间：{{ctime}}</div>
        <div>数量：{{indent.num}}</div>
        <div>{{isCancel}}：￥{{indent.price}}</div>
        <div>
          <div class="card-button">
            <div class="again-btn" v-if="isAgain">再来一单</div>
            <div class="rating-btn" v-if="isRating">进行评价</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import formatDate from "common/utils/formatDate"
  export default {
    props:{
      indent:Object,
    },
    computed:{
      isRating(){
        return this.indent.state < 3&&this.indent.state!=1
      },
      isAgain(){
        return this.indent.state < 3
      },
      isCancel(){
        if(this.indent.state === 3){
          return "退款"
        }else{
          return "实付"
        }
      },
      state(){
        if(this.indent.state === 0){
          return "已完成"
        }else if(this.indent.state === 1){
          return "进行中"
        }else if(this.indent.state === 2){
          return "待评价"
        }else if(this.indent.state === 3){
          return "已退款"
        }
      },
      ctime(){
        return formatDate(this.indent.date,"yyyy-MM-dd hh:mm")
      }
    },
    methods:{
      goIndentInfo() {
        this.$router.push({
          path: '/indentinfo',
            query: {
              id: this.indent.id
            }
        });
      },
    }

  }
</script>

<style scoped>
.contain {

  width: 96%;
  height: 170px;

  background: #fff;

  border-radius: 10px;
  margin: 0px auto;
  margin-bottom: 8px;
  padding: 10px;
  box-sizing: border-box;
}
.card-head{
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #f2f2f2;;
}
.shop-title{
  flex: 1 ;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.state{
  width: 60px;
  font-size: 13px;
  text-align: end;
  color: #646161;

}

.card-content{
  height: 110px;
  width: 100%;
  display: flex;
  margin-top:10px;

}

.content-left{
  width: 60px;
  height: 100%;
  text-align: center;

}

.content-left>img{
  height: 50px;
  width: 50px;
  border: 1px solid #f2f2f2;
}

.content-right{
  flex: 1;
  margin-left: 10px;

  font-size: 14px;
  color: #585858;
  line-height: 25px;
}

.card-button{
  display: flex;
  height: 40px;
  justify-content: flex-end;
}

.card-button>div{
  width: 65px;
  height: 25px;
  line-height: 27px;
  text-align: center;
  border-radius:15px ;
  font-size: 12px;
  color: #2e2d2d;
  
}

.again-btn{
  background: #fbc531;
}

.rating-btn{
  margin-left: 10px;
  border:1px solid #868282;
}
</style>