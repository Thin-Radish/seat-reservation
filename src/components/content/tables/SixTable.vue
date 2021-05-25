<template>
  <div class="tables" :class="{col:isRotate}">
    
    <div class="row">

      <img @click="isClick(2)" src="~assets/images/tables/chair-ed.svg" alt="" v-if="state[2]">
      <img @click="isClick(2)" src="~assets/images/tables/chair-ing.svg" alt="" v-else-if="isSelect[2]">
      <img @click="isClick(2)" src="~assets/images/tables/chair.svg" alt="" v-else>

      <img @click="isClick(1)" src="~assets/images/tables/chair-ed.svg" alt="" v-if="state[1]">
      <img @click="isClick(1)" src="~assets/images/tables/chair-ing.svg" alt="" v-else-if="isSelect[1]">
      <img @click="isClick(1)" src="~assets/images/tables/chair.svg" alt="" v-else>

      <img @click="isClick(0)" src="~assets/images/tables/chair-ed.svg" alt="" v-if="state[0]">
      <img @click="isClick(0)" src="~assets/images/tables/chair-ing.svg" alt="" v-else-if="isSelect[0]">
      <img @click="isClick(0)" src="~assets/images/tables/chair.svg" alt="" v-else>
     
    </div>
    <div class="table" :class="{span:isRotate}"  @dblclick.prevent="delTable">
      <div class="seat-id"><span>1</span><span>2</span><span>3</span></div>
      <div class="table-id"><span>{{index+1}}</span></div>
      <div class="seat-id"><span>4</span><span>5</span><span>6</span></div>
    </div>

    <div >
    
      <img @click="isClick(3)" src="~assets/images/tables/chair-ed.svg" alt="" v-if="state[3]">
      <img @click="isClick(3)" src="~assets/images/tables/chair-ing.svg" alt="" v-else-if="isSelect[3]">
      <img @click="isClick(3)" src="~assets/images/tables/chair.svg" alt="" v-else>

      <img @click="isClick(4)" src="~assets/images/tables/chair-ed.svg" alt="" v-if="state[4]">
      <img @click="isClick(4)" src="~assets/images/tables/chair-ing.svg" alt="" v-else-if="isSelect[4]">
      <img @click="isClick(4)" src="~assets/images/tables/chair.svg" alt="" v-else>

      <img @click="isClick(5)" src="~assets/images/tables/chair-ed.svg" alt="" v-if="state[5]">
      <img @click="isClick(5)" src="~assets/images/tables/chair-ing.svg" alt="" v-else-if="isSelect[5]">
      <img @click="isClick(5)" src="~assets/images/tables/chair.svg" alt="" v-else>
     
    </div>
    

    
   
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    props:{
      isRotate:{
        type:Boolean,
        default:false
      },
      index:Number,
      state:{
        type:Array,
        default:[0]
      },
    },
    data(){
      return{
        //位置是否被选中
        isSelect:[false,false,false,false,false,false]
      }
    },
    methods:{
      isClick(i){
        //当座位可选时
        if(!this.state[i]){
          
          let seatList = this.$store.state.seatList;
          //当座位没被选中时
          if(!this.isSelect[i]){
            let pos = {
              tableId:this.index,
              seatId:i,
              type:6,
            }
            seatList.push(pos);
           
          }else{  
            //当座位选中时进行取消选中操作      
            for(let j =0; j<seatList.length; j++){
              if(seatList[j].tableId === this.index && seatList[j].seatId === i){
                seatList.splice(j,1);
                break;
              }
            }
          }
          //更新选中状态
          this.$set(this.isSelect,i,!this.isSelect[i])
          //提交修改
          this.$store.commit("commitSeatList",seatList);
          
        }else{
          Toast.fail('该位置已被预定');
        }
      },
      delTable(){
        let msg = '你确定要删除'+(this.index+1)+'号座位？'
        if (confirm(msg)){ 
          this.$bus.$emit('delTable',this.index)
        }
      }
    },

    mounted(){

      //接受发来的取消选中信息，并进行取消选中操作
      this.$bus.$on("seatCancel",pos=>{
        if(pos.tableId === this.index && this.isSelect[pos.seatId] === true){
          this.$set(this.isSelect,pos.seatId,false)
        }
      })
    }
  }
</script>

<style scoped>

.tables{
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;

  min-width: 120px;
  min-height: 110px;
}
/* .tables img{
  margin-left: 3px;
} */


.table{
  width: 90px;
  height: 30px;
  background: rgb(185, 181, 181);
  border-radius: 3px;
  margin-top: -4px;
  color:rgb(102, 96, 96);


  display: flex;
  flex-direction: column;
}


.table>div{
  height: 32%;

}
.table-id{
  text-align: center;
  font-size: 11px;
  
}
.span>.table-id{
  transform: rotate(270deg);
}

.seat-id{
  display: flex;
  margin-top: 1px;
}
.seat-id >span{
  display: block;
  font-size: 9px;
  width: 50%;
  text-align: center;

}

.row{
  transform: rotate(180deg);
  margin-bottom: 4px;
  text-align: end;
}

.col{
  transform: rotate(90deg);
}

.span span{
  transform: rotate(270deg);
}


/* .chair{
  transform: rotate(180deg);
} */

</style>