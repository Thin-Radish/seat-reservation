<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar{
    display: flex;
    height: 46px;
    line-height: 46px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    background: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 999;
  }
  .left,.right{
    width: 60px;
    height: 46px;
  }
  .center{
    flex: 1;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .right img{
    margin-top: 12px;
    height: 25px;
    width: 25px;
  }
  .left img{
    margin-top: 12px;
     height: 20px;
    width: 20px;
  }
</style>