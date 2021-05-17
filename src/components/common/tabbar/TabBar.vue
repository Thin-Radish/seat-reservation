<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style>

  #tab-bar{
    
    background-color:#dcdde1 ;
    box-shadow: 0 -3px 100px rgba(10, 10, 10, 0.2);
    height: 49px;

    display: flex;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

 
</style>