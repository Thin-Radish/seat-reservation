<template>
  <div class="com-button" ref="button">{{ label }}</div>
</template>

<script>
export default {
  props: {
    label: String,
    top: String,
    background:String,
  },
  mounted() {
    if (this.top ) {
      this.$refs.button.style.position = "absolute";
      this.$refs.button.style.top = this.top + "px";
      this.$refs.button.style.right = 0 + "px";
      this.$refs.button.style.left = 0 + "px";
      
    }

    if(this.background){
      this.$refs.button.style.background = this.background;
    }
    
    if(this.color){
      this.$refs.button.style.color = this.color;
    }
  },
};
</script>

<style scoped>
.com-button {
  width: 95%;
  height: 45px;
  margin: 0 auto;
  border-radius: 30px;

  text-align: center;
  color: #fff;
  line-height: 50px;
}
</style>