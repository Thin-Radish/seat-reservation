<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    contnetH:String,
  },
  data() {
    return {
    };
  },
  mounted() {

    /********1.创建BScroll对象************ */
    // this.scroll = new BScroll(document.querySelector(".wrapper"),{  //不要用querySelector去拿，防治类名相同
      if(this.contnetH){
        this.$refs.content.style.height = this.contnetH +'px';
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad,
        stopPropagation:true,
      });

    
    
    /********2.监听滚动的位置************ */
    if( this.probeType === 2 || this.probeType === 3){            //这样写法更加严谨
      this.scroll.on('scroll',(position)=>{                       //scroll监听滚动
        // console.log(position);
        this.$emit('scroll',position)
        // this.$bus.$emit("scroll",position)
      })
    }
    


    //********3.监听上拉事件************ */
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
    
  },
  methods: {
    scrollTo(x, y, time = 300) {            //这里函数设置为同名了
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      // return this.scroll ? this.scroll.y : 0
      return this.scroll.y
    },
    toBottom(){
      let wrapperH = this.$refs.wrapper.offsetHeight;
      let contentH = this.$refs.content.offsetHeight
      if(wrapperH<contentH){
        let y = wrapperH - contentH;
        this.scroll && this.scroll.scrollTo(0, y, 0);
      }
    }
  },
};
</script>

<style scoped>
/* .content{
  overflow: hidden;
} */


</style>