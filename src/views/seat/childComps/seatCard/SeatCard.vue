<template>
  <div class="seat-card" v-if="isColse">
    <div class="paly">
      {{ pos.d }}桌 <br />
      {{ pos.c }}坐
    </div>
    <div class="close" @click="isClick">
      <img src="~assets/images/close.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pos: Object,
    index: Number,
  },
  data() {
    return {
      isColse: true,
    };
  },
  methods: {
    isClick() {
      let seatList = this.$store.state.seatList;
      for(let i =0; i<seatList.length; i++){
        if(seatList[i].d === this.pos.d && seatList[i].c === this.pos.c){

          //发送取消的信号给tables组件
          this.$bus.$emit("seatCancel",this.pos)

          //删除vuex中seatList对应的元素
          seatList.splice(i,1);
          break;
        }
      }

      this.$store.commit("commitSeatList",seatList);
      

    },
  },
};
</script>

<style scoped>
.seat-card {
  width: 60px;
  height: 50px;
  background: rgb(245, 245, 245);
  display: flex;

  border-radius: 8px;
}
.paly {
  flex: 1;
  text-align: center;
  padding: 5px;
  font-size: 14px;
}
.close {
  width: 15px;
  height: 50px;
  line-height: 55px;
  text-align: center;
  border-left: 1px dashed rgb(145, 143, 143);
}
</style>