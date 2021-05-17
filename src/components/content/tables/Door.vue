<template>
  <div class="door" :class="{ isCol: direc, isRow: !direc }">大门</div>
</template>

<script>
export default {
  props: {
    direc: Boolean,
  },
};
</script>

<style scoped>
.isRow {
  width: 100px;
  height: 20px;
  background: rgb(184, 181, 181);

  text-align: center;
  letter-spacing: 5px;
  font-size: 14px;
}
.isCol {
  width: 15px;
  height: 100px;
  background: rgb(184, 181, 181);
  line-height: 50px;
  font-size: 14px;
}
</style>