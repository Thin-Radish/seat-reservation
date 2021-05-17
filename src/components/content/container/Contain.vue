<template>
  <div class="contain" ref="contain">
    <slot/>
  </div>
</template>

<script>
  export default {
    props:{
      height:String,
      width:String,
      top:String,
    },
    mounted(){
      if(this.top){
        this.$refs.contain.style.position = "absolute";
        this.$refs.contain.style.top = this.top +'px';
        this.$refs.contain.style.right = 0 +'px';
        this.$refs.contain.style.left = 0 +'px';
      }
      if(this.height || this.width){
        this.$refs.contain.style.height = this.height +'px';
        this.$refs.contain.style.width = this.width +'px';
      }
    }
  }
</script>

<style scoped>
.contain {

  width: 94%;
  height: 100px;

  background: #fff;

  border-radius: 10px;
  margin: 0px auto;
  margin-bottom: 8px;
  padding: 10px;
  box-sizing: border-box;
}
</style>